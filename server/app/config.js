// Load the express module to create a web application

const express = require("express");

const app = express();

const apiRouter = require("./routers/api/router");

// Mount the API router under the "/api" endpoint
app.use("/api", apiRouter);

/* ************************************************************************* */

// Middleware for Error Logging (Uncomment to enable)
// Important: Error-handling middleware should be defined last, after other app.use() and routes calls.

/*
// Define a middleware function to log errors
const logErrors = (err, req, res, next) => {
  // Log the error to the console for debugging purposes
  console.error(err);
  console.error("on req:", req.method, req.path);

  // Pass the error to the next middleware in the stack
  next(err);
};

// Mount the logErrors middleware globally
app.use(logErrors);
*/

/* ************************************************************************* */

module.exports = app;
