import React, { useEffect, useRef, useState } from "react";
import { IoIosArrowDown } from "react-icons/io";

const FAQs = () => {
  const faqsData = [
    {
      id: 1,
      no: "01",
      question: "What is the Rise2Prosperity Incentive Program (R2PIP)?",
      answer:
        "R2PIP is a community-driven loyalty program that rewards customers with R2P tokens for supporting local businesses and participating in community initiatives. These tokens can be earned through purchases, engagement, and referrals, and can be redeemed for discounts, special offers, or donated to community causes.",
    },
    {
      id: 2,
      no: "02",
      question: "Where can I use my R2P tokens?",
      answer: (
        <>
          You can earn R2P tokens in several ways:
          <ul className="list-disc ml-5 mt-2">
            <li> Purchasing products or services from participating businesses.</li>
            <li> Referring friends and family to join the program or shop at participating stores.</li>
            <li>Engaging in community initiatives or events supported by R2PIP.</li>
          </ul>
        </>
      ),
    },
    {
      id: 3,
      no: "03",
      question: " Where can I use my R2P tokens?",
      answer:
        "R2P tokens can be redeemed at any business that is a part of the R2PIP network. You can use them for discounts, exclusive offers, or special services. A list of participating businesses is available on our website, and the number of businesses is growing!",
    },

    {
      id: 4,
      no: "04",
      question: "How can I sign up for the R2PIP program?",
      answer:
        " Signing up is simple! Just visit our website, create an account, and you’re all set to start earning R2P tokens. Once you have an account, you can track your tokens, redeem rewards, and participate in community activities.",
    },
    {
      id: 5,
      no: "05",
      question: "Can I transfer my R2P tokens to someone else?",
      answer:
        "Yes! R2P tokens can be transferred to other users within the R2PIP network. You can send tokens to family and friends as gifts or transfer them for shared purchases or community donations.",
    },
    {
      id: 6,
      no: "06",
      question: "What can I do with my R2P tokens besides redeeming them for discounts?",
      answer:
        " In addition to redeeming tokens for discounts or special offers, you can donate your tokens to support local community initiatives and charitable causes that are partnered with R2PIP. This way, you can contribute to your community in meaningful ways.",
    },
    {
      id: 7,
      no: "07",
      question: "Are there limits on how many R2P tokens I can earn?",
      answer:
        "There are no strict limits on how many R2P tokens you can earn. However, individual businesses may set specific promotional or earning caps based on their loyalty programs. Check with each business for details on their specific rewards structure.",
    },
    {
      id: 8,
      no: "08",
      question: "How can I find businesses that accept R2P tokens?",
      answer:
        " Our website features a regularly updated list of all participating businesses. You can also use the R2PIP mobile app to search for businesses near you that accept R2P tokens.",
    },
    {
      id: 9,
      no: "09",
      question: "Are R2P tokens subject to expiration?",
      answer:
        "R2P tokens do not expire, so you can save them for larger rewards or donate them at any time. However, businesses may offer limited-time promotions where tokens can only be used within a certain period—be sure to check each offer’s details.",
    },
    {
      id: 10,
      no: "10",
      question: "What happens if I stop using the program? Will I lose my tokens?",
      answer:
        "You won’t lose your tokens even if you stop using the program for a while. Your balance will remain intact, and you can pick up where you left off whenever you’re ready to rejoin and start earning again.",
    },
  ];
  const [openIndex, setOpenIndex] = useState(null);
  const faqRef = useRef(null);
  const handleOpen = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (faqRef.current && !faqRef.current.contains(event.target)) {
        setOpenIndex(null);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <section
      id="faq"
      className="flex flex-col items-center justify-center w-full py-16  gap-y-2"
    >
      <h6 className="text-[30px] text-red1 text-center md:text-[40px] lg:text-[50px] font-bold">
        Frequently Asked Questions
      </h6>

      <div
        className="flex flex-col gap-y-5 md:gap-y-0 md:flex-row items-center justify-center md:items-start md:justify-evenly xl:justify-center xl:gap-x-10 w-[100%] xl:w-[85%] mt-5"
        ref={faqRef}
      >
        <div className="flex flex-col items-center justify-center w-[95%] md:w-[350px] lg:w-[490px] xl:w-[500px] gap-y-5">
          {faqsData.slice(0, 5).map((faq) => (
            <div
              key={faq.id}
              className={`${openIndex === faq.id
                  ? "min-h-[120px] bg-red1 text-white"
                  : "max-h-[97px]  "
                } flex flex-col w-full justify-start rounded-md transition-all duration-500  p-3  overflow-hidden shadow-lg `}
            >
              <div
                onClick={() => handleOpen(faq.id)}
                className="flex relative bottom-1 items-center justify-between font-semibold cursor-pointer"
              >
                <div className="text-16px lg:text-[18px] flex items-center gap-x-4 w-full">
                  <h6 className="text-[48px] lg:text-[57px] text-white  border-white border-r-[1px] px-2">{faq.no}</h6>
                  <h6
                    className={`text-base text-white font-bold px-[10px] py-[5px] max-w-[76%] `}
                  >
                    {faq.question}
                  </h6>
                </div>
                <IoIosArrowDown
                  size={25}
                  className={`${openIndex === faq.id ? " -rotate-180" : " rotate-0"
                    } transition-all duration-500 text-white`}
                />
              </div>
              <div className="flex flex-col mt-4 text-sm gap-y-5 lg:text-base">
                <p>{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>

        {/*Right FAQs*/}
        <div className="flex flex-col items-center justify-center w-[95%] md:w-[350px] lg:w-[490px] xl:w-[500px] gap-y-5">
          {faqsData.slice(5, 10).map((faq) => (
            <div
              key={faq.id}
              className={`${openIndex === faq.id
                  ? "min-h-[120px] bg-red1 text-white "
                  : "max-h-[97px]  "
                }  flex flex-col w-full rounded-md transition-all ease-in-out duration-500  p-3  overflow-hidden shadow-lg justify-start `}
            >
              <div
                onClick={() => handleOpen(faq.id)}
                className="flex relative bottom-1 items-center justify-between font-semibold cursor-pointer"
              >
                <div className="text-16px lg:text-[18px] flex items-center gap-x-4 w-full">
                  <h6 className="text-[48px] text-white lg:text-[57px] border-white border-r-[1px] px-2">{faq.no}</h6>
                  <h6
                    className={` text-white text-base font-bold  px-[10px] py-[5px] max-w-[76%]`}
                  >
                    {faq.question}
                  </h6>
                </div>
                <IoIosArrowDown
                  size={25}
                  className={`${openIndex === faq.id ? " -rotate-180" : " rotate-0"
                    } transition-all duration-500 text-white`}
                />
              </div>
              <div className="flex flex-col mt-4 text-sm gap-y-5 lg:text-base">
                <p>{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQs;
