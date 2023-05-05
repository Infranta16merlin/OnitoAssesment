import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NewUser from './NewUser';
import Users from './Users';
import SharedLayout from './SharedLayout';



function App() {
  


  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<SharedLayout/>}>
        <Route index element={<NewUser/>}></Route>
      <Route path='/users' element={<Users/>}></Route>
      </Route>
    </Routes>
    </BrowserRouter>
  )
}

export default App;
