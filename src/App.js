import './App.css';
import { Routes, Route } from "react-router-dom";
import Home from './Home/Home';
import HeaderANavbar from './Home/HeaderANavbar';
import StaffSummary from './Staff/StaffList';
import StaffDetails from './Staff/StaffDetail';
import Form from './Staff/StaffForm';
import WorksEvent from './WorksEvent';
import MadrasaResults from './Result/MadrasaResult';
import StudentResult from './Result/StudentResult';
import {results} from './Result/resultData';
import StudentResults from './Result/StudentResult';
import FooterAFNavbar from './Home/Footer/Footer';
import MadrasaRegForm from './Registration/MadrasaRegForm';
import MadrasaLists from './Registration/MadrasaList';
import StaffForm from './Staff/StaffForm';

function App() {
  return (
    <div className="w-full h-full">
      <HeaderANavbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/summary" element={<StaffSummary />} />
        <Route path="/summary/staff" element={<StaffForm />} />
        <Route path="/sdetails/:menu" element={<StaffDetails />} />
        <Route path="/form" element={<Form />} />
        <Route path="/work" element={<WorksEvent />} />
        <Route path="/madrasa" element={<MadrasaResults mname={results[0].mname}/>} />
        <Route path="/student/:menu" element={<StudentResults/>} />
        <Route path="/reg/madrasa" element={<MadrasaRegForm/>} />
        <Route path="/reg/madrasa/madrasalist" element={<MadrasaLists board="Wifaqul Madarisil Arabia Bangladesh"/>} />
        
      </Routes>
      <FooterAFNavbar/>
    </div>
  );
}

export default App;
