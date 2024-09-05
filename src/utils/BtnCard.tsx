
interface BtnTypes{
    btnText: String,
    btnbgColor: String,
    btnClass: String
}

const BtnCard = ({btnText, btnbgColor, btnClass}: BtnTypes) => {
  return (
    <button className={`px-6 py-2 rounded-full text-white bg-${btnbgColor} ${btnClass}`} data-aos="zoom-in">
        {btnText}
    </button>
  )
}

export default BtnCard