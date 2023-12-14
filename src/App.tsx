import React from 'react';
import './App.css';
import HeadSection from './components/head-section/head-section';
import MainSection from './components/main-section/main-section';





function App() {
  return(
    <div className="bg-[#F4F8F8] w-full min-h-screen max-w-2xl">
      <HeadSection />
      <MainSection />
    </div>
  )
  
}

export default App;


//<Container containerStyle={'bg-[#FFFFFF] border-1  w-full'}>
//            <header className='flex items-center justify-around h-20'> 
//              <Container containerStyle={'w-24 h-10  bg-[#692BEC] rounded-md min-w-[62px] flex items-center justify-around'}>
//                <Button buttonStyle={"h-8 w-8 text-[1.5rem]"}>
//                    <i className="bi bi-filter-left text-[#ffff]"></i>
//                 </Button>
//                <h3 className='text-[#ffff] text-lg'>
//                  فیلتر
//                </h3>
//              </Container>
//              <SearchFild
//                inputContainerClass={'w-[60%] h-10 min-w-[172px]'}
//                inputFildStyle={'bg-[#E1E1E1] rounded-md w-[99%] h-full outline-none direction: rtl'}
//                inputplaceholder={'hello world'}
//              >
//               <Button buttonStyle={"w-8 outline-none h-8  rounded-full bg-[#E1E1E1] ml-[-40px]"}>
//                <i className="bi bi-search text-[1.3rem] text-[#323332]"></i>
//               </Button>
//              </SearchFild>
//            </header>
//       </Container>
