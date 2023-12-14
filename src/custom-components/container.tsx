
type ContainerType = {
    containerStyle: string
    children?: React.ReactNode
}


//to configer container component from outside and use in different situation !

const Container = (props: ContainerType)=>{
    const { containerStyle } = props
    
    return(
        <div className={`${containerStyle}`}>
            {props.children}
        </div>
    )
}

export default Container