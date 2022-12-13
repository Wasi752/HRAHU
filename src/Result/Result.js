import { Link } from "react-router-dom";
import { useLocalStorage, useState} from "react";
import StudentResults from "./StudentResult";
import MadrasaResults from "./MadrasaResult";

const inputForRollNo = () => {
    return (
        <div>
            <p className="text-2xl text-center mt-20 font-bold font-serif">Enter Your Roll NO</p>
            <div className="mt-1 flex">
                <input
                    type="text"
                    placeholder="Roll No"
                    value={""}
                    onChange={""}
                    className="h-[7%] w-[95%] p-5 border border-blue-300 rounded-md ml-3 mt-5 mr-3"
                />
            </div>
            <div className="">
                <button
                    type="button"
                    onClick={StudentResults}
                    className="text-center text-xl text-white font-bold h-[7%] w-[94%] mt-5 bg-blue-600 hover:text-blue-300 p-4 border rounded-md ml-3 mr-3"
                >Submit
                </button>
            </div>
        </div>
    )
}
const inputForMadrasaCodeNo = () => {
    return (
        <div>
            <p className="text-2xl text-center mt-20 font-bold font-serif">Enter Your Madrasa Code NO</p>
            <div className="mt-1 flex">
                <input
                    type="text"
                    placeholder="Code No"
                    value={""}
                    onChange={""}
                    className="h-[7%] w-[95%] p-5 border border-blue-300 rounded-md ml-3 mt-5 mr-3"
                />
            </div>
            <div className="">
                <button
                    type="button"
                    onClick={MadrasaResults}
                    className="text-center text-xl text-white font-bold h-[7%] w-[94%] mt-5 bg-blue-600 hover:text-blue-300 p-4 border rounded-md ml-3 mr-3"
                >Submit
                </button>
            </div>
        </div>
    )
}

function Result() {
    const [showRoll, setShowRoll] = useState(false);
    const [showMadrasa, setShowMadrasa] = useState(false);
    const toggle = () => setShowMadrasa(!showMadrasa);
    return (
        <div className="w-full h-screen flex">
            <div className="w-[20%] h-full bg-green-200 mt-20">
                <button 
                    type="button"
                    onClick={() => setShowRoll(inputForMadrasaCodeNo)}
                    className="text-2xl font-serif font-extrabold ml-10 mb-5 mt-40 text-blue-700">Madrasa Result</button>
                <button
                    type="button" 
                    onClick={() => setShowMadrasa(inputForRollNo)}
                    className="text-2xl font-serif font-extrabold ml-10 mb-5 mt-5 text-blue-700">Student Result</button>
                {showRoll}
                {showMadrasa}
            </div>


            <div className="w-[75%] h-[80%] justify-center ml-10 mt-20 bg-gray-100">
            </div>
        </div>
    )
}
export default Result;