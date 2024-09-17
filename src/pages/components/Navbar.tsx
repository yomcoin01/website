import { Link, NavLink } from "react-router-dom"
import { yomlogo } from "../../assets"
import { useState } from "react"
import { FaBars, FaTimes } from "react-icons/fa";


const Navbar = () => {

    const [isOpen, setIsOpen] = useState(false);


    const NavLinks = [
        {
            id: 1,
            text: "Home",
            link: "/"
        },
        {
            id: 2,
            text: "About",
            link: "/about"
        },
        {
            id: 3,
            text: "Partnerships",
            link: "/partnership"
        },
        {
            id: 4,
            text: "Contact",
            link: "/contact-us"
        }
    ]

    const activeLink = "text-primary font-[700]"
    const normalLink = "text-white font-[700]"

  return (
    <div>
        <div className="container">
            <div className="flex justify-between items-center py-4">
                <div className="flex w-full flex-row justify-between items-center">
                <Link to="/" className="flex flex-row gap-2 items-center">
                    <img src={yomlogo} alt="" className="w-8 md:w-12 h-8 md:h-12"/>
                    <p className="font-[800] md:text-2xl text-lg">Yomcoin</p>
                </Link>
                <div className="md:hidden cursor-pointer flex items-center" onClick={() => setIsOpen(!isOpen)}>
                    {isOpen ? "" : <FaBars size={28}/>}
                </div>
                </div>
                
              <div className="hidden md:flex flex-row gap-3 items-center">
                {NavLinks.map((item) => (
                <NavLink key={item.id} to={item.link} className={({isActive}) => (isActive ? activeLink : normalLink)}>
                    {item.text}
                </NavLink>    
                ))}
                
            </div>  
            {/* Mobile Nav */}
            <div className={`md:hidden bg-[#0E0D17] text-[#fff] fixed z-50 w-full h-1/2 top-0 overflow-y-auto bottom-0 pt-12 pl-4
        duration-500 ${isOpen ? "top-0" : "top-[-100%]"}`}>

        
            <div  className="cursor-pointer absolute right-10 flex items-center"><FaTimes size={28} onClick={() => setIsOpen(false)}/></div>


            <div className="flex flex-col justify-center items-center pt-12 gap-8 mx-auto">
            {NavLinks.map((item) => (
                <div key={item.id} >
                    <Link to={item.link} className="font-[600]">{item.text}</Link>
                </div>    
                ))}
            </div>
                
                
            </div>  
            </div>
            
        </div>
    </div>
  )
}

export default Navbar