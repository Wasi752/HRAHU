import { Link } from "react-router-dom";
import HeaderANavbar from "../HeaderANavbar";
import {menuName, menuLink, navbar } from "../HeaderANavbar";

function FMenu({ name, link }) {
    const kalar = "p-5 m-2 text-xl font-bold hover:text-blue-800 ";
    return (
        <Link to={link}><span className={kalar}>{name}</span></Link>
    );
}

function FooterAFNavbar() {
    return(
        <div className="w-full h-full">
            <div className="flex flex-row w-full mt-5 ml-5 justify-center bg-white">
                {navbar}
            </div>
            <img src="/hrahuImages/header2.jpg" className="w-full h-[20%]" />
        </div>
    )
}
export default FooterAFNavbar;