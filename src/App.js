import './App.css';
import { Routes, Route } from "react-router-dom";
import Home from './Home';
import StaffSummary from './Staff/StaffList';
import StaffDetails from './Staff/StaffDetail';
import Form from './Staff/Form';
import WorksEvent from './WorksEvent';
import MadrasaResults from './Result/MadrasaResult';

function App() {
  return (
    <div className="w-full h-full">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/summary" element={<StaffSummary />} />
        <Route path="/sdetails/:menu" element={<StaffDetails />} />
        <Route path="/form" element={<Form />} />
        <Route path="/work" element={<WorksEvent />} />
        <Route path="/madrasa" element={<MadrasaResults />} />
        
        

        
      </Routes>
    </div>
  );
}

export default App;
