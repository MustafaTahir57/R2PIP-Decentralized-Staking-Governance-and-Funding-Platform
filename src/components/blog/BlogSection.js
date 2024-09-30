// BlogSection.js
import React from 'react';
import img from "../../assets/img/blogs.png";

const BlogSection = () => {
  return (
    <section className=" p-8 rounded-lg mb-8">
      <div className='flex flex-col md:flex-row gap-5 items-center justify-center'>

        <div className='flex flex-col gap-5 w-full md:w-[50%]'>
          <h6 className="text-[30px] md:text-[40px] lg:text-[50px] w-full  font-extrabold text-red1 mb-2 md:mb-5">
            Blog Section
          </h6>
          <p className="text-lg text-gray-300 mb-6">
            Stay informed with the latest updates, success stories, and insights from the R2PIP community.
          </p>
          <ul className="text-gray-300">
            <li>Regularly updated articles on topics such as personal development, blockchain technology, community impact, and business growth.</li>
            <li>Categories: Filter by topics such as Education, Mentorship, Community Impact, Blockchain, Business.</li>
          </ul>
        </div>


        <div className='w-full md:w-[40%]'>
          <img src={img} alt='image' className='' />
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
