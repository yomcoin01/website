
import { FaArrowAltCircleRight } from 'react-icons/fa'
import { commside } from '../../assets'

interface SubFootypes {
    title: String
}

const SubFooter = ({title}: SubFootypes) => {
  return (
    <div className="container py-24 relative">
          <div className="bg-gradient-to-r from-[#DF4DDB] to-[#935DFA]  rounded-xl py-12">
          <img src={commside} alt=""  className="w-48 h-48 absolute top-24 -left-4"/>
            <div className="grid grid-cols-1 md:grid-cols-2 justify-between items-center bg-transparent gap-12 px-8">
                <div className="flex flex-row items-center gap-2 bg-transparent">
                    
                    <h3 className="md:text-5xl text-xl font-[700] ps-24">{title}</h3>
                </div>
                <div className="bg-transparent">
                    <p>We value our community and are dedicated to providing excellent support. Join our growing community to stay informed, share feedback, and connect with other Yomcoin enthusiasts.</p>
                    <button className="flex flex-row gap-2 items-center">Join Now <FaArrowAltCircleRight /> </button>
                </div>
            </div>
        </div> 
        </div>
  )
}

export default SubFooter