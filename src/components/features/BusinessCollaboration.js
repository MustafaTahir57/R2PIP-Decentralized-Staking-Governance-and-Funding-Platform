import img from "../../assets/img/business-collaboration.png";

const BusinessCollaboration = () => {
    return (
        <div className="flex flex-col md:flex-row items-center justify-between w-full mt-16 gap-8 lg:gap-12">
            {/* Text section */}
            <div data-aos="fade-right" className="order-2 md:order-1 w-[100%]  lg:w-[50%] mx-auto px-2 flex-flex-col items-center justify-center lg:justify-start">
                <h6 className="text-[30px] md:text-[40px] lg:text-[50px] w-full font-extrabold text-red1 mb-2 md:mb-5">
                    Business Collaboration
                </h6>
                <p className="text-sm sm:text-base text-gray-300 py-3 md:py-6">
                    Businesses can participate in R2PIP by offering services, mentorship, and
                    job opportunities. In return, they gain exposure, customer loyalty, and access to a
                    network of skilled professionals.
                </p>

            </div>

            {/* Image section */}
            <div data-aos="fade-left" className="order-1 md:order-2 w-[100%]  lg:w-[50%] flex justify-center lg:justify-end">
                <img src={img} alt="hero" className="w-full max-w-[500px]" />
            </div>
        </div>
    );
};

export default BusinessCollaboration;

