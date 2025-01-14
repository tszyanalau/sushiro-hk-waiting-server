# Sushiro HK Waiting Groups App API Server

The Sushiro HK Waiting Groups App API Server is a Node.js application that serves as the backend for [Sushiro HK Waiting Groups Map](https://github.com/tszyanalau/sushiro-hk-waiting-client). This API server provides endpoints to fetch store information, like the number of waiting groups of each branch, from the API of the official Sushiro HK app and deliver it to the frontend React application.

## Table of Contents

- [Sushiro HK Waiting Groups App API Server](#sushiro-hk-waiting-groups-app-api-server)
  - [Table of Contents](#table-of-contents)
  - [Getting Started](#getting-started)
    - [Prerequisites](#prerequisites)
    - [Installation](#installation)
  - [Technology Used](#technology-used)
  - [Environment Variables](#environment-variables)
  - [Usage](#usage)
  - [API Endpoints](#api-endpoints)
  - [Testing](#testing)
    - [Lint Tests with ESLint](#lint-tests-with-eslint)
    - [Unit Tests with Jest](#unit-tests-with-jest)
  - [Available Scripts](#available-scripts)

## Getting Started

### Prerequisites

Before you begin, ensure you have the following installed:

- [Node.js](https://nodejs.org/) (version 18 or higher)
- [npm](https://www.npmjs.com/) (normally comes with Node.js installation)
- [Docker](https://www.docker.com/)

### Installation

1. Clone this repository to your local machine:

   ```bash
   git clone https://github.com/tszyanalau/sushiro-hk-waiting-server.git
   ```

2. Navigate to the project directory:

   ```bash
   cd sushiro-hk-waiting-server
   ```

3. Install the required dependencies:

   ```bash
   npm install
   ```

## Technology Used

The Sushiro HK Waiting Groups App API Server is built using the following technologies:

- **Node.js**: The runtime environment for building server-side applications using JavaScript.
- **Express.js**: A web application framework for Node.js that simplifies the creation of APIs and routes.
- **Jest**: A popular JavaScript testing framework for writing unit tests.
- **Docker**: Containerization platform used to package the application and its dependencies.

## Environment Variables

Before starting the server, make sure to configure the environment variables for the Sushiro HK Waiting Groups App. Copy the `env.example` file to `.env` and update the values. Make sure the API key is same as the one used in frontend.

```bash
API_KEY=
```

## Usage

To start the API server, run the following command:

```bash
npm start
```

The server will start on port 8080 by default. You can access the API at `http://localhost:8080/api`.

## API Endpoints

The API server provides the following endpoint to retrieve store information for each branch.

- `GET /store`: Fetches store information from the API of official Sushiro HK app.

You can view the complete API documentation [http://localhost:8080/api-doc/](http://localhost:8080/api-doc/).

## Testing

### Lint Tests with ESLint

Code quality and consistency are maintained by using ESLint to perform lint tests.

```bash
npm run lint
```

### Unit Tests with Jest

The tests are written using the Jest framework and can be found in the `__tests__` directory. To run the tests, use the following command:

```bash
npm run jest
```

## Available Scripts

In the project directory, you can run the following

 scripts:

- `npm run start-dev`: Starts the API server in development environment.
- `npm run start-dev:watch`: Starts the API server in development environment with automated restart when changes are made.
- `npm run start-dev:docker`: Build the app in development environment with Docker and run on port 8080.
- `npm run lint`: Runs linting tests using ESLint.
- `npm run jest`: Runs the unit tests using Jest.
- `npm run test`: Runs both linting and unit tests.
