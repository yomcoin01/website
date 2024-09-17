import { FaAngleRight } from "react-icons/fa";
import { abtFirst, abtsecond,  herobgright, herotopbg} from "../../assets";
import { Footer, Navbar, SubFooter } from "../components"
import { useEffect } from "react";


const AboutPg = () => {

  useEffect(() => {
      document.title = "Yomcoin | About"
    }, [])
  return (
        <div>
        <Navbar />
        <div className="container pt-16">
        <img src={herotopbg} alt="" className=" md:w-60 w-24 md:h-60 h-24 absolute top-10 inset-x-1/2  opacity-50 " />
                {/* <img src={herobgleft} alt="" className=" md:w-48 w-16 md:h-48 h-16 absolute top-60 left-10 opacity-70 " /> */}
                <img src={herobgright} alt="" className=" md:w-48 w-16 md:h-48 h-16 absolute top-60 right-10 opacity-70 " />
        <h3 className="md:text-4xl text-2xl font-[700]">
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#630460] to-[#AB79FF]">
        About
        </span>
          
          </h3>
          <p className="md:text-xl text-lg" data-aos="fade-up">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#630460] to-[#AB79FF] flex flex-row gap-4 items-center pt-2">
                    Home <FaAngleRight fill="#fff" />
                    About
                  </span>
                </p>
              <div className="grid grid-cols-1 md:grid-cols-2 justify-center items-center md:gap-4 gap-0 pt-12 pb-0">
                <div>
                  <p className="font-[600] text-xl" data-aos="fade-up">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#630460] to-[#AB79FF]">

                  About Us
                  </span>
                  </p>
                  <h3 className="text-start md:text-[48px] text-[30px] font-[700] py-8 md:leading-[50px] leading-8" data-aos="fade-up">Innovating DeFi with User-Centric Solutions</h3>
                  <p className="text-txtCol font-[600]" data-aos="fade-up">Yomcoin is a leading platform in the decentralized finance (DeFi) space, committed to driving innovation and positive change in the financial industry. We are a team of passionate individuals dedicated to leveraging cutting-edge technology to transform the way individuals access and utilize financial services. 
                  With a focus on user-centric design, security, and accessibility, we strive to empower users worldwide to take control of their financial futures.</p>
                </div>
                <div className="grid grid-cols-2">

                  <img src={abtsecond} alt="" className="w-full h-[400px] mt-20 rounded-xl object-contain" data-aos="zoom-in"/>
                  <img src={abtFirst} alt="" className="w-full h-[400px] rounded-xl object-contain" data-aos="zoom-in"/>
             
                  
                </div>
              </div>
              
              
              
        </div>
        <div className="bg-abtechbg bg-right-top bg-no-repeat" style={{backgroundSize: "500px 700px"}}>
        <div className="w-full md:w-1/2 text-center mx-auto md:pt-24 pt-0">
                <p className="text-primary font-[600] text-2xl" data-aos="fade-up">Technology</p>
                <h3 className="text-2xl md:text-5xl font-[700] py-4"  data-aos="fade-up">Our Technology</h3>
                <p className="text-txtCol text-sm font-[600]" data-aos="fade-up">Yomcoin is built on a robust and secure blockchain infrastructure, ensuring transparency and integrity in every transaction. Our technology stack includes:</p>
              </div>
        <div className="grid grid-cols-1 md:grid-cols-3  justify-center items-start gap-8 py-16 w-3/4 mx-auto">
            <div className="flex flex-col gap-3" data-aos="fade-up">
                <p className="text-second font-[700] md:text-5xl text-3xl pb-2">.01</p>
                <h3 className="md:text-2xl text-xl font-[700]">Blockchain</h3>
                <p className="text-txtCol text-sm font-[600]">Utilizing a decentralized ledger for secure and transparent transactions.</p>
            </div>
            <div className="flex flex-col gap-3 md:pt-24 pt-0" data-aos="fade-up">
                <p className="text-second font-[700] md:text-5xl text-3xl pb-2">.02</p>
                <h3 className="md:text-2xl text-xl font-[700]">Smart Contracts</h3>
                <p className="text-txtCol text-sm font-[600]">Automating agreements and reducing the need for intermediaries.</p>
            </div>
            <div className="flex flex-col gap-3" data-aos="fade-up">
                <p className="text-second font-[700] md:text-5xl text-3xl pb-2">.03</p>
                <h3 className="md:text-2xl text-xl font-[700]">Advanced Encryption</h3>
                <p className="text-txtCol text-sm font-[600]">Ensuring the highest level of security for user data and transactions.</p>
            </div>
            </div>
        </div>
        <SubFooter title="Community and Support" subTitle="We value our community and are dedicated to providing excellent support. Join our growing community to stay informed, share feedback, and connect with other Yomcoin enthusiasts."/>
        <Footer />
    </div>
  )
}

export default AboutPg