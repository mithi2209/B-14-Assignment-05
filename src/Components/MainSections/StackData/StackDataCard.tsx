import React, { type Dispatch, type SetStateAction } from "react";
import type { TechsDataType } from "../../Types/DataType";
import { RxCross1 } from "react-icons/rx";

interface ISelectedStacks{
  techData: TechsDataType[];
  selectedStacks : TechsDataType[] ;
  setSelectedStacks : Dispatch<SetStateAction<TechsDataType[]>>
}

const StackDataCard = ({techData , selectedStacks , setSelectedStacks}:ISelectedStacks) => {

  console.log(selectedStacks ,"from stack compo")

    return (

        <div className="rounded-2xl bg-white px-6 pt-8 pb-5 shadow border border-[#f1f5f9FF]">

                  <h4 className="font-jakarta text-base font-bold">
                    Your Stack
                  </h4>
                  <p className="text-[#94a3b8FF] text-xs md:text-sm mt-1">
                    No technologies selected yet.
                  </p>


            {/* Selected Stacks Card map */}

            {
              selectedStacks.map((stack) => {
                return (

                  <div className="border-2 flex justify-between items-center border-[#f1f5f9FF] rounded-xl py-4 px-4 my-7">
                   
                    <div className="flex gap-2 items-center">
                       
                        <img className="w-[12%]" src={stack.icon} alt="" />
                        
                        <div>
                            <h6 className="text-base font-bold font-jakarta">{stack.name}</h6>
                            <p className="text-xs font-medium text-[#4B5563]">{stack.category}</p>
                        </div>

                      </div>

                      <div>
                          <span>
                              <RxCross1 className="text-2xl font-bold text-[#4B5563]" />
                          </span>
                      </div>
                  </div>
                )
              })
            }
          {/* .......... */}

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
    );
};

export default StackDataCard;