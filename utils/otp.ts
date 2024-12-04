
export  const generateOtp = () =>  Math.floor(100000 + Math.random() * 900000).toString();

// utils/otp.js

// utils/otp.ts

export const verifyOtpCode = (userOtp: string, otpFromDb: string, otpExpiration: Date) => {
  // Check if OTP matches and is still valid (not expired)
  if (userOtp !== otpFromDb) {
    return { success: false, message: 'Invalid OTP' };
  }

  const currentTime = new Date();
  if (currentTime >= otpExpiration) {
    return { success: false, message: 'OTP has expired' };
  }

  return { success: true, message: 'OTP verified successfully' };
};


export const isOtpExpired = (otpExpiration:Date) => {
  return new Date() > otpExpiration; // Compare current time with OTP expiration time
};