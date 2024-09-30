import img from "../../assets/img/community.png";

const CommunityService = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 items-center justify-between w-full mt-16 gap-8 lg:gap-12">
            {/* Image section */}
            <div data-aos="fade-left" className=" flex justify-center md:justify-start">
                <img src={img} alt="hero" className="w-full max-w-[500px]" />
            </div>
            {/* Text section */}
            <div data-aos="fade-right" className="w-[100%] px-2 ">
            <h6 className="text-[30px] md:text-[40px] lg:text-[50px] w-full  font-extrabold text-red1 mb-2 md:mb-5">
            Community Engagement
                </h6>
                <p className="full lg:w-[700px] text-sm sm:text-base text-gray-300 py-3 md:py-6">
                    R2PIP encourages active participation in community service projects,
                    mentorship programs, and local collaborations. Contribute to the betterment of your
                    community and earn rewards for your commitment.
                </p>

            </div>


        </div>
    );
};

export default CommunityService;
