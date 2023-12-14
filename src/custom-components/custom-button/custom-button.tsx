


type custonButtonType = {
    children?: React.ReactNode
    buttonStyle : string
}


const Button = (props: custonButtonType )=>{
    const {children , buttonStyle} = props
    
    return(
        <button className={buttonStyle}>{/**to have the ability to add style based on condition */}
            {children}
        </button>
    )
}


export default Button;