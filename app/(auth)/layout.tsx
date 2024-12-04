/* eslint-disable @typescript-eslint/no-unused-vars */
'use client';

import React from 'react';
import {usePathname} from 'next/navigation'
import Link from 'next/link';
// import Image from 'next/image';
import { ToastContainer } from 'react-toastify';



const AuthLayout = ({children}:{children:React.ReactNode}) => {
const pathname = usePathname();
  // console.log(pathname)
  const routeConfig = (): { image: string; text: string; textStyle: string; imageStyle: string } => {
    switch (true) {
      case pathname.startsWith('/login'):
        return {
          image: 'https://res.cloudinary.com/dei2yklhq/image/upload/v1732021665/medium-shot-woman-reading-magazine-smartphone-removebg-preview_puwibf.png',
          text: 'Welcome Back to Blogtopia',
          textStyle: 'text-[1.5rem] text-white font-medium',
          imageStyle: 'w-[25rem] mx-auto',
        };
      case pathname.startsWith('/sign-up'):
        return {
          image:
            'https://res.cloudinary.com/dei2yklhq/image/upload/v1732021665/handsome-black-man-standing-blue-wall__1_-removebg-preview_1_edqvn6.png',
          text: 'The Best Place to Write Your Blog',
          textStyle: 'text-[1.45rem] text-white font-bold',
          imageStyle: 'w-[35rem] xl:w-[35vw] mx-auto ',
        };
      case pathname.startsWith('/verify-account'):
      case pathname.startsWith('/forget-password'):
      case pathname.startsWith('/reset-password'):
        return {
          image:
            'https://res.cloudinary.com/dei2yklhq/image/upload/v1732042537/Blog_Topia_2-removebg-preview_ycimbp.png',
          text: '',
          textStyle: 'text-4xl font-medium text-purple-600',
          imageStyle: 'w-[11rem] m-auto',
        };
      default:
        return {
          image:
            'https://res.cloudinary.com/dei2yklhq/image/upload/v1732021665/medium-shot-woman-reading-magazine-smartphone-removebg-preview_puwibf.png',
          text: 'Explore Stories That Matter',
          textStyle: 'text-4xl font-semibold text-gray-500',
          imageStyle: 'w-[32rem] mx-auto',
        };
    }
  };

  const { image, text, textStyle, imageStyle } = routeConfig();


  const textParts = text.split(' ');
  const lastWord = textParts.pop();
  const remainingText = textParts.join(' ');
  

  // console.log('textStyle', textStyle)


  return (

    <>
      <div className="w-full  flex flex-row min-h-screen">

      <section className="hidden md:flex bg-[rgb(214,187,251)] w-[45vw]">
        
            <div className="w-full flex flex-col justify-between pt-[2.6rem] px-[4rem]">
              <h1 className={`${textStyle}`}>

              {remainingText}{' '} <br />
              <span className="text-[rgb(68,50,94)]">{lastWord}</span>

              </h1>

              
              <img src={image} className={`${imageStyle}`} alt="" />
            






            </div>



      </section>

         
          <section className='flex-grow relative'>

              {children}

          </section>


        
         
          <ToastContainer />
      </div>
    
    
    
    </>
  )
}

export default AuthLayout