
import Container from "../../../custom-components/container"
import Button from "../../../custom-components/custom-button/custom-button";


//border-[1px] border-red-500

const MoreInfo = ()=>{
    return(
      <Container containerStyle="w-[96%] mx-auto">
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