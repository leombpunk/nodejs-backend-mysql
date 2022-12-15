const bcryptjs = require("bcryptjs");

/**
 * 
 * @param {*} passwordPlain Constraseña sin encriptar
 */
const encrypt = async (passwordPlain) => {
    const hash = await bcryptjs.hash(passwordPlain, 10);
    console.log(hash);
    return hash;
};

/**
 * 
 * @param {*} passwordPlain Constraseña sin encriptar
 * @param {*} hashPassword Constraseña encriptada
 */
const compare = async (passwordPlain, hashPassword) => {
    return await bcryptjs.compare(passwordPlain, hashPassword);
};

module.esports = { encrypt, compare };