// "use client";
import LoginForm from "@/app/(auth)/login/components/LoginForm";
import React from "react";
// import ButtonLoader from '@/components/ButtonLoader/ButtonLoader';

// https://res.cloudinary.com/dei2yklhq/image/upload/v1732021665/medium-shot-woman-reading-magazine-smartphone-removebg-preview_puwibf.png

// https://res.cloudinary.com/dei2yklhq/image/upload/v1732021665/handsome-black-man-standing-blue-wall__1_-removebg-preview_1_edqvn6.png

// https://res.cloudinary.com/dei2yklhq/image/upload/v1732023840/BloTopia_logo_tm5olv.jpg

const loginPage = () => {
  return (
    <>
      <div className="w-full flex h-full items-center justify-center overflow-hidden">
        <LoginForm />

        {/* <RegistrationForm /> */}

        <img
          src="https://res.cloudinary.com/dei2yklhq/image/upload/v1732043746/Group_1_jdvlql.png"
          className="w-[40rem] xl:w-[35vw] right-0 bottom-0 absolute "
          alt=""
        />
      </div>
    </>
  );
};

export default loginPage;
