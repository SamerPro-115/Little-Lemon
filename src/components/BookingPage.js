/* global fetchAPI, submitAPI */
import { useReducer } from "react";
import BookingForm from "./BookingForm";
import '../booking.css';
import Navbar from "./Navbar";
import Footer from "./Footer";
import { useNavigate } from "react-router-dom";


// Reducer holds the list of time slots available for whichever date
// is currently selected. It starts out seeded with today's times
export function updateTimes(state, action) {
  switch (action.type) {
    case "UPDATE_TIMES":
      return action.times;
    default:
      return state;
  }
}
 
function initializeTimes() {
  return fetchAPI(new Date());
}
 
export default function BookingPage() {
  const [availableTimes, dispatch] = useReducer(
    updateTimes,
    [],
    initializeTimes
  );
  const navigate = useNavigate();
 
  // Called by BookingForm whenever the date field changes.
  function handleDateChange(dateString) {
    const times = fetchAPI(new Date(dateString));
    dispatch({ type: "UPDATE_TIMES", times });
  }
 
  // Submits the reservation to the API. Returns true/false so
  // BookingForm knows whether to reset the form or show an error 
  // navigation to the confirmation page only happens on success
  function submitForm(formData) {
    const success = submitAPI(formData);
 
    if (success) {
      navigate("/booking-confirmed");
    }
 
    return success;
  }
  return (
    <>
    <Navbar />
    
    <main>
      <section className="booking" id="booking">
        <div className="booking-grid">
          <div className="booking-intro">
            <span className="booking-badge">Est. 1975</span>
            <h1>Reserve a Table</h1>
            <h2>Chicago</h2>
            <p>
              Pick a date, time, and party size and we'll have your table
              ready. Let us know if it's a special occasion and we'll take
              care of the details.
            </p>

            <img
              className="booking-image"
              src="https://images.unsplash.com/photo-1592861956120-e524fc739696?w=700&h=900&fit=crop"
              alt="Table set for a reservation at Little Lemon"
            />
          </div>

          <div className="booking-card">
             <BookingForm
              availableTimes={availableTimes}
              onDateChange={handleDateChange}
              submitForm={submitForm}
            />
          </div>
        </div>
      </section>
    </main>

<Footer />
    </>
  );
}