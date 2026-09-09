# Little Lemon

A restaurant website for **Little Lemon**, a family-owned Mediterranean restaurant in Chicago. Built with React, featuring a marketing homepage, a table reservation system with live availability, and full client-side validation.

## Features

- **Homepage** — hero banner, weekly specials, customer testimonials, restaurant story, and footer.
- **Table reservations** — a booking form with real-time available-time lookups per date, form validation, and a confirmation page on successful submission.
- **Responsive design** — breakpoints at `992px` and `768px` for tablet and mobile layouts.

## Tech Stack

| Purpose | Library |
|---|---|
| UI | [React](https://react.dev/) |
| Routing | [React Router](https://reactrouter.com/) |
| Form state | [Formik](https://formik.org/) |
| Form validation | [Yup](https://github.com/jquense/yup) |
| Testing | Jest + [React Testing Library](https://testing-library.com/react) |
| Tooling | Create React App (`react-scripts`) |


## Getting Started

### Prerequisites

- Node.js 18+ and npm

### Installation

```bash
npm install
```

### Running the app

```bash
npm start
```

Opens the app at [http://localhost:3000](http://localhost:3000).

### Running tests

```bash
npm test
```

## The Booking API

Reservation availability and submission are powered by two functions, `fetchAPI(date)` and `submitAPI(formData)`, loaded as **global functions** via a `<script>` tag in `public/index.html`:

```html
<script src="/api.js"></script>
```

> **Note:** `public/api.js` is a local copy of the course-provided API. It's loaded from a root-relative path (`/api.js`) rather than directly from `raw.githubusercontent.com`, because GitHub's raw file host serves scripts with a `Content-Type`/`X-Content-Type-Options` combination that browsers refuse to execute. Hosting the file locally avoids that entirely.

Since these functions are globals rather than ES module imports, files that call them include an ESLint hint comment at the top:

```javascript
/* global fetchAPI, submitAPI */
```

### How availability works

- On load, `BookingPage` seeds the list of available times by calling `fetchAPI(today)`.
- Whenever the date field changes, `BookingPage` refetches with the new date, and the previously selected time is cleared (since it may not be valid for the new date).
- The reservation form's Yup schema double-checks that the selected time still exists in the current list, as a second line of defense against stale state.

### How submission works

- `BookingPage` owns a `submitForm(formData)` function that calls `submitAPI(formData)`.
- On success, it navigates to `/booking-confirmed` via `useNavigate()`.
- On failure, `BookingForm` shows an inline error and preserves the user's entered values rather than resetting the form.

## Testing Notes

- `fetchAPI`/`submitAPI` are stubbed via `global.fetchAPI = jest.fn(...)` in test files, since Jest's environment never loads the `public/index.html` script tag.
- `react-router-dom`'s `useNavigate` is mocked at the module level in `BookingPage.test.js` so tests can assert on navigation without a real router.
- Formik/Yup validation is asynchronous, so tests interacting with form fields wrap `fireEvent` calls in `act()`, and error-message assertions use `findByText` (which polls) rather than `getByText` (which doesn't).

## Known Environment Notes

- This project uses Create React App (`react-scripts@5.0.1`), which bundles an older version of Jest. Newer major versions of `react-router-dom` (v7+) rely on `package.json` export conventions that this bundled Jest can't always resolve, surfacing as `Cannot find module 'react-router/dom'` in tests even though the app runs fine in the browser. `react-router-dom` is pinned to `6.23.1` to avoid this — don't bump it to a newer major version without checking test compatibility first.

## License

This project is for educational purposes as part of a front-end development course.