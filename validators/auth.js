const { check } = require("express-validator");
const validatorResults = require("../utils/handleValidator");

const validatorRegister = [
  check("name").exists().notEmpty().isLength({min:3, max:50}),
  check("age").exists().notEmpty().isNumeric(),
  check("password").exists().notEmpty().isLength({min:3, max:16}),
  check("email").exists().notEmpty().isEmail(),
  (req, res, next) => {
    validatorResults(req, res, next);
  },
];

const validatorLogin = [
    check("password").exists().notEmpty().isLength({min:3, max:16}),
    check("email").exists().notEmpty().isEmail(),
    (req, res, next) => {
      validatorResults(req, res, next);
    },
  ];

module.exports = { validatorRegister, validatorLogin };
