
import Button from '../../../../custom-components/custom-button/custom-button';
import Container from '../../../../custom-components/container';
import testImage from '../../../../images/Screenshot 2023-12-18 163142.png'
import style from "../main-section-global.module.css"

type ListProps = {
  name: string
  expertise: string
  workExperience: string
}


const DoctorList = (props: ListProps)=>{
 
  const { name , expertise ,workExperience} = props


  const createDummyWorkExperience = (input:string)=>{
    const number =  input.replace(/[^0-9]/g,"")
    return  number.slice(0,1)
  }
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
           {name}
         </h5>
         <p className="text-[0.8rem] truncate font-normal w-auto p-1" >
          {expertise}
         </p>
         <p className="text-xs mt-2 w-auto mr-1">
          {`${createDummyWorkExperience(workExperience)} سال سابقه`}
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