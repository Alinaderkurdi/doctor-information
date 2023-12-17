
import Button from '../../../../custom-components/custom-button/custom-button';
import Container from '../../../../custom-components/container';
import testImage from '../../../../426040919_2046 (2).jpg'
import style from "../main-section-global.module.css"


const DoctorList = ()=>{

  return(
    <Container 
    containerStyle={"w-[96%] h-24  bg-[#FFFFFF]  mt-2 mx-auto rounded-md flex items-center shadow-md min-w-[60%]"}>
      <Container containerStyle="w-10 h-10">
          <Button buttonStyle=" w-10 h-10 outline-none">
            <i className="bi bi-chevron-left text-[1.5rem] text-[#692BEC]"></i>
          </Button>
      </Container>
       <Container containerStyle={`${"mr-1 truncate  min-w-[60%] w-[95%]"} ${style['font-direction-style']}`}>
         <h5 className="text-[0.9rem] font-semibold truncate w-auto p-1">
          دکتر رضا رحیمی 
         </h5>
         <p className="text-[0.8rem] truncate font-normal w-auto p-1" >
           فوق تخصص گوارش و بیماری های گوارش
         </p>
         <p className="text-xs mt-2 w-auto mr-1">
          13 سال سابقه
         </p>
       </Container>
      <Container containerStyle="w-16 h-16 flex items-center mr-2">
          <img src={testImage} alt={'test-image '} className="h-14 w-14 rounded-full "/>
       </Container>
    </Container>
  )

}

//border-[1px] font-light border-red-500

export default DoctorList;