const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
  try {
    const token = req.headers.authorization.split(' ')[1]
    const decodedToken = jwt.verify(token, 'RANDOM_TOKEN_KEY');
    req.auth = { userId: decodedToken.userId };
  } catch(error) {
    res.status(401).json({ error });
  }
}