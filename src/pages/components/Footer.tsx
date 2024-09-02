import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter, FaYoutube } from "react-icons/fa6"
import { yomCoinPDF, yomlogo } from "../../assets"
import { Link } from "react-router-dom"


const Footer = () => {

    const complinks = ["About", "Mission", "Vision"]
    const reslinks = [
        {
            id: 1,
        text: "Pitch deck",
        link: "/"
        },
        {
            id: 2,
            text: "Whitepaper",
            link: yomCoinPDF
        }
    ]
    const partlinks = ["Partner with us"]

  return (
    <div>
        <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-2 justify-start items start gap-10 py-12">
                <div className="flex flex-col gap-4 md:pr-12 pr-0">
                <div className="flex flex-row gap-2 items-center">
                    <img src={yomlogo} alt="" />
                    <p className="font-[800] text-2xl">Yomcoin</p>
                </div> 
                <p className="text-txtCol text-sm font-[500]">Yomcoin is a leading platform in the decentralized finance (DeFi) space, committed to driving innovation and positive change in the financial industry. Join us on our journey to transform the future of cross-border transactions.</p>
                <div className="flex flex-row gap-3 justify-start items-center">
                    <FaFacebook  size={33}/>
                    <FaTwitter size={33}/>
                    <FaInstagram size={33} />
                    <FaLinkedin size={33}/>
                    <FaYoutube size={33}/>
                </div>
                </div>
                    <div className="flex flex-col md:flex-row gap-4 md:gap-0 justify-between items-start">
                        <div><p className="font-[600] text-xl pb-0 md:pb-4">Company</p>
                        <ul>
                            {complinks.map((item, index) => (
                                <li key={index} className="text-txtCol text-md font-[500]">{item}</li>
                            ))}
                        </ul>
                        </div>
                        <div><p className="font-[600] text-xl pb-0 md:pb-4">Resources</p>
                        <div>
                            {reslinks.map((item, index) => (
                                <div key={index}>
                                    <Link to={item.link} target="_blank"  className="text-txtCol text-md font-[500]">{item.text}</Link>
                                </div>
                                
                            ))}
                        </div>
                        </div>
                        <div><p className="font-[600] text-xl pb-0 md:pb-4">Partnership</p>
                        <ul>
                            {partlinks.map((item, index) => (
                                <Link target="_blank" to="https://forms.gle/y46WMkypRmkLaQAe7" key={index} className="text-txtCol text-md font-[500]">{item}</Link>
                            ))}
                        </ul>
                        </div>
                    </div>
            </div>
            <hr />
            <p className="text-center md:py-4 py-2">© 2024 Yomcoin. All rights reserved. </p>
        </div>
    </div>
  )
}

export default Footer