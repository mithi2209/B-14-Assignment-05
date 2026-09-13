import { type Dispatch, type SetStateAction } from "react";
import type { TechsDataType } from "../../Types/DataType";
import SelectedCardCompo from "./SelectedCardCompo";
import { toast } from "react-toastify";

interface ISelectedStacks{
  selectedStacks : TechsDataType[] ;
  setSelectedStacks : Dispatch<SetStateAction<TechsDataType[]>>
}

const StackDataCard = ({
    selectedStacks , 
    setSelectedStacks}:ISelectedStacks) => {


      const handleRemoveAll = () =>{

        if(selectedStacks.length === 0){
          return ;
        }
        setSelectedStacks([]);
        toast("All technology card removed from stack .");
      }

    return (

        <div className="rounded-2xl bg-white px-6 pt-8 pb-5 shadow border border-[#f1f5f9FF]">

                  <h4 className="font-jakarta text-base font-bold">
                    Your Stack
                  </h4>
                  <p className="text-[#94a3b8FF] text-xs md:text-sm mt-1">

                       {selectedStacks.length === 0
                          ? "No Technologies Selected yet."
                           
                          : `${selectedStacks.length} Technology Selected`
                             
                               
                        }
                  </p>

          <SelectedCardCompo
             selectedStacks={selectedStacks}
             setSelectedStacks={setSelectedStacks}
            >
          </SelectedCardCompo>

          {
            selectedStacks.length > 0 && (
                <div>
                  <button 
                    onClick={handleRemoveAll}

                    className="btn text-[#d82c20FF] text-center w-full  border border-[#ed8c85FF] rounded-lg bg-white hover:bg-red-200">
                    Remove All
                  </button>
                </div>
            )
          }
          

        </div>
    );
};

export default StackDataCard;