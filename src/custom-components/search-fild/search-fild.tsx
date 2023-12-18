import Container from "../container"
import style from './search-fild.module.css'


type  SearchFildType = {
    inputContainerClass : string 
    inputFildStyle : string
    inputplaceholder?  : string
    children?: React.ReactNode
}


// this input fild must get function pointer for diffrent event !
//use input fild in diffrent use cases

const SearchFild = (props:SearchFildType)=>{
    const {inputContainerClass , inputFildStyle , inputplaceholder} = props
    
    return(
        <Container containerStyle={inputContainerClass}>
            <input
             style={{direction :'rtl'}}
             className={`${inputFildStyle} ${style['input-fild']}`}
             placeholder={inputplaceholder}/>
             {props.children}
        </Container>
    )
}

export default SearchFild