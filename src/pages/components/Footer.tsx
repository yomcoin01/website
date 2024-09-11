import { FaDiscord, FaFacebook, FaInstagram, FaLinkedin,  FaX } from "react-icons/fa6"
import { yomCoinPDF, yomlogo, YomPitch } from "../../assets"
import { Link } from "react-router-dom"
import { DiscordUrl, FacebookUrl, InstagramUrl, LinkedInUrl, Xurl } from "../../utils/Urlinks"


const Footer = () => {

    const complinks = ["About", "Mission", "Vision"]
    const reslinks = [
        {
            id: 1,
        text: "Pitch deck",
        link: YomPitch
        },
        {
            id: 2,
            text: "Whitepaper",
            link: yomCoinPDF
        }
    ]
    const partlinks = [{
        id:1,
        text: "Partner with us",
        link: "/contact-us"
    },

    ]

  return (
    <div>
        <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-2 justify-start items start gap-10 py-12">
                <div className="flex flex-col gap-4 md:pr-12 pr-0">
                <div className="flex flex-row gap-2 items-center">
                    <img src={yomlogo} alt="" />
                    <p className="font-[800] text-2xl">Yomcoin</p>
                </div> 
                <p className="text-txtCol text-sm font-[600]">Yomcoin is a leading platform in the decentralized finance (DeFi) space, committed to driving innovation and positive change in the financial industry. Join us on our journey to transform the future of cross-border transactions.</p>
                <div className="flex flex-row gap-3 justify-start items-center">
                    <Link to={FacebookUrl} target="_blank">
                    <FaFacebook  size={33} fill="#fff"/>
                    </Link>
                    
                    <Link to={Xurl} target="_blank">
                    <FaX size={33} fill="#fff"/>
                    </Link>
                    <Link to={InstagramUrl} target="_blank">

                    <FaInstagram size={33} className=""  style={{backgroundColor: ""}}/>
                    </Link>
                    
                    <Link to={LinkedInUrl} target="_blank">
                    <FaLinkedin size={33}/>
                    </Link>
                    
                    <Link to={DiscordUrl} target="_blank">
                    <FaDiscord size={33}/>
                    </Link>
                    
                </div>
                </div>
                    <div className="flex flex-col md:flex-row gap-4 md:gap-0 justify-between items-start">
                        <div><p className="font-[600] text-xl pb-0 md:pb-4">Company</p>
                        <ul>
                            {complinks.map((item, index) => (
                                <li key={index} className="text-txtCol text-md font-[600] cursor-pointer">{item}</li>
                            ))}
                        </ul>
                        </div>
                        <div><p className="font-[600] text-xl pb-0 md:pb-4">Resources</p>
                        <div>
                            {reslinks.map((item, index) => (
                                <div key={index}>
                                    <Link to={item.link} target="_blank"  className="text-txtCol text-md font-[600] cursor-pointer">{item.text}</Link>
                                </div>
                                
                            ))}
                        </div>
                        </div>
                        <div><p className="font-[600] text-xl pb-0 md:pb-4">Partnership</p>
                        <ul>
                            {partlinks.map((item, index) => (
                                <div key={index}>
                                <Link to={item.link}className="text-txtCol text-md font-[500]">{item.text}</Link>
                                </div>
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