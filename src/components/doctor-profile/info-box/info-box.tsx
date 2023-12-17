import Container from "../../../custom-components/container"
import SingelBox from "./singel-box/singel-box"


const InfoBox = ()=>{

    return(
     <Container containerStyle="w-[98%] mx-auto flex items-center  p-3 border-[1px] border-red-500 flex-row-reverse">
      <SingelBox 
      aboutInfoBox={"رای مراجعین"} 
      info={'1.8'} 
      iconName={'bi-star'}
      iconColor={'#f54284'}
      iconBoxColor={'#b50747'}/>
      <SingelBox 
      aboutInfoBox={"شماره نظام"} 
      info={'12678954'}
      iconName={'bi-file-text'}
      iconColor={'#21A800'}
      iconBoxColor={'#FFF1F6'}/>
      <SingelBox 
      aboutInfoBox={"سابقه طبابت"}
      info={'18 سال'}
      iconName={'bi-briefcase'}
      iconColor={'#21A800'}
      iconBoxColor={'#E9FFF4'}/>
    </Container>
    )
    
}

export default InfoBox