
"use client"

import { UserButton,useUser  } from '@clerk/nextjs'



import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { GiHamburgerMenu } from "react-icons/gi";
import { GiCrossMark } from "react-icons/gi";
import { GiHairStrands } from "react-icons/gi";
import { useRouter } from "next/navigation";
const Navbar = () => {
  const router = useRouter();
  const [islogin, setlogin] = useState(false)
  const { isSignedIn } = useUser();

  if(!localStorage.getItem("token")){
    router.push("/loginshop")
  }
  const removetoken=()=>{
    localStorage.removeItem("token")
  }
 
  const userButtonAppearance = {
    elements: {
      userButtonAvatarBox: "w-10 h-10", // Custom width and height
      userButtonPopoverCard: "bg-blue-100", // Custom background for the popover card
      userButtonPopoverActionButton: "text-red-600", // Custom text color for action buttons
    },
  };
    const [isOpen, setIsOpen] = useState(true);
    const handleopen=()=>{
        if (isOpen===true){
            setIsOpen(false)
        }else{
            setIsOpen(true)
        }
    }
    
    return <div className='bg-slate-400 lg:p-0 pb-5'>
        <header className="text-gray-600 body-font">
  <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
    <a className="flex title-font font-medium lg:items-center absolute left-2 text-gray-900 mb-4 md:mb-0 ">
    <GiHairStrands className='size-10' />
      <span className="ml-3 text-xl">BarberEase</span>
    </a>
    <button onClick={()=>{handleopen()}} className="lg:hidden ml-80 md:right-2 absolute ">
      {isOpen?<GiHamburgerMenu className="size-6" />:<GiCrossMark className="size-6" />}
    
    </button>

    <nav className={`lg:block ${isOpen?"hidden":"block"} md:ml-auto flex lg:flex-wrap flex-col backdrop-blur-sm lg:bg-inherit z-40 lg:w-auto lg:h-auto w-full h-80 rounded-lg lg:relative lg:mt-0 mt-28 md:mt-96  absolute gap-y-7  items-center text-base justify-center `}>
     <Link href={"/"}> <span className="mr-5 hover:text-white text-black font-bold">Home</span></Link>
     <Link href={"/about"}> <span className="mr-5 hover:text-white text-black  font-bold">About us</span></Link>
     <Link href={"/howitworks"}> <span className="mr-5 hover:text-white text-black  font-bold">How it works</span></Link>
     <Link href={"/Contact"}> <span className="mr-5 hover:text-white text-black  font-bold">Contact us</span></Link>
     {!isSignedIn && <Link href={"/sign-in"}>  <span className="mr-5 hover:text-white text-black  font-bold">Sign-In</span></Link>}
     {!isSignedIn && <Link href={"/sign-up"}>  <span className="mr-5 hover:text-white text-black  font-bold">Sign-up</span></Link>}
     {islogin && <Link href={""} ><button className='mr-5' onClick={removetoken}>Logout</button></Link>}
     {!islogin && <Link href={"/reg.shop"}> <span className="mr-5 hover:text-white text-black  font-bold">Reg.shop</span></Link>}
     
    </nav>
    <span className="">
      <UserButton afterSignOutUrl='/' appearance={userButtonAppearance}/>
    </span>
    
    
  
  
  </div>
</header>
    </div>;
}



export default Navbar;