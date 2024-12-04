import mongoose from 'mongoose';
import { mongoDbConfig } from './mongoDb/config';

const connectDb = async () => {
  // Check if already connected or connecting
  if (mongoose.connection.readyState >= 1) {
    return;
  }

  if (!mongoDbConfig.endpointUrl) {
    throw new Error('MongoDB URI is not defined. Check your environment variables.');
  }

  try {
    console.log('Connecting to MongoDB...');

    // Connecting to MongoDB with additional options
    await mongoose.connect(mongoDbConfig.endpointUrl);

    console.log('MongoDB connected successfully!');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
    throw new Error('MongoDB connection failed');
  }
};

export default connectDb;
