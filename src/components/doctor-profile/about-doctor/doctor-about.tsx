import Container from "../../../custom-components/container"
import imag from '../../../images/Screenshot 2023-12-18 163142.png'


type aboutDoctorType = {
    image?: string
    name: string
    expertise: string
}


const AboutDoctor = (props:aboutDoctorType)=>{
    const {name , expertise , image} = props
    return(
        <Container containerStyle="flex flex-row-reverse mt-2 p-2  w-[98%] mx-auto">
            <Container containerStyle="w-14 h-14 ml-3">
                <img src={imag} alt={'image'} className="w-14 h-14 rounded-full"/>
            </Container>
            <Container containerStyle="mr-1">
                <h5 className="text-[0.9rem] font-semibold p-1" style={{direction :'rtl'}}>{name}</h5>
                <p className="text-[0.9rem] truncate font-normal p-1" style={{direction :'rtl'}}>{expertise}</p>
            </Container>
        </Container>
    )

}

export default AboutDoctor;