const express = require("express");

const router = express.Router();

const { getDishes } = require("../Controllers/dishController");

router.get("/dishes", getDishes);

module.exports = router;
