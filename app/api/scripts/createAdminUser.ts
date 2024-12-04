// import bcrypt from "bcryptjs";
import mongoose from "mongoose";
import dotenv from "dotenv";
import User from "@/models/UserSchema"; // Adjust this path to match your project structure
import { hashPassword } from "@/utils/hashedPassword";
 // MongoDB connection utility





dotenv.config({ path: './.env.local' });
console.log("MONGO_DB_URI:", process.env.NEXT_MONGO_DB_URI);






const connectDb = async () => {
  // Check if already connected or connecting
  if (mongoose.connection.readyState >= 1) {
    return;
  }

  if (!process.env.NEXT_MONGO_DB_URI) {
    throw new Error('MongoDB URI is not defined. Check your environment variables.');
  }

  try {
    console.log('Connecting to MongoDB...');

    // Connecting to MongoDB with additional options
    await mongoose.connect(process.env.NEXT_MONGO_DB_URI);

    console.log('MongoDB connected successfully!');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
    throw new Error('MongoDB connection failed');
  }
};

export default connectDb;


 async function CreateUser() {

  try {
    // Connect to MongoDB
    await connectDb();

    // Admin details
    const adminDetails = {
      name: "Emperor Tehillah",
      email: "bfgeereigns@gmail.com",
      password: "reignS4ever$", // Use a strong password
    };

    // Hash the password
    const hashedPassword = await hashPassword(adminDetails.password);

    // Check if the admin already exists
    const existingAdmin = await User.findOne({ email: adminDetails.email });
    if (existingAdmin) {
      console.log("Admin user already exists!");
      return;
    }

    // Create the admin user
    const adminUser = new User({
      name: adminDetails.name,
      email: adminDetails.email,
      password: hashedPassword,
      role: "admin", // Set role to "admin"
      isVerified: true, // Admin account is pre-verified
    });

    // Save to the database
    await adminUser.save();
    console.log("Admin user created successfully:", adminUser);
  } catch (error) {
    console.error("Error creating admin user:", error);
  } finally {
    // Close MongoDB connection
    mongoose.connection.close();
  }
}


CreateUser();