const crypto = require("crypto");

const _hash = (x) =>
  crypto
    .createHash("sha512")
    .update(x)
    .digest("hex")
    .toLowerCase()
    .substring(0, 64);

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

  console.log("+" + "+".repeat(length + 2) + "+");
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
  console.log("+" + "+".repeat(length + 2) + "+");
};

const _printInMiddle = (msg, length) => {};
const _tidyDisplay = (title, lineDec, msg) => {
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
        `${lineDec} ${" ".repeat(Math.floor(len / 2))} ${msg[i]} ${" ".repeat(
          Math.floor(len / 2 + 1)
        )} ${lineDec}`
      );
    } else {
      console.log(
        `${lineDec} ${" ".repeat(Math.floor(len / 2))} ${msg[i]} ${" ".repeat(
          Math.floor(len / 2)
        )} ${lineDec}`
      );
    }
  }
  console.log("+" + "-".repeat(length + 2) + "+");
};
module.exports = {
  _hash,
  _display,
};
