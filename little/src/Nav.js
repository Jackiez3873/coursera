"use client";
import React from 'react';
import { Link } from "react-router-dom";

const Nav = () => {
    return (
      <>
        <nav>
            <div>
                <div className ='bar'></div>
                <div className ='bar'></div>
                <div className ='bar'></div>  
            </div>


            <ul>
                <li>

                    <Link to="/home">Home</Link>
                </li>
                <li>
                    <Link to="/booking">Booking</Link>
                </li>
                <li>
                    <Link to="/confirm">Confirm Booking</Link>
                </li>
            </ul>
        </nav>
        
      </>
    );
  }
  export default Nav;