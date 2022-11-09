import { Link } from "react-router-dom";

function Home() {
    const cName = "border border-blue-300 w-[50%] p-3 ml-40 mb-2 text-xl text-center font-bold font-serif hover:text-blue-600";
    return (
        <div className="w-full h-screen flex">
            <div className="w-[10%] h-full"></div>
            <div className="flex flex-col justify-center ml-40 w-[50%] h-[80%] mt-20 bg-gray-100">
            <p className="text-3xl text-center mb-5 font-serif text-blue-500">Human Resource Department</p>
                <Link to="/summary" className={cName}>Staff Info</Link>
                <Link to="/counter" className={cName}>Pay Scal</Link>
                <Link to="/fetch" className={cName}>Work Flow</Link>
                <Link to="/time" className={cName}>Exam & Certificate</Link>
                <Link to="/color" className={cName}>Rulls & Regulation</Link>
                <Link to="/bulb" className={cName}>Office Time & Present Count</Link>
                <Link to="/effect" className={cName}>Event</Link>
            </div>
            <div className="w-[10%] h-full"></div>
        </div>
    )
};
export default Home;