# Sawtooth-Based Voting System

[![Build Status](https://travis-ci.org/joemccann/dillinger.svg?branch=master)](https://travis-ci.org/joemccann/dillinger)

# System Design
This is a sawtooth-based voting system. The use is accessible through a REST API (explained later).
The design in mind is to make sure to preserve the following key-factors:
1. Only eligible voters can vote
2. Voter decision should be confidential
3. A voter should have the ability to make sure his vote counted
4. Vote process should be frauds-tolerable

To make sure all of this requirements are held properly, the system should be used in the following way:
1. Prior to voting, a voter should identify hiself to a governmental represntative that verify his identity
2. After verification, a voter can choose a secret scratch card that contains a private and a public key. The key would be used later to cast a vote.

# Implementation Notes
The system is consist of the required TransactionProcessor implementation for 2 Transaction families, one for campaign-management related transactions for controlling the campaign and the other is for voter-verification related transactions to make sure a voter is eligible for voting.

## Install & Run
The project contains both the Blockchain implementation and the Proxy(REST API SERVER) implementation. both needs to be up and running to use this system.
#### Blockchain
The Transaction Proccessors used are in the "blockchain" folder. the registration is made through the file index.js. please make sure to pass as an argument the address of the sawtooth Validator. (on local env, using the 1 node for testing (default address is: tcp://127.0.0.1:4004)
Also, the validator makes use of the blockchain address passed in as a ENV_VAR, names BLOCKCHAIND_ADDR (default to: http://127.0.0.1:8008) 
and of course, the authorised secret scratch card list, is a JSON file in the listing folder, with the name "chisgads.json".
After cloning the project, make sure to have the required files in place, and run:
```sh
$ npm install
$ export BLOCKCHAIN_ADDR={blockchaind_address}
$ node {path_to}/index.js {validator_address}
```
#### Proxy server (REST API)
The code make use of 3 ENV_VARS: IP, PORT, BLOCKCHAIN_ADDR.
To use, run the following commands:
```sh
$ npm install
$ export IP={ip_address} PORT={port_address} BLOCKCHAIN_ADD={blockchain_address}
$ node {path_to}/app.js
```
# API Guidelines
All the transactions-request API endpoints respond with a JSON that contains at least the following fields:
- link: contains the link to the batch_statuses href, so a user can track the state of his transaction request.
- res: SUCCESS or ERROR
- id: batch id, to make a use of saw_tooth api where needed

## Voter Verification API
#### CHECKING-IN
> POST  
>/checkin?id={voter_id}&ballot={ballot_id}&scratchCard={scratch_card_id}
##### parametes
- voter_id - the voter id
- ballot_id - the ballot id
- scratch_card_id - in real life that would be the independant choose of a secret scratch card by the voter (here, it doesn't make a difference and will be randomized)
##### response
- privateKey: private key of the secret scratch card
- publicKey: public key of the secret scratch card

## Campaign Management API
#### CAMPAIGN CREATION process
> POST
> /admin/open_campaign?privkey={admin_private_key}
##### parametes
- admin_private_key - private key of system admin

#### PARTIES management
> POST  
>/admin/{action}?name={campaign_name}&party={party_name}&privkey={admin_private_key}
##### parametes
- action - can be either "add_party" or "remove_party"
- campaign_name - the campaign of which we want to modify the parties list
- party_name - the party name to add or remove
- admin_private_key - private key of system admin

#### CAMPAIGN STATUS management
> POST  
>/state/{campaign_name}?new_state={new_state}&privkey={admin_private_key}
##### parametes
- campaign_name - the campaign of which we want to modify the parties list
- new_state - the desired state (SETUP,OPEN,SUSPEND,CLOSE*)
- admin_private_key - private key of system admin
*Note that closed campaign can't be reopened

#### VOTING process
> POST  
>/vote/{campaign_name}?party={party_name}&privkey={voter_private_key}
##### parametes
- campaign_name - the campaign of which we would like to vote
- party_name - the party the voter has chose to vote for
- voter_private_key - the private key a voter got when he checked-in (using the Voter-Verification API)

#### CAMPAIGN tracking
Getting the most up-to-date state of the existing campaigns.
> GET  
>/state/{campaign_name}
##### parametes
- campaign_name (OPTIONAL) - if provided, get the specific campaign state. If not provided, it will respond with an array of all existed campaigns.

#### SECRET KEYS generation
Getting secret keys of Sec256k1 for testing purposes.
> GET  
>/signer/keys

