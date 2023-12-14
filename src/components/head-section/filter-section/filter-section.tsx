import Container from "../../../custom-components/container";
import Button from "../../../custom-components/custom-button/custom-button";


const FilterSection = ()=>{
    return(
        <Container containerStyle={'w-24 h-10  bg-[#692BEC] rounded-md min-w-[62px] flex items-center justify-around'}>
          <Button buttonStyle={"h-8 w-8 text-[1.5rem]"}>
              <i className="bi bi-filter-left text-[#ffff]"></i>
           </Button>
          <h3 className='text-[#ffff] text-lg'>
            فیلتر
          </h3>
        </Container>
    )
}

export default FilterSection;