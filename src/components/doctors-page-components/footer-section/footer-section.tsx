
import Container from "../../../custom-components/container";
import { NavLink } from "react-router-dom";
import style from './footer.module.css'


const FooterSection = ()=>{
    return(
        <footer className="sticky bottom-0 w-full h-16 bg-white block">
            <Container containerStyle=" flex justify-around items-center  sm:max-w-lg sm:mx-auto">
               <NavLink style={({ isActive, isPending})=>{
                return{
                  fontWeight: isActive ? "bold" : "",
                }
               }} to={"/user-profile"} className={`${"flex flex-col items-center"} ${style['nav-link-style']}`}>
                <i className="bi bi-person text-[1.7rem]"></i>
                <p className='text-xs px-2 font-normal'>پروفایل</p>
               </NavLink>
               <NavLink to={"/fallow-app"} className={'flex flex-col items-center'}>
                <i className="bi bi-chat-right-dots text-[1.5rem]"></i>
                <p className='text-xs px-2 font-normal'>فالو آپ</p>
               </NavLink>
               <NavLink to={"/"} className={'flex flex-col items-center'}>
                <i className="bi bi-clipboard2-pulse text-[1.5rem]"></i>
                <p className='text-xs px-2 font-normal'>پزشکان</p>
               </NavLink>
               <NavLink to={"/home"} className={'flex flex-col items-center'}>
                <i className="bi bi-house text-[1.6rem]"></i>
                <p className='text-xs px-2 font-normal sm:mx-auto'>صفحه اصلی</p>
               </NavLink>
            </Container>
        </footer>
    )
}


export default FooterSection;