import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function Menu({ name, link }) {
    const kalar = "p-5 m-2 text-xl font-bold hover:text-blue-800 ";
    return (
        <Link to={link}><span className={kalar}>{name}</span></Link>
    );
}
export const menuName = [
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
    "Recruitment",
    "Notice Board"
];
export const menuLink = [
    "/",
    "/committee",
    "/board",
    "/reg/madrasa/madrasalist",
    "/work",
    "/student/1",
    "/publication",
    "/download",
    "/about",
    "/contact",
    "/recruit",
    "/notice"
];
export const navbar = menuName.map((x, i) => <Menu name={menuName[i]} link={menuLink[i]} />);

function HeaderANavbar() {
    const navigate = useNavigate();
    const logOut = () => {
        localStorage.clear()
        navigate('/')
    }
    return (
        <div className="w-full h-full">
            <img src="/hrahuImages/homebennar.jpg" all="Darsgah" className="w-full h-[20%]" onClick={logOut} />
            <button
                type="button"
                className="mt-2 w-full pr-16 text-right"
                onClick={logOut}>
                Logout
            </button>
            <div className="flex flex-row w-full mt-5 ml-5 justify-center bg-white">
                {navbar}
            </div>
        </div>
    )
}
export default HeaderANavbar;