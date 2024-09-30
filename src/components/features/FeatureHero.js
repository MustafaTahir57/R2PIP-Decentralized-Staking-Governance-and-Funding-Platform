import img from "../../assets/img/feature.png";

const FeatureHero = () => {
    return (
        <div className="flex flex-col md:flex-row items-center justify-between w-full mt-16 gap-8 lg:gap-12">
            {/* Text section */}
            <div data-aos="fade-right" className="order-2 md:order-1 w-[100%]  lg:w-[50%] mx-auto px-2 flex-flex-col items-center justify-center lg:justify-start">
            <h6 className="text-[30px] md:text-[40px] lg:text-[50px] w-full font-extrabold text-red1 mb-2 md:mb-5">
            Unlock Learning & Rewards with R2PIP
                </h6>
                <p className="text-sm sm:text-base text-gray-300 py-3  lg:text-start md:py-6">
                    R2PIP combines incentivized learning, blockchain rewards, community engagement, and business collaboration for a comprehensive educational and growth experience
                </p>

            </div>

            {/* Image section */}
            <div data-aos="fade-left" className="order-1 md:order-2 w-[100%]  lg:w-[50%] flex justify-center lg:justify-end">
                <img src={img} alt="hero" className="w-2/3 max-w-[500px]" />
            </div>
        </div>
    );
};

export default FeatureHero;
