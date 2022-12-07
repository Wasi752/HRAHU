import './App.css';
import { Routes, Route } from "react-router-dom";
import Home from './Home';
import StaffSummary from './StaffList';
import StaffDetails from './StaffDetail';
import Form from './Form';
import WorksEvent from './WorksEvent';
import MadrasaResult from './MadrasaResult';

function App() {
  return (
    <div className="w-full h-full">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/summary" element={<StaffSummary />} />
        <Route path="/sdetails/:menu" element={<StaffDetails />} />
        <Route path="/form" element={<Form />} />
        <Route path="/work" element={<WorksEvent />} />
        <Route path="/madrasa" element={<MadrasaResult />} />
        
        

        
      </Routes>
    </div>
  );
}

export default App;
