import React from "react";
import Logo from "../../assets/logo-text.png";
import { RxHamburgerMenu } from "react-icons/rx";


const Navbar = () => {

    return (
        <div className="sticky top-0 bg-white">

            <div className="container py-4 md:py-7.5 px-2 md:px-0 mx-0 md:mx-auto flex  justify-around md:justify-between items-center  ">

                 {/* Hamburger */}
                <div className="flex md:hidden text-2xl text-[#4F545A]">
                    <RxHamburgerMenu />
                </div>

                <div className="ml-10">
                    <img className="w-[90%] md:w-full " src={Logo} alt="Nav logo" />
                </div>

                <ul className="hidden md:flex justify-between items-center gap-7
                font-medium  text-base font-jakarta text-[#4F545A]" >
                    <li><a className="text-[#D91B7E]" href="">Home</a></li>
                    <li><a href=""></a>Technologies</li>
                    <li><a href=""></a>Projects</li>
                    <li><a href=""></a>About</li>
                    <li><a href=""></a>Contact</li>
                </ul>

               
                <div className="gap-2.5 md:gap-5 flex items-center">

                    <button className="bg-transparent text-center  border-none shadow-none font-bold md:font-medium text-sm md:text-base font-inter md:font-jakarta text-[#4F545A]">Sign In</button>

                    <button className=" font-semibold md:font-medium text-sm md:text-base 
                    text-center font-jakarta text-white rounded-full bg-[#D91B7E] hover:bg-pink-500 border-none py-1 md:py-2 px-2.5 md:px-5" >Sign Up</button>
                </div>


            </div>
            <div className="divider m-0 h-0"></div>
            
           
        </div>


        
    );
};

export default Navbar;
