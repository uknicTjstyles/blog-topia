/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import { useVerifyOtp, useResendOtp } from "@/app/react-queries/otpQueries";
import ButtonLoader from "./ButtonLoader/ButtonLoader";
import { useRouter } from "next/navigation";

const FormSchema = z.object({
  pin: z.string().min(6, {
    message: "Your one-time password must be 6 characters.",
  }),
});


type InputOTPFormProps = {
    otpDescription?: string; // Optional
    submitBtnContent?: string; // Optional
    formLabelHeading?: string; // Optional
    inputOtpGroupClassName?: string;
    inputOtpSlotClassName?: string
  };

  
  
  export function InputOTPForm({otpDescription,submitBtnContent, formLabelHeading, inputOtpGroupClassName,inputOtpSlotClassName}:InputOTPFormProps) {
    const form = useForm<z.infer<typeof FormSchema>>({
      resolver: zodResolver(FormSchema),
      defaultValues: {
        pin: "",
      },
    });


    const [timer, setTimer] = useState(0); // Initial timer value in seconds
    const [isDisabled, setIsDisabled] = useState(false); 
    
    useEffect(()=>{
      let interval: NodeJS.Timeout;

      if (timer>0) {
        interval = setInterval(() => {
          setTimer((prev) => {
            if (prev <= 1) {
              clearInterval(interval); // Clear timer when it hits 0
              setIsDisabled(false); // Enable the button
              return 0;
            }
            return prev - 1; // Decrease the timer
          });
        }, 1000);
      } else{
        setIsDisabled(false);
      }
      return () => {
      if (interval)  clearInterval(interval); 
      }


    }, [timer])

 
  const { mutate: verifyOtp, isLoading: isVerifying, isSuccess,  data:verifiedData  } = useVerifyOtp();
  const { mutate: resendOtp,   } = useResendOtp();
  const router = useRouter()

 

  async function onSubmit(data: z.infer<typeof FormSchema>) {
    if (typeof window !== 'undefined'){
      const email = localStorage.getItem("email");

      if (!email) {
        toast.error("Email not found in local storage. Please log in again.");
        return;
      }
  
      verifyOtp({ email, otp: data.pin });
    }


  }


  useEffect(()=>{
    if(isSuccess){
      console.log(verifiedData)
      console.log(verifiedData?.user?.role)

      toast.success("Account Verified Successfully")

      const {token, user} = verifiedData || {};

      if(typeof window !== 'undefined'){

        localStorage.setItem('token', token); // Save token
        localStorage.setItem('user', JSON.stringify(user));
        if(user?.role == 'user' ){
          router.push('/profile')
        } else if(user?.role == 'admin' ){
          router.push('/admin/dashboard');
        }

      }

      

      


    }

  },[isSuccess, router, verifiedData])


  // placcDioxReigns$@2405
  // placcDioxReigns$@2405
  // console.log(localStorage.getItem("email"))

  const  handleResendOtp =  async () =>{
    if (typeof window !== 'undefined'){
      const email = localStorage.getItem("email");
      if (!email) {
        toast.error("Email not found. Please log in again.");
        return;
      }

      console.log(email)
      resendOtp({ email }, {
        onSuccess: () => {
          toast.success("OTP resent successfully!");
          setIsDisabled(true); // Disable button
          setTimer(60);
        },
        onError: (error: any) => {
          toast.error(error.message || "An error occurred while resending OTP.");
        },
      });
    }

    
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="w-full place-items-center space-y-[2rem]">
        <FormField
        
          control={form.control}
          name="pin"
          render={({ field }) => (
            <FormItem className="space-y-[2rem] place-items-center">
              <FormLabel className="text-[1.8rem]">{formLabelHeading}</FormLabel>
              <FormControl>
                <InputOTP maxLength={6} {...field}>
                  <InputOTPGroup className={inputOtpGroupClassName}>
                    <InputOTPSlot className={inputOtpSlotClassName} index={0} />
                    <InputOTPSlot className={inputOtpSlotClassName} index={1} />
                    <InputOTPSlot className={inputOtpSlotClassName} index={2} />
                    <InputOTPSlot className={inputOtpSlotClassName} index={3} />
                    <InputOTPSlot className={inputOtpSlotClassName} index={4} />
                    <InputOTPSlot className={inputOtpSlotClassName} index={5} />
                  </InputOTPGroup>
                </InputOTP>
              </FormControl>
              <FormDescription className="text-[0.9rem]">
                {otpDescription}
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button type="submit" className="flex items-center"> {
            isVerifying ? <ButtonLoader /> : submitBtnContent
          }</Button>

        <Button className="block bg-transparent text-blue-400 border-b-2 border-blue-400 rounded-none hover:rounded-lg hover:bg-blue-400 hover:text-white shadow-none" onClick={handleResendOtp} disabled={isDisabled}>
        {isDisabled ? `Resend OTP in ${timer}s` : "Resend OTP"}
        </Button>
      </form>
      <ToastContainer />
    </Form>
  );
}
