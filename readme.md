## About

This script will run a series of tests on the webpage and generate a report about its performance. In this report, you can use the failing tests as indicators of what can be improved to enhance the platform.

## Installation

To install globally, run the following commands:

```bash
npm install -g faustao-errou
```

```bash
npm install -g lighthouse
# or use yarn:
# yarn global add lighthouse
```

```bash
npm install minimist
```

## Running the Script
```bash
npm start
```
When running the .sh file, all URLs listed in the urls.txt file will be audited.

## Authentication
When opening Chrome in debug mode, log in to the platform and leave the window open. It will be required for authenticating the audited URLs.

## Utilities
```bash
node src/app.js --url=https://www.site.com
```
Use the command above to audit only a single page by replacing url.com with the desired address.

Note: The authentication step is also required here. To do this, run the command and log in:

```bash
chrome.exe --remote-debugger-port=9222
```
