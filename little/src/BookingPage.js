import BookingForm from "./BookingForm";
import React from 'react';
import Header from "./Header";
function BookingPage(submitForm) {
    return (
      <>
        <BookingForm submitForm/>
      </>
    );
  }
  
export default BookingPage;