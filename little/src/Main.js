import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import BookingPage from './BookingPage';
import HomePage from './Homepage';
import Nav from './Nav';
import { useReducer } from 'react';
const Main = () => {

    const submitAPI = function(formData) {
        return true;
    }

  function updateTimes(state, data) {
    return {availableTimes: fetchAPI(new Date())}
  }

  const initialState = {availableTimes: fetchAPI(new Date())};
  const [state, dispatch] = useReducer(updateTimes, initialState);

    const navigate = useNavigate();
    function submitForm (formData) {
        if(submitAPI(formData)){
            navigate("/confirmed");
        }
    }


   
        return (
            <main>
            <Routes>
                <Routes>
                   <Route path ='/' element={<Header/>}/>
                   < Route path="/" element={<HomePage/>}></Route>
                   <Route path="/booking" element={<BookingPage availableTimes ={state} dispatch={dispatch} submitForm = {submitForm}/>}/>
                   <Route path="/confirm" element={<ConfirmBooking/>}/>
                   <Route path ='/' element={<Header/>}/>
                </Routes>
            </Routes>
            </main>
        );
}
export default Main;