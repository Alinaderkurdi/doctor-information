import DoctorList from "./doctors-list/doctor-list";
import { NavLink } from "react-router-dom";
import style from "./main-section-global.module.css"
import { useState , useEffect} from "react";
import axios from 'axios'
import Loading from "../loading/loading";
import uuid from 'react-uuid';
import Container from "../../../custom-components/container";

//when this page is mount in dom send http to the end point to get all data about doctors 
//and every doctor name is a end point and when that end point is active in url we can get specific data about doctor !
 

const MainSection = ()=>{

    const [doctorsList, setDoctorsList] = useState([])
    const [showloading , setLoading] = useState(true)

    
    useEffect(()=>{
        //to get data only this component is mount but in next version i should add refresh b to get data 
        const getData = async ()=>{
            try{
                const responce = await axios.get('https://jsonplaceholder.typicode.com/users')
                setDoctorsList(responce.data)
                setLoading(false)
            }catch(error){
                console.log(error)
                // handle the error only in console but in future i create ui to show error in ui
                console.error("An error occurred:", error);
            }
        }

        getData()

    }, [])
      

    return(
        <main className="w-full   mt-3 sm:max-w-lg sm:mx-auto flex flex-col min-h-screen">
            <h3 className={`mr-2 p-1 ${style['font-direction-style']}`}>
                لیست پزشکان
            </h3>
            {showloading ? <Loading /> : doctorsList.map((doctor:any)=>{
                return (
                    <NavLink key={uuid()} to={`/doctor-profile/${doctor.name}`}>
                        <DoctorList 
                        name={doctor.name}
                        expertise={doctor.company.name}
                        workExperience={doctor.address.suite}
                        />
                    </NavLink>
                )
            })}
        </main>
    )
}

export default MainSection;