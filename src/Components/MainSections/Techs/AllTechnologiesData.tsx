
import { use, type Dispatch, type SetStateAction } from 'react';
import type { TechsDataType } from "../../Types/DataType";
import AllTechCards from "./AllTechCards";
import StackDataCard from "../StackData/StackDataCard";


interface techDataProps{
  techDataPromise: Promise<TechsDataType[]>;
  selectedStacks : TechsDataType[] ;
  setSelectedStacks : Dispatch<SetStateAction<TechsDataType[]>> ;
}

const AllTechnologiesData = (
    { techDataPromise ,
      selectedStacks ,
      setSelectedStacks} :techDataProps) => {

    const techData = use(techDataPromise) ;

    
  return (

      <div className="container px-3 md:px-6 lg:px-0 mx-0 md:mx-auto pb-10 md:pb-20 ">

      {/* Heading part of cards */}
        <div>
              <h2 className="font-inter text-center md:text-center lg:text-left text-2xl md:text-4xl lg:text-5xl font-bold md:font-bold lg:font-extrabold tracking-wide">
                Explore the <span className="bg-brand-gradient bg-clip-text text-transparent">
                  Technologies
                </span>
              </h2>
              <p className="font-inter md:font-jakarta md:text-base text-[#6B7280] text-xs mt-3 md:mt-4 lg:mt-6 text-center md:text-center lg:text-left ">
                Pick one technology per category to build your ideal stack.
              </p>
            </div>
            
            {/* All Cards Parent */}
            <div className="grid grid-cols-12 gap-5 md:gap-6 lg:gap-8 justify-center ">

              {/* first card-child */}
              <div className="col-span-12 md:col-span-12 lg:col-span-9 ">
                <AllTechCards 
                 
                  techData={techData}
                  selectedStacks={selectedStacks}
                  setSelectedStacks={setSelectedStacks}
                >
                </AllTechCards>
              </div>

              {/* 2nd card child */}
              <div  className="col-span-12 md:col-span-12 lg:col-span-3 mx-3 md:mx-0 mt-6 md:mt-10 lg:mt-16">
                  <StackDataCard
                    selectedStacks={selectedStacks}
                    setSelectedStacks={setSelectedStacks}
                  >
                  </StackDataCard>
              </div>

            </div>

           
      </div>
 
    
  )
};

export default AllTechnologiesData;
