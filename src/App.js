import React from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Home from './Home';
import SecondPage from './SecondPage';
import './App.css';

function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
        <Route path='/' element={< Home />} />
        <Route path='/secondPage' element={< SecondPage />} />
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
