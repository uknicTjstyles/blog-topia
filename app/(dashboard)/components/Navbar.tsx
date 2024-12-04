import React from 'react';
import { CiMenuBurger } from "react-icons/ci";
// import { LiaTimesSolid } from "react-icons/lia";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Logout from '@/app/logout/logout';
import { toast, ToastContainer } from 'react-toastify';
import {LogOut, User2} from 'lucide-react'
import {
    Menubar,
    MenubarContent,
    MenubarItem,
    MenubarMenu,
    // MenubarSeparator,
    // MenubarShortcut,
    MenubarTrigger,
  } from "@/components/ui/menubar"
import Link from 'next/link';
import 'react-toastify/dist/ReactToastify.css';

  interface ButtonTogglerProps {
    buttonToggle ?: () => void
  }

  
  const Navbar = ({buttonToggle}:ButtonTogglerProps) => {
    const [isLoggingOut, setIsLoggingOut] = React.useState(false);
    
    const handleLogOut = () =>{
      setIsLoggingOut(true); 
      toast.success('Logged out successfully')
    }
  return (
    <>


        <header>

                <nav className='py-3 flex justify-between items-center'>
                        <div className="toggle_icon">
                            <CiMenuBurger onClick={buttonToggle} size={20} className='xl:hidden' />
                        </div>







                        <Menubar className='outline-none border-none  shadow-none'>
                <MenubarMenu>
    <MenubarTrigger className=' cursor-pointer'>

    <Avatar>
                    <AvatarImage src="https://github.com/shadcn.png" />
                                <AvatarFallback>CN</AvatarFallback>
                    </Avatar>


    </MenubarTrigger>
    <MenubarContent>
      <MenubarItem>
          <Link href={'/admin/settings'} className='flex items-center space-x-[.5rem]'>
          <User2 size="15" />
          <span>
          Profile
          </span>
          </Link>

       
      </MenubarItem>
      <MenubarItem className='cursor-pointer flex  space-x-[.5rem]' onClick={handleLogOut}>

           <LogOut size="15" /> 
           <span>Logout</span>

      </MenubarItem>
     
    </MenubarContent>
  </MenubarMenu>
</Menubar>



                      

                            



                </nav>


                {isLoggingOut && <Logout />} 
        </header>

      <ToastContainer />
    
    </>
  )
}

export default Navbar