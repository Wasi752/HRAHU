import { Link } from "react-router-dom";

function Menu({ name, link }) {
    const kalar = "p-5 m-2 text-xl font-bold hover:text-blue-800 ";
    return (
        <Link to={link}><span className={kalar}>{name}</span></Link>
    );
}
const menuName = [
    "Home", 
    "Committee",
    "Boards",
    "Madrasas", 
    "Works", 
    "Exam", 
    "Publications", 
    "Dawnload", 
    "About", 
    "Contact", 
    "Recruitment"
];
const menuLink = [
    "/",
    "/summary",
    "/sdetails/:menu",
    "/work",
    "/madrasa",
    "/student/1",
    "/publication",
    "/download",
    "/about",
    "/contact",
    "/recruitment"
];
const navbar = menuName.map((x, i) => <Menu name={menuName[i]} link= {menuLink[i]}/>);

function HeaderANavbar() {
    return(
        <div className="w-full h-full">
            <img src="/hrahuImages/homebennar.jpg" className="w-full h-[20%]" />
            <div className="flex flex-row w-full mt-5 ml-5 justify-center bg-white">
                {navbar}
            </div>
        </div>
    )
}
export default HeaderANavbar;