# Summer school 2024 Project - Cypress JavaScript

This project is designed to automate the testing of a webstore using JavaScript and the Cypress framework. The tests cover various functionalities of the webstore, ensuring that all features work as expected.

### Code formatting

This project uses [Prettier](https://www.npmjs.com/package/prettier) package to format the code. Run the following command to format all file: `npm run format`

## Table of Contents

- [Prerequisites](#prerequisites)
- [Setup](#setup)
- [How to Run Tests](#how-to-run-tests)

## Prerequisites

Before you begin, ensure you have met the following requirements:

- Node.js
- npm
- A web browser (Project tested on Chrome bowser)

## Setup

1. **Download and install Node.js**:

   - Go to the [Node.js official website](https://nodejs.org/).
   - Download the LTS version (recommended for most users).
   - Follow the installation instructions.

2. **Verify the installation**:
   - Open Terminal and run the following commands:
     ```bash
     node -v
     npm -v
     ```
   - You should see the version numbers of Node.js and npm.

### Installing Cypress

1. **Navigate to your project directory**:
   ```bash
   cd /path/to/your/project
   ```
2. **Navigate to your project directory**:
   - Ensure you have package.json set up in your project. If not, initialize it using:
   ```bash
   npm init -y
   ```
   - Ensure you have package.json set up in your project. If not, initialize it using:
   ```bash
   npm install cypress --save-dev
   ```

## How to run tests

- Run using Cypress test runner
  ```bash
  npx cypress open
  ```
- Run a Single Test
  ```bash
  npx cypress run --spec "path-to-test.js"
  ```
- Run all tests
  ```bash
  npx cypress run
  ```
- Run tests in different browsers
  ```bash
  npx cypress run --browser {chrome; safari; firefox}
  ```
