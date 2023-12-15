import FilterSection from "./filter-section/filter-section";
import SearchBar from "./search-bar/search-bar";



type headType = {
    children?: React.ReactNode

}


const HeadSection = (props:headType)=>{
    return(
        <header className="flex items-center justify-around h-20 bg-white sticky top-0">
           <FilterSection />
           <SearchBar />
        </header>
    )
}

export default HeadSection;