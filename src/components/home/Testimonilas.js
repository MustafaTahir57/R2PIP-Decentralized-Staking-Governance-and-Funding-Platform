import React from "react";
import { Container } from "reactstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Mousewheel, Keyboard, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/mousewheel";
import { useInView } from 'react-intersection-observer';
import client1 from "../../assets/img/testimonial1.jpg";
import client2 from "../../assets/img/testimonial2.jpg";
import coworker from "../../assets/img/testimonial3.jpg";

export default function Testimonials() {
    const [ref, inView] = useInView({
        triggerOnce: true,
    });

    const testimonialsData = [
        {
            id: 1,
            imgSrc: client1,
            text: "It is good to see the community coming together again. Thanks So Much! I Am On The Rise!.",
            clientName: "Toni",
            role: "Client",
        },
        {
            id: 2,
            imgSrc: client2,
            text: "It is good to see the community coming together again. Thanks So Much! I Am On The Rise!.",
            clientName: "Ava",
            role: "Client",
        },
        {
            id: 3,
            imgSrc: coworker,
            text: "It is good to see the community coming together again. Thanks So Much! I Am On The Rise!.",
            clientName: "Emiliana Di Muccio",
            role: "Coworker",
        },

    ];

    return (
        <div className=' text-white rounded-t-3xl bottom-5 relative py-20  px-3 flex items-center justify-center flex-col w-full mt-12'>
            <h6 className='text-[26px] text-red1 pb-5 sm:text-[32px] md:text-[40px] font-bold'>TESTIMONIALS</h6>
            <div className='section-line'></div>
            <p className='text-[16px] md:text-[20px] w-[97%] sm:w-[90%] md:w-[65%] lg:w-[55%] xl:w-[47%] text-center text-white'>
                What Participants Are Saying
            </p>
            <Container fluid className="client w-full h-[324px] md:h-[420px] lg:h-[500px] xl:h-[570px] flex justify-center items-center ">

                <Swiper
                    cssMode={true}
                    navigation
                    loop
                    autoplay={{ delay: 10000, disableOnInteraction: false }}
                    modules={[Navigation, Pagination, Mousewheel, Keyboard, Autoplay]}
                    pagination={true}
                    mousewheel={true}
                    keyboard={true}
                    className="client-Swiper"
                >
                    {testimonialsData.map((testimonial) => (
                        <SwiperSlide key={testimonial.id} className="swiperSlide">
                            <div className="flex items-center justify-center py-3 lg:mt-5 lg:py-5">
                                <img
                                    src={testimonial.imgSrc}
                                    alt=" "
                                    className="img-fluid rounded-full  h-[120px] w-[120px]"
                                />
                            </div>
                            <div className="px-10 mb-3 bg-red-500 py-5 relative top-6 rounded-lg flex items-center justify-center md:mb-5">
                                <div>
                                    <p className="text-sm italic text-white">
                                        “{testimonial.text}”
                                    </p>
                                    <h5 className="text-lg">{testimonial.role}</h5>
                                    <h6 className="text-lg text-site-text">{testimonial.clientName}</h6>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </Container>


        </div>
    );
}
