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
PROD_DB_URL=<YOUR LOCAL POSTGRES DATABASE CONNECTION URL>

```
two random hex strings are used in the aes algorithm to encrypt passwords. One is encryption key which is 64 characters long and other one is called IV(initialization vector) which is 32 characters long.

These keys/random strings are required for encrypting the password using aes-256-cbc algorithm for security. By default these keys are set in the project.

You can also Generate 32 and 64 character random Hex string [HERE](https://www.browserling.com/tools/random-hex) or from any random hex generator website and add those two strings as keys.

Add your generated keys in keys.ts file which is at src\main folder.


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

The app opens normally, but doesn't work as intended(like creating a collection or cred doesn't work) since this project uses local postgres database.

need to use postgres cloud database/host my database. currently cant do that.
so for now, add your local postgres db url in env file and build the project, Then u can run the setup.exe in dist folder to install the app in your PC.