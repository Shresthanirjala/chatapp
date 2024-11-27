import mongoose from "mongoose";

const connectToMongoDB = async () => {
   mongoose.connect("mongodb://localhost:27017/chatapp")
   console.log("connected to mongo db");
}
// mongodb+srv://nirjalas437:Z4Bjsv1f2MG3aqNE@cluster0.hyzhf.mongodb.net

export default connectToMongoDB;