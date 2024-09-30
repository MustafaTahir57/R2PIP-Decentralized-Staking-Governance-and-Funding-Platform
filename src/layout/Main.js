import { useEffect, useState } from "react";
import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";
import { IoIosArrowUp } from "react-icons/io";

const Main = (props) => {
  const [showArrow, setShowArrow] = useState(false); // Move useState to top level

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowArrow(true);
      } else {
        setShowArrow(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []); // Proper useEffect hook

  return (
    <div className="bg-black w-full text-white/90 min-h-[100vh]">
		 {showArrow && (
          <a href="#">
            <IoIosArrowUp
              size={35}
              type="button"
              className="p-1 cursor-pointer  z-20 rounded-xl hidden lg:inline-block fixed bottom-8 right-8 bg-red1 text-white "
            />
          </a>
        )}
      <div className="sm:px-2 md:px-8 lg:px-12">
        <Header />
      </div>

      <div className="pt-24 sm:px-2 md:px-8 ">
        {props.children}
      </div>

      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Main;
