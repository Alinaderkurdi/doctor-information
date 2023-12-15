import Container from "../../../custom-components/container";
import Button from "../../../custom-components/custom-button/custom-button";

import testImage from '../../../426040919_2046 (2).jpg'

const DoctorList = ()=>{

  return(
    <Container 
    containerStyle={"w-[96%] h-24  bg-[#FFFFFF] border-red mt-2 mx-auto rounded-md flex items-center justify-between shadow-md"}>
      <Container containerStyle="w-10 h-10">
          <Button buttonStyle=" w-10 h-10 outline-none">
            <i className="bi bi-chevron-left text-[1.5rem] text-[#692BEC]"></i>
          </Button>
      </Container>
      <Container containerStyle="flex">
       <Container containerStyle="mr-2">
         <h5 className="font-normal text-[1rem]" style={{direction :'rtl'}}>
           دکتر علی نادرکردی
         </h5>
         <p className="text-base   text-[1rem] truncate" style={{direction :'rtl'}}>
           فوق تخصص همه چی ودر ریدن 
         </p>
         <p className="text-xs mt-2" style={{direction :'rtl'}}>
          13 سال سابقه
         </p>
       </Container>
       <Container containerStyle="w-20 h-20 flex items-center ml-3">
          <img src={testImage} alt={'test-image '} className="h-16 w-16 rounded-full"/>
       </Container>
      </Container>
    </Container>
  )

}

//border-[1px] font-light border-red-500

export default DoctorList;