import BookingForm from "./BookingForm";
import React from 'react';
import Header from "./Header";
const BookingPage = (props) => {
    return (
      <>
        <BookingForm availableTimes={props.availableTimes} dispatch={props.dispatch} SubmitForm={props.SubmitForm}/>
      </>
    );
  }
  
export default BookingPage;