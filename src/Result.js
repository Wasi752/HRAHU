import {Link} from "react-router-dom";

function Result (){
    const cName = "border border-blue-300 w-[70%] p-8 ml-40 mb-2 text-xl text-center font-bold font-serif hover:text-blue-600";
    return(
        <div className="w-full h-screen flex">
            <div className="w-[10%] h-full"></div>
            <div className="flex flex-col justify-center ml-40 w-[50%] h-[80%] mt-20 bg-gray-100">
                <Link to="/studentresult" className={cName}>Student Result</Link>
                <Link to="/madrasaresult" className={cName}>Madrasa's Result</Link>
            </div>
            <div className="w-[10%] h-full"></div>
        </div>
    )
}
export default Result;