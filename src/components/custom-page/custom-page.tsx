import Container from "../../custom-components/container";
import { NavLink } from "react-router-dom";
//border-[1px] border-red-500


const CustomPage = ()=>{

    return(
     <div className="w-full flex   items-center justify-center">
        <Container 
         containerStyle={"w-72 h-72 border-[1.5px] border-[#692BEC] rounded-lg shadow-md bg-white text-center flex flex-col items-center justify-center mx-auto"}>
          <h1 className="text-[1.5rem] p-3 font-medium ">
             this page will add later
          </h1>
          <NavLink to={"/"}>
             <p className="p-2 bg-[#692BEC] text-center text-[#ffff] rounded-lg shadow-md flex-col">Back to main page</p>
          </NavLink>
      </Container>
     </div>
      
    )
}

export default CustomPage;