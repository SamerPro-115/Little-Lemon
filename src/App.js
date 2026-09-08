import { Route, Routes } from 'react-router-dom';
import './App.css';
import HomePage from './components/HomePage';
import BookingPage from './components/BookingPage';

function App() {
  return (
    <>

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/booking" element={<BookingPage />}/>
      </Routes>

    </>
  );
}

export default App;
