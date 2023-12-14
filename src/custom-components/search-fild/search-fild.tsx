import Container from "../container"



type  SearchFildType = {
    inputContainerClass : string 
    inputFildStyle : string
    inputplaceholder?  : string
    children?: React.ReactNode
}



//use input fild in diffrent use cases

const SearchFild = (props:SearchFildType)=>{
    const {inputContainerClass , inputFildStyle , inputplaceholder} = props
    
    return(
        <Container containerStyle={inputContainerClass}>
            <input
             className={inputFildStyle}
             placeholder={inputplaceholder}/>
             {props.children}
        </Container>
    )
}

export default SearchFild