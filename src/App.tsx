import React from 'react';
import './App.css';



import Home from './components/page/home/home';
import FallowApp from './components/page/fallow-app/fallow-app';
import Doctors from './components/page/doctors/doctors';
import UserProfile from './components/page/user-profile/user-profile';
import { Routes, Route } from 'react-router-dom';
import DoctorProfileMain from './components/doctor-profile/doctor-profile-main';



function App() {
  return(
    <div className=" w-full min-h-screen">
      <Routes >
        <Route path='/home' element={<Home/>}/>
        <Route path='/fallow-app' element={<FallowApp/>}/>
        <Route path='/' element={<Doctors />}/>
        <Route path='/user-profile' element={<UserProfile />}/>
        <Route path='/doctor-profile/:id' element={<DoctorProfileMain />}/>
      </Routes>
    </div>
  )
}

export default App;