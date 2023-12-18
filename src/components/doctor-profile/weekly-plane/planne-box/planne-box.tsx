import Container from "../../../../custom-components/container"

type workPlaneType = {
    day: string
    hour: {
        start: string,
        end: string
       }
}


const PlanneBox = (props:workPlaneType)=>{
    const {day , hour} = props

    return(
      <Container containerStyle="w-36 h-30 border-[2px] border-[#692BEC] bg-[#FFFFFF] rounded-lg m-1 flex flex-col items-center shadow-sm truncate ">
        <h5 className="text-[#692BEC] font-semibold p-1 text-[1rem] ">{day}</h5>
        <p className="text-[0.8rem] p-1 font-semibold flex justify-center items-center ">
          <p className="p-[1px]">{hour.end}</p>
          <p className="p-[1px]">تا</p>
          <p className="p-[1px]">{hour.start}</p>
        </p>
      </Container>
    )
               

}

export default PlanneBox