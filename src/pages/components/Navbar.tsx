import { Link } from "react-router-dom"
import { yomlogo } from "../../assets"


const Navbar = () => {
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
            text: "Partherships",
            link: "/parther"
        }
    ]
  return (
    <div>
        <div className="container">
            <div className="flex flex-row justify-between items-center py-4">
                <Link to="/" className="flex flex-row gap-2 items-center">
                    <img src={yomlogo} alt="" />
                    <p className="font-[800] text-2xl">Yomcoin</p>
                </Link>
              <div className="flex flex-row gap-3 items-center">
                {NavLinks.map((item) => (
                <div key={item.id} >
                    <Link to={item.link}>{item.text}</Link>
                </div>    
                ))}
                
            </div>  
            </div>
            
        </div>
    </div>
  )
}

export default Navbar