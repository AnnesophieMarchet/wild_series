// Some data to make the trick
const tables = require("../../database/tables");

const categories = [
  {
    id: 1,
    name: "Science-Fiction",
  },
  {
    id: 2,
    name: "Comédie",
  },
];

// const browse = (req, res) => {
//   if (req.query.q != null) {
//     const filteredPrograms = categories.filter((program) =>
//       program.synopsis.includes(req.query.q)
//     );

//     res.json(filteredPrograms);
//   } else {
//     res.json(categories);
//   }
// };

const browse = async (req, res) => {
  const categoriesFromDB = await tables.category.readAll();

  res.json(categoriesFromDB);
};

const read = (req, res) => {
  const parsedId = parseInt(req.params.id, 10);

  const program = categories.find((p) => p.id === parsedId);

  if (program != null) {
    res.json(program);
  } else {
    res.sendStatus(404);
  }
};
// Declare the actions

/* Here you code */

// Export them to import them somewhere else

module.exports = { browse, read };
