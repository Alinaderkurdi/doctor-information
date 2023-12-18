import Container from "../../../custom-components/container";
import PlanneBox from "./planne-box/planne-box";


const workplanne = {// this object should be resived from backend !
  day : 'شنبه',
  hour: {
    start : "8",
    end: "17"
  }

}


const WorkPlaneMain = ()=>{
    return(
     <Container containerStyle="w-[98%] mx-auto">
        <p className="text-[0.8rem] font-semibold p-2 mt-3" style={{direction :'rtl'}}> ساعات کاری و جلسات پزشک</p>
        <Container containerStyle="w-[99%] mx-auto py-2 px-1">
          <div className="flex flex-row-reverse w-[99%]  justify-center">
           <PlanneBox
           day={"شنبه"}
           hour={workplanne.hour}
           />
           <PlanneBox 
           day={"یکشنبه"}
           hour={workplanne.hour}
           />
           <PlanneBox 
           day={"دوشنبه"}
           hour={workplanne.hour}
           />
          </div>
          <div className="flex  flex-row-reverse w-[99%]  justify-center ">
          <PlanneBox 
           day={"سه شنبه"}
           hour={workplanne.hour}
           />
           <PlanneBox 
           day={"چهارشنبه"}
           hour={workplanne.hour}
           />
           <PlanneBox 
           day={"پنجشه شنبه"}
           hour={workplanne.hour}
           />
          </div>
        </Container>
     </Container>
    )
}

export default WorkPlaneMain;