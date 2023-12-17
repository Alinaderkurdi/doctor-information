


type custonButtonType = {
    children?: React.ReactNode
    buttonStyle : string
    setButtonState? : boolean 
}


const Button = (props: custonButtonType )=>{
    const {children , buttonStyle , setButtonState} = props
    
    return(
        <button 
        className={buttonStyle}
        disabled={setButtonState}
        >{/**to have the ability to add style based on condition */}
            {children}
        </button>
    )
}


export default Button;