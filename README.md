# PASS-VAULT

**PASS-VAULT** is an election app built with React, TypeScript, PostgreSQL, and Prisma. It uses AES encryption to securely protect user passwords.

## Project Setup and Requirements

### Requirements
postgres should be installed in the system. [DownloadLink](https://www.postgresql.org/download/)

### Setup

```bash
$ npm install
```
Create a .env file in the root directory.
Add the following environment variables.

```
DB_URL= <YOUR LOCAL POSTGRES DATABASE CONNECTION URL>
ENCRYPTION_KEY= <RANDOM 64 Character hex string>  
ENCRYPTION_IV= <RANDOM 32 Character hex string>
```

You can Generate 32 and 64 character Hex string [HERE](https://www.browserling.com/tools/random-hex) or any random hex generator website.

These keys are required for encrypting the password using aes-256-cbc algorithm for security.

## Development

```bash
$ npm run dev
```

## Build the project

```bash
# For windows
$ npm run build:win

# For macOS
$ npm run build:mac

# For Linux
$ npm run build:linux
```
