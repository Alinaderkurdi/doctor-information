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
      <Container containerStyle="w-36 h-30 border-[2px] border-[#692BEC] bg-[#FFFFFF] rounded-lg m-1 flex flex-col items-center shadow-sm ">
        <h5 className="text-[#692BEC] font-semibold p-2">{day}</h5>
        <p className="text-[0.8rem] font-normal p-1">{`${hour.start}${"تا"}${hour.end}`}</p>
      </Container>
    )
               

}

export default PlanneBox