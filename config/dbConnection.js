const mongoose = require("mongoose");

const connectDB = async () => {
  try {
   const connection = await mongoose.connect(process.env.MONGO_URI)
   console.log("📦 Database Connected",connection.connection.name,connection.connection.host);
    // console.log("connection name: ", connection.connection.name);
    // console.log("connection Host: ", connection.connection.host);
  } catch (error) {
    console.log("error: ", error);
    process.exit(1);
  }
};

module.exports = connectDB;
