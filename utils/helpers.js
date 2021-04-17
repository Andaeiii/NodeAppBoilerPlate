const crypto = require('crypto');

//just incase i need to use this... 
module.exports.genAccessToken = (username) => {
    return crypto.randomBytes(64).toString(256);
}