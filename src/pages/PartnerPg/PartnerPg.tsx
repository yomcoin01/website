import { useEffect } from "react";
import { Footer, Navbar, SubFooter } from "../components";
import {
  herobgright,
  heroPartOne,
  heroPartTwo,
  herotopbg,
  whyPartImg,
} from "../../assets";
import { FaAngleRight } from "react-icons/fa6";
import { whyPartData } from "../../data/data";

const PartnerPg = () => {

  useEffect(() => {
    document.title = "Yomcoin | Partnership";
  }, []);

  return (
        <div>
          <Navbar />
          <div className="container pt-16">
            <img
              src={herotopbg}
              alt=""
              className=" md:w-60 w-24 md:h-60 h-24 absolute top-10 inset-x-1/2  opacity-50 "
            />
            {/* <img src={herobgleft} alt="" className=" md:w-48 w-16 md:h-48 h-16 absolute top-60 left-10 opacity-70 " /> */}
            <img
              src={herobgright}
              alt=""
              className=" md:w-48 w-16 md:h-48 h-16 absolute top-60 right-10 opacity-70 "
            />
            {/* <div className="w-full md:w-1/2 mx-auto">
                <img src={underConstruction} alt="" className="w-full"/>
            </div>
            <p className="text-2xl md:text-5xl text-center">Under <span className="text-primary">Construction</span></p> */}
            <div>
              <h3 className="md:text-4xl text-2xl font-[700] " data-aos="fade-up">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#630460] to-[#AB79FF]">
                  Partnership
                </span>
              </h3>
              <div className="">
                <p className="md:text-xl text-lg" data-aos="fade-up">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#630460] to-[#AB79FF] flex flex-row gap-4 items-center pt-2">
                    Home <FaAngleRight fill="#fff" />
                    Partnerships
                  </span>
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 justify-center items-center md:gap-4 gap-0 md:pt-12 pt-4 pb-24">
                <div>
                  <p className="font-[600] text-xl" data-aos="fade-up">
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#630460] to-[#AB79FF]">
                      Partnership & Collaboration
                    </span>
                  </p>
                  <h3 className="text-start md:text-[48px] text-[30px] font-[700] py-8 md:leading-[50px] leading-8" data-aos="fade-up">
                    Partner with Yomcoin to Innovate
                  </h3>
                  <p className="text-txtCol font-[600]" data-aos="fade-up">
                    Yomcoin is open to partnerships and collaborations with
                    businesses to expand the Yomcoin ecosystem and provide
                    greater value to our users. We believe that working together
                    can help us achieve our goals more effectively. Whether
                    you're a startup looking to integrate our technology or an
                    established business seeking innovative payment solutions,
                    we want to hear from you.
                  </p>
                </div>
                <div>
                  <div className="relative">
                    <div>
                      <img
                        src={heroPartOne}
                        alt=""
                        className="md:absolute static md:z-20 z-0 w-[400px] h-[400px] object-contain"
                        style={{ top: "-220px", left: "0px" }}
                        data-aos="zoom-in"
                      />
                      <img
                        src={heroPartTwo}
                        alt=""
                        className="absolute md:block hidden right-0 w-[250px] h-[250px] object-contain"
                        data-aos="zoom-in"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-whysbrgt bg-right-top bg-contain bg-no-repeat">
            <div className="container">
              <div className="grid grid-cols-1 md:grid-cols-2 justify-center items-center gap-4 ">
                <div>
                  <img src={whyPartImg} alt="" data-aos="zoom-in" className="object-contain"/>
                </div>
                <div>
                  <p className="font-[600] text-xl" data-aos="fade-up">
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#630460] to-[#AB79FF]">
                      Why Choose Us
                    </span>
                  </p>
                  <h3 className="text-start md:text-[48px] text-[30px] font-[700] md:py-8 py-2 md:leading-[50px] leading-8" data-aos="fade-up">
                    Why Partner with Yomcoin?
                  </h3>
                  <p className="text-txtCol text-sm font-[600]" data-aos="fade-up">
                    Collaborate with us to drive mutual growth and success. Our
                    partnership approach is centered on innovation and shared
                    goals, ensuring that both parties benefit from the
                    collaboration.
                  </p>
                  <div className="grid grid-cols-2 justify-start items-start gap-4 pt-6">
                    {whyPartData.map((item) => (
                      <div
                        className="flex md:flex-row flex-col items-start  gap-4 justify-start "
                        key={item.id}
                        data-aos="fade-up"
                      >
                        <div className="w-24 pt-4 h-12">
                          <img src={item.img} alt="" className="" />
                        </div>
                        <div>
                          <h3 className="text-xl pb-2 text-txtHead font-[700]">
                            {item.title}
                          </h3>
                          <p className="text-txtCol text-xs font-[600]">
                            {item.text}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-whysblft bg-left-bottom bg-contain bg-no-repeat">
            <div className="container">
              <div className="md:py-12 py-4 container">
                <p className="font-[600] text-xl text-center" data-aos="fade-up">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#630460] to-[#AB79FF]">
                    Partner
                  </span>
                </p>
                <div className="w-full md:w-1/2 mx-auto">
                  <h3 className="text-center md:text-[48px] text-[30px] font-[700] md:py-8 py-2 md:leading-[50px] leading-8" data-aos="fade-up">
                    Types of Partnerships We Seek
                  </h3>
                </div>
              </div>
              {/* Types of Partner */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 justify-center items-start gap-8 md:py-16 py-4 px-4">
                <div className="flex flex-col gap-3" data-aos="fade-up">
                  <p className="text-second font-[700] text-5xl pb-2">.01</p>
                  <h3 className="text-2xl font-[700]" >
                    Technology Integration Partners
                  </h3>
                  <p className="text-txtCol text-sm font-[500]">
                    Startups and established businesses looking to integrate
                    Yomcoin’s technology into their platforms and services
                  </p>
                </div>
                <div className="flex flex-col gap-3 md:pt-24 pt-0" data-aos="fade-up">
                  <p className="text-second font-[700] text-6xl pb-2">.02</p>
                  <h3 className="text-2xl font-[700]">
                    Merchants and Retailers
                  </h3>
                  <p className="text-txtCol text-sm font-[500]">
                    Businesses seeking to accept Yomcoin as a payment method,
                    offering their customers more flexibility and modern payment
                    options.
                  </p>
                </div>
                <div className="flex flex-col gap-3" data-aos="fade-up">
                  <p className="text-second font-[700] text-5xl pb-2">.03</p>
                  <h3 className="text-2xl font-[700]">Service Providers</h3>
                  <p className="text-txtCol text-sm font-[500]">
                    Companies providing complementary services such as wallet
                    providers, payment gateways, and financial services looking
                    to collaborate and enhance the overall user experience
                  </p>
                </div>
                <div className="flex flex-col gap-3 md:pt-24 pt-0" data-aos="fade-up">
                  <p className="text-second font-[700] text-5xl pb-2">.04</p>
                  <h3 className="text-2xl font-[700]">
                    Marketing and Media Partners
                  </h3>
                  <p className="text-txtCol text-sm font-[500]">
                    Organizations interested in joint marketing campaigns,
                    co-branding opportunities, and spreading awareness about
                    Yomcoin through various media channels.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <SubFooter title="Interested in Partnering with Us?" subTitle="We are excited to explore how we can work together to create a more efficient and connected financial world. If you are interested in partnering with Yomcoin, please reach out to us: info@yomcoin.com"/>
          <Footer />
        </div>
  );
};

export default PartnerPg;
