import React from "react";
import { use } from 'react';
import type { TechsDataType } from "../../Types/DataType";
import AllTechCards from "./AllTechCards";


interface techDataProps{
  techDataPromise: Promise<TechsDataType[]>;
}

const AllTechnologiesData = ({techDataPromise}:techDataProps) => {

    const techData = use (techDataPromise) ;
   
    
  return (

      <div className="container px-3 md:px-0 mx-0 md:mx-auto pb-10 md:pb-20">

      {/* Heading part of cards */}
        <div>
              <h2 className="font-inter text-center md:text-left text-2xl md:text-4xl font-bold md:font-extrabold">
                Explore the
                <span className="bg-linear-to-r from-pink-500 to-violet-500 bg-clip-text text-transparent">
                  Technologies
                </span>
              </h2>
              <p className="font-inter md:font-jakarta md:text-base text-[#6B7280] text-xs mt-1 md:mt-2 text-center md:text-left ">
                Pick one technology per category to build your ideal stack.
              </p>
            </div>
            
            {/* All Cards Parent */}
            <div className="grid grid-cols-12 gap-8 items-center justify-center">

              {/* first card-child */}
              <div className="col-span-12 md:col-span-9">

                <AllTechCards   techData={techData}>
         
                </AllTechCards>

              </div>

              {/* 2nd card child */}
              <div>
                 {/* right side */}
              {/* <div className="col-span-12 md:col-span-3 mx-3 md:mx-0">

                <div className="rounded-2xl bg-white px-6 pt-8 pb-5 shadow border border-[#f1f5f9FF]">
                  <h4 className="font-jakarta text-base font-bold">
                    Your Stack
                  </h4>
                  <p className="text-[#94a3b8FF] text-xs md:text-sm mt-1">
                    No technologies selected yet.
                  </p>

                  <div className="border-dashed border border-[#E1E1E1] my-7  p-7 rounded-2xl">
                    <p className="text-[#94a3b8FF] text-xs md:text-sm text-center">
                      Your stack is empty.
                    </p>
                  </div>
                  <div>
                    <button className="btn text-[#d82c20FF] text-center w-full border border-[#ed8c85FF] rounded-lg bg-white hover:bg-red-200">
                      Remove All
                    </button>
                  </div>
                </div>
              </div> */}
              </div>

            </div>

           
      </div>
 
    
  );
};

export default AllTechnologiesData;
