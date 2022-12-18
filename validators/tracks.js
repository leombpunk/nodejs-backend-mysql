const { check } = require("express-validator");
const validatorResults = require("../utils/handleValidator");

const validatorCreateItem = [
  check("name").exists().notEmpty().isLength({ min: 5, max: 50 }),
  check("album").exists().notEmpty(),
  check("cover").exists().notEmpty(),
  check("artist").exists().notEmpty(),
  check("artist.name").exists().notEmpty(),
  check("artist.nickname").exists().notEmpty(),
  check("artist.nationality").exists().notEmpty(),
  check("duration").exists().notEmpty(),
  check("duration.start").exists().notEmpty(),
  check("duration.end").exists().notEmpty(),
  check("mediaId").exists().notEmpty(), //.isMongoId() esto es un mongo id
  (req, res, next) => {
    validatorResults(req, res, next);
  },
];

const validatorGetItem = [
  check("id").exists().notEmpty(),//.isMongoId(),
  (req, res, next) => {
    validatorResults(req, res, next);
  },
];

module.exports = { validatorCreateItem, validatorGetItem };
