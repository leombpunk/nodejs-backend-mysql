const { matchedData } = require("express-validator");
const { encrypt, compare } = require("../utils/handlePassword");
const { usersModel } = require("../models");
const { tokenSign } = require("../utils/handleJwt");
const { handleHttpError } = require("../utils/handleError");

const registerController = async (req, res) => {
  try {
    req = matchedData(req);
    const passwordHash = await encrypt(req.password); //encripta la pass
    const body = { ...req, password: passwordHash }; //copia el req pero con las pass ya encriptada
    const dataUser = await usersModel.create(body); //guarda en la base de datos en nuevo usuario con la pass encriptada
    dataUser.set("password", undefined, { strict: false }); //creo que esto es de la dependencia mongoose (para no devolver la contraseña encriptada)

    const data = {
      user: dataUser,
      token: await tokenSign(dataUser),
    };

    res.send({ data }); //devuelve el nuevo usuario registrado
  } catch (error) {
    handleHttpError(res, "Error en el registro de usuario");
  }
};

const loginController = async (req, res) => {
  try {
    req = matchedData(req);
    //buscar en la base de datos al usuario
    const user = await usersModel.findOne({email:req.email});
        ///.select('password email name role');//el select (funciona en mongoose) filtra que datos va a traer si los encuentra
    //si no existe lo informa
    if (!user){
        handleHttpError(res, "USER_NOT_EXISTS", 404);
        return; //por las dudas
    }
    const hashPassword = user.get('password');
    const check = await compare(req.password, hashPassword);//devuelve un boolean
    if (!check) {
        handleHttpError(res, "PASSWORD_INVALID", 401);
        return; //por las dudas
    }
    user.set('password', undefined, { strict: false });//pone la contraseña como undefined y una restriccion
    const data = {
        token: await tokenSign(user),
        user: user
    };

    res.send({ data });
  } catch (error) {
    handleHttpError(res, "Error en el login de usuario");
  }
};

module.exports = { registerController, loginController };
