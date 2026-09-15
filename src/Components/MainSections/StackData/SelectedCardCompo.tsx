import { type Dispatch, type SetStateAction } from "react";
import type { TechsDataType } from "../../Types/DataType";
import { RxCross1 } from "react-icons/rx";
import { toast} from "react-toastify";


interface ISelectedStacks{
  selectedStacks : TechsDataType[] ;
  setSelectedStacks : Dispatch<SetStateAction<TechsDataType[]>>
}

const SelectedCardCompo = ({
    selectedStacks , 
    setSelectedStacks}:ISelectedStacks) => {

    const handleRemoveStackCard = (stack: TechsDataType) => {

        const remainingStackCard = selectedStacks.filter(selectedCard =>
        selectedCard.name !== stack.name) ;
       
        toast.warn(`${stack.name} removed from Stack.`);

        setSelectedStacks(remainingStackCard);
    };

    if(selectedStacks.length === 0){
        return (
            <div className="border-dashed border border-[#E1E1E1] my-7  p-7 rounded-2xl">
                <p className="text-[#94a3b8FF] text-sm md:text-base lg:text-base text-center">
                Your stack is empty.
                </p>
            </div>
        )
    }

    return (
        <div>
            {/* Selected Stacks Card map */}

            {
              selectedStacks.map((stack) => {
                return (

                  <div 

                    key={stack.name}

                    className="border-2 flex justify-between items-center border-[#f1f5f9FF] rounded-xl py-4 px-4 my-7">
                   
                    <div className="flex gap-3 items-center justify-start">
                       
                        <img className="w-6 md:w-7 lg:w-8" src={stack.icon} alt="" />
                        
                        <div>
                            <h6 className="text-base font-bold font-jakarta">{stack.name}</h6>
                            <p className="text-xs font-medium text-[#4B5563]">{stack.category}</p>
                        </div>

                      </div>

                      <div>
                          <span 
                            className="cursor-pointer text-2xl font-bold text-[#4B5563]" 
                            onClick={() => handleRemoveStackCard(stack)}>
                              <RxCross1/>
                          </span>
                      </div>
                  </div>
                )
              })
            }
            {/* .......... */}

        </div>
    );
};

export default SelectedCardCompo;