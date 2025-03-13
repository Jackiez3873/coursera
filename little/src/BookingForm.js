import React from 'react';
import { useState } from 'react';
const BookingForm = (props) => {
  const [date, setDate] = useState();
  const [time, setTime] = useState();
  const [guests, setGuests] = useState();
  const [occassion, setOccasion] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();
    props.SubmitForm(e);
  }

  const handleChange = (e) => {
    setDate(e);
    props.dispatch(e);
  }
    return (
      
      
  <form onSubmit={handleSubmit}>
    <fieldset>
      <div>
      <label htmlFor="book-date">Choose date</label>
      <input id="book-date" value={date} onChange={(e) => {handleChange(e.target.value)}} type="date" required/>
      </div>
      <div>
      <label htmlFor="book-time">Choose Time</label>
      <select id="book-time" value={times} onChange={(e) => setTImess(e.target.value)}>
      <option value="">Select a time</option> 
         {
            props.availableTimes.availableTimes.map(availableTimes => {return <option key={availableTimes}>{availableTimes}</option>})
         }
      </select>
      </div>
      <div>        
        <label htmlFor="book-guests">Number of guests</label>
        <input id="book-guests" min='1' value={guests} onChange={(e) => setGuests(e.target.value)}type="number"/>
      </div>
      <div>
        <label htmlFor='book-occasion'>Occasion</label>
      <select id='book-occasion' key={occasion} value={occasion} onChange={e => setOccasion(e.target.value)}>
        <option>Birthday</option>
        <option>Anniversary</option>
      </select>
      </div>
    <div>
      <input aria-label='onClick' type="submit" value={"Make your reservation"}/>
    </div>
 
   

    </fieldset>
   
  

   
   
</form>
    );
  }
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<BookingForm/>);
export default BookingForm;