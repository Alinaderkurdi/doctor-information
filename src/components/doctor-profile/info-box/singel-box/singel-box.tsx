import Container from "../../../../custom-components/container"


let test = "#E9FFF4"

type infoType = {
    aboutInfoBox : string // this props is responsible for demonstrate what kind of info box should show i.e : work experience | doctor info ....
    info: string
    iconName: string
    iconColor : string
    iconBoxColor: string
 }
 
 const SingelBox = (props:infoType)=>{
     const {info, aboutInfoBox ,iconName ,iconBoxColor, iconColor} = props
    // console.log(iconColor)
    console.log(`bg-[${iconBoxColor}]`)
     return(
         <Container containerStyle="w-28 h-28 p-2 rounded-lg bg-[#FFFFFF] flex flex-col pt-0 items-center  shadow-md">
          <div className={`w-10 h-12 bg-["#FFF2F7"] rounded-b-md flex justify-center`}>
           <i className={`bi ${iconName} text-[${iconColor}]  text-[1.4rem]`}></i>
          </div>
          <h4 className="text-sm font-semibold mt-1">{`${info}`}</h4>
          <p className="text-[0.8rem] font-light mt-1">{aboutInfoBox}</p>
         </Container>
     )
 }
 
 export default SingelBox;