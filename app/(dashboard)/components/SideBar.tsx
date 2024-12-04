"use client";
import React, { useEffect, useState } from 'react';
import {LayoutDashboard, NewspaperIcon,  List, User, Settings, } from 'lucide-react'
import Link from 'next/link';

  


const linksItems = [
    { icon: <LayoutDashboard width={42} />, label: 'Dashboard', to: '/admin/dashboard' },
    { icon: <NewspaperIcon width={42} />, label: 'Posts', to: '/admin/posts' },
    { icon: <List width={42} />, label: 'Categories', to: '/admin/categories' },
    { icon: <User width={42} />, label: 'Users', to: '/admin/users' },
    { icon: <Settings width={42} />, label: 'Settings', to: '/admin/settings' },
]

const SideBar = () => {

    const [classToggle, setClassToggle] = useState(0);

    const changeClassToggle = (index:number) => {
        setClassToggle(index);
        const storageClassToggle = { classQuery: index };
        if (typeof window !== 'undefined'){

            localStorage.setItem("classToggle", JSON.stringify(storageClassToggle));
        }
       
    }


    useEffect(() => {
        const savedClassToggle = localStorage.getItem("classToggle");
        if (savedClassToggle) {
          const parsed = JSON.parse(savedClassToggle);
          if (parsed?.classQuery !== undefined) {
            setClassToggle(parsed.classQuery);
          }
        }
      }, []);


    // const storageClassToggle = {
    //     classQuery: classToggle,
    // }
    // localStorage.setItem('classToggle', JSON.stringify(storageClassToggle))

    // const getClassToggle = localStorage.getItem('classToggle');
    // const classToggleTwo = JSON.parse(getClassToggle)
    // console.log(getClassToggle)
    // console.log(classToggleTwo)

  return (
    <>
            <div className='bg-[rgb(190,133,242)] min-h-[95vh] w-[21rem] rounded-3xl  flex flex-col  lg:px-[2rem] lg:py-[3rem] lg:space-y-[6rem]'>

                <Link href={'/'}>
                    <img src={'https://res.cloudinary.com/dei2yklhq/image/upload/v1732042537/Blog_Topia_2-removebg-preview_ycimbp.png'} alt="" className='lg:w-[8rem]' />
                
                </Link>

                    <ul className='text-white flex flex-col  lg:space-y-[1.5rem] w-full '>

                        {
                            linksItems.map((linksItem, index)=>(
                                <Link key={index} href={linksItem.to}>
                                    <li  onClick={() => changeClassToggle(index)}>
                                        <div className={  classToggle===index ? 'flex items-center gap-2 font-bold bg-[rgb(179, 145, 245)] shadow-fine p-[1rem]' : 'flex items-center gap-2 p-[1rem]'}>
                                            <div className='text-2xl'>{linksItem.icon}</div>
                                            <div className='text-lg'>{linksItem.label}</div>
                                        </div>
                                    </li>

                                </Link>
                            )

                            )
                        }



                    </ul>

                    <div>

                    </div>
                    

            </div>
    
    
    </>
  )
}

export default SideBar