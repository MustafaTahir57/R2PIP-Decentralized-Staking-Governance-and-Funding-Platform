import img from "../../assets/img/book.png";

const IncentivizedLearning = () => {
    return (
        <div className="flex flex-col md:flex-row items-center justify-between w-full mt-16 gap-8 lg:gap-12">
            {/* Image section */}
            <div data-aos="fade-left" className=" flex justify-center md:justify-start">
                <img src={img} alt="hero" className=" h-auto max-w-[500px]" />
            </div>
            {/* Text section */}
            <div data-aos="fade-right" className="w-[100%] px-2 gap-y-3">
                <h6 className="text-[30px] md:text-[40px] lg:text-[50px] w-full  font-extrabold text-red1 mb-2 md:mb-5">
                    Incentivized Learning
                </h6>
                <p className="full lg:w-[700px] text-sm sm:text-base text-gray-300 py-3 md:py-6">
                    R2PIP offers a wide range of educational resources, including online
                    courses, workshops, and certifications. Each learning module is designed to enhance your
                    skills and knowledge, leading to better career opportunities. Earn rewards as you
                    complete each module             
                </p>

            </div>


        </div>
    );
};

export default IncentivizedLearning;
