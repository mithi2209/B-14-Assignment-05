
import FooterLogo from "../../assets/logo-text.png";

const footer = () => {
  return (
    <div className="bg-white ">

        <div className="divider m-0 h-0 "></div>

        <div className="container px-3 md:px-0 mx-0 md:mx-auto pb-8 md:pb-12">
            {/* child-1 */}
            <div className="flex items-center py-10 md:py-20 ">

                <div className="flex-1">
                    <div className="flex justify-center md:justify-start">
                        <img src={FooterLogo} alt="" />
                    </div>

                    <p className="font-inter md:font-jakarta text-center md:text-left text-sm md:text-base leading-5 text-[#64748B] mt-3 w-full md:w-[50%]">
                        Curated tools, technologies, and resources for developers building
                        modern software.
                    </p>

                    <ul className="font-inter md:font-jakarta text-center md:text-left text-sm md:text-base font-medium md:font-regular leading-4 text-[#475569] flex justify-center md:justify-start items-center gap-5 mt-3 md:mt-6 ">
                        
                        <li>
                            <a href="">GitHub
                                <span className=" md:hidden mx-2">•</span>
                            </a>
                            
                        </li>
                        <li>
                            <a href="">Twitter
                                <span className="md:hidden mx-2">•</span>
                            </a>
                        </li>
                        <li>
                            <a href="">LinkedIn</a>
                        </li>
                    </ul>

                </div>

                <div className="hidden flex-1 md:grid grid-cols-3 gap-20 items-start ">
                    <div>
                        <h4 className="text-[#0F172A] text-base font-bold font-jakarta mb-3">
                            PRODUCT
                        </h4>
                        <ul className="text-sm  text-[#64748B] font-jakarta space-y-3">
                            <li>
                                <a href="">Home</a>
                            </li>
                            <li>
                                <a href="">Technologies</a>
                            </li>
                            <li>
                                <a href="">Projects</a>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-[#0F172A] text-base font-bold font-jakarta mb-3">
                            COMPANY
                        </h4>
                        <ul className="text-sm text-[#64748B] font-jakarta space-y-3">
                            <li>
                                <a href="">About</a>
                            </li>
                            <li>
                                <a href="">Contact</a>
                            </li>
                            <li>
                                <a href="">Careers</a>
                            </li>
                        </ul>

                    </div>

                    <div>
                        <h4 className="text-[#0F172A] text-base font-bold font-jakarta mb-3">
                            LEGAL
                        </h4>
                        <ul className="text-sm text-[#64748B] font-jakarta space-y-3">
                            <li>
                                <a href="">Privacy Policy</a>
                            </li>
                            <li>
                                <a href="">Terms of Service</a>
                            </li>
                        </ul>
                    </div>

                </div>

            </div>

            {/* child-2 */}
            <div className="bg-white border border-[#f3f4f6FF] p-4 flex items-center justify-between">
                <div>
                    <p className="text-[#94A3B8] text-xs font-jakarta">© 2026 Dev Stack. All rights reserved.
                    </p>
                </div>
                <div className="flex items-center gap-3">
                    <p className="text-[#94A3B8] text-xs font-jakarta">Privacy</p>
                    <p className="text-[#94A3B8] text-xs font-jakarta">Terms</p>
                </div>
            </div>


        </div>




    
    </div>
  );
};

export default footer;
