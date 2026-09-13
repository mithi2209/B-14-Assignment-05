import { IoIosStar } from "react-icons/io";
import { MdDone } from "react-icons/md";
import { Bounce, toast } from "react-toastify";
import type { Dispatch, SetStateAction } from "react";
import type { TechsDataType } from "../../Types/DataType";

interface techDataProps {
  techData: TechsDataType[];
  selectedStacks: TechsDataType[];
  setSelectedStacks: Dispatch<SetStateAction<TechsDataType[]>>;
}

const AllTechCards = ({
  techData,
  selectedStacks,
  setSelectedStacks,}: techDataProps) => {

  const handleAddedStack = (techData: TechsDataType) => {

    const selectedCategory  = selectedStacks.find((stack) => stack.name === techData.name);

        if(selectedCategory){

            toast.error(`You already selected ${techData.name} technology`,         {
                    position: "top-center",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: false,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                    transition: Bounce,
           });

          
            return;
        }
   
    // Selected Stacks logic for Stack Compo
    setSelectedStacks([...selectedStacks, techData]);
    toast.success(` ${techData.name} added to Stack successfully.`);

  };

  return (
    // {/* left-side parent */}

    <div className="grid grid-cols-1 md:grid-cols-3 gap-5 items-center mt-8 md:mt-16 mx-3 md:mx-0">

      {techData.map((techs: TechsDataType) => {

        const isAdded = selectedStacks.find(
          (stack) => stack.name === techs.name,
        );

        return (
          <div key={techs.name}>
            {/* left-side-Cads */}
            <div className="space-y-5 shadow border border-[#f1f5f9FF] rounded-2xl p-7 ">
              <div className="flex justify-between items-center">
                <img className="w-[10%]" src={techs.icon} alt="" />

                <button className="bg-[#F0F9FF] text-[#0EA5E9] rounded-full px-2 py-1.5 text-center font-jakarta font-semibold text-xs md:text-sm">
                  {techs.badge}
                </button>
              </div>

              <h4 className="font-jakarta text-lg font-bold">{techs.name}</h4>

              <p className="text-[#64748B] text-sm   ">{techs.description}</p>

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
                <button
                  onClick={() => handleAddedStack(techs)}
                  className={`btn w-full rounded-md text-sm font-medium text-center mt-4 cursor-pointer
                            ${
                              isAdded
                                ? "bg-pink-50 text-pink-700 border-pink-700 "
                                : "bg-[#0A0F1D] text-white border-transparent"
                            }

                        `}
                        >
                  {isAdded ? (
                    <span className="flex items-center justify-center gap-1 ">
                      <MdDone className="text-xl" />
                      Added to Stack
                    </span>
                  ) : (
                    "Add to Stack"
                  )}

                  {/*Selected stack logic  */}
                </button>
              </div>
            </div>

          </div>
        );
      })}
      ;
    </div>
  );
};

export default AllTechCards;
