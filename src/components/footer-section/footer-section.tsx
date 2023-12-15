import Button from "../../custom-components/custom-button/custom-button";
import Container from "../../custom-components/container";



const FooterSection = ()=>{
    return(
        <footer className="sticky bottom-0 w-full h-16 bg-white block">
            <Container containerStyle=" flex justify-around items-center ">
               <Button buttonStyle="focus:text-[#692BEC]">
                <i className="bi bi-person text-[1.7rem]"></i>
                <p className='text-xs px-2 font-normal'>پروفایل</p>
               </Button>
               <Button buttonStyle="focus:text-[#692BEC]">
                <i className="bi bi-chat-right-dots text-[1.5rem]"></i>
                <p className='text-xs px-2 font-normal'>فالو آپ</p>
               </Button>
               <Button buttonStyle="focus:text-[#692BEC]">
                 <i className="bi bi-clipboard2-pulse text-[1.5rem]"></i>
                 <p className='text-xs px-2 font-normal'>پزشکان</p>
               </Button>
               <Button buttonStyle="focus:text-[#692BEC]">
                 <i className="bi bi-house text-[1.6rem]"></i>
                 <p className='text-xs px-2 font-normal'>صفحه اصلی</p>
               </Button>
            </Container>
        </footer>
    )
}


export default FooterSection;