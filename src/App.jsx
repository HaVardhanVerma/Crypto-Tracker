import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Header from './Components/Header/Header'
import Main from './Components/LandingPage/Main/Main';
import ReactDOM from "react-dom/client";
import { formControlClasses } from '@mui/material'
import './App.css'
import HomePage from './Pages/Home/Home'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DashboardPage from './Pages/DashboardPage/Dashboard'
import Coins from './Pages/Coins/Coins';
import ComparePage from './Pages/Compare/ComparePage';


function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/dashboard" element={<DashboardPage />}></Route>
        <Route path="/coins/:id" element={<Coins />}></Route>
        <Route path="/compare" element={<ComparePage />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
