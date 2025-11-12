import mongoose from "mongoose"

const connectDB = async () => {
    try {
      const conn = await mongoose.connect(`connectionn  string put here /school`, {
        useNewUrlParser: true,
      });
      console.log(`MongoDB Connected: ${conn.connection.host}`);
    } catch (error) {
      console.error(error.message);
      process.exit(1);
    }
  }

  export default connectDB;