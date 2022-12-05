import './App.css';
import { Routes, Route, Link } from "react-router-dom";
import Home from './Home';
import StaffSummary from './StaffList';
import StaffDetails from './StaffDetail';
import Form from './Form';


function App() {
  return (
    <div className="w-full h-full">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/summary" element={<StaffSummary />} />
        <Route path="/sdetails/:menu" element={<StaffDetails />} />
        <Route path="/form" element={<Form />} />

        
      </Routes>
    </div>
  );
}

export default App;
