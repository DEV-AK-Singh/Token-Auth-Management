const jwt = require('jsonwebtoken');

const createToken = (user) => {
    return jwt.sign({ user }, process.env.TOKEN_SECRET, { expiresIn: "1d" });
};

const verifyToken = (token) => {
    return jwt.verify(token, process.env.TOKEN_SECRET);
};

module.exports = {
    createToken,
    verifyToken
}