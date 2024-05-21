require("dotenv").config();

const express = require("express");

const app = express();
const port = process.env.APP_PORT;

app.get("/", (req, res) => {
  res.send("Welcome to Wild Series coucou c' est Anne so !");
});

// Route par défaut pour les erreurs 404
app.use((req, res) => {
  res.status(404).send("Page not found");
});

app.listen(port, () => {
  console.info(`Server is running on http://localhost:${port}`);
});
