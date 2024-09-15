import bcrypt from "bcryptjs";

import generateTokenAndSetCookie from "../utils/generateToken.js";
import User from "../models/user_model.js";


export const signup = async(req, res) => {
    try {
        const {fullName, Username,password,gender}= req.body;

        // if(password !== confirmPassword){
        //     return res.status(400).json({error:"password doesn't match"})
        // }

const user = await User.findOne({Username});


if(user){
    return res.status(400). json({error:"Username already exist"});
}

//Hashed password here

const salt = await bcrypt.genSalt(10);
const hashedPassword = await bcrypt.hash(password, salt);

const girlProfilePic = `https://avatar.iran.liara.run/public/girl=${Username}`
const boyProfilePic = `https://avatar.iran.liara.run/public/girl=${Username}`

const newUser = new User({
    fullName,
    Username,
    password: hashedPassword,
    gender,
    profilePic: gender === "male" ? boyProfilePic : girlProfilePic
})

if(newUser){
    //generate Jwt Token here
      generateTokenAndSetCookie(newUser._id, res)
    await newUser.save();

res.status(201).json({
    _id: newUser._id,
    fullName: newUser.fullName,
    Username: newUser.Username,
    profilePic: newUser.profilePic,
});
} else {
    res.status(400).json({error:"Invalid user data"});
}


    } catch (error) {
        console.log("Error in signup controller", error.message);
        res.status(500).json({error: "Internal Server Error"});
    }
}
export const login = async (req, res) => {
   try {
    const {Username, password} = req.body;
    const user = await User.findOne({Username});
    const isPasswordCorrect = await bcrypt.compare(password, user?.password || "");

    if(!user || !isPasswordCorrect) {
        return res.status(400).json({error: "Invalid username or password"});
    }
    generateTokenAndSetCookie(user._id, res);
    res.status(200).json({
        _id: user._id,
        fullName: user.fullName,
        Username: user.Username,
        profilePic: user.profilePic,

    });

   } catch (error) {
    console.log("Error in login controller", error.message);
    res.status(500).json({ error: "Internal Server Error"});
   }
}

export const logout = (req, res) => {
  try {
res.cookie("jwt", "" , {maxAge: 0});
res.status(500).json({message:"Logged out successfylly"});
    
  } catch (error) {
    console.log("Error in login controller", error.message);
    res.status(500).json({ error: "Internal Server Error"});
    
  }
}