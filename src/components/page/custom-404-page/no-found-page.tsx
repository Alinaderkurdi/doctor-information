import Container from "../../../custom-components/container"
import { NavLink } from "react-router-dom";

//border-[2px] border-red-500
const NotFoundPage = ()=>{
    return(
        <Container containerStyle=" p-5 flex items-center justify-center w-full h-screen">
            <div className="border-2 w-72 h-72 flex flex-col items-center justify-center rounded-lg shadow-md bg-white border-[#692BEC]">
              <h1 className="text-[1.5rem] p-3 font-medium">
               404 this page is not found !
              </h1>
              <NavLink to={"/"}>
             <p className="p-2 bg-[#692BEC] text-center text-[#ffff] rounded-lg shadow-md flex-col">Back to main page</p>
              </NavLink>
            </div>
        </Container>
    )
}


export default NotFoundPage;