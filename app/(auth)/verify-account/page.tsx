'use client';
import { InputOTPForm } from '@/components/Otp'
import React from 'react'

const verifyPassword = () => {
  return (
    <>

<section className='w-full min-h-screen md:justify-center md:items-center flex '>



<InputOTPForm inputOtpSlotClassName="md:w-[5.3rem] md:h-[5.3rem] md:text-[2rem] md:placeholder:text-[2rem]" formLabelHeading='Activate Account' inputOtpGroupClassName="flex space-x-[1rem]" submitBtnContent='Verify Account' otpDescription='Please enter the verification code sent to your email' />

        
</section>
    
    </>
  )
}

export default verifyPassword