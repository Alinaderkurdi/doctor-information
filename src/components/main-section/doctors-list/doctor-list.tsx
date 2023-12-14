import Container from "../../../custom-components/container";
import Button from "../../../custom-components/custom-button/custom-button";




const DoctorList = ()=>{

    return(
      <Container 
      containerStyle={"w-[96%] h-24  bg-[#FFFFFF] border-red mt-2 mx-auto rounded-md flex items-center shadow-md"}>
        <Container containerStyle="w-10 h-10">
            <Button buttonStyle=" w-10 h-10 outline-none">
              <i className="bi bi-chevron-left text-[1.5rem] text-[#692BEC]"></i>
            </Button>
        </Container>
        <Container containerStyle="">
           <h3>
              دکتر علی نادرکردی
           </h3>
           <p className="text-base">
             فوق تخصص همه چی ودر ریدن 
           </p>
           <p className="text-xs">
            13 سال سابقه
           </p>
        </Container>
        <Container containerStyle="w-20 h-20">
            <div>
                image!
            </div>
        </Container>
      </Container>
    )

}

export default DoctorList;