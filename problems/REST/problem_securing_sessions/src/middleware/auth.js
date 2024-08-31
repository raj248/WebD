// Please don't change the pre-written code
// Import the necessary modules here

export const auth = (req, res, next)=>{
    if(req.session.userEmail) {
        next();
    } else{
        res.render('msgPage',{message:'login first to access secure page'});
    }
};