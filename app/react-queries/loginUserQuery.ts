import { useMutation } from "@tanstack/react-query";
// import { toast } from "react-toastify";



type loginDetails = {
    email: string;
    password: string;
}



const loginUser = async (data:loginDetails) =>{
    const base_url = process.env.NEXT_BASE_URL || 'http://localhost:3000/api';

    const response = await fetch(`${base_url}/auth/users/sign-in`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
     if(!response.ok){
        const errorData = await response.json();
        throw new Error(errorData.error || "Login failed.");
     }
     return response.json();

}

export const useLoginUser = ()=>{

    return useMutation(loginUser)
}

