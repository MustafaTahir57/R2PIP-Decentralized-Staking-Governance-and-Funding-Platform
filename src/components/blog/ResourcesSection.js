// ResourcesSection.js
import React from 'react';
import img from "../../assets/img/Resources.png";

const ResourcesSection = () => {
    return (
        <section className=" p-8 ">
            <div className='flex flex-col md:flex-row gap-5 items-center justify-center'>


                <div className='w-full md:w-[40%] order-1 md:order-2'>
                    <img src={img} alt='image' className='' />
                </div>

                <div className='flex flex-col gap-5 w-full md:w-[50%] order-2 md:order-1'>
                    <h6 className="text-[30px] md:text-[40px] lg:text-[50px] w-full  font-extrabold text-red1 mb-2 md:mb-5">
                        Resources Section
                    </h6>
                    <p className="text-lg text-gray-300 mb-6">
                        <span>Guides and Tutorials</span> Explore our comprehensive guides and tutorials on using the R2PIP platform, understanding blockchain technology, and maximizing your rewards.                    </p>
                    <div className="text-gray-300">
                        <p className='text-lg text-gray-300'>   <span className='font-semibold text-xl text-red1'>FAQs:</span> A detailed FAQ section answering common questions about enrollment, rewards, and participation. </p>
                        <p className='text-lg text-gray-300'>  <span className='font-semibold text-xl text-red1'>Contact Support:</span> Need help? Contact our support team for assistance with any issues or inquiries.</p>
                        
                    </div>
                </div>


            </div>
        </section>
    );
};

export default ResourcesSection;
