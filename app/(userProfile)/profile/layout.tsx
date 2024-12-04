/* eslint-disable react-hooks/rules-of-hooks */
"use client";
import React from "react";
import { useAuth } from '@/hooks/useAuth';

const userLayout = ({children}:{children:React.ReactNode}) => {
   const {loading} =  useAuth(["admin", "user"]);


    if(loading){
        return <div>Loading...</div>;
    }

    return (  

            <>
            
                   
                   {children}
            
            
            </>

    );
}
 
export default userLayout;