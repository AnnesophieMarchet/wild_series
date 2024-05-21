/* ************************************************************************* */
// Import And Use Routers Here
/* ************************************************************************* */
const express = require("express");

const router = express.Router();

const { sayWelcome } = require("../../controllers/sayActions");

router.get("/", sayWelcome);

// const { browse } = require("../../controllers/programActions");

// router.get("/", browse);

const itemsRouter = require("./items/router");
const programsRouter = require("./programs/router");

router.use("/items", itemsRouter);
router.use("/programs", programsRouter);
/* ************************************************************************* */

module.exports = router;
