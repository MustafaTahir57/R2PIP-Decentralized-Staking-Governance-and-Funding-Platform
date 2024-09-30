import React, { useEffect } from "react";
import { useLocation } from "react-router-dom/cjs/react-router-dom.min";
import { FaFilePdf } from "react-icons/fa6";
import { MdDownload } from "react-icons/md";
const WhitePaper = () => {
    const { pathname } = useLocation();
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);


    return (
        <section id="whitepaper" className="flex items-center justify-center w-full pb-20 overflow-hidden pt-44 text-white/70 homeFontNormal">
            <div className="flex items-center justify-center w-full">
                <div
                    className="flex flex-column items-center justify-center w-[100%] sm:[60%] md:w-[55%] lg:w-[50%]  xl:w-[45%]  gap-y-6"
                    data-aos="fade-up"
                    data-aos-offset="100"
                    data-aos-delay="100"
                >
                    <FaFilePdf size={50} />
                    <h1 className='text-[30px] md:text-[40px] lg:text-[50px] font-bold py-4 text-center text-red1 '>
                        Download Our Free{" "}
                        <span className=" text-center text-white underline">Lite Paper</span>{" "}
                    </h1>
                    <a href="/R2PIP-Lite Paper.pdf" download className="no-underline hover:no-underline">
                        <button
                            className=" px-4  md:px-2 mt-3 text-[18px]  border-[1px] border-[white]/30 hover:bg-red1 rounded-lg py-2  md:py-[13px]  transition-all duration-300 text-white font-semibold   flex gap-x-3 items-center"
                        >
                            <MdDownload size={20} /> Lite Paper
                        </button>{" "}
                    </a>
                </div>
            </div>
        </section>
    );
};

export default WhitePaper;
