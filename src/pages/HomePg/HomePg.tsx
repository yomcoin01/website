import { addDoc, collection } from "firebase/firestore"
import { commside, hero1, hero2, hero3, herobgleft, herobgright, herotopbg, partColl} from "../../assets"
import {  WhyConst } from "../../data/data"
import { BtnCard} from "../../utils"
import { Footer, Navbar, SubFooter } from "../components"
import { useState } from "react"
import { toast } from "react-toastify"
import { db } from "../../firebase"



const HomePg = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [formModal, setFormModal] = useState(false);
    const [formSubmit, setFormSubmit] = useState(false);


    const handleSubmit = async() => {
        setFormSubmit(true)
        try {
            if(email == "" || name == ""){
                toast.info("Kindly enter your full name and email address.", {position: "bottom-left"})
                return;
            }
            await addDoc(collection(db, "waitlist"), {name, email})
            toast.success("You're on the waitlist. We'll keep updated.", {position: "bottom-left"})
            setEmail("")
            setName("");
            setFormSubmit(false)
        } catch (error) {
            toast.error("An Error Occured", {position: "bottom-left"})
        } finally{
            setEmail("");
            setName("");
            setFormModal(false);
            setFormSubmit(false);
        }
    }

  return (
        <div>
            <div className="h-fit">
            <Navbar />
        <div className="container">
            {/* <div className="absolute top-10 left-0"> */}
                <img src={herotopbg} alt="" className=" md:w-60 w-24 md:h-60 h-24 absolute top-10 inset-x-1/2  opacity-50 " />
                <img src={herobgleft} alt="" className=" md:w-48 w-16 md:h-48 h-16 absolute top-60 left-10 opacity-70 " />
                <img src={herobgright} alt="" className=" md:w-48 w-16 md:h-48 h-16 absolute top-60 right-10 opacity-70 " />
            {/* </div> */}
            <div className="text-center flex flex-col gap-10 items-center pt-12 md:pt-24 pb-8 z-50">
              <p className="text-2xl md:text-5xl font-[700] w-3/4" data-aos="zoom-in-up">Bridging Finance and Technology for a Smarter Future</p>
            <p data-aos="zoom-in-up">Revolutionizing Cross-Border Transactions with Seamless, Secure, and Efficient Solutions</p>  

            <div className="bg-[#909AA81A] flex md:w-80 w-72 relative flex-row gap-4 justify-between items-center  p-2 rounded-full" data-aos="zoom-in">
            <div className="flex flex-row">
                <img src={hero1} className="md:h-12 h-10 md:w-12 w-10 rounded-full left-2 top-2 absolute" alt="" />
                <img src={hero2} className="md:h-12 h-10 md:w-12 w-10 rounded-full z-10 md:left-10 left-8 top-2 absolute right-16" alt="" />
                <img src={hero3} className="md:h-12 h-10 md:w-12 w-10 rounded-full z-20 md:left-20 left-16 top-2 absolute right-8"  alt="" />
                <div className="bg-white absolute text-center md:left-28 left-24 top-2 md:h-12 h-10 md:w-12 w-10 z-30 border-1 border-transparent flex flex-row items-center rounded-full">
                    <p className="text-black text-center font-[600] ps-1 md:text-xl text-md">+30k</p>
                </div>
            </div>
            
            <button className="bg-primary font-[600] text-[#fff] rounded-full py-2 md:py-3 px-4 md:px-6" onClick={() => setFormModal(true)}>Join Waitlist</button>
            
            
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
             <p className=" font-[600] md:text-2xl text-xl" data-aos="fade-up">
             <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#630460] to-[#AB79FF]">
             Why Yomcoin?
             </span>
                </p>

             <p data-aos="fade-up" className="font-[700] text-2xl md:text-5xl text-center">Why We Stand Out Among Cryptocurrencies</p>
            {/* </div> */}
            </div>

           <div className="grid grid-cols-1 md:grid-cols-3 justify-center items-start gap-8 py-12 px-4 z-50">
            {WhyConst.map((item) => (
             <div className="bg-transparent justify-start md:items-start items-center flex flex-col gap-6 md:px-8 px-4 md:py-12 py-6 border border-e-cyan-300 rounded-xl h-[350px] md:h-[400px]" key={item.id} data-aos="zoom-in">
                <div>
                <img src={item.img} alt="" className="md:w-24 w-16 md:h-24 h-16" data-aos="fade-up" />
                </div>
                
                <h3 className="md:text-4xl text-2xl font-[600] text-center md:text-start" data-aos="fade-up">{item.title}</h3>
                <p className="text-center md:text-start" data-aos="fade-up">{item.text}</p>
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
                <p className=" font-[600] md:text-2xl text-xl" data-aos="fade-up">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#630460] to-[#AB79FF]">
                Features
                </span>
                    </p>
                <p className="font-[700] text-2xl md:text-5xl text-center" data-aos="fade-up">Our Key Features</p>
                {/* </div> */}
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 justify-center items-start gap-8 py-16 px-4">
            <div className="flex flex-col gap-3 items-center md:items-start" data-aos="fade-up">
                <p className="text-second font-[700] text-5xl pb-2">.01</p>
                <h3 className="text-3xl font-[700] text-center md:text-start">Decentralized Platform</h3>
                <p className="text-center md:text-start">Yomcoin operates on a decentralized platform, ensuring transparency and reducing the risk of centralized control or manipulation.</p>
            </div>
            <div className="flex flex-col gap-3 md:pt-24 pt-0 items-center md:items-start" data-aos="fade-up">
                <p className="text-second font-[700] text-6xl pb-2">.02</p>
                <h3 className="text-3xl font-[700] text-center md:text-start">User-Friendly Interface</h3>
                <p className="text-center md:text-start">Our upcoming app will feature a user-friendly interface designed to make transactions easy, even for those new to cryptocurrency.</p>
            </div>
            <div className="flex flex-col gap-3 items-center md:items-start" data-aos="fade-up">
                <p className="text-second font-[700] text-5xl pb-2">.03</p>
                <h3 className="text-3xl font-[700] text-center md:text-start">Fast Transaction Speeds</h3>
                <p className="text-center md:text-start">Leveraging advanced blockchain technology, Yomcoin provides near-instant transaction speeds, allowing you to send and receive funds quickly.</p>
            </div>
            <div className="flex flex-col gap-3 md:pt-24 pt-0 items-center md:items-start" data-aos="fade-up">
                <p className="text-second font-[700] text-5xl pb-2">.04</p>
                <h3 className="text-3xl font-[700] text-center md:text-start">Low Transaction Fees</h3>
                <p className="text-center md:text-start">Our platform is designed to offer some of the lowest transaction fees in the market, making cross-border payments affordable for everyone.</p>
            </div>
            </div>
        </div>
        {/* Partner & Collab */}
        <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-2 justify-center items-center gap-8">
                <div className="flex flex-col gap-4">
                    <p className="text-center md:text-start font-[600] md:text-2xl text-xl" data-aos="fade-up">
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#630460] to-[#AB79FF]">
                    Partnerships and collaborations
                    </span>
                        </p>
                    <h3 className="text-2xl md:text-5xl font-[700] text-center md:text-start" data-aos="fade-up">Why Partner with Yomcoin?</h3>
                    <p className="text-center md:text-start" data-aos="fade-up">We believe that working together can help us achieve our goals more effectively. Whether you're a startup looking to integrate our technology or an established business seeking innovative payment solutions, we want to hear from you.</p>
                    <div className="flex flex-row gap-4 items-center">
                    <BtnCard btnbgColor="primary" btnText="Join Us"  btnClass="" />
                    <BtnCard btnbgColor="transparent" btnText="Read More" btnClass="border border-white" />

                    </div>
                </div>
                <div className="relative" data-aos="zoom-in">
          <img src={commside} alt=""  className="w-12 md:w-24 h-12 md:h-24 absolute -top-4 md:-top-10 -left-4 md:-left-10"/>

                    <img src={partColl} alt="" />
                </div>
            </div>
        </div>
        </div>
        
        
        <SubFooter title="Community and Support" subTitle="We value our community and are dedicated to providing excellent support. Join our growing community to stay informed, share feedback, and connect with other Yomcoin enthusiasts."/>
        
        <Footer />
        {formModal && (<div className='fixed inset-0 bg-[#0E0D17] bg-opacity-30 backdrop-blur-sm flex justify-center items-center'>
            <div className='w-80 rounded-xl bg-[#0E0D17] flex flex-col justify-start items-start gap-8 py-6'>
                <div>
                    <p className="text-white font-[Jost] font-[600] text-xl text-center">
                    Welcome! Join our waitlist to get early access and updates.
                    </p>

                </div>
                <div className="flex flex-col gap-4 w-[80%] mx-auto">
                    <div className="flex flex-col gap-1">
                        <label className="text-lg font-[600] font-[Jost]">Full Name</label>
                        <input type="text" className="rounded-xl w-full p-2 text-black font-[500] outline-primary" onChange={(e: any) => setName(e.target.value)}/>
                    </div>
                    <div className="flex flex-col gap-1">
                        <label className="text-lg font-[600] font-[Jost]">Email Address</label>
                        <input type="email" className="rounded-xl w-full p-2 text-black font-[500] outline-primary" onChange={(e: any) => setEmail(e.target.value)}/>
                    </div>
                </div>
                <div className='flex justify-between items-center mx-auto gap-8'>
                <button className='bg-transparent font-[600] font-[Jost] border-2 border-white px-4 py-2 rounded-xl' onClick={() => setFormModal(false)}>Close</button>
                    <button className='bg-white text-[#1f2937] px-4 py-2 rounded-xl font-[600] font-[Jost] text-lg' onClick={handleSubmit}>{formSubmit ? "Submitting..." : "Submit"}</button>
                    
                </div>
            </div>
        </div>)}
    </div>
    
  )
}

export default HomePg