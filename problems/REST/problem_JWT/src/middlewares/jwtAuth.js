// Please don't change the pre-written code
// Import the necessary modules here
import jwt from 'jsonwebtoken';

const jwtAuth = (req, res, next) => {
  // Write your code here
  const token = req.cookies.jwtToken;

  if(!token) res.status(401).json({"success":false,"msg":{"name":"JsonWebTokenError","message":"jwt must be provided"}});
  try {
    const payload = jwt.verify(token,'easypeasylemonsqeezy');
    console.log(payload);
  } catch(e) {
    res.status(401).json({"success":false,"msg":e});
  }
  next();
};

export default jwtAuth;
