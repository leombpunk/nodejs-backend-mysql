const { check } = require("express-validator");
const validatorResults = require("../utils/handleValidator");

const validatorGetItem = [
  check("id").exists().notEmpty(),//.isMongoId(),
  (req, res, next) => {
    validatorResults(req, res, next);
  },
];

module.exports = { validatorGetItem };
