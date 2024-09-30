// @flow strict
import { BiLogoLinkedin } from "react-icons/bi";
import { CiLocationOn } from "react-icons/ci";
import { FaFacebook, FaStackOverflow } from 'react-icons/fa';
import { IoLogoGithub, IoMdCall } from "react-icons/io";
import { MdMarkEmailRead } from "react-icons/md";
import { TbMailForward } from 'react-icons/tb';
import { Link } from "react-router-dom/cjs/react-router-dom.min";

function ContactUs() {
    return (
        <div className="my-12 lg:my-16 relative mt-24 text-white">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center mt-12">
                <div className="lg:w-3/4 ">
                    <div className="flex flex-col gap-5 lg:gap-9">
                        <p className="text-sm  flex items-center gap-3">
                            <MdMarkEmailRead
                                className="bg-[#8b98a5] p-2 rounded-full hover:bg-pink1 hover:scale-110 transition-all duration-300 text-gray-800 cursor-pointer"
                                size={36}
                            />
                            <span>support@r2pip.com</span>
                        </p>
                        <p className="text-sm  flex items-center gap-3">
                            <IoMdCall
                                className="bg-[#8b98a5] p-2 rounded-full hover:bg-pink1 hover:scale-110 transition-all duration-300 text-gray-800 cursor-pointer"
                                size={36}
                            />
                            <span>
                                +1 (800) 123-4567
                            </span>
                        </p>
                        <p className="text-sm flex items-center gap-3">
                            <CiLocationOn
                                className="bg-[#8b98a5] p-2 rounded-full hover:bg-pink1 hover:scale-110 transition-all duration-300 text-gray-800 cursor-pointer"
                                size={36}
                            />
                            <span>
                            [Address of the main office] 
                            </span>
                        </p>
                    </div>
                    <div className="mt-8 lg:mt-16 flex items-center gap-5 lg:gap-10">
                        <p>FOLLOW US</p>
                        <div>

                        </div>
                        <Link target="_blank" >
                            <IoLogoGithub
                                className="bg-[#8b98a5] p-1 rounded-full hover:bg-pink1 hover:scale-110 transition-all duration-300 text-gray-800 cursor-pointer"
                                size={35}
                            />
                        </Link>
                        <Link target="_blank" >
                            <BiLogoLinkedin
                                className="bg-[#8b98a5] p-1 rounded-full hover:bg-pink1 hover:scale-110 transition-all duration-300 text-gray-800 cursor-pointer"
                                size={35}
                            />
                        </Link>
                        <Link target="_blank" >
                            <FaFacebook
                                className="bg-[#8b98a5] p-1 rounded-full hover:bg-pink1 hover:scale-110 transition-all duration-300 text-gray-800 cursor-pointer"
                                size={35}
                            />
                        </Link>
                    </div>
                </div>
                <div>
                <h6 className="text-[30px] md:text-[50px] w-full md:w-[550px] font-extrabold text-red1 mb-2 md:mb-5">
                        Contact with me
                    </h6>
                    <div className="max-w-3xl text-white rounded-lg border border-[#464c6a] p-3 lg:p-5">
                        <p className="text-sm text-[#d3d8e8]">
                            {`Have questions or need support? Reach out to us, and we'll get back to you as soon as possible`}
                        </p>
                        <div className="mt-6 flex flex-col gap-4">
                            <div className="flex flex-col gap-2">
                                <label className="text-base">Name: </label>
                                <input
                                    className="bg-black w-full border rounded-md border-[#353a52] focus:border-purple1 ring-0 outline-0 transition-all duration-300 px-3 py-2"
                                    type="text"
                                    maxLength="100"
                                    required
                                />
                            </div>

                            <div className="flex flex-col gap-2">
                                <label className="text-base">Email: </label>
                                <input
                                    className="bg-black w-full border rounded-md border-[#353a52] focus:border-purple1 ring-0 outline-0 transition-all duration-300 px-3 py-2"
                                    type="email"
                                    maxLength="100"
                                    required
                                />
                            </div>

                            <div className="flex flex-col gap-2">
                                <label className="text-base">Subject: </label>
                                <input
                                    className="bg-black w-full border rounded-md border-[#353a52] focus:border-purple1 ring-0 outline-0 transition-all duration-300 px-3 py-2"
                                    type="text"
                                    maxLength="100"
                                    required
                                />
                            </div>

                            <div className="flex flex-col gap-2">
                                <label className="text-base">Your Message: </label>
                                <textarea
                                    className="bg-black w-full border rounded-md border-[#353a52] focus:border-purple1 ring-0 outline-0 transition-all duration-300 px-3 py-2"
                                    maxLength="500"
                                    name="message"
                                    required
                                    rows="4"
                                />
                            </div>
                            <div className="flex flex-col items-center gap-2">
                                <button
                                    className="flex w-full items-center gap-x-4 hover:gap-x-6 bg-gradient-to-r from-purple1 to-pink1 px-3 md:px-8 py-3 md:py-4 text-center text-xs md:text-sm font-medium uppercase tracking-wider text-white no-underline transition-all duration-200 ease-out hover:text-white hover:no-underline md:font-semibold justify-center rounded-lg"
                                    role="button"
                                >
                                    <span>Send Message</span>
                                    <TbMailForward className="mt-1" size={18} />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>


            </div>
        </div>
    );
};

export default ContactUs;