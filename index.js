require('dotenv').config();
//  .env file to store sensitive information like database connection strings.
// the config method is used to load and configure environment variables from a specified file, typically named ".env". 

const express = require('express');
//  Express.js framework, a web application framework for Node.js, and assigns it to the variable express.
const mongoose = require('mongoose');
// the Mongoose library, a MongoDB object modeling tool designed for Node.js, and assigns it to the variable mongoose.

const mongoString = process.env.DATABASE_URL;
// This line of code retrieves the value of the environment variable named DATABASE_URL using process.env and assigns it to the variable mongoString.
mongoose.connect(mongoString);
// This line of code establishes a connection to a MongoDB database using Mongoose,
//  with the provided MongoDB connection string mongoString.
// Mongoose is a MongoDB object modeling library for Node.js that provides a schema-based solution to model application data and interact with MongoDB databases.
const database = mongoose.connection;
// This line of code retrieves the Mongoose connection object and assigns it to the variable `database`.
database.on('error', (error) => {
    console.log(error)
})
// This line of code sets up an event listener for the 'error' event on the Mongoose database connection, logging any errors to the console when they occur.

database.once('connected', () => {
    console.log('Database Connected');
})
// The database.once('connected', () => {...}) method sets up a one-time event listener for the 'connected' event on the Mongoose database connection, executing the provided callback function (which logs "Database Connected" to the console) only once when the connection is successfully established.
const app = express();
// This line of code creates an instance of the Express.js application by calling the `express()` method and assigns it to the variable `app`.

app.use(express.json());
// This line of code configures the Express.js application (`app`) to parse incoming requests with JSON payloads using the `express.json()` middleware.
app.listen(3000, () => {
    console.log(`Server Started at ${3000}`)
})
// This line of code starts the Express.js server on port 3000 and logs a message to the console indicating that the server has started.
const routes = require('./Routes/routes');
// The module is likely a collection of route handlers or definitions
app.use('/api', routes)
// outes for an API in an Express.js application, and all the routes defined in the routes module will be accessible under the /api base path. This is a common practice to organize and modularize code in web applications.
