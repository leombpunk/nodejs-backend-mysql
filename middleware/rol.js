const { handleHttpError } = require("../utils/handleError");

/**
 *
 * @param {*} rol Array con los roles permitidos
 * @returns
 */
const checkRol = (roles) => (req, res, next) => {
  try {
    const { user } = req;
    const rolesByUser = user.role; //roles del usuario
    const checkValueRol = roles.some((rolSingle) =>
      rolesByUser.includes(rolSingle)
    ); //devuelve un booleano
    if (!checkValueRol) {
      handleHttpError(res, "USER_NOT_PERMISSIONS", 403);
      return;
    }
    next();
  } catch (error) {
    handleHttpError(res, "ERROR_PERMISSIONS", 403);
  }
};

module.exports = { checkRol };
