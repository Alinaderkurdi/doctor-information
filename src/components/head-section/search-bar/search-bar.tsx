import Container from "../../../custom-components/container";
import Button from "../../../custom-components/custom-button/custom-button";
import SearchFild from "../../../custom-components/search-fild/search-fild";



const SearchBar = ()=>{

    return(
      <SearchFild
       inputContainerClass={'w-[60%] h-10 min-w-[172px]'}
       inputFildStyle={'bg-[#E1E1E1] rounded-md w-[99%] h-full outline-none direction: rtl'}
       inputplaceholder={'hello world'}
      >
       <Button buttonStyle={"w-8 outline-none h-8  rounded-full bg-[#E1E1E1] ml-[-40px]"}>
        <i className="bi bi-search text-[1.3rem] text-[#323332]"></i>
       </Button>
     </SearchFild>
    )
    
}

export default SearchBar;