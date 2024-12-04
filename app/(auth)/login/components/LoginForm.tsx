/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useForm } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Eye, EyeOff } from "lucide-react";
import Link from "next/link";

import { useLoginUser } from "@/app/react-queries/loginUserQuery"; // Custom hook for login mutation
import ButtonLoader from "@/components/ButtonLoader/ButtonLoader";
import { useRouter } from "next/navigation";

type LoginFormValues = {
  email: string;
  password: string;
};

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormValues>();
  const [passwordVisible, setPasswordVisible] = useState(false);
  const router = useRouter();
  // const [loginUser, {data, isLoading}] = useLoginUser()

  // Hook for login mutation
  const { mutate, isLoading, isSuccess, isError, error, data:userPayload }:any = useLoginUser();

  const togglePasswordVisibility = () => {
    setPasswordVisible((prev) => !prev);
  };

  const onSubmit = (data: LoginFormValues) => {
    const { email, password } = data;

    if (!email || !password) {
      toast.error("Email and password are required.");
      return;
    }

    // Call the login mutation
    mutate(data);
  };

  useEffect(() => {
    if (isSuccess && userPayload) {
      // console.log("User Payload:", userPayload);
       // Check if data is coming as expected
      try {
        const { token, user } = userPayload;
      
  
        // Check if user and token are available
        if (user.role === "user") {
          if (typeof window !== "undefined") {
            localStorage.setItem("token", token); // Save token
            localStorage.setItem("user", JSON.stringify(user)); // Save user data
          }
          toast.success("Login successful!");
          router.push("/profile");
        } else if (user.role === "admin") {
          if (typeof window !== "undefined") {
            localStorage.setItem("token", token); // Save token
            localStorage.setItem("user", JSON.stringify(user)); // Save user data
          }
          toast.success("Login successful!");
          router.push("/admin/dashboard");
        }
      } catch (error: any) {
        toast.error("An error occurred while processing the login.");
        console.log(error);
      }
    }
  }, [isSuccess, userPayload, router]);
  



  useEffect(() => {
    if (isError && error) {
      console.log("Login Error:", error); // Log the error to check its content
      const { redirectUrl } = error;
      console.log(redirectUrl)
      if (error.message === "User does not exist") {
        toast.error("User does not exist.");
      } else if (error.message === "Invalid credentials") {
        toast.error("Invalid credentials. Please check your email and password.");
      } else if (error.message === "Account not verified") {
        toast.warn("Account not verified. A new OTP has been sent to your email.");
        router.push("/verify-account");
      } else {
        toast.error(error.message || "An error occurred during login.");
      }
    }
  }, [isError, error, userPayload, router]);
  

  return (
    <>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="space-y-4 max-w-lg xl:w-[30vw] xl:space-y-[1.5rem] mx-auto p-4 relative z-[100]"
      >
        {/* Email Field */}
        <div>
          <Label htmlFor="email" className="text-[1rem]">
            Email
          </Label>
          <Input
            id="email"
            type="email"
            {...register("email", { required: "Email is required" })}
            placeholder="example@example.com"
            className="w-full px-[2rem] py-[1.8rem]"
          />
          {errors.email && (
            <p className="text-red-500">{errors.email.message}</p>
          )}
        </div>

        {/* Password Field */}
        <div>
          <Label htmlFor="password" className="text-[1rem]">
            Password
          </Label>
          <div className="relative flex items-center">
            <Input
              id="password"
              type={passwordVisible ? "text" : "password"}
              {...register("password", { required: "Password is required" })}
              placeholder="Enter your password"
              className="w-full px-[2rem] py-[1.8rem]"
            />
            <button
              type="button"
              onClick={togglePasswordVisibility}
              className="absolute right-3 top-[1.3rem] text-gray-500"
            >
              {passwordVisible ? <EyeOff size={20} /> : <Eye size={20} />}
            </button>
          </div>
          {errors.password && (
            <p className="text-red-500">{errors.password.message}</p>
          )}
        </div>

        {/* Submit Button */}
        <Button
          type="submit"
          className="w-full cursor-pointer m-auto p-[2rem] bg-[rgb(214,187,251)]"
        >
          {isLoading ? <ButtonLoader /> : "Login"}
        </Button>

        {/* Forgot Password & Sign Up Links */}
        <div className="flex justify-between mt-4 items-center space-x-[1rem]">
          <Link href={"/forgot-password"}>
            <span className="text-[rgb(214,187,251)] hover:text-black hover:underline cursor-pointer">
              Forgot Password?
            </span>
          </Link>
          <Label>
           <span> Don't have an account? </span> 
            <Link href={"/sign-up"}>
              <span className="text-[rgb(214,187,251)] hover:text-black hover:underline cursor-pointer pl-[.6rem]">
                Sign up
              </span>
            </Link>
          </Label>
        </div>
      </form>
    </>
  );
};

export default LoginForm;
