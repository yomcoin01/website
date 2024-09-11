
import { FaArrowAltCircleRight } from 'react-icons/fa'
import { commside } from '../../assets'
import { Link } from 'react-router-dom'
import {Xurl } from '../../utils/Urlinks'

interface SubFootypes {
    title: String
    subTitle: String
}

const SubFooter = ({title, subTitle}: SubFootypes) => {
  return (
    <div className="container py-24 relative">
          <div className="bg-gradient-to-r from-[#DF4DDB] to-[#935DFA]  rounded-xl py-12">
          <img src={commside} alt=""  className="w-48 h-48 hidden md:block absolute top-24 -left-4"/>
            <div className="grid grid-cols-1 md:grid-cols-2 md:justify-between justify-center items-center bg-transparent md:gap-12 gap-4 px-8">
                <div className="flex flex-row items-center text-center gap-2 bg-transparent mx-auto" data-aos="fade-up">
                    <h3 className="md:text-5xl text-2xl font-[700] md:ps-24 ps-0 text-center md:text-start">{title}</h3>
                </div>
                <div className="bg-transparent flex flex-col md:gap-3 gap-2" data-aos="fade-up">
                    <p className='text-center md:text-start font-[500]'>{subTitle}</p>
                    <div className='mx-auto md:mx-0'>
                        <Link to={Xurl} target='_blank'>
                            <button className="border-2 border-white font-[600] text-[#fff] rounded-full py-1 md:py-2 px-3 md:px-4 gap-2 items-center flex flex-row">Join Now <FaArrowAltCircleRight /> </button>   
                        </Link>
                    </div>
                    
                </div>
            </div>
        </div> 
        </div>
  )
}

export default SubFooter