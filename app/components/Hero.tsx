import React from 'react';
import ShimmerButton from "./magicui/shiny-button";
import { redirect } from 'next/navigation';
import Link from 'next/link';

const Hero = () => {
    return <div>
        <section className="text-gray-600 body-font">
  <div className="container mx-auto flex lg:pl-3 pt-20 lg:pt-0  md:flex-row flex-col items-center">
    <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
      <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Welcome to 
        <br className="hidden lg:inline-block"/>BarberEase 
      </h1>
      <p className=" leading-relaxed">                                                  
                  Discover top-notch barber shops and book       
                    your next haircut or grooming session with     
                    ease. Find your perfect barber, choose a       
                    convenient time, and look your best.</p>
      
      <Link href={"/appointment"} className="z-10 flex pt-5 items-center justify-center">
      <ShimmerButton  className="shadow-2xl">
        <span className="whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight text-white dark:from-white dark:to-slate-900/10 lg:text-lg">
           Register your Appointment !
        </span>
      </ShimmerButton>
    </Link>
     
    </div>
    <div className="hero-img ">
      <img className=" object-cover h-full rounded" alt="hero" src={"/hero.jpg"}/>
    </div>
  </div>
</section>
    </div>;
}


export default Hero;