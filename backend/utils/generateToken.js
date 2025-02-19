import jwt from "jsonwebtoken"

const generateTokenAndSetCookie = (userId,res)=>{
    console.log("JWT_SECRET:", process.env.JWT_SECRET);

    const token = jwt.sign({userId}, process.env.JWT_SECRET, {expiresIn: '15d',})
    res.cookie("jwt", token, {

        maxAge: 15 * 24 * 60* 1000,//ms
        httpOnly: true, //prevent XSS attacks cross-site scripting attack
        sameSite: "strict",//CSRF attacks cross-site request for forgery attacks
        secure: process.env.NODE_ENV !=="development",
    });
};

export default generateTokenAndSetCookie;