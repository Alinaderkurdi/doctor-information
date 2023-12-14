import DoctorList from "./doctors-list/doctor-list";

const MainSection = ()=>{
    return(
        <main className="w-full  min-h-full mt-3 border-1 border-red-400">
            <h3>
                لیست پزشکان
            </h3>
            <DoctorList />
            <DoctorList />
            <DoctorList />
            <DoctorList />
        </main>
    )
}

export default MainSection;