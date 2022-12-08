import { Link } from "react-router-dom";


function Home() {
    const cName = "border border-blue-300 w-[80%] p-3 ml-10 mb-2 text-xl text-center justify-center font-bold font-serif hover:text-blue-600";
    return (
            <div className="w-full h-screen flex">
                <div className="w-[20%] h-[80%] flex flex-col justify-center ml-16  mt-20 bg-gray-100">
                    <div className="w-full h-[25%]">
                        <img src="/hrahuImages/humanr2.jpeg" className="w-full h-full"/>
                        </div>
                    <p className="text-3xl text-center mb-5 font-bold font-serif text-blue-700">Human Resource</p>
                    <Link to="/summary" className={cName}>Committee</Link>
                    <Link to="/summary" className={cName}>Staff Info</Link>
                    <Link to="/counter" className={cName}>Payroll</Link>
                    <Link to="/counter" className={cName}>Recruitment</Link>
                    <Link to="/work" className={cName}>Works & Event</Link>
                    <Link to="/color" className={cName}>ACR</Link>
                    <Link to="/bulb" className={cName}>Attendance</Link>
                    <Link to="/effect" className={cName}>Leave information</Link>
                    <Link to="/form" className={cName}>Form</Link>
                </div>
                <div className="w-[20%] h-[80%] flex flex-col ml-16 mt-20 bg-gray-100">
                    <div className="w-full h-[25%]">
                        <img src="/hrahuImages/work1.jpeg" className="w-full h-full"/>
                        </div>
                    <p className="text-3xl text-center mt-3 font-bold mb-5 font-serif text-blue-700">Works</p>
                    <Link to="/reg" className={cName}>Registration</Link>
                    <Link to="/counter" className={cName}>Form fill Up</Link>
                    <Link to="/counter" className={cName}>Center Manegment</Link>
                    <Link to="/work" className={cName}>Examination</Link>
                    <Link to="/madrasa" className={cName}>Result</Link>
                    <Link to="/bulb" className={cName}>Certificate</Link>
                    <Link to="/effect" className={cName}>Scholarship</Link>
                </div>
                <div className="flex flex-col justify-center ml-16 w-[20%] h-[80%] mt-20 bg-gray-100">
                    <div className="w-full h-[25%]">
                        <img src="/hrahuImages/result1.jpeg" className="w-full h-full"/>
                    </div>
                    <p className="text-3xl text-center mb-5 font-bold font-serif text-blue-700">Exams & Results</p>
                    <Link to="/summary" className={cName}>Committee</Link>
                    <Link to="/summary" className={cName}>Staff Info</Link>
                    <Link to="/counter" className={cName}>Payroll</Link>
                    <Link to="/counter" className={cName}>Recruitment</Link>
                    <Link to="/work" className={cName}>Works & Event</Link>
                    <Link to="/color" className={cName}>ACR</Link>
                    <Link to="/bulb" className={cName}>Attendance</Link>
                    <Link to="/effect" className={cName}>Leave information</Link>
                    <Link to="/form" className={cName}>Form</Link>
                </div>
                <div className="w-[20%] h-[80%] flex flex-col ml-16 mt-20 bg-gray-100">
                    <div className="w-full h-[25%]">
                        <img src="/hrahuImages/certificate1.jpeg" className="w-full h-full"/>
                    </div>
                    <p className="text-3xl text-center mt-3 font-bold mb-5 font-serif text-blue-700">Certificates</p>
                    <Link to="/reg" className={cName}>Registration</Link>
                    <Link to="/counter" className={cName}>Form fill Up</Link>
                    <Link to="/counter" className={cName}>Center Manegment</Link>
                    <Link to="/work" className={cName}>Examination</Link>
                    <Link to="/madrasa" className={cName}>Result</Link>
                    <Link to="/bulb" className={cName}>Certificate</Link>
                    <Link to="/effect" className={cName}>Scholarship</Link>
                </div>
            </div>
    )
};
export default Home;