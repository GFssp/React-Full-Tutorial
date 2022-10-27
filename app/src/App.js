import React, { Component } from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Navbar from './components/Navbar';
import Home from './components/Home';
import Create from './components/Create';
import BlogDetails from './components/BlogDetails';

function App() {
  return (
    <Router>
    <React.Fragment>
      <Navbar />
      <div className='app-main-container'>
        <div className='content'>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/create" element={<Create />} />
            <Route exact path="/blogs/:id" element={<BlogDetails />} />
          </Routes>
        </div>
      </div>
    </React.Fragment>
    </Router>
  );
}

export default App;
