import { ThreeDots} from "react-loader-spinner"
import { yomlogo } from "../assets"


const PreLoader = () => {
  return (
    <div className="h-screen w-full bg-[#0E0D17] flex justify-center items-center">
        <div className="flex flex-col items-center justify-center">
        <div  className="flex flex-row items-center">
                    <img src={yomlogo} alt="" className="w-8 md:w-12 h-8 md:h-12" />
                    <p className="font-[800] text-2xl md:text-4xl leading-1">Yomcoin</p>
                </div>
    <ThreeDots color="#630460"/>
            
        </div>
        
</div>
  )
}

export default PreLoader