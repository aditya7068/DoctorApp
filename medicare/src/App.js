import React from 'react';
import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import {Route, Routes, } from "react-router-dom";
import Home from './Pages/Home';
import About from './Pages/About';
import Services from './Pages/Services';
import Review from './Pages/Review';
import Books from './Pages/Books';
import Footer from './Pages/Footer';
import Doctors from './Pages/Doctors';
import Register from './Pages/Register';
import Login from './Pages/Login';
import Navbar from '../src/Component/Navbar';
import { useSelector } from 'react-redux';
import Spinner from './Component/Spinner';
import ProtectedRoute from './Component/ProtectedRoute';
import PublicRoute from './Component/PublicRoute';
import List from './Pages/List';

const App = () =>{
  const {loading} = useSelector(state => state.alerts);
  return (
    <>
    
    <Navbar/>
    {loading ? (<Spinner/>) : (
    <Routes> 
      <Route exact path="/" element={<Home/>} />
      <Route exact path="/about" element={<About/>} />
      <Route exact path="/service" element={<Services/>} />
      <Route exact path="/review" element={<Review/>} />
      <Route exact path="/books" element={<ProtectedRoute><Books/></ProtectedRoute>} />
      <Route exact path="/doctors" element={<Doctors/>} />
      <Route exact path="/register" element={<PublicRoute><Register/></PublicRoute>} />
      <Route exact path="/login" element={<PublicRoute><Login/></PublicRoute>} />
      <Route exact path="/list" element={<List/>} />
      <Route path="*" element={<Home/>} />
    </Routes>
    )}
    <Footer/>
    
    </>
  );
}

export default App;

