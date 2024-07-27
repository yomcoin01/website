import { FaAngleRight } from "react-icons/fa";
import { heroPartOne, heroPartTwo} from "../../assets";
import { PreLoader } from "../../utils";
import { Footer, Navbar, SubFooter } from "../components"
import { useState, useEffect } from "react";


const AboutPg = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
      setTimeout(() => {
        setLoading(false)
      }, 2000)
    }, [])

  useEffect(() => {
      document.title = "Yomcoin | About"
    }, [])
  return (
    <>
    {loading ? (
        <PreLoader />
    ): (
        <div>
        <Navbar />
        <div className="container pt-16">
        <h3>About</h3>
              <div className="flex flex-row items-center gap-2 justify-start py-6">
                <p>Home</p>
                <FaAngleRight />
                <p>About</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 justify-center items-center gap-4 pt-12 pb-24">
                <div>
                  <p>About Us</p>
                  <h3 className="text-start text-[48px] font-[700] py-8" style={{lineHeight: "50px"}}>Innovating DeFi with User-Centric Solutions</h3>
                  <p className="text-txtCol">Yomcoin is a leading platform in the decentralized finance (DeFi) space, committed to driving innovation and positive change in the financial industry. We are a team of passionate individuals dedicated to leveraging cutting-edge technology to transform the way individuals access and utilize financial services. 
                  With a focus on user-centric design, security, and accessibility, we strive to empower users worldwide to take control of their financial futures.</p>
                </div>
                <div className="grid grid-cols-2 gap-2">

                  <img src={heroPartOne} alt="" className="w-full" />
                  <img src={heroPartTwo} alt="" className="w-ful"/>
             
                  
                </div>
              </div>
        </div>
        <SubFooter title="Interested in Partnering with Us?"/>
        <Footer />
    </div>
    )}
    </>
  )
}

export default AboutPg