import Container from "../../custom-components/container";
import DoctorProfileHead from "./doctor-profile-head/doctor-profile-head";
import DoctorAbout from "./about-doctor/doctor-about";
import WorkPlaneMain from "./weekly-plane/work-plane-main";
import MoreInfo from "./more-info/more-info";
import InfoBox from "./info-box/info-box";
import { useParams } from "react-router-dom";




const DoctorProfileMain = ()=>{
  const {id:doctorID} = useParams()

  console.log(`send http for www.iedomain/doctor-profile/${doctorID}`)
  
    return(
      <Container containerStyle="w-full sm:max-w-lg sm:mx-auto  bg-[#F4F8F8] border-[1px] border-red-500 min-h-full">
        <DoctorProfileHead />
        <DoctorAbout 
         name={'علی نادرکردی'}
         expertise={'متخصص جراحی قلب '}
        />
        <InfoBox />
        <MoreInfo />
        <WorkPlaneMain/>
      </Container>
    )
}


export default DoctorProfileMain;