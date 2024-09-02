import { useEffect, useState } from "react"
import { Footer, Navbar, SubFooter } from "../components"
import { heroPartOne, heroPartTwo, whyPartImg } from "../../assets"
import { PreLoader } from "../../utils";
import { FaAngleRight } from "react-icons/fa6";
import { whyPartData } from "../../data/data";

const PartnerPg = () => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
          setLoading(false)
        }, 2000)
      }, [])

    useEffect(() => {
        document.title = "Yomcoin | Partnership"
      }, [])

  return (
    <>
    {loading ? (
        <PreLoader />
    ): (
        <div>
        <Navbar />
        <div className="container pt-16">
          
            {/* <div className="w-full md:w-1/2 mx-auto">
                <img src={underConstruction} alt="" className="w-full"/>
            </div>
            <p className="text-2xl md:text-5xl text-center">Under <span className="text-primary">Construction</span></p> */}
            <div>
              <h3 className="text-4xl font-[700]">Partnership</h3>
              <div className="flex flex-row items-center gap-2 justify-start py-6">
                <p className="text-primary font-[600]">Home</p>
                <FaAngleRight />
                <p className="text-primary font-[600]">Partnership</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 justify-center items-center gap-4 pt-12 pb-24">
                <div>
                  <p className="text-primary font-[600]">Partnership & Collaboration</p>
                  <h3 className="text-start text-[48px] font-[700] py-8" style={{lineHeight: "50px"}}>Partner with Yomcoin to Innovate</h3>
                  <p className="text-txtCol font-[500]">Yomcoin is open to partnerships and collaborations with businesses to expand the Yomcoin ecosystem and provide greater value to our users. We believe that working together can help us achieve our goals more effectively. Whether you're a startup looking to integrate our technology or an established business seeking innovative payment solutions, we want to hear from you.</p>
                </div>
                <div>
                <div className="relative">
                  <div >
                  <img src={heroPartOne} alt="" className="md:absolute static md:z-20 z-0 w-[400px] h-[400px] " style={{top: "-220px", left: "0px"}} />
                  <img src={heroPartTwo} alt="" className="absolute md:block hidden right-0 w-[250px] h-[250px]"/>
                  </div>
                  
                </div>
                </div>
                
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 justify-center items-center gap-4">
              <div>
                <img src={whyPartImg} alt="" />
              </div>
              <div>
                <p>Why Choose Us</p>
                <h3 className="text-3xl font-[700] py-6">Why Partner with <br /> Yomcoin?</h3>
                <p className="text-txtCol text-sm font-[500]">Collaborate with us to drive mutual growth and success. Our partnership approach is centered on innovation and shared goals, ensuring that both parties benefit from the collaboration.</p>
                <div className="grid grid-cols-2 justify-start items-start gap-4 pt-6">
                  {whyPartData.map((item) => (
                    <div className="flex flex-row gap-4 justify-start items-start" key={item.id}>
                    <div className="w-24 pt-4 h-12">
                      <img src={item.img} alt="" className="w-full" />
                    </div>
                    <div>
                      <h3 className="text-xl pb-2 text-txtHead font-[700]">{item.title}</h3>
                  <p className="text-txtCol text-xs font-[500]">{item.text}</p>
                    </div>
                    
                  </div>
                  ))}
                
                </div>
              </div>
              </div>
            </div>
            <div className="py-12">
              <p className="text-center">Partner</p>
              <div className="w-full md:w-1/2 mx-auto">
                <h3 className="text-center text-[48px] font-[700]" style={{lineHeight: "50px"}}>Types of Partnerships <br /> We Seek</h3>
              </div>
            </div>
          {/* Types of Partner */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 justify-center items-start gap-8 py-16 px-4">
            <div className="flex flex-col gap-3">
                <p className="text-second font-[700] text-5xl pb-2">.01</p>
                <h3 className="text-2xl font-[700]">Technology Integration Partners</h3>
                <p className="text-txtCol text-sm font-[500]">Startups and established businesses looking to integrate Yomcoin’s technology into their platforms and services</p>
            </div>
            <div className="flex flex-col gap-3 md:pt-24 pt-0">
                <p className="text-second font-[700] text-6xl pb-2">.02</p>
                <h3 className="text-2xl font-[700]">Merchants and Retailers</h3>
                <p className="text-txtCol text-sm font-[500]">Businesses seeking to accept Yomcoin as a payment method, offering their customers more flexibility and modern payment options.</p>
            </div>
            <div className="flex flex-col gap-3">
                <p className="text-second font-[700] text-5xl pb-2">.03</p>
                <h3 className="text-2xl font-[700]">Service Providers</h3>
                <p className="text-txtCol text-sm font-[500]">Companies providing complementary services such as wallet providers, payment gateways, and financial services looking to collaborate and enhance the overall user experience</p>
            </div>
            <div className="flex flex-col gap-3 md:pt-24 pt-0">
                <p className="text-second font-[700] text-5xl pb-2">.04</p>
                <h3 className="text-2xl font-[700]">Marketing and Media Partners</h3>
                <p className="text-txtCol text-sm font-[500]">Organizations interested in joint marketing campaigns, co-branding opportunities, and spreading awareness about Yomcoin through various media channels.</p>
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

export default PartnerPg