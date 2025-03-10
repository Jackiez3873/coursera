"use client";
import React from 'react';
import { Link } from "react-router-dom";
function Nav() {
    return (
      <>
        <nav>
            <ul>
                <li>

                    <Link to="/home">Home</Link>
                </li>
                <li>
                    <Link to="/booking">Booking</Link>
                </li>
            </ul>
        </nav>
        
      </>
    );
  }
  export default Nav;