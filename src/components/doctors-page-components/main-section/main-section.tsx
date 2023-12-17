import DoctorList from "./doctors-list/doctor-list";
import { NavLink } from "react-router-dom";


//when this page is mount in dom send http to the end point to get all data about doctors 
//and every doctor name is a end point and when that end point is active in url we can get specific data about doctor !
 


const MainSection = ()=>{
    return(
        <main className="w-full  min-h-full mt-3 sm:max-w-lg sm:mx-auto">
            <h3 className="mr-2"  style={{direction :'rtl'}}>
                لیست پزشکان
            </h3>
           <NavLink to={`/doctor-profile/${"a"}`}>
            <DoctorList />
           </NavLink>
           <NavLink to={`/doctor-profile/${"b"}`}>
            <DoctorList />
           </NavLink>
           <NavLink to={`/doctor-profile/${"c"}`}>
            <DoctorList />
           </NavLink>
           <NavLink to={`/doctor-profile/${"d"}`}>
            <DoctorList />
           </NavLink>
           <NavLink to={`/doctor-profile/${"e"}`}>
            <DoctorList />
           </NavLink>
           <NavLink to={`/doctor-profile/${"f"}`}>
            <DoctorList />
           </NavLink>
           <NavLink to={`/doctor-profile/${"g"}`}>
            <DoctorList />
           </NavLink>
           <NavLink to={`/doctor-profile/${"h"}`}>
            <DoctorList />
           </NavLink>
           <NavLink to={`/doctor-profile/${"j"}`}>
            <DoctorList />
           </NavLink>
        </main>
    )
}

export default MainSection;