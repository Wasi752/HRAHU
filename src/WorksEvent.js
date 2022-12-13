import { Link } from "react-router-dom";
import {results} from './Result/resultData';
import StudentResults from "./Result/StudentResult";

function WorksEvent (){
    const cName = "border border-blue-300 w-[90%] p-3 ml-3 mb-2 text-xl text-center font-bold font-serif hover:text-blue-600";
    return(
        <div className="w-full h-screen flex">
            <div className="w-[15%] h-[80%] flex flex-col mt-20 bg-gray-100">
                <p className="text-3xl text-center mt-28 font-bold mb-5 font-serif text-blue-500">Works & Event</p>
                <Link to="/reg" className={cName}>Registration</Link>
                <Link to="/counter" className={cName}>Form fill Up</Link>
                <Link to="/counter" className={cName}>Center Manegment</Link>
                <Link to="/work" className={cName}>Examination</Link>
                <Link to="/madrasa" className={cName}>Result</Link>
                <Link to="/bulb" className={cName}>Certificate</Link>
                <Link to="/effect" className={cName}>Scholarship</Link>
            </div>
            <div className="flex flex-col justify-center ml-10 w-[15%] h-[80%] mt-20 bg-gray-100">
                <Link to="/result/student/1" className={cName}>Student Result</Link>
                <Link to="/madrasa" className={cName}>Madrasa's Result</Link>
            </div>
            <div className="flex flex-col justify-center ml-10 w-[15%] h-[80%] mt-20 bg-gray-100">
                <p className="text-xl text-center font-bold font-serif">Enter Your Roll NO</p>
                <div className="mt-1 flex">   
                    <input 
                        type="text"
                        placeholder="Roll No" 
                        value= {""} 
                        onChange={""}  
                        className="h-[10%] w-[95%] p-7 border border-blue-300 rounded-md ml-3 mr-3"
                    />
                </div>
                <div className="">
                    <button 
                        type="button"
                        onClick={""}
                        className="text-center text-xl text-white font-bold h-[10%] w-[92%] bg-blue-600 hover:text-blue-300 p-7 border rounded-md ml-3 mr-3"
                        >Submit
                    </button>
                </div>
            </div>
            <div className="w-[50%] h-[80%] justify-center ml-10 mt-20 bg-gray-100"></div>
        </div>
    )
}
export default WorksEvent;