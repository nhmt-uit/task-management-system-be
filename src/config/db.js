const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("MongoDB connected!");
  } catch (error) {
    console.error("MongoDB connection failed!", error);
    console.error("MONGO_URI: ", process.env.MONGO_URI);
    process.exit(1);
  }
};

module.exports = connectDB;
