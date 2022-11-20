import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HeadPosters from './components/DATA/head-slider';
import HomePage from './components/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';

export default function App() {
  return (
    <BrowserRouter>
        <Routes>
            <Route exact path='/' element={<Signup />} />
            <Route exact path='/login' element={<Login />} />
            <Route exact path='/bing' element={<HomePage HeadPosters={HeadPosters()} />} />
        </Routes>
    </BrowserRouter>
  )
}
