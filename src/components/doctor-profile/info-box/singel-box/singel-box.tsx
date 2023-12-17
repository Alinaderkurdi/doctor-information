import Container from "../../../../custom-components/container"


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
     return(
         <Container containerStyle="w-28 h-28 p-2 rounded-lg bg-[#FFFFFF] flex flex-col items-center justify-around shadow-md">
          <div className={`w-10 h-14 bg-[${iconBoxColor}] rounded-b-md flex justify-center`}>
           <i className={`bi ${iconName} text-[${iconColor}]  text-[1.4rem]`}></i>
          </div>
          <h4 className="text-sm font-semibold">{`${info}`}</h4>
          <p className="text-[0.9rem] font-light">{aboutInfoBox}</p>
         </Container>
     )
 }
 
 export default SingelBox;