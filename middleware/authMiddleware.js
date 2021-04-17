const jwt = require('jsonwebtoken');
require('dotenv');


module.exports.authenticate = (req, res, next) => {
    const bearerHeader = req.headers['authorization'];

    if (typeof bearerHeader === 'undefined') return res.sendStatus(403).json({ message: 'no token sent' });

    const bearerToken = bearerHeader.split(' ')[1];
    req.token = bearerToken

    try {
        const decoded = jwt.verify(req.token, process.env.TOKEN_SECRET);
        req.user = decoded;
        next();
    } catch (err) {
        res.sendStatus(403).json({ message: 'invalid token.' });
    }

}