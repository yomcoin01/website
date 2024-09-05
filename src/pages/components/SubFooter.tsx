
import { FaArrowAltCircleRight } from 'react-icons/fa'
import { commside } from '../../assets'

interface SubFootypes {
    title: String
}

const SubFooter = ({title}: SubFootypes) => {
  return (
    <div className="container py-24 relative">
          <div className="bg-gradient-to-r from-[#DF4DDB] to-[#935DFA]  rounded-xl py-12">
          <img src={commside} alt=""  className="w-48 h-48 hidden md:block absolute top-24 -left-4"/>
            <div className="grid grid-cols-1 md:grid-cols-2 md:justify-between justify-center items-center bg-transparent md:gap-12 gap-4 px-8">
                <div className="flex flex-row items-center gap-2 bg-transparent">
                    <h3 className="md:text-5xl text-xl font-[700] md:ps-24 ps-0 text-center md:text-start">{title}</h3>
                </div>
                <div className="bg-transparent flex flex-col md:gap-3 gap-2">
                    <p className='text-center md:text-start'>We value our community and are dedicated to providing excellent support. Join our growing community to stay informed, share feedback, and connect with other Yomcoin enthusiasts.</p>
                    <div className='mx-auto md:mx-0'>
                     <button className="border-2 border-white font-[600] text-[#fff] rounded-full py-1 md:py-2 px-3 md:px-4 gap-2 items-center flex flex-row">Join Now <FaArrowAltCircleRight /> </button>   
                    </div>
                    
                </div>
            </div>
        </div> 
        </div>
  )
}

export default SubFooter