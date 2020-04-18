import jwt from 'jsonwebtoken';

export default (req, res, next) => {
  const { authorization } = req.headers;

  if (!authorization) {
    return res.status(400).json({ message: 'Token not present' });
  }

  try {
    const decoded = jwt.decode(authorization);

    if (!decoded && !decoded.userId) {
      return res.status(401).json({ message: 'Invalid token' });
    }

    req.headers.userId = decoded.userId;

    return next();
  } catch (exception) {
    return res.status(401).json({ message: 'Invalid token' });
  }
};
