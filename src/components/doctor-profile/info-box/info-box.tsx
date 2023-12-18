import Container from "../../../custom-components/container"
import SingelBox from "./singel-box/singel-box"


const InfoBox = ()=>{

  return(
   <Container containerStyle="w-[98%] flex items-center  p-3  flex-row-reverse justify-between mx-auto">
     <Container containerStyle="w-28 h-28 p-2 rounded-lg bg-[#FFFFFF] flex flex-col pt-0 items-center  shadow-md">
        <div className={`w-10 h-12 bg-[#E9FFF4] rounded-b-md flex justify-center`}>
         <i className={`bi bi-briefcase text-[#388E3C]  text-[1.4rem]`}></i>
        </div>
        <h4 className="text-sm font-semibold mt-1 justify-between">{18}</h4>
        <p className="text-[0.8rem] font-light mt-1">سابقه طبابت</p>
    </Container>
    <Container containerStyle="w-28 h-28 p-2 rounded-lg bg-[#FFFFFF] flex flex-col pt-0 items-center  shadow-md">
        <div className={`w-10 h-12 bg-[#FDD1E0] rounded-b-md flex justify-center`}>
         <i className={`bi bi-file-text text-[#E91E63]  text-[1.4rem]`}></i>
        </div>
        <h4 className="text-sm font-semibold mt-1">{8789789789}</h4>
        <p className="text-[0.8rem] font-light mt-1">شماره نظام</p>
    </Container>
    <Container containerStyle="w-28 h-28 p-2 rounded-lg bg-[#FFFFFF] flex flex-col pt-0 items-center shadow-md">
        <div className={`w-10 h-12 bg-[#FFFADC] rounded-b-md flex justify-center`}>
         <i className={`bi bi-star text-[#FEEA3F]  text-[1.4rem]`}></i>
        </div>
        <h4 className="text-sm font-semibold mt-1">{1.8}</h4>
        <p className="text-[0.8rem] font-light mt-1">رای مراجعین</p>
    </Container>
   
  </Container>
  )
    
}

export default InfoBox