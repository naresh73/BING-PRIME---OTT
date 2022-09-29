import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import BingCinema from './pages/BingCinema';
import Login from './pages/Login';

import Signup from './pages/Signup';


export default function App() {
  return (
    <BrowserRouter>
        <Routes>
            <Route exact path='/login' element={<Login />} />
            <Route exact path='/' element={<Signup />} />
            <Route exact path='/bing' element={<BingCinema />} />
        </Routes>
    </BrowserRouter>
  )
}
