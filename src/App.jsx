import './App.css';
import React from 'react';
import Home from './Components/Home/Home';
import Hobbies from './Components/Hobbies/Hobbies';
import Projects from './Components/Projects/Projects';
import Nav from './Components/Nav/Nav'
import {Routes, Route } from 'react-router-dom'


function App() {
  return (
  <>
  <Nav />
  <Routes>
    <Route path="/" element={ <Home/> }/>
    <Route path="hobbies" element={<Hobbies/> } />
    <Route path='projects' element={<Projects/>} />

  </Routes>
  
  
  </>  
  );
}

export default App;
