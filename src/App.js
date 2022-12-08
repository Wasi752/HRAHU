import './App.css';
import { Routes, Route } from "react-router-dom";
import Home from './Home/Home';
import HeaderANavbar from './Home/HeaderANavbar';
import StaffSummary from './Staff/StaffList';
import StaffDetails from './Staff/StaffDetail';
import Form from './Staff/Form';
import WorksEvent from './WorksEvent';
import MadrasaResults from './Result/MadrasaResult';
import StudentResult from './Result/StudentResult';
import {results} from './Result/resultData';
import StudentResults from './Result/StudentResult';
import FooterAFNavbar from './Home/Footer/Footer';

function App() {
  return (
    <div className="w-full h-full">
      <HeaderANavbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/summary" element={<StaffSummary />} />
        <Route path="/sdetails/:menu" element={<StaffDetails />} />
        <Route path="/form" element={<Form />} />
        <Route path="/work" element={<WorksEvent />} />
        <Route path="/madrasa" element={<MadrasaResults mname={results[0].mname}/>} />
        <Route path="/student/:mad" element={<StudentResults/>} />
        
      </Routes>
      <FooterAFNavbar/>
    </div>
  );
}

export default App;
