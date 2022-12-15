const { matchedData } = require("express-validator");
const { encrypt, compare } = require("../utils/handlePassword");
const { usersModel } = require("../models");
const { tokenSign } = require("../utils/handleJwt");

const loginController = async (req, res) => {
    req = matchedData(req);
    const passwordHash = await encrypt(req.password); //encripta la pass
    const body = { ...req, password: passwordHash }; //copia el req pero con las pass ya encriptada
    const dataUser = await usersModel.create(body); //guarda en la base de datos en nuevo usuario con la pass encriptada
    dataUser.set('password', undefined, { strict: false }); //creo que esto es de la dependencia mongoose (para no devolver la contraseña encriptada)

    const data = {
        user: dataUser,
        token: await tokenSign(dataUser)
    };
    
    res.send({ data }); //devuelve el nuevo usuario registrado
};

module.exports = { loginController };