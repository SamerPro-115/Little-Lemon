import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

const occasions = ["Birthday", "Anniversary"];

const today = new Date();
today.setHours(0, 0, 0, 0);

// availableTimes is passed in so the "is this time still valid" check
// can reference whatever slots are actually open for the chosen date.
function buildValidationSchema(availableTimes) {
  return Yup.object({
    date: Yup.date()
      .required("Please choose a date")
      .min(today, "Date can't be in the past"),
    time: Yup.string()
      .required("Please choose a time")
      .test(
        "time-is-available",
        "That time isn't available on this date, please pick another",
        (value) => !value || availableTimes.includes(value)
      ),
    guests: Yup.number()
      .typeError("Must be a number")
      .integer("Whole numbers only")
      .min(1, "At least 1 guest")
      .max(10, "Max 10 guests")
      .required("Please enter number of guests"),
    occasion: Yup.string().required("Please select an occasion"),
  });
}

export default function BookingForm({ availableTimes = [], onDateChange, submitForm }) {
  const [submitError, setSubmitError] = React.useState("");

  const formik = useFormik({
    initialValues: {
      date: "",
      time: "",
      guests: 1,
      occasion: "",
    },
    validationSchema: buildValidationSchema(availableTimes),
    // Yup schema depends on availableTimes, which changes over time —
    // recompute validation against the latest list on every run.
    enableReinitialize: true,
    onSubmit: (values, { resetForm }) => {
      setSubmitError("");

      // submitForm (passed down from BookingPage) calls submitAPI and
      // handles navigating to the confirmation page on success. It
      // returns true/false so this component knows whether to reset
      // the form or show an error, without needing to know about the
      // API or routing itself.
      const success = submitForm(values);

      if (success) {
        resetForm();
      } else {
        setSubmitError(
          "We couldn't submit your reservation. Please try again."
        );
      }
    },
  });

  function handleDateChange(e) {
    formik.handleChange(e);
    // The previously chosen time may not exist for the new date,
    // so clear it and let the user re-pick from the refreshed list.
    formik.setFieldValue("time", "");
    if (onDateChange) {
      onDateChange(e.target.value);
    }
  }

  return (
    <form className="booking-form" onSubmit={formik.handleSubmit} noValidate>
      <div className="form-field">
        <label htmlFor="res-date">Choose date</label>
        <input
          type="date"
          id="res-date"
          name="date"
          value={formik.values.date}
          onChange={handleDateChange}
          onBlur={formik.handleBlur}
          className={formik.touched.date && formik.errors.date ? "invalid" : ""}
        />
        {formik.touched.date && formik.errors.date && (
          <span className="field-error">{formik.errors.date}</span>
        )}
      </div>

      <div className="form-field">
        <label htmlFor="res-time">Choose time</label>
        <select
          id="res-time"
          name="time"
          value={formik.values.time}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          disabled={!formik.values.date || availableTimes.length === 0}
          className={formik.touched.time && formik.errors.time ? "invalid" : ""}
        >
          <option value="" disabled>
            {!formik.values.date
              ? "Choose a date first"
              : availableTimes.length === 0
              ? "No times available this date"
              : "Select a time"}
          </option>
          {availableTimes.map((t) => (
            <option key={t} value={t}>
              {t}
            </option>
          ))}
        </select>
        {formik.touched.time && formik.errors.time && (
          <span className="field-error">{formik.errors.time}</span>
        )}
      </div>

      <div className="form-field">
        <label htmlFor="guests">Number of guests</label>
        <input
          type="number"
          id="guests"
          name="guests"
          placeholder="1"
          min="1"
          max="10"
          value={formik.values.guests}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          className={formik.touched.guests && formik.errors.guests ? "invalid" : ""}
        />
        {formik.touched.guests && formik.errors.guests && (
          <span className="field-error">{formik.errors.guests}</span>
        )}
      </div>

      <div className="form-field">
        <label htmlFor="occasion">Occasion</label>
        <select
          id="occasion"
          name="occasion"
          value={formik.values.occasion}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          className={formik.touched.occasion && formik.errors.occasion ? "invalid" : ""}
        >
          <option value="" disabled>
            Select an occasion
          </option>
          {occasions.map((o) => (
            <option key={o} value={o}>
              {o}
            </option>
          ))}
        </select>
        {formik.touched.occasion && formik.errors.occasion && (
          <span className="field-error">{formik.errors.occasion}</span>
        )}
      </div>

      {submitError && <span className="field-error submit-error">{submitError}</span>}

      <input
        type="submit"
        value="Make Your reservation"
        className="booking-submit"
        disabled={!(formik.isValid && formik.dirty)}
      />
    </form>
  );
}