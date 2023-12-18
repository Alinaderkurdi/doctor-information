import Container from "../../../custom-components/container"
import Button from "../../../custom-components/custom-button/custom-button"


const GetVistTime = ()=>{
    return(
     <Container containerStyle="w-[98%] h-14  mt-auto">
         <Button 
         buttonStyle={"bg-[#D0D0D0] w-[96%] rounded-md mx-auto h-12 text-[#FFFFFF] text-[0.9rem] font-semibold mx-auto block mt-1"}
         setButtonState={true}
         >
             دریافت و ثبت نوبت 
         </Button>
     </Container>
    )
}

export default GetVistTime;