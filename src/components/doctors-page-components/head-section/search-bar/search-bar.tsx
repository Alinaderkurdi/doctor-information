
import Button from "../../../../custom-components/custom-button/custom-button";
import SearchFild from "../../../../custom-components/search-fild/search-fild";



const SearchBar = ()=>{

    return(
      <SearchFild
       inputContainerClass={'w-[58%] rounded-md h-10 min-w-[172px] bg-[#E1E1E1] flex items-center'}
       inputFildStyle={'bg-[#E1E1E1] rounded-md w-[90%] h-full outline-none direction: rtl text-[0.9rem] font-medium text-[#323332]'}
       inputplaceholder={"جستجوی نام.کد پذیرش و | ..."}
      >
       <Button buttonStyle={"w-8 outline-none h-8  rounded-full bg-[#E1E1E1]"}>
        <i className="bi bi-search text-[1.2rem] text-[#323332] "></i>
       </Button>
     </SearchFild>
    )
    
}

export default SearchBar;