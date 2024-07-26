import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter, FaYoutube } from "react-icons/fa6"
import { yomlogo } from "../../assets"


const Footer = () => {

    const complinks = ["About", "Mission", "Vision"]
    const reslinks = ["Pitch deck", "Whitepaper"]
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
                <p>Yomcoin is a leading platform in the decentralized finance (DeFi) space, committed to driving innovation and positive change in the financial industry. Join us on our journey to transform the future of cross-border transactions.</p>
                <div className="flex flex-row gap-3 justify-start items-center">
                    <FaFacebook  size={33}/>
                    <FaTwitter size={33}/>
                    <FaInstagram size={33} />
                    <FaLinkedin size={33}/>
                    <FaYoutube size={33}/>
                </div>
                </div>
                <div>
                    <div className="grid grid-cols-3 gap-3 items-start">
                        <div><p className="font-[600] text-xl pb-4">Company</p>
                        <ul>
                            {complinks.map((item, index) => (
                                <li key={index}>{item}</li>
                            ))}
                        </ul>
                        </div>
                        <div><p className="font-[600] text-xl pb-4">Resources</p>
                        <ul>
                            {reslinks.map((item, index) => (
                                <li key={index}>{item}</li>
                            ))}
                        </ul>
                        </div>
                        <div><p className="font-[600] text-xl pb-4">Partnership</p>
                        <ul>
                            {partlinks.map((item, index) => (
                                <li key={index}>{item}</li>
                            ))}
                        </ul>
                        </div>
                    </div>
                </div>
            </div>
            <hr />
            <p className="text-center py-4">© 2024 Yomcoin. All rights reserved. </p>
        </div>
    </div>
  )
}

export default Footer