const jwt = require('jsonwebtoken');
require('dotenv');



module.exports.postUser = (req, res) => {
    res.json({
        message: 'Posts created',
        user: req.user
    });
}



module.exports.loginUser = (req, res) => {
    //hard coded values.. it could come from a form and 
    //verified from a database... 
    //but i choose to put here. 
    const user = {
        id: 1,
        username: 'rayfisher',
        passkey: 'zack@snyder.com'
    };

    jwt.sign({ user: user }, process.env.TOKEN_SECRET, (err, token) => {
        res.json({ token });
    });

}