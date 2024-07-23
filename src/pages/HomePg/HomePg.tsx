import { hero1, hero2, hero3, partColl } from "../../assets"
import {  WhyConst } from "../../data/data"
import { BtnCard } from "../../utils"
import { Footer, Navbar } from "../components"


const HomePg = () => {
  return (
    <div>
        <Navbar />
        <div className="container">
            <div className="text-center flex flex-col gap-6 items-center py-8">
              <p className="text-5xl font-[700] w-3/4">Bridging Finance and Technology for a Smarter Future</p>
            <p>Revolutionizing Cross-Border Transactions with Seamless, Secure, and Efficient Solutions</p>  

            <div className="bg-[#909AA81A] flex flex-row gap-4 justify-between items-center  p-2 rounded-full">
            <div className="flex flex-row gap-1">
                <img src={hero1} className="h-12 w-12 rounded-full" alt="" />
                <img src={hero2} className="h-12 w-12 rounded-full" alt="" />
                <img src={hero3} className="h-12 w-12 rounded-full"  alt="" />
                <div className="bg-white text-center w-12 h-12 rounded-full">
                    <p>+23</p>
                </div>
            </div>
            <button className="bg-primary font-[600] text-[#fff] rounded-full py-3 px-6">Join Waitlist</button>
            </div>
            </div>
            
        </div>
        {/* Why Yomcoin */}
        <div className="container">
            <div className="flex justify-center items-center">
                <div className="w-1/2 text-center">
             <p className="">Why Yomcoin?</p>

             <p className="font-[700] text-5xl text-center">Why We Stand Out Among Cryptocurrencies</p>
            </div>
            </div>

           <div className="grid grid-cols-1 md:grid-cols-3 justify-center items-start gap-8 py-12 px-4">
            {WhyConst.map((item) => (
             <div className="bg-transparent justify-start items-start flex flex-col gap-6 px-8 py-12 border border-white rounded-xl h-[400px]" key={item.id}>
                <div>
                <img src={item.img} alt="" />
                </div>
                
                <h3 className="text-4xl font-[600]">{item.title}</h3>
                <p>{item.text}</p>
            </div>   
            ))}
            
            </div> 
           
        </div>
        {/* Our Key Features */}
        <div className="container">
            <div className="flex justify-center items-center">
                <div className="w-1/2 text-center">
                <p>Features</p>
                <p className="font-[700] text-5xl text-center">Our Key Features</p>
                </div>
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
                    <p>Partnerships and collaborations</p>
                    <h3 className="text-5xl font-[700]">Why Partner with Yomcoin?</h3>
                    <p>We believe that working together can help us achieve our goals more effectively. Whether you're a startup looking to integrate our technology or an established business seeking innovative payment solutions, we want to hear from you.</p>
                    <div className="flex flex-row gap-4 items-center">
                    <BtnCard btnbgColor="primary" btnText="Join Us"  btnClass="" />
                    <BtnCard btnbgColor="transparent" btnText="Read More" btnClass="border border-white"/>

                    </div>
                </div>
                <div>
                    <img src={partColl} alt="" />
                </div>
            </div>
        </div>
        <Footer />
    </div>
  )
}

export default HomePg