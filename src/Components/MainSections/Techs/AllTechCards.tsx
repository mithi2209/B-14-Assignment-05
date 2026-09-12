import React from "react";
import { IoIosStar } from "react-icons/io";
import type { TechsDataType } from "../../Types/DataType";

const AllTechCards = ({ techData }) => {

  console.log(techData, "techs from available");

  return (

    // {/* left-side parent */}
    <div className="grid grid-cols-1 md:grid-cols-3 gap-5 items-center mt-8 md:mt-16 mx-3 md:mx-0">

      {techData.map((techs:TechsDataType) => {

        return (

        <div >
                
            {/* left-side-Cads */}
            <div className="space-y-5 shadow border border-[#f1f5f9FF] rounded-2xl p-7 ">

                <div className="flex justify-between items-center">

                      <img className="w-[10%]" src={techs.icon} alt="" />

                      <button className="bg-[#F0F9FF] text-[#0EA5E9] rounded-full px-2 py-1.5 text-center font-jakarta font-semibold text-xs md:text-sm  ">
                        {techs.badge}
                      </button>
                </div>

                <h4 className="font-jakarta text-lg font-bold">{techs.name}</h4>

                <p className="text-[#64748B] text-sm   ">
                      {techs.description}
                </p>

                <div className="font-jakarta flex items-center justify-between ">
                      <button className="rounded bg-[#F1F5F9] text-[#475569]  text-sm px-2 py-1.5 font-medium">
                        {techs.category}
                      </button>
                      <p className="text-[#64748B] text-sm font-medium ">
                        {techs.difficulty}
                      </p>
                      <div>
                        <p className="text-[#334155] text-sm font-semibold flex items-center">
                          <span className="text-yellow-400 mr-2">
                            <IoIosStar />
                          </span>
                          {techs.rating}
                        </p>
                      </div>
                </div>

                <div>
                      <button className="btn w-full text-white bg-[#0A0F1D] rounded-md text-xs font-medium text-center hover:bg-gray-700 mt-4 ">
                        Add to Stack
                      </button>
                </div>

            </div>
        </div>
          
        );

        })}

    </div>
  );
};

export default AllTechCards;
