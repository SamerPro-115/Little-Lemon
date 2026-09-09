import React from "react";
import { Link } from "react-router-dom";
import '../confirmedBooking.css';
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function ConfirmedBooking() {
  return (
    <>
    
    <Navbar />
  
    <main>
      <section className="confirmed-booking" id="confirmed-booking">
        <div className="confirmed-booking-card">
          <span className="confirmed-icon" aria-hidden="true">
            ✓
          </span>
          <h1>Booking Confirmed!</h1>
          <p>
            Thanks for reserving a table with us. We've saved your spot and
            look forward to seeing you soon.
          </p>
          <Link to="/" className="confirmed-home-link">
            Back to Home
          </Link>
        </div>
      </section>
    </main>

 <Footer />
      </>
  );
}