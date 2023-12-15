import React from 'react';
import './App.css';
import HeadSection from './components/head-section/head-section';
import MainSection from './components/main-section/main-section';
import FooterSection from './components/footer-section/footer-section';




function App() {
  return(
    <div className="bg-[#F4F8F8] w-full min-h-screen max-w-2xl">
      <HeadSection />
      <MainSection />
      <FooterSection />
    </div>
  )
}

export default App;