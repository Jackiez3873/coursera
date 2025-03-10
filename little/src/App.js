import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import BookingPage from './BookingPage';
import HomePage from './Homepage';
import Nav from './Nav';

function App() {
    return (
      <>
        <Router>
          <Nav/>
          <Routes>
            <Route path="/" element={<HomePage />}></Route>
            <Route path="/booking" element={<BookingPage />}></Route>
          </Routes>
        </Router>
        
      </>
    );
  }
  export default App;