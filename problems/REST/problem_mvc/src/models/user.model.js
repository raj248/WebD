// Please don't change the pre-written code
// Import the necessary modules here

export const users = [
  { id: 1, name: "vivek", email: "krvivi28@gmail.com", password: "vivek28@" },
];

export const registerUser = (user) => {
  // Write your code here
  user.id = users.length;
  users.push(user);
};

export const authenticateUser = (reqUser) => {
  // Write your code here
  const index = users.find((user)=>user.email==reqUser.email && user.password == reqUser.password);
  if(!index){
    return false;
  }
  return true;
};
