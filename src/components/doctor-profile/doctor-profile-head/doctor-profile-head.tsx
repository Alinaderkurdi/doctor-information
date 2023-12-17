import Container from "../../../custom-components/container";
import Button from "../../../custom-components/custom-button/custom-button";
import { NavLink } from "react-router-dom";


//border-red-600  border-[1px]


const DoctorProfileHead = ()=>{

    return(
        <Container containerStyle="w-full bg-white flex items-center justify-between h-20 sticky top-0 shadow-sm">
         <NavLink to={"/"}>
             <i className="bi bi-chevron-left text-[1.5rem] text-[#692BEC] ml-2"></i>
         </NavLink>
         <h2 className="mr-4 font-semibold">پروفایل پزشک</h2>
        </Container>
    )
}

export default DoctorProfileHead;