import Container from "../../../custom-components/container";
import FilterSection from "./filter-section/filter-section";
import SearchBar from "./search-bar/search-bar";

//just for create responsive view ..for now i deside to render to many  div but this should change later !

//flex items-center justify-around

const HeadSection = ()=>{
    return(
        <header className=" h-20 bg-white sticky top-0 shadow-sm ">
          <Container containerStyle="flex items-center justify-around  sm:max-w-lg sm:mx-auto  pt-5">
            <FilterSection />
            <SearchBar />
          </Container>
        </header>
    )
}

export default HeadSection;