import React from 'react';
import { useState } from 'react';
function BookingForm(availableTimes) {
  const [availableTimes, setTime] = useState();

  const handleChange = (event) => {
    setTime(event.target.value);
  }
    return (
      <>
      
  <form>
   <label>Choose date

    <input type="date"/>
   </label>
   
   <label>Choose time
     <select value={availableTime} OnChange={handleChange}>
      <option value="17:00">17:00</option>
      <option value="18:00">18:00</option>
      <option value="19:00">19:00</option>
      <option value="20:00">20:00</option>
      <option value="21:00">21:00</option>
      <option value="22:00">22:00</option>
     </select>
   </label>
   <label>Number of guests
     <input type="number" placeholder="1" min="1" max="10" id="guests"/>
   </label>
   
   <label>Occasion
    <select value={Occasion} onChange={}>
      <option value="Birthday">Birthday</option>
      <option value="Anniversary">Anniversary</option>
   </select>
    <input type="submit" value="Make Your reservation"/>
   </label>
   
   
</form>

      </>
    );
  }
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<BookingForm/>);
export default BookingForm;