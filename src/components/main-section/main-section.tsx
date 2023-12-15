import DoctorList from "./doctors-list/doctor-list";

const MainSection = ()=>{
    return(
        <main className="w-full  min-h-full mt-3">
            <h3 className="mr-2"  style={{direction :'rtl'}}>
                لیست پزشکان
            </h3>
            <DoctorList />
            <DoctorList />
            <DoctorList />
            <DoctorList />
            <DoctorList />
            <DoctorList />
            <DoctorList />
            <DoctorList />
            <DoctorList />
            <DoctorList />
            <DoctorList />
            <DoctorList />
        </main>
    )
}

export default MainSection;