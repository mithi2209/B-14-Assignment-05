
import { Suspense, useState} from 'react';
import Footer from './Components/Footer/footer';
import Banner from './Components/Header/Banner';
import Navbar from './Components/Header/Navbar';
import type { TechsDataType } from './Components/Types/DataType';
import AllTechnologiesData from './Components/MainSections/Techs/AllTechnologiesData';


   
  const techDataFetch = async ():Promise<TechsDataType[]> => {
    const res = await fetch('/data.json');
    const data = await res.json();
    return data ;
  }

  
function App() {
  const techDataPromise = techDataFetch();
  const [selectedStacks, setSelectedStacks] = useState<TechsDataType[]>([]);

   
  return (
    <>
      
      <Navbar></Navbar>
      <Banner></Banner>  

      <Suspense 
          fallback={ <span className="w-16 md:w-20 lg:w-28 mx-auto my-16 md:my-20 lg:my-28 flex justify-center items-center  loading loading-infinity loading-base md:loading-lg lg:loading-xl"></span> }>

          <AllTechnologiesData

            techDataPromise ={techDataPromise}
            selectedStacks={selectedStacks}
            setSelectedStacks={setSelectedStacks}
          >
          </AllTechnologiesData>
      </Suspense>
       
      <Footer></Footer>

    </>
  )
}

export default App
