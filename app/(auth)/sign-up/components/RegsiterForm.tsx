'use client';

import React, { useState } from 'react';
// import { useMutation } from '@tanstack/react-query';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useForm } from 'react-hook-form';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import { Eye, EyeOff } from 'lucide-react'; // Icon for toggle
import Link from 'next/link';

import { useRegisterUser } from '@/app/react-queries/createUserQuery';
import ButtonLoader from '@/components/ButtonLoader/ButtonLoader';


// type RegisterFormValues = {
//   name: string;
//   email: string;
//   password: string;
// };

type RegisterFormValues = {
  name: string,
  email: string,
  password:string;
}

const isStrongPassword = (password: string) => {
  // A strong password has at least one uppercase letter, one lowercase letter, one number, and one special character, and is at least 8 characters long
  const strongPasswordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  return strongPasswordRegex.test(password);
};

const RegisterForm = () => {
  const { register, handleSubmit, watch, formState: { errors } } = useForm<RegisterFormValues>();
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [confirmPassword, setConfirmPassword] = useState('');
  const [agreed, setAgreed] = useState(false);
  const [email, setEmail] = useState('')

  const { mutate, isLoading } = useRegisterUser(); 
  // console.log(isLoading)
//   const mutation = useMutation({
//     mutationFn: async (data: Omit<RegisterFormValues, 'confirmPassword'>) => {
//       const response = await fetch('/api/register', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(data),
//       });

//       if (!response.ok) {
//         throw new Error('Failed to register. Please try again.');
//       }

//       return response.json();
//     },
//     onSuccess: () => {
//       toast.success('User registered successfully!');
//     },
//     onError: (error) => {
//       toast.error(error.message || 'Something went wrong.');
//     },
//   });


// const password = watch('password');

  const onSubmit = (data: RegisterFormValues) => {
    const password = watch('password');


    console.log(password)

    if (!agreed) {
        toast.error('You must agree to the terms and policy.');
        return;
      }


    if (password !== confirmPassword) {
      toast.error('Passwords do not match!');
      return;
    }

    if (!password) {
      toast.error('Password field cannot be empty!');
      return;
    }
  


    if(!email){
      toast.error("Email field cannot be empty");
    }
    if (!isStrongPassword(password)) {
      toast.error('Password is not strong enough!');
      return;
    }

    if(typeof window !== 'undefined'){

      localStorage.setItem("email", email)
    }



    // const {name, email, password}   = data
      mutate(data)
    // mutate(data)
  };

  const togglePasswordVisibility = () => {
    setPasswordVisible((prev) => !prev);
  };

  return (
    <>
     
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 max-w-lg xl:w-[30vw] xl:space-y-[1.5rem] mx-auto p-4 relative z-[100]">
        <div>
          <Label htmlFor="name" className='text-[1rem]'>Full Name</Label>
          <Input
            id="name"
            {...register('name', { required: 'Full Name is required' })}
            placeholder="John Doe"
            className='w-full px-[2rem] py-[1.8rem]'
          />
          {errors.name && <p className="text-red-500">{errors.name.message}</p>}
        </div>

        <div>
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            type="email"
            {...register('email', { required: 'Email is required' })}
            placeholder="example@example.com"
              className='w-full px-[2rem] py-[1.8rem]'
              value={email}
              onChange={(e)=> setEmail(e.target.value)}
          />
          {errors.email && <p className="text-red-500">{errors.email.message}</p>}
        </div>
        {/* <div>
          <Label htmlFor="email">Username</Label>
          <Input
            id="userName"
            type="text"
            {...register('userName', { required: 'Username is required' })}
            placeholder="maria2024"
              className='w-full px-[2rem] py-[1.8rem]'
          />
          {errors.userName && <p className="text-red-500">{errors.userName.message}</p>}
        </div> */}

        <div>
          <Label htmlFor="password">Password</Label>
          <div className="relative flex items-center">
            <Input
              id="password"
              type={passwordVisible ? 'text' : 'password'}
              {...register('password', { required: 'Password is required' })}
              placeholder="Enter your password"
                className='w-full px-[2rem] py-[1.8rem]'
            />
            <button
              type="button"
              onClick={togglePasswordVisibility}
              className="absolute right-3 top-[1.3rem] text-gray-500"
            >
              {passwordVisible ? <EyeOff size={20} /> : <Eye size={20} />}
            </button>
          </div>
          {errors.password && <p className="text-red-500">{errors.password.message}</p>}
          {/* {password.length < 8 && <p>Password must be at least 8 characters long</p>} */}
        </div>

        <div>
          <Label htmlFor="confirmPassword">Re-enter Password</Label>
          <div className="relative">
            <Input
              id="confirmPassword"
              type={passwordVisible ? 'text' : 'password'}
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              placeholder="Re-enter your password"
                className='w-full px-[2rem] py-[1.8rem]'
            />
          </div>
        </div>

        <div className="flex items-center space-x-2">
          <Checkbox  id="agreed" onClick={()=> setAgreed(!agreed)} />
          <Label htmlFor="agreed">
            I have read and agree with the <a href="#" className="text-blue-600 underline">terms of service</a> and our <a href="#" className="text-blue-600 underline">policy</a>.
          </Label>
        </div>
     

        <Button  type="submit" className="w-full cursor-pointer m-auto p-[2rem] bg-[rgb(214,187,251)]">
          {
            isLoading ? <ButtonLoader /> : 'Sign Up'
          }
        </Button>


        <div className='flex w-full text-center justify-center '>
        <Label>
                 Already Have an Account?
        <Link href={'/login'} >
        <span className='text-[rgb(214,187,251)] hover:text-black hover:underline cursor-pointer pl-[.6rem]'>
        Sign in
        </span>
        
        </Link>

        </Label>

        </div>

      </form>
    </>
  );
};

export default RegisterForm;
