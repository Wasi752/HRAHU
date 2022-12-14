import { Link } from "react-router-dom";
import { useState } from "react";


function InputForRollNo() {
    const [roll, setRoll] = useState();
    return (
        <div>
            <p className="text-2xl text-center mt-20 font-bold font-serif text-red-800">Enter Your Roll NO</p>
            <div className="mt-1 flex">
                <input
                    type="number"
                    placeholder="Roll No"
                    value={roll}
                    onChange={e => setRoll(e.target.value)}
                    className="h-[7%] w-[95%] p-5 border border-blue-300 rounded-md ml-3 mt-5 mr-3"
                />
            </div>
            <div className="">
                <Link to={`/result/student/${roll}`} ><button
                    type="button"
                    className="text-center text-xl text-white font-bold h-[7%] w-[94%] mt-5 bg-blue-600 hover:text-blue-300 p-4 border rounded-md ml-3 mr-3"
                >Submit
                </button></Link>
            </div>
        </div>
    )
}

function InputForMadrasaCodeNo() {
    const [mresult, setMResult] = useState();
    return (
        <div>
            <p className="text-2xl text-center mt-20 font-bold font-serif text-red-800">Enter Your Madrasa Code NO</p>
            <div className="mt-1 flex">
                <input
                    type="text"
                    placeholder="Code No"
                    value={mresult}
                    onChange={e => setMResult(e.target.value)}
                    className="h-[7%] w-[95%] p-5 border border-blue-300 rounded-md ml-3 mt-5 mr-3"
                />
            </div>
            <div className="">
                <Link to={`/result/madrasa/${mresult}`}>
                    <button
                        type="button"
                        className="text-center text-xl text-white font-bold h-[7%] w-[94%] mt-5 bg-blue-600 hover:text-blue-300 p-4 border rounded-md ml-3 mr-3"
                    >Submit
                    </button></Link>
            </div>
        </div>
    )
}

function Result() {
    const [showRoll, setShowRoll] = useState(false);
    const [showMadrasa, setShowMadrasa] = useState(false);
    return (
        <div className="w-full h-screen flex">
            <div className="w-[20%] h-[80%] bg-blue-500 mt-20 ml-56">
                <button
                    type="button"
                    onClick={() => setShowMadrasa(<InputForMadrasaCodeNo/>)}
                    className="text-2xl font-serif font-extrabold ml-20 mb-5 mt-40 text-white">Madrasa Result</button>
                <button
                    type="button"
                    onClick={() => setShowRoll(<InputForRollNo/>)}
                    className="text-2xl font-serif font-extrabold ml-20 mb-5 mt-5 text-white">
                    Student Result
                </button>


            </div>
            <div className="w-[60%] h-[80%]  ml-10 mt-20 bg-gray-100">
                <div className="w-[50%] ml-56 mt-40">{showRoll}</div>
                <div className="w-[50%] ml-56 mt-40">{showMadrasa}</div>
            </div>
            <div className="w-[20%] h-[80%] mt-20"></div>

        </div>
    )
}
export default Result;