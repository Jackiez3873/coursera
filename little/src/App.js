import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import BookingPage from './BookingPage';
import HomePage from './Homepage';
import Nav from './Nav';
import { useReducer } from 'react';

function App() {

 
  const updateTimes = () => {
      fetchdata()
  }

  const initializeTimes = () => {

  }
  const submitForm = () => {

  }

  const availableTimes = useReducer(updateTimes, initializeTimes);
  

  }
  export default App;