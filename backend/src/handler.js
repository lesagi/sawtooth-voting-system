/**
 * Copyright 2017-2018 Intel Corporation
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * ------------------------------------------------------------------------------
 */

"use strict";

const XoPayload = require("./payload");

const { XO_NAMESPACE, XO_FAMILY } = require("./voteFamily");
const XoState = require("./state");

const { TransactionHandler } = require("sawtooth-sdk/processor/handler");
const { InvalidTransaction } = require("sawtooth-sdk/processor/exceptions");

const _gameToStr = (board, state, player1, player2, name) => {
  board = board.replace(/-/g, " ");
  board = board.split("");
  let out = "";
  out += `GAME: ${name}\n`;
  out += `PLAYER 1: ${player1.substring(0, 6)}\n`;
  out += `PLAYER 2: ${player2.substring(0, 6)}\n`;
  out += `STATE: ${state}\n`;
  out += `\n`;
  out += `${board[0]} | ${board[1]} | ${board[2]} \n`;
  out += `---|---|--- \n`;
  out += `${board[3]} | ${board[4]} | ${board[5]} \n`;
  out += `---|---|--- \n`;
  out += `${board[6]} | ${board[7]} | ${board[8]} \n`;
  return out;
};

const _display = (msg) => {
  let n = msg.search("\n");
  let length = 0;

  if (n !== -1) {
    msg = msg.split("\n");
    for (let i = 0; i < msg.length; i++) {
      if (msg[i].length > length) {
        length = msg[i].length;
      }
    }
  } else {
    length = msg.length;
    msg = [msg];
  }

  console.log("+" + "-".repeat(length + 2) + "+");
  for (let i = 0; i < msg.length; i++) {
    let len = length - msg[i].length;

    if (len % 2 === 1) {
      console.log(
        "+ " +
          " ".repeat(Math.floor(len / 2)) +
          msg[i] +
          " ".repeat(Math.floor(len / 2 + 1)) +
          " +"
      );
    } else {
      console.log(
        "+ " +
          " ".repeat(Math.floor(len / 2)) +
          msg[i] +
          " ".repeat(Math.floor(len / 2)) +
          " +"
      );
    }
  }
  console.log("+" + "-".repeat(length + 2) + "+");
};

const _isWin = (board, letter) => {
  let wins = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [1, 4, 7],
    [2, 5, 8],
    [3, 6, 9],
    [1, 5, 9],
    [3, 5, 7],
  ];
  let win;
  for (let i = 0; i < wins.length; i++) {
    win = wins[i];
    if (
      board[win[0] - 1] === letter &&
      board[win[1] - 1] === letter &&
      board[win[2] - 1] === letter
    ) {
      return true;
    }
  }
  return false;
};

const _createGame = (xoState, name) => {
  return xoState.getGame(name).then((game) => {
    if (game !== undefined) {
      throw new InvalidTransaction("Invalid Action: Game already exists.");
    }

    let createdGame = {
      name: name,
      board: "---------",
      state: "P1-NEXT",
      player1: "",
      player2: "",
    };

    _display(
      `Player ${player.toString().substring(0, 6)} created game ${name}`
    );

    return xoState.setGame(name, createdGame);
  });
};

const _takeSpace = (xoState, name, player, space) => {
  return xoState.getGame(name).then((game) => {
    try {
      parseInt(space);
    } catch (err) {
      throw new InvalidTransaction(
        "Space could not be converted as an integer."
      );
    }

    if (space < 1 || space > 9) {
      throw new InvalidTransaction("Invalid space " + space);
    }

    if (game === undefined) {
      throw new InvalidTransaction(
        "Invalid Action: Take requires an existing game."
      );
    }
    let { state, player1, player2, board } = game;
    if (["P1-WIN", "P2-WIN", "TIE"].includes(state)) {
      throw new InvalidTransaction("Invalid Action: Game has ended.");
    }

    if (player1 === "") {
      player1 = player;
    } else if (player2 === "") {
      player2 = player;
    }
    let boardList = board.split("");

    if (boardList[space - 1] !== "-") {
      throw new InvalidTransaction("Invalid Action: Space already taken.");
    }

    if (state === "P1-NEXT" && player === player1) {
      boardList[space - 1] = "X";
      state = "P2-NEXT";
    } else if (state === "P2-NEXT" && player === player2) {
      boardList[space - 1] = "O";
      state = "P1-NEXT";
    } else {
      throw new InvalidTransaction(
        `Not this player's turn: ${player.toString().substring(0, 6)}`
      );
    }

    board = boardList.join("");

    if (_isWin(board, "X")) {
      state = "P1-WIN";
    } else if (_isWin(board, "O")) {
      state = "P2-WIN";
    } else if (board.search("-") === -1) {
      state = "TIE";
    }

    let playerString = player.toString().substring(0, 6);

    _display(
      `Player ${playerString} takes space: ${space}\n\n` +
        _gameToStr(board, state, player1, player2, name)
    );

    return xoState.setGame(name, game);
  });
};

const _deleteGame = (xoState, name) => {
  return xoState.getGame(name).then((game) => {
    if (game === undefined) {
      throw new InvalidTransaction(
        `No game exists with name ${name}: unable to delete`
      );
    }
    return xoState.deleteGame(name);
  });
};
class XOHandler extends TransactionHandler {
  constructor() {
    super(XO_FAMILY, ["1.0"], [XO_NAMESPACE]);
  }

  apply(transactionProcessRequest, context) {
    let payload = XoPayload.fromBytes(transactionProcessRequest.payload);
    let xoState = new XoState(context);
    let header = transactionProcessRequest.header;
    let player = header.signerPublicKey;
    const { action, name, space } = payload;
    if (action === "create") {
      return _createGame(xoState, name);
    } else if (action === "take") {
      return _takeSpace(xoState, name, player, space);
    } else if (action === "delete") {
      return _deleteGame(xoState, name);
    } else {
      throw new InvalidTransaction(
        `Action must be create, delete, or take not ${action}`
      );
    }
  }
}

module.exports = XOHandler;
