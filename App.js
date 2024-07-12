
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Admin from './components/Admin';
import Appointment from './components/Appointment';
import Leave from './components/Admin Componts/Leave';
import Doctor from './components/Admin Componts/Doctor';
import Addemploy from './components/Admin Componts/Addemploy';
import Editprofile from './components/Admin Componts/Editprofile';
import Login from './components/Login';
import { useState } from 'react';






function App() {



  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/Admin' element={<Admin />}></Route>
          <Route path='/Appointment' element={<Appointment />}></Route>
          <Route path='/Leave' element={<Leave />}></Route>
          <Route path='/Doctor' element={<Doctor />}></Route>
          <Route path='/Addemploy' element={<Addemploy />}></Route>
          <Route path='/Editprofile' element={<Editprofile />}></Route>
          <Route path='/Login' element={<Login />}></Route>

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
