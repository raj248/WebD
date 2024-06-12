// Please don't change the pre-written code
// Import the necessary modules here
import {addUser, confirmLogin} from "../model/user.model.js";
export const registerUser = (req, res, next) => {
  // Write your code here
  const user = addUser(req.body);
  if (!user) {
    next();
  }
  res.status(201).json({"status":"success",user});
};

export const loginUser = (req, res) => {
  // Write your code here
  const user = confirmLogin(req.body);
  if(!user){
    res.status(400).json({ "status": "failure", "msg": "invalid user details" })
  }
  res.status(200).json({ "status": "success", "msg": "login successful" })
};
