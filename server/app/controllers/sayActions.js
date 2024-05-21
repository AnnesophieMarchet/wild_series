const sayWelcome = (req, res) => {
  console.info(req.query);
  res.send(`Welcome to Wild Series, ${req.query.name} !`);
  res.send("Welcome to Wild Series anne !");
};

// Export it to import it somewhere else

module.exports = { sayWelcome };
