# Notes App - Backend

This is sample notes app made with Express.js (Node.js). This represents a straightforward notes application, featuring a basic Node.js setup that includes a simple CRUD operations and user registration and login capabilities.

## Technology Stack

- ExpressJS
- Node.js

## Requirements

For development, you will need `Node.js v20.x (recommended)`, a node global package, `NPM` installed in your environment.

### Prerequisites

Node.js (lts)

#### Check Node Version

Check version with this command, node -v
Node version should be v18 or v18+

If you need to update `npm`, you can make it using `npm`! Cool right? After running the following command, just open again the command line and be happy.

`npm install npm -g`

## Features

Features included are:
- A user can register with email and password
- A user can login with email and password
- A user can add a note
- A user can only edit his note
- A user can only delete his note
- A user can only get his note
- A user can only get his note list
- A user can't access notes of another user
- Only authorized and authenticated user can add, edit, get and delete his note

## Documentation

[API Documentation](https://documenter.getpostman.com/view/7228218/2s9YJaZ4s4)

## App Setup

You can configure this app by following the instructions mentioned below:

### Clone Repository

Run the command `git clone https://github.com/UmerSurhkel-Projects/sample-nodejs` to clone this public repository.

### Install Packages

At the root directory of the application, run the following command to install packages:

`npm install`

### Configure app

Add `.env` file at root of the project. Sample values available in `.env.example` file.

### Run Project Locally

Start running a project with the following command:

`npm run dev` or `nodemon` 

### Port

This backend would run on port `8080`, if you provide PORT `8080` in .env file.

The required PORT can be added in the `.env` file.

## Error Handling

- The error messages returned by the API are informative. 
- Handled unexpected errors using try-catch statements where needed.
- Returned the error messages where required.
- Tested error scenarios and unexpected errors.

## Additional Information

- The *src/index.js* is the starting point of this app.
- Only the required dependencies and devDepndencies are installed in the app.
