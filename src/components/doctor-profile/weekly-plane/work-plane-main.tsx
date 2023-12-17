import Container from "../../../custom-components/container";
import PlanneBox from "./planne-box/planne-box";


const hour = {
    start : '8',
    end: '17'
  }


const WorkPlaneMain = ()=>{
    return(
     <Container containerStyle="w-[98%] mx-auto ">
        <p className="text-[0.8rem] font-semibold p-2 mt-3" style={{direction :'rtl'}}> ساعات کاری و جلسات پزشک</p>
        <Container containerStyle="w-[99%]   py-2 px-1 grid gap-2 grid-cols-3 grid-rows-3 border-[1px] border-red-500">
          <PlanneBox
           day={"شنبه"}
           hour={hour}
           />
           <PlanneBox 
           day={"یکشنبه"}
           hour={hour}
           />
           <PlanneBox 
           day={"دوشنبه"}
           hour={hour}
           />
           <PlanneBox 
           day={"سه شنبه"}
           hour={hour}
           />
           <PlanneBox 
           day={"چهارشنبه"}
           hour={hour}
           />
           <PlanneBox 
           day={"پنجشه شنبه"}
           hour={hour}
           />
           <PlanneBox
           day={"جمعه"}
           hour={hour}
           />
        </Container>
     </Container>
    )
}

export default WorkPlaneMain;