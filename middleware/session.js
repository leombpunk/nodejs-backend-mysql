const { handleHttpError } = require("../utils/handleError");

const authMiddleware = (req, res, next) => {
  try {
    
  } catch (error) {
    handleHttpError(res, "Error tal_cosa");
  }
};

module.exports = { authMiddleware };
