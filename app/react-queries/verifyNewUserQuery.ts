/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
// src/react-query/userQueries.ts
import { useMutation } from '@tanstack/react-query';
// import {useRouter} from 'next/navigation'
import { toast } from 'react-toastify';

interface RegisterFormValues {
  email: string;
  otp: string;
}

const verifyUser = async (data: RegisterFormValues) => {
const base_url = process.env.NEXT_BASE_URL;

    const response = await fetch(`${base_url}/auth/users/verify-account`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    throw new Error('Failed to register. Please try again.');
}

  return response.json();
};

export const useVerifyUser = () => {
    // const router = useRouter();
    return useMutation({
        mutationFn: verifyUser,
        onSuccess: (data:any) => {
            toast.success('User registered successfully!');
    //   router.push('/verify-account')
      
      // Redirect to verification page
    },
    onError: (error:any) => {
      toast.error(error.message || 'Something went wrong.');
    },
  });
};
