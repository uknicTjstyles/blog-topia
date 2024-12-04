// queries/otpQueries.ts
import { useMutation } from "@tanstack/react-query";

type VerifyOtpPayload = {
  email: string;
  otp: string;
};

type ResendOtpPayload = {
  email: string;
};
const base_url = process.env.NEXT_BASE_URL || 'http://localhost:3000/api';

// API call to verify OTP
async function verifyOtp(payload: VerifyOtpPayload) {
    

  const response = await fetch(`${base_url}/auth/users/verify-account`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });

  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.message || "Failed to verify OTP.");
  }

  return response.json();
}

// API call to resend OTP
async function resendOtp(payload: ResendOtpPayload) {
  const response = await fetch(`${base_url}/auth/users/resend-otp`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });

  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.message || "Failed to resend OTP.");
  }

  return response.json();
}

// React Query hooks for OTP actions
export function useVerifyOtp() {
  return useMutation(verifyOtp);
}

export function useResendOtp() {
  return useMutation(resendOtp, {
 
  });
}
