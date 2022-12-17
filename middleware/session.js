const { handleHttpError } = require("../utils/handleError");
const { verifyToken } = require("../utils/handleJwt");
const { usersModel } = require("../models");

const authMiddleware = async (req, res, next) => {
  try {
    if (!req.headers.authorization){
        handleHttpError(res, "NOT_TOKEN",401);
        return;
    }
    const token = req.headers.authorization.split(' ').pop();//filtra para quitar la palabra bearer del token
    const dataToken = await verifyToken(token);
    if (!dataToken._id) {
        handleHttpError(res, "ERROR_ID_TOKEN",401);
        return;
    }
    //saber quien rayos (usuario) esta usando el endpoint
    const user = await usersModel.findById(dataToken._id);
    req.user = user;//se lo pasa al request, luego desde el controllador se pueden obtener estos datos a traves de la propiedad req.user
    next();
  } catch (error) {
    handleHttpError(res, "NOT_SESSION",401);
  }
};

module.exports = { authMiddleware };
