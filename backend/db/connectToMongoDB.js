import mongoose from "mongoose";

const connectToMongoDB = async () => {
   mongoose.connect("mongodb+srv://nirjalas437:Z4Bjsv1f2MG3aqNE@cluster0.hyzhf.mongodb.net/")
   console.log("connected to mongo db");
}

export default connectToMongoDB;