/* eslint-disable @typescript-eslint/no-unused-vars */
'use client';
import Link from 'next/link'
import React, {useState} from 'react';


const Navbar = () => {
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);
  const [isAdmin, setisAdmin] = useState(false);
  return (
    <>
    
      <header className='bg-[rgb(249,245,255)] md:px-[3rem] py-[3rem]'>
        <nav className='flex w-full justify-between'>
             
          <Link href="/">
          
             <h1>
              BlogTopia
            </h1>

          
          </Link>


          <ul className='list-none flex'>

              {
                isUserLoggedIn ? (
                  <>
                    <li>
                      <Link href="/profile">
                            <img src="" alt="" />
                            <div>
                                <p>User Name</p>
                            </div>
                      
                      </Link>
                    </li>

                    {
                      isAdmin && (
                        <li>
                          <Link href={'/adminDashboard'}>
                            DashBoard
                          </Link>
                        </li>
                      )
                    }


                    <li>
                      <button onClick={() => setIsUserLoggedIn(false)}>

                      </button>
                    </li>
                  
                  </>
                ) : (
                  <li>
                    <Link className='bg-[rgb(66,48,125)] text-white py-[.6rem] px-[1.2rem] rounded-[.5rem] hover:bg-transparent hover:text-[rgb(66,48,125)] transition-all duration-500 l border-[.2rem] border-[rgb(66,48,125)]' href={'/sign-up'}>
                        <span>
                           Sign up
                        </span>

                    </Link>
                  </li>
                )
              }



          </ul>



        </nav>
      </header>
    
    
    </>
  )
}

export default Navbar