
import Container from "../../../custom-components/container"
import Button from "../../../custom-components/custom-button/custom-button";

//<Container containerStyle="w-[98%] h-14 border-[1px] border-red-500 mt-1">
//            <Button 
//            buttonStyle={"bg-[#D0D0D0] w-[90%] rounded-md mx-auto h-12 text-[#FFFFFF] text-[0.9rem] font-semibold mx-auto block mt-1"}
//            setButtonState={true}
//            >
//                دریافت و ثبت نوبت 
//            </Button>
//          </Container>
//        </Container>
//border-[1px] border-red-500
//border-[1px] border-red-500


const MoreInfo = ()=>{
    return(
      <Container containerStyle="w-[96%] mx-auto border-[1px] border-red-500">
            <div className="flex  rounded-lg bg-white mt-4  h-10 items-center justify-between shadow-md">
              <Button buttonStyle="">
               <i className="bi bi-chevron-left text-[1.5rem] text-[#692BEC] ml-2"></i>
              </Button>
              <p className="font-medium text-[0.8rem] mr-2">درباره پزشک</p>
            </div>
            <div className="flex  rounded-lg bg-white mt-4  h-10 items-center justify-between shadow-md">
              <Button buttonStyle="">
               <i className="bi bi-chevron-left text-[1.5rem] text-[#692BEC] ml-2"></i>
              </Button>
              <p className="font-medium text-[0.8rem] mr-2">تحصیلات</p>
            </div>
            <div className="flex  rounded-lg bg-white mt-4  h-10 items-center justify-between shadow-md">
              <Button buttonStyle="">
               <i className="bi bi-chevron-left text-[1.5rem] text-[#692BEC] ml-2"></i>
              </Button>
              <p className="font-medium text-[0.8rem] mr-2">تجربیات و دستاورد ها</p>
            </div>
      </Container>
    )
}

export default MoreInfo;