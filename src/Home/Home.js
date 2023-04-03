import { Link } from "react-router-dom";
import HeaderANavbar from "./HeaderANavbar";
import FooterAFNavbar from "./Footer/Footer";
import useAuthentication from "../util";


const cls = "w-[20%] h-[80%] flex flex-col justify-center ml-16  mt-20 bg-gray-100";
const clas = "text-3xl text-center mb-5 font-bold font-serif text-blue-700";
const clss = "text-3xl text-center mt-3 mb-5 font-bold font-serif text-blue-700";

function HomePage({ itemname, link }) {
    const cName = "border border-blue-300 w-[80%] p-3 ml-10 mb-2 text-xl text-center justify-center font-bold font-serif hover:text-blue-600";
    return (
        <Link to={link} className={cName}>{itemname}</Link>
    )
}
const humanResourceLink = [
    {iname: "Committee",    link: "/committee" },
    {iname: "Boards",       link: "/board" },
    {iname: "Madrasa",      link: "/reg/madrasa/madrasalist" },
    {iname: "Negran",       link: "/negran" },
    {iname: "Mumtahin",     link: "/mumtahin" },
    {iname: "Staff",        link: "/summary" },
    {iname: "Recruitment",  link: "/recruit" },
    {iname: "Payroll",      link: "/payscale" },
    {iname: "Leave Info",   link: "/leave" }
];
const humanResourcesLink = humanResourceLink.map(x => <HomePage link={x.link} itemname={x.iname}/>);

const workLink = [
    {iname: "Registration",     link: "/reg" },
    {iname: "Form fill Up",     link: "/fillup" },
    {iname: "Center Manegment", link: "/center" },
    {iname: "Examination",      link: "/exam" },
    {iname: "Result Prepare",   link: "/" },
    {iname: "Result Publish",   link: "/result" },
    {iname: "Certificate Issue",link: "/certificate" },
    {iname: "Scholarship",      link: "/scholarship" },
    {iname: "Alumni Info",      link: "/alumni" }
];
const worksLink = workLink.map(x => <HomePage link={x.link} itemname={x.iname}/>);

const examLink = [
    {iname: "Registration",     link: "/reg" },
    {iname: "Form fill Up",     link: "/fillup" },
    {iname: "Center Manegment", link: "/center" },
    {iname: "Registration Card",link: "/regcard" },
    {iname: "Admit card",       link: "/admit" },
    {iname: "Negran",           link: "/negran" },
    {iname: "Mumtahin",         link: "/mumtahin" },
    {iname: "Inspection",       link: "/inspection" },
    {iname: "Results",          link: "/result" }
];
const examsLink = examLink.map(x => <HomePage link={x.link} itemname={x.iname}/>);

const certificateLink = [
    {iname: "Certificate",     link: "/certificate" },
    {iname: "Prov Certificate",link: "/pcertificate" },
    {iname: "Marksheet",       link: "/mark" },
    {iname: "Prov Marksheet",  link: "/pmark" },
    {iname: "Testimonial",     link: "/testi" },
    {iname: "Notice Bord",     link: "/notice" },
    {iname: "About",           link: "/about" },
    {iname: "Contact",         link: "/contact" },
    {iname: "Publication",     link: "/publication" }
];
const certificatesLink = certificateLink.map(x => <HomePage link={x.link} itemname={x.iname}/>);

function Home() {
    useAuthentication();
    const cName = "border border-blue-300 w-[80%] p-3 ml-10 mb-2 text-xl text-center justify-center font-bold font-serif hover:text-blue-600";
    return (
        <div>
            <HeaderANavbar/>
            <div className="w-full h-screen flex">
                
                <div className={cls}>
                    <div className="w-full h-[25%]">
                        <img src="/hrahuImages/humanr2.jpeg" className="w-full h-full" />
                    </div>
                    <p className={clas}>Human Resource</p>
                    {humanResourcesLink}
                </div>
                <div className={cls}>
                    <div className="w-full h-[25%]">
                        <img src="/hrahuImages/work1.jpeg" className="w-full h-full" />
                    </div>
                    <p className={clss}>Works</p>
                    {worksLink}
                </div>
                <div className={cls}>
                    <div className="w-full h-[25%]">
                        <img src="/hrahuImages/result1.jpeg" className="w-full h-full" />
                    </div>
                    <p className={clas}>Exams & Results</p>
                    {examsLink}
                </div>
                <div className={cls}>
                    <div className="w-full h-[25%]">
                        <img src="/hrahuImages/certificate1.jpeg" className="w-full h-full" />
                    </div>
                    <p className={clss}>Certificates</p>
                    {certificatesLink}
                </div>
                
            </div>
            <FooterAFNavbar/>
        </div>
    )
};
export default Home;