"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export const useAuth = (allowedRoles: string[]) => {
  const router = useRouter();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkAuth = () => {
      if (typeof window === 'undefined') return;

      const token = localStorage.getItem("token");
      const user = JSON.parse(localStorage.getItem("user") || "{}");

      if (!token || !user) {
        setLoading(false);
        router.push("/"); // Redirect to home if no token or user data
        return;
      }

      const payload = JSON.parse(atob(token.split(".")[1]));
      const isExpired = payload.exp * 1000 < Date.now();
      // console.log(atob(token.split('.')[1]))
      const expDate = new Date(payload.exp * 1000);
      console.log(expDate)
      console.log(`payload ; ${payload.exp * 1000} < Current Date: ${Date.now()}`)

      if (isExpired) {
        localStorage.removeItem("token");
        localStorage.removeItem("user");
        setLoading(false);
        router.push("/"); // Redirect to home
        return;
      }

      if (!allowedRoles.includes(user?.role)) {
        setLoading(false);
        router.push("/error"); // Redirect to error page if role is not allowed
        return;
      }

      setLoading(false);
    };

    checkAuth(); // Run the check initially

    // Listen for changes in localStorage
    const onStorageChange = () => {
      checkAuth();
    };

    window.addEventListener("storage", onStorageChange);

    return () => {
      window.removeEventListener("storage", onStorageChange);
    };
  }, [router, allowedRoles]);

  return { loading };
};
