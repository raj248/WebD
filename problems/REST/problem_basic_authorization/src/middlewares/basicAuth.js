// Please don't change the pre-written code
// Import the necessary modules here
import {getAllUsers} from '../features/user/model/user.model.js';

const basicAuthMiddleware = (req,res,next) => {
  // Write your code here
  const authHeader = req.headers['authorization'];
  if(!authHeader){
    res.status(401).json({"success":"false","msg":"no authorization details found"})
  }

  const base64Creds = authHeader.replace('Basic ','');
  const decodedCreds = Buffer.from(base64Creds,'base64').toString('utf8');
  const creds = decodedCreds.split(':');


  const user = getAllUsers().find((user)=>user.email==creds[0]&&user.password==creds[1]);
  if(!user) res.status(401).json({"success":"false","msg":"authorization failed"});

  next();

};

export default basicAuthMiddleware;
