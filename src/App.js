import logo from './logo.svg';
import './App.css';
import { Routes, Route, Link } from "react-router-dom";
import Home from './Home';
import StaffSummary from './StaffSummary';
import StaffDetails from './StaffDetail';

function App() {
  return (
    <div className="w-full h-full">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/summary" element={<StaffSummary />} />
        <Route path="/sdetails" element={<StaffDetails />} />

        
      </Routes>
    </div>
  );
}

export default App;
