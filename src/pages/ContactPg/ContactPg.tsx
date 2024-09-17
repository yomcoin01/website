import { useEffect, useState } from "react";
import { Footer, Navbar, SubFooter } from "../components";
import { FaAngleRight} from "react-icons/fa6";
import {addDoc, collection} from "firebase/firestore";
import { contactImg, herobgright, herotopbg, yomlogo } from "../../assets";
import {toast} from "react-toastify";
import { db } from "../../firebase";


const ContactPg = () => {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [subject, setSubject] = useState("");
    const [message, setMessage] = useState("")
    const [companyName, setCompanyName] = useState("")
    const [formLoading, setFormLoading] = useState(false);


  useEffect(() => {
    document.title = "Yomcoin | Contact";
  }, []);

  const handleSubmit = async(e: any) => {
    e.preventDefault()
    
    try {
    setFormLoading(true);
      await addDoc(collection(db, "contact"), {name, email, companyName, subject, message})

      toast.success(`Message Received ${name}, Our Team will contact you soon`, {position: "bottom-left"})

    } catch (error: any) {
      toast.error(error, {position: "bottom-left"})
    }finally{
      setFormLoading(false);
      setName("")
      setEmail("")
      setCompanyName("")
      setSubject("")
      setMessage("")
    }
  }

  return (
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
                <div className="container py-12">
              <div className="w-full md:w-2/3 text-center flex flex-col gap-2 justify-center items-center mx-auto">
              <img src={yomlogo} alt="" />
              <h3 className="md:text-5xl text-3xl font-[700]">
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#630460] to-[#AB79FF]">
        Contact Our Friendly Team
        </span>
          
          </h3>
          <p className="font-[600] text-xl md:text-2xl">Let us know how we can help you</p>
              </div>
        <div className="grid md:grid-cols-2 grid-cols-1 rounded-lg py-12 shadow-lg h-[600px] ">
          <div className="min-h-full hidden md:block">
            <img src={contactImg} alt="" className="h-full w-full object-cover" />
          </div>
          <form className="w-full bg-primary bg-opacity-40 md:rounded-tr-2xl rounded-2xl md:px-10 px-4 py-12" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full justify-center items-center">
              <div className="flex flex-col gap-1 w-full">
                <label className="font-[600] text-lg">Full Name</label>
                <input
                  type="text"
                  className="p-2 w-full rounded-lg border border-primary text-black font-[600]"
                  value={name}
                  required
                  onChange={(e: any) => setName(e.target.value)}
                />
              </div>
              <div className="flex flex-col gap-1 w-full">
                <label className="font-[600] text-lg">Email Address</label>
                <input
                  type="email"
                  className="p-2 w-full rounded-lg border border-primary text-black font-[600]"
                  value={email}
                  required
                  onChange={(e:any) => setEmail(e.target.value)}
                />
              </div>
            </div>

            <div className="flex flex-col pt-1 md:pt-2">
              <label className="font-[600] text-lg">Company Name</label>
              <input
                type="text"
                className="p-2 w-full rounded-lg border border-primary text-black font-[600]"
                value={companyName}
                onChange={(e:any) => setCompanyName(e.target.value)}
                required
              />
            </div>
            <div className="flex flex-col pt-1 md:pt-2 gap-1">
              <label className="font-[600] text-lg">Subject</label>
              <input
                type="text"
                className="p-2 w-full rounded-lg border border-primary text-black font-[600]"
                value={subject}
                required
                onChange={(e:any) => setSubject(e.target.value)}
              />
            </div>
            <div className="flex flex-col md:pt-2 pt-1 gap-1">
              <label className="font-[600] text-lg">Message</label>
              <textarea
                name=""
                id=""
                className="w-full border border-primary rounded-lg text-black font-[600] p-2"
                cols={30}
                rows={10}
                value={message}
                required
                onChange={(e:any) => setMessage(e.target.value)}
              ></textarea>
            </div>
            <div className="pt-4">
            <button className="bg-primary rounded-xl py-2 cursor-pointer w-full text-xl font-[600]">
              {formLoading ? "Sending..." : "Send"}
            </button>  
            </div>
            
          </form>
        </div>
                </div>
                <div className="pt-24">
                <SubFooter title="Get in touch with us" subTitle="We’re enthusiastic about the chance to collaborate and develop a more efficient, connected financial system. Don't hesitate to contact us at info@yomcoin.com for further conversations and potential opportunities to work together."/>

                </div>
                <Footer />
            </div>
  )
}

export default ContactPg