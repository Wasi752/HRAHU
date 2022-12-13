import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";

function StudentResult({ id, i, mname, srl, roll, name, bukhari1, bukhari2, muslim1, muslim2, tirmizi1, tirmizi2, abudaud, nasayee, tahabi, muwattan, total, divi, mscore }) {
    const tbl = "border border-green-300 pt-2 pb-2 pl-1 pr-2 ml-5 text-center text-lg border-spacing-1";
    return (
        <div className="w-[90%] h-[80%] justify-center ml-24 mt-20 bg-gray-100">
            <p className="text-4xl text-center pt-10 font-bold mb-5 font-serif text-blue-500">Dawra-e Hadis Examination-1443/2022</p>
            <p className="text-3xl text-center mt-1 font-bold mb-5 font-serif">Al-Haiatul Ulya Lil-Jamiatil Qawmia Bangladesh</p>
            <p className="text-3xl text-left ml-5 mt-20 font-bold font-serif text-red-500">Madrasa : {mname}</p>

            <div className="flex flex-col justify-center w-full h-[80%] mt-10 bg-gray-100">
                <table className="w-full h-[80%] border ml-5 text-left text-lg">
                    <tr>
                        <th className={tbl}>Srl</th>
                        <th className={tbl}>Roll</th>
                        <th className={tbl}>Name </th>
                        <th className={tbl}>Bukhari-1</th>
                        <th className={tbl}>Bukhari-2</th>
                        <th className={tbl}>Muslim-1</th>
                        <th className={tbl}>Muslim-2</th>
                        <th className={tbl}>Tirmizi-1</th>
                        <th className={tbl}>Tirmizi-2</th>
                        <th className={tbl}>Abu Dauod</th>
                        <th className={tbl}>Nasayee & Ibn Mazah</th>
                        <th className={tbl}>Tahabi</th>
                        <th className={tbl}> Muwattan</th>
                        <th className={tbl}>Total</th>
                        <th className={tbl}>Class</th>
                        <th className={tbl}>M Score</th>
                    </tr>
                    <tr>
                        <td className={tbl}> {srl}</td>
                        <td className={tbl}> {roll}</td>
                        <td className={tbl}> {name}</td>
                        <td className={tbl}> {bukhari1}</td>
                        <td className={tbl}> {bukhari2}</td>
                        <td className={tbl}> {muslim1}</td>
                        <td className={tbl}> {muslim2}</td>
                        <td className={tbl}> {tirmizi1}</td>
                        <td className={tbl}> {tirmizi2}</td>
                        <td className={tbl}> {abudaud}</td>
                        <td className={tbl}> {nasayee}</td>
                        <td className={tbl}> {tahabi}</td>
                        <td className={tbl}> {muwattan}</td>
                        <td className={tbl}> {total}</td>
                        <td className={tbl}> {divi}</td>

                    </tr>
                </table>
            </div>
        </div>
    )
};
function StudentResults() {
    
    const { menu } = useParams();
    const idNo = parseInt(menu);
    const [page, setPage] = useState(1);
    const [sResult, setSResult] = useState();

    useEffect(() => {
        fetch('http://localhost:3001/results')
            .then((response) => response.json())
            .then((data) => {
    const t = data[0];
    const y = data.filter((f) => f.id === idNo)[0];
        setSResult(
            <StudentResult
                mname={y.mname}
                i={y.id}
                id={y.id}    
                srl={y.id + 10}
                roll={y.roll + 100}
                name={y.name}
                bukhari1={y.bukhari1}
                bukhari2={y.bukhari2}
                muslim1={y.muslim1}
                muslim2={y.muslim2}
                tirmizi1={y.tirmizi1}
                tirmizi2={y.tirmizi2}
                abudaud={y.abudaud}
                nasayee={y.nasayee}
                tahabi={y.tahabi}
                muwattan={y.muwattan}
                total={y.bukhari1 + y.bukhari2 + y.muslim1 + y.muslim2 + y.tirmizi1 + y.tirmizi2 + y.abudaud + y.nasayee + y.tahabi + y.muwattan}
                />);
        });
        
}, [page]);
        return(
            <div className="w-full h-full flex mb-56">
                <div className="w-[5%] h-full mt-20"></div>
                <div className="flex flex-col ml-1 w-[90%] h-[80%] mt-10 bg-gray-100">
                        <p className="justify-left">{sResult}</p>
                    <div>
                        <Link to={"/result/student/" + (idNo - 1)} >
                            <button className='w-[15%] h-full rounded bg-yellow-500 mt-10 mb-10 ml-20 p-1 text-xl'
                                onClick={() => setPage(page - 1)} >
                                Back
                            </button>
                        </Link>
                        <Link to={"/result/student/" + (idNo + 1)} >
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

export default StudentResults;