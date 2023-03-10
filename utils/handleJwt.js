const jwt = require("jsonwebtoken");
const JWT_SECRET = process.env.JWT_SECRET;
/**
 * Firmar token
 * @param {*} user 
 */
const tokenSign = async (user) => {
    const sign = await jwt.sign({
        id: user.id,
        role: user.role
    }, JWT_SECRET, {
        expiresIn: "2h"
    });
    return sign;
};

/**
 * Verificar token firmado
 */
const verifyToken = async (tokenJwt) => {
    try {
        return jwt.verify(tokenJwt, JWT_SECRET);
    } catch (error) {
        return null;
    }
};

module.exports = { tokenSign, verifyToken };
