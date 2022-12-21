import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import StudentRegistrationForm from "./StudentRegistrationForm";

function FazilatResult({ id, i, mname, sroll, reg, name, fname, mcode, dateBirth, total, divi }) {
    const [show, setShow] = useState(false);
    const tbl = "ml-20 mt-3 text-left text-xl mb-3";
    const nameClass = "text-3xl text-green-900 font-bold ml-20 mt-10 text-left";
    return (
        <div className="w-[90%] h-[80%] justify-center ml-24 mt-5 bg-gray-100">
            <p className="text-4xl text-center pt-10 font-bold font-serif text-blue-900">Fazilat Exam Information</p>
            <p className="text-3xl text-center font-bold font-serif text-green-900">for Registration of Dawra-e Hadis Examination-1443/2022</p>
            <p className="text-2xl text-center mt-1 font-bold mb-5 font-serif">Al-Haiatul Ulya Lil-Jamiatil Qawmia Bangladesh</p>
            <div className="flex w-[80%] h-[80%] border border-green-800 ml-40 mt-10">
                <div className="flex flex-col w-[90%] h-[80%] mt-5 bg-gray-100 ml-10 ">
                    <ol className="w-full h-[80%] mb-1">
                        <li className={nameClass}>Name : {name}</li>
                        <li className={tbl}>Father Name : {fname}</li>
                        <li className={tbl}>Madrasa Code : {mcode}</li>
                        <li className={tbl}>Madrasa Name : {mname}</li>
                        <li className={tbl}>Registration No : {reg}</li>
                        <li className={tbl}>Roll No : {sroll}</li>
                        <li className={tbl}>Exam Year : 1443/2022</li>
                        <li className={tbl}>Total Number : {total}</li>
                        <li className={tbl}>Division : {divi}</li>
                        <li className={tbl}>Date of Brith : {dateBirth}</li>   
                    </ol>
                </div>
                <div className="w-[10%] h-[80%] mt-20 bg-gray-100 ml-34 mr-2 justify-right">
                    <button className='w-full rounded bg-blue-500 p-3 text-xl mt-80 mb-5 mr-3'
                        onClick={() => setShow(<StudentRegistrationForm/>)}>
                        Next
                    </button>
                </div>
            </div>
            {show}
        </div>
    )
};
function FazilatResults() {
    
    const { menu } = useParams();
    const rollNo = parseInt(menu);
    const [page, setPage] = useState(1);
    const [fazilatInformation, setFazilatInformation] = useState();
    

    useEffect(() => {
        fetch('http://localhost:3001/fazilatResult')
            .then((response) => response.json())
            .then((data) => {
    const y = data.filter((f) => f.roll === rollNo & f.division === "মকবুল" || f.roll === rollNo & f.division === "জায়্যিদ" || f.roll === rollNo & f.division === "জায়্যিদ জিদ্দান" || f.roll === rollNo & f.division === "মুমতায" )[0];
        setFazilatInformation(
            <FazilatResult
                i={y.id}
                id={y.id}    
                roll={y.roll}
                name={y.name}
                fname={y.fname}
                mcode={y.mcode}
                mname={y.madrasa}
                reg={y.regNo}
                sroll={y.roll}
                dateBirth={y.dateOfBirth}
                total={y.total}
                divi={y.division}
                />);
        });
        
}, [page, rollNo]);
        return(
            <div className="w-full h-full flex mb-56">
                <div className="w-[5%] h-full mt-20"></div>
                <div className="flex flex-col ml-1 w-[90%] h-[80%] mt-10 bg-gray-100">
                        <p className="">{fazilatInformation ? fazilatInformation : "Not Found"}</p>
                        
                </div>
                
                <div className="w-[5%] h-full"></div>
            </div>
        );
}

export default FazilatResults;