import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import BookingPage from './BookingPage';
import HomePage from './Homepage';
import Nav from './Nav';
import { useReducer } from 'react';
import Header from './Header';
import BookingForm from './BookingForm';
import Main from './Main';
function App() {

 
  
  const availableTimes = useReducer(updateTimes, initializeTimes);
  
  return (
      <>
        <Nav/>
        <Main/>
      </>
    );

  }
  export default App;