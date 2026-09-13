
import BannerImg from "../../assets/banner-stack.png";

const Banner = () => {

  return (

    <div className="">

      <div className="container px-2 md:px-0 mx-0 md:mx-auto flex flex-col md:flex-col lg:flex-row justify-between items-center pt-14 md:pt-16 lg:pt-20 pb-0 md:pb-0 lg:pb-20">

        {/* Banner Left Part */}

        <div>

          <h1 className="text-center md:text-center lg:text-left font-inter   font-bold md:font-bold lg:font-extrabold text-3xl md:text-5xl lg:text-[53px] leading-normal md:leading-normal lg:leading-18 tracking-wide ">
            Build Your Ideal <br />
            <span className="bg-brand-gradient bg-clip-text text-transparent ">Development Stack</span>
          </h1>
 
          <p className="font-jakarta text-center md:text-center lg:text-left text-sm md:text-base lg:text-lg text-[#475569FF] leading-7 mt-3 md:mt-4 lg:mt-6 w-full md:w-[75%] lg:w-[54%] mx-auto lg:mx-0">
            Explore frontend, backend, database, and tooling options, compare
            them side by side, and put together the stack that fits your next
            project.
          </p>

          <div className="flex gap-3 md:gap-5 justify-center lg:justify-start items-center mt-6 md:mt-10">

            <button className="font-inter cursor-pointer rounded-lg p-3 text-white text-sm md:text-base font-regular md:font-medium bg-brand-gradient hover:bg-brand-reverse-gradient">Explore Technologies</button>

            <button className="font-inter text-center cursor-pointer rounded-lg py-3 px-12 text-[#374151] text-sm md:text-base font-regular md:font-medium border border-[#e5e7ebFF] hover:bg-brand-gradient hover:text-white ">Learn More</button>
          </div>

        </div>

        {/* Banner Img */}

        <div>
          <img src={BannerImg} alt="Banner Image" />
        </div>
      </div>
    </div>
  );
};

export default Banner;
