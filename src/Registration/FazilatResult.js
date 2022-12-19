import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";

function FazilatResult({ id, i, mname, sroll, reg, name, fname, mcode, dateBirth, total, divi }) {
    const tbl = "ml-40 mt-3 text-center text-lg";
    const nameClass = "text-3xl text-green-900 font-bold ml-40 mt-40";
    return (
        <div className="w-[90%] h-[80%] justify-center ml-24 mt-20 bg-gray-100">
            <p className="text-4xl text-center pt-10 font-bold font-serif text-blue-900">Fazilat Exam Information</p>
            <p className="text-3xl text-center font-bold font-serif text-green-900">for Registration of Dawra-e Hadis Examination-1443/2022</p>
            <p className="text-2xl text-center mt-1 font-bold mb-5 font-serif">Al-Haiatul Ulya Lil-Jamiatil Qawmia Bangladesh</p>
            
            <div className="flex flex-col justify-center w-full h-[80%] mt-10 bg-gray-100">
                <ol className="w-full h-[80%] border ml-5 text-left text-lg">
                    <li className={nameClass}>Name : {name}</li>
                    <li className={tbl}>Father Name : {fname}</li>
                    <li className={tbl}>Madrasa Code : {mcode}</li>
                    <li className={tbl}>Madrasa Name : {mname}</li>
                    <li className={tbl}>Registration No : {reg}</li>
                    <li className={tbl}>Roll No : {sroll}</li>
                    <li className={tbl}>Madrasa Code : 1443/2022</li>
                    <li className={tbl}>Achieved Total Number : {total}</li>
                    <li className={tbl}>Achieved Division : {divi}</li>
                    <li className={tbl}>Date of Brith : {dateBirth}</li>
                </ol>
            </div>
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
    const y = data.filter((f) => f.roll === rollNo)[0];
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
                total={y.total}
                divi={y.division}
                />);
        });
        
}, [page, rollNo]);
        return(
            <div className="w-full h-full flex mb-56">
                <div className="w-[5%] h-full mt-20"></div>
                <div className="flex flex-col ml-1 w-[90%] h-[80%] mt-10 bg-gray-100">
                        <p className="justify-left">{fazilatInformation}</p>
                    <div>
                        <Link to={"/reg/fazilat/" + (rollNo - 1)} >
                            <button className='w-[15%] h-full rounded bg-yellow-500 mt-10 mb-10 ml-20 p-1 text-xl'
                                onClick={() => setPage(page - 1)} >
                                Back
                            </button>
                        </Link>
                        <Link to={"/reg/fazilat/" + (rollNo + 1)} >
                            <button className='w-[15%] h-full rounded bg-blue-500 mt-20 mb-10 ml-96 p-1 text-xl justify-end'
                                onClick={() => setPage(page + 1)} >
                                Next
                            </button>
                        </Link>
                    </div>
                </div>
                
                <div className="w-[5%] h-full"></div>
            </div>
        );
}

export default FazilatResults;