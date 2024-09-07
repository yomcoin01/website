import { useEffect, useState } from "react";
import { PreLoader } from "../../utils";
import { Footer, Navbar, SubFooter } from "../components";
import { FaAngleRight, FaEnvelope } from "react-icons/fa6";
import {SlEarphonesAlt} from "react-icons/sl"
import { contactImg, herobgright, herotopbg } from "../../assets";


const ContactPg = () => {
    const [loading, setLoading] = useState(true);
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [subject, setSubject] = useState("");
    const [message, setMessage] = useState("")

    

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  useEffect(() => {
    document.title = "Yomcoin | Partnership";
  }, []);

  const handleSubmit = () => {
    try {
      
    } catch (error) {
      
    }
  }

  return (
    <div>
        {loading ? (
            <PreLoader />
        ): (
            <div>
                <Navbar />
                <div className="container pt-16">
        <img src={herotopbg} alt="" className=" md:w-60 w-24 md:h-60 h-24 absolute top-10 inset-x-1/2  opacity-50 " />
                {/* <img src={herobgleft} alt="" className=" md:w-48 w-16 md:h-48 h-16 absolute top-60 left-10 opacity-70 " /> */}
                <img src={herobgright} alt="" className=" md:w-48 w-16 md:h-48 h-16 absolute top-60 right-10 opacity-70 " />
        <h3 className="md:text-4xl text-2xl font-[700]">
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#630460] to-[#AB79FF]">
        Contact
        </span>
          
          </h3>
          <p className="md:text-xl text-lg" data-aos="fade-up">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#630460] to-[#AB79FF] flex flex-row gap-4 items-center pt-2">
                    Home <FaAngleRight fill="#fff" />
                    Contact
                  </span>
                </p>
                </div>
                <div className="container">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-16 py-10">
          <div className="flex flex-col justify-center items-center gap-2">
            <div className="p-4 border-2 border-primary rounded w-fit">
              <SlEarphonesAlt size={30}/>
            </div>
            <p className="text-center font-[700]">+1 (234) 567-8901</p>
            <p className="font-[600]">Mon - Sat: 8:00 - 21:00 (GMT-8)</p>
          </div>
          <div className="flex flex-col justify-center items-center gap-2">
            <div className="p-4 border-2 border-primary rounded w-fit">
              <FaEnvelope size={30}/>
            </div>
            
            <p className="text-center font-[700]">support@yomcoin.com</p>
            <p className="font-[600]">24/7 Customer Support</p>
          </div>
          {/* <div className="flex flex-col justify-center items-center gap-2">
            <div className="p-4 border-2 border-primary rounded w-fit">
              <FaLocationDot size={30}/>
            </div>
            <p className="text-center font-[700]">Aberdeen Avenue, California, Santa Rosa, US</p>
            <p className="font-[600]">Main Office Location</p>
          </div> */}
        </div>
        <div className="grid md:grid-cols-2 grid-cols-1 rounded-lg py-12 shadow-lg h-[600px] ">
          <div className="h-[100%] hidden md:block">
            <img src={contactImg} alt="" className="h-full object-cover" />
          </div>
          <form action="" className="w-full px-10 p-12" onSubmit={handleSubmit}>
            <div className="flex flex-row gap-3 w-full justify-between align-middle">
              <div className="flex flex-col gap-3">
                <label htmlFor="">Your Full Name</label>
                <input
                  type="text"
                  className="p-2 w-full rounded-lg border border-primary"
                  value={name}
                  onChange={(e: any) => setName(e.target.value)}
                />
              </div>
              <div className="flex flex-col gap-3">
                <label htmlFor="">Email Address</label>
                <input
                  type="email"
                  className="p-2 w-full rounded-lg border border-primary"
                  value={email}
                  onChange={(e:any) => setEmail(e.target.value)}
                />
              </div>
            </div>

            <div className="flex flex-col py-4">
              <label htmlFor="">Subject</label>
              <input
                type="text"
                className="p-2 w-full rounded-lg border border-primary"
                value={subject}
                onChange={(e:any) => setSubject(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="">Message</label>
              <textarea
                name=""
                id=""
                className="w-full border border-primary rounded-lg"
                cols={30}
                rows={10}
                value={message}
                onChange={(e:any) => setMessage(e.target.value)}
              ></textarea>
            </div>
            <button className="bg-primary rounded-xl py-2 px-4 text-lg">
              {loading ? "Sending" : "Send"}
            </button>
          </form>
        </div>
                </div>
                <SubFooter title="Community and Support" subTitle="We value our community and are dedicated to providing excellent support. Join our growing community to stay informed, share feedback, and connect with other Yomcoin enthusiasts."/>
                <Footer />
            </div>
        )}
    </div>
  )
}

export default ContactPg