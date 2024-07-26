import { underConstruction } from "../../assets";
import { PreLoader } from "../../utils";
import { Navbar } from "../components"
import { useState, useEffect } from "react";


const AboutPg = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
      setTimeout(() => {
        setLoading(false)
      }, 2000)
    }, [])

  useEffect(() => {
      document.title = "Yomcoin | About"
    }, [])
  return (
    <>
    {loading ? (
        <PreLoader />
    ): (
        <div>
        <Navbar />
        <div className="container pt-16">
            <div className="w-full md:w-1/2 mx-auto">
                <img src={underConstruction} alt="" className="w-full"/>
            </div>
            <p className="text-2xl md:text-5xl text-center">Under <span className="text-primary">Construction</span></p>
        </div>
    </div>
    )}
    </>
  )
}

export default AboutPg