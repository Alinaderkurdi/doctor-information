import Container from "../../custom-components/container";
import DoctorProfileHead from "./doctor-profile-head/doctor-profile-head";
import DoctorAbout from "./about-doctor/doctor-about";
import WorkPlaneMain from "./weekly-plane/work-plane-main";
import MoreInfo from "./more-info/more-info";
import InfoBox from "./info-box/info-box";
import { useParams } from "react-router-dom";
import GetVistTime from "./get-vist-time/get-vist-time";


//all this component can get data based on doctor name 

const DoctorProfileMain = ()=>{
  const {id:doctorID} = useParams()

  console.log(`send http for www.iedomain/doctor-profile/${doctorID}`)
  
    return(
      <Container containerStyle="w-full sm:max-w-lg sm:mx-auto  bg-[#F4F8F8]  flex flex flex-col min-h-screen">
        <DoctorProfileHead />
        <DoctorAbout 
         name={"رضا رحیمی "}
         expertise={"متخصص گوارش و بیماری های گوارش"}
        />
        <InfoBox  />
        <MoreInfo />
        <WorkPlaneMain/>
        <GetVistTime />{/** GetVistTime get a boolean from db to active*/}
      </Container>
    )
}


export default DoctorProfileMain;