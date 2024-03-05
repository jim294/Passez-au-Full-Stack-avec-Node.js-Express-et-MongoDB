const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
    try {
        const token = req.headers.authorization.split('')[1];
        const decodeToken = jwt.verify(TOKEN,'RANDOM_TOKEN_SECRET')
        const userId = decodeToken.userId;
        req.auth = {
            userId: userId
        }
    } catch (error) {
        res.status(401).json({ error })
    }
}