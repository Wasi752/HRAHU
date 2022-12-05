import { Link } from "react-router-dom";

function WorksEvent (){
    const cName = "border border-blue-300 w-[50%] p-3 ml-40 mb-2 text-xl text-center font-bold font-serif hover:text-blue-600";
    return(
        <div className="w-full h-screen flex">
            <div className="w-[10%] h-full"></div>
            <div className="flex flex-col justify-center ml-40 w-[50%] h-[80%] mt-20 bg-gray-100">
            <p className="text-3xl text-center font-bold mb-5 font-serif text-blue-500">Works & Event</p>
                <Link to="/reg" className={cName}>Registration</Link>
                <Link to="/counter" className={cName}>Form fill Up</Link>
                <Link to="/counter" className={cName}>Center Manegment</Link>
                <Link to="/work" className={cName}>Examination</Link>
                <Link to="/result" className={cName}>Result</Link>
                <Link to="/bulb" className={cName}>Certificate</Link>
                <Link to="/effect" className={cName}>Scholarship</Link>
            </div>
            <div className="w-[10%] h-full"></div>
        </div>
    )
}
export default WorksEvent;