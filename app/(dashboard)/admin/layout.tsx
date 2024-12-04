/* eslint-disable react-hooks/rules-of-hooks */
"use client";
import React, { useState } from "react";
import Navbar from "../components/Navbar";
import SideBar from "../components/SideBar";
import { useAuth } from "@/hooks/useAuth";
// import { ToastContainer } from "react-toastify";
// import useMediaQuery  from "react-media";

interface LayoutProps {
  children: React.ReactNode;
}

const dashBoardLayout: React.FC<LayoutProps> = ({ children }) => {

  const {loading} = useAuth(['admin']);

  const [isSidebarVisible, setIsSidebarVisible] = useState(false);
  // // const [toggle, setToggle] = useState(false);
  // const isMobile = useMediaQuery({ query: "(max-width: 1080px)" });
  // // console.log(toggle)

  // useEffect(() => {
  //     // Hide sidebar initially on mobile
  //     if (isMobile) {
  //       setIsSidebarVisible(false);
  //     }
  //   }, [isMobile]);

  const toggleSidebar = () => {
    setIsSidebarVisible(!isSidebarVisible);
  };

  
  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <span>Loading...</span> {/* You can replace this with a loading spinner */}
      </div>
    );
  }

  return (
    <>
      <div className="over flex flex-row flex-wrap p-[1rem] lg:h-screen   relative">
        <div
          className={`sidebarcomponent  ${
            isSidebarVisible
              ? "translate-x-0"
              : "-translate-x-full xl:translate-x-0"
          } absolute xl:static  xl:block h-full  z-50  bottom-[5%] duration-300 `}
        >
          <SideBar />
        </div>

        <div className="children flex flex-col flex-grow h-auto sm:h-full lg:h-[96vh] lg:pl-[2rem]">
          <div className="navbarcomponent ">
            <Navbar buttonToggle={toggleSidebar} />
          </div>

          <div className="w-full flex-grow xl:overflow-scroll xl:overflow-x-hidden pt-[3rem] space-y-[1.2rem]">
            {children}
          </div>
        </div>

        {
          // toggle || isMobile ? "absolute xl:static" : "" // Show sidebar on mobile tap or toggle
        }
      </div>
      {/* <ToastContainer /> */}
    </>
  );
};

export default dashBoardLayout;
