import './App.css';
import { Routes, Route } from "react-router-dom";
import Home from './Home/Home';
import HeaderANavbar from './Home/HeaderANavbar';
import StaffSummary from './Staff/StaffList';
import StaffDetails from './Staff/StaffDetail';
import WorksEvent from './WorksEvent';
import MadrasaResults from './Result/MadrasaResult';
import StudentResults from './Result/StudentResult';
import FooterAFNavbar from './Home/Footer/Footer';
import MadrasaRegForm from './Registration/MadrasaRegForm';
import MadrasaLists from './Registration/MadrasaList';
import StaffForm from './Staff/StaffForm';
import BoardList from './Registration/Board';
import Result from './Result/Result';
import { results } from './Result/resultData';
import Signin from './UserRegistration/SignIn';
import Signup from './UserRegistration/SignUp';
import Form from './Form';

function App() {
  return (
    <div className="w-full h-full">
      
      <Routes>
        <Route path="/" element={<Signup />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/home" element={<Home />} />
        <Route path="/summary" element={<StaffSummary />} />
        <Route path="/summary/staff" element={<StaffForm />} />
        <Route path="/sdetails/:menu" element={<StaffDetails />} />
        <Route path="/form" element={<Form />} />
        <Route path="/board" element={<BoardList />} />
        <Route path="/work" element={<WorksEvent />} />
        <Route path="/result" element={<Result/>} />
        <Route path="/result/student/:menu" element={<StudentResults />} />
        <Route path="/result/madrasa/:menu" element={<MadrasaResults/>}/>
        <Route path="/reg/madrasa" element={<MadrasaRegForm />} />
        <Route path="/reg/madrasa/madrasalist" element={<MadrasaLists board="Wifaqul Madarisil Arabia Bangladesh" />} />
        <Route path="/reg/student" element={<MadrasaRegForm />} />
        <Route path="/reg/studentlist" element={<MadrasaRegForm />} />
        <Route path="/form" element={<Form />} />
      </Routes>
     
    </div>
  );
}

export default App;
