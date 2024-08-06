import { commside, hero1, hero2, hero3, herobgleft, herobgright, herotopbg, partColl} from "../../assets"
import {  WhyConst } from "../../data/data"
import { BtnCard, PreLoader } from "../../utils"
import { Footer, Navbar, SubFooter } from "../components"
import { useEffect, useState } from "react"



const HomePg = () => {

    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
          setLoading(false)
        }, 2000)
      }, [])
  return (
    <>
    {loading ? (
        <PreLoader />
    ):(
        <div>
            <div className="md:h-screen h-fit">
            <Navbar />
        <div className="container">
            {/* <div className="absolute top-10 left-0"> */}
                <img src={herotopbg} alt="" className=" md:w-60 w-24 md:h-60 h-24 absolute top-10 inset-x-1/2  opacity-50 " />
                <img src={herobgleft} alt="" className=" md:w-48 w-16 md:h-48 h-16 absolute top-60 left-10 opacity-70 " />
                <img src={herobgright} alt="" className=" md:w-48 w-16 md:h-48 h-16 absolute top-60 right-10 opacity-70 " />
            {/* </div> */}
            <div className="text-center flex flex-col gap-10 items-center pt-12 md:pt-24 pb-12 z-50">
              <p className="text-2xl md:text-5xl font-[700] w-3/4" data-aos="zoom-in-up">Bridging Finance and Technology for a Smarter Future</p>
            <p data-aos="zoom-in-up">Revolutionizing Cross-Border Transactions with Seamless, Secure, and Efficient Solutions</p>  

            <div className="bg-[#909AA81A] flex flex-row gap-4 justify-between items-center  p-2 rounded-full" >
            <div className="flex flex-row relative">
                <img src={hero1} className="h-12 w-12 rounded-full " alt="" />
                <img src={hero2} className="h-12 w-12 rounded-full z-10 absolute right-16" alt="" />
                <img src={hero3} className="h-12 w-12 rounded-full z-20 absolute right-8"  alt="" />
                <div className="bg-white text-center w-12 h-12 z-30 border-1 border-transparent flex flex-row items-center rounded-full">
                    <p className="text-black text-center font-[600] ps-1 text-2xl">+23</p>
                </div>
            </div>
            <button className="bg-primary font-[600] text-[#fff] rounded-full py-3 px-6">Join Waitlist</button>
            </div>
            </div>
            
        </div>
            </div>
        
        {/* Why Yomcoin */}
        <div className="bg-whysbrgt bg-right-top bg-contain bg-no-repeat">
        <div className="container">
          <div>
            {/* <img src={sbgright} alt="" className="absolute right-0 top-20"/> */}
            <div className="flex flex-col justify-center items-center py-12 w-3/4 mx-auto gap-2 md:gap-4">
                {/* <div className="w-3/4 text-center"> */}
             <p >Why Yomcoin?</p>

             <p data-aos="fade-up" className="font-[700] text-2xl md:text-5xl text-center">Why We Stand Out Among Cryptocurrencies</p>
            {/* </div> */}
            </div>

           <div className="grid grid-cols-1 md:grid-cols-3 justify-center items-start gap-8 py-12 px-4 z-50">
            {WhyConst.map((item) => (
             <div className="bg-transparent justify-start items-start flex flex-col gap-6 md:px-8 px-4 md:py-12 py-6 border border-e-cyan-300 rounded-xl h-[350px] md:h-[400px]" key={item.id}>
                <div>
                <img src={item.img} alt="" className="md:w-24 w-16 md:h-24 h-16" />
                </div>
                
                <h3 className="md:text-4xl text-2xl font-[600]">{item.title}</h3>
                <p>{item.text}</p>
            </div>   
            ))}
            
            </div> 
           
        </div>  
        </div>
        </div>
        
        <div className="bg-whysblft bg-left-bottom bg-contain bg-no-repeat">
        {/* Our Key Features */}
        <div className="container">
            <div className="flex flex-col justify-center items-center py-12 w-3/4 mx-auto gap-2 md:gap-4">
                {/* <div className="w-full md:w-1/2 text-center"> */}
                <p>Features</p>
                <p className="font-[700] text-2xl md:text-5xl text-center">Our Key Features</p>
                {/* </div> */}
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 justify-center items-start gap-8 py-16 px-4">
            <div className="flex flex-col gap-3">
                <p className="text-second font-[700] text-5xl pb-2">.01</p>
                <h3 className="text-3xl font-[700]">Decentralized Platform</h3>
                <p>Yomcoin operates on a decentralized platform, ensuring transparency and reducing the risk of centralized control or manipulation.</p>
            </div>
            <div className="flex flex-col gap-3 md:pt-24 pt-0">
                <p className="text-second font-[700] text-6xl pb-2">.02</p>
                <h3 className="text-3xl font-[700]">User-Friendly Interface</h3>
                <p>Our upcoming app will feature a user-friendly interface designed to make transactions easy, even for those new to cryptocurrency.</p>
            </div>
            <div className="flex flex-col gap-3">
                <p className="text-second font-[700] text-5xl pb-2">.03</p>
                <h3 className="text-3xl font-[700]">Fast Transaction Speeds</h3>
                <p>Leveraging advanced blockchain technology, Yomcoin provides near-instant transaction speeds, allowing you to send and receive funds quickly.</p>
            </div>
            <div className="flex flex-col gap-3 md:pt-24 pt-0">
                <p className="text-second font-[700] text-5xl pb-2">.04</p>
                <h3 className="text-3xl font-[700]">Low Transaction Fees</h3>
                <p>Our platform is designed to offer some of the lowest transaction fees in the market, making cross-border payments affordable for everyone.</p>
            </div>
            </div>
        </div>
        {/* Partner & Collab */}
        <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-2 justify-center items-center gap-8">
                <div className="flex flex-col gap-4">
                    <p className="text-center md:text-start">Partnerships and collaborations</p>
                    <h3 className="text-2xl md:text-5xl font-[700]">Why Partner with Yomcoin?</h3>
                    <p>We believe that working together can help us achieve our goals more effectively. Whether you're a startup looking to integrate our technology or an established business seeking innovative payment solutions, we want to hear from you.</p>
                    <div className="flex flex-row gap-4 items-center">
                    <BtnCard btnbgColor="primary" btnText="Join Us"  btnClass="" />
                    <BtnCard btnbgColor="transparent" btnText="Read More" btnClass="border border-white"/>

                    </div>
                </div>
                <div className="relative">
          <img src={commside} alt=""  className="w-12 md:w-24 h-12 md:h-24 absolute -top-4 md:-top-10 -left-4 md:-left-10"/>

                    <img src={partColl} alt="" />
                </div>
            </div>
        </div>
        </div>
        

        {/* <div className="container py-24 relative">
          <div className="bg-gradient-to-r from-[#DF4DDB] to-[#935DFA]  rounded-xl py-12">
          <img src={commside} alt=""  className="w-24 h-24 absolute top-12 left-2"/>
            <div className="grid grid-cols-1 md:grid-cols-2 justify-between items-center bg-transparent gap-12 px-8">
                <div className="flex flex-row items-center gap-2 bg-transparent">
                    
                    <h3 className="text-5xl font-[700]">Community and Support</h3>
                </div>
                <div className="bg-transparent">
                    <p>We value our community and are dedicated to providing excellent support. Join our growing community to stay informed, share feedback, and connect with other Yomcoin enthusiasts.</p>
                    <button className="flex flex-row gap-2 items-center">Join Now <FaArrowAltCircleRight /> </button>
                </div>
            </div>
        </div> 
        </div> */}
        
        <SubFooter title="Community and Support"/>
        
        <Footer />
    </div>
    )}
    </>
    
  )
}

export default HomePg