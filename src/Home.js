import { Link } from "react-router-dom";

function Home() {
    const cName = "border border-blue-300 w-[50%] p-3 ml-60 mb-2 text-xl text-center justify-center font-bold font-serif hover:text-blue-600";
    return (
        <div className="w-full h-screen flex">
            <div className="w-[15%] h-full"></div>
            <div className="flex flex-col justify-center ml-40 w-[50%] h-[80%] mt-20 bg-gray-100">
                <p className="text-3xl text-center mb-5 font-serif text-blue-500">Human Resource Module</p>
                    <Link to="/summary" className={cName}>Staff Info</Link>
                    <Link to="/counter" className={cName}>Payroll</Link>
                    <Link to="/counter" className={cName}>Recruitment</Link>
                    <Link to="/work" className={cName}>Works & Event</Link>
                    <Link to="/color" className={cName}>ACR</Link>
                    <Link to="/bulb" className={cName}>Attendance</Link>
                    <Link to="/effect" className={cName}>Leave information</Link>
                    <Link to="/form" className={cName}>Form</Link>
            </div>
            <div className="w-[10%] h-full"></div>
        </div>
    )
};
export default Home;