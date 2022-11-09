import {staffdata} from "./StaffList";
import StaffDetails from "./StaffDetail";
import {Link} from "react-router-dom";
import { useEffect, useState } from 'react';
import { data } from "autoprefixer";


function StaffSummaryDiv({id, name, designation, contact_no, e_mail, image, i}){
    return (
        <div className="flex flex-row">
                <div className="text-lg ml-10 mt-5 text-left w-[60%] h-[35%]">
                    <p className="font-serif">{id}</p>
                    <p className="text-xl text-red-500 font-bold font-serif">{name}</p>
                    <p className="text-lg font-serif">{designation}</p>
                    <p className="font-serif">{contact_no}</p>
                    <p className="font-serif">{e_mail}</p>
                </div>
                
                <Link to="/sdetails" className="w-[30%] h-[35%] ml-40 mt-10 justify-right ">
                    <img src={image} alt="Staff Pictur" className="w-[60%] h-[50%] ml-1" />
                    <button 
                        className="border text-sm bg-yellow-700 font-bold text-white hover:text-green-500 pr-5 pl-5 mt-1 ml-4"
                        type="button"
                        onClick={StaffDetails()}>
                        Details
                    </button>
                </Link>
        </div> 
    );
}

function StaffSummary(){
    const [pageNo, setPageNo] = useState(1);
    const [staff, setStaff] = useState();
    
    useEffect(() => {
    const data = staffdata
    .filter((len, i) => i < (3 * pageNo) && i >= (3 * (pageNo - 1)))
    .map((a, i) => 
        <StaffSummaryDiv
        i={i + 1 + (3 * (pageNo - 1))} 
        id={a.id} 
        name={a.name} 
        designation={a.designation} 
        contact_no={a.contact_no} 
        e_mail={a.e_mail} 
        image={a.image}/>);
        setStaff(data);
    }, [pageNo]);
    
    return(
        <div className="w-full h-full flex">
            <div className="w-[20%] h-full bg-green-100">
            <p className="text-2xl font-serif font-extrabold ml-10 mb-5 mt-40 text-blue-500">Staff Summary</p>
            </div>
            <div className="flex flex-col ml-5 w-[60%] h-[80%] mt-10 bg-gray-100">
                <div><p className="justify-left">{staff}</p></div>
                <div className="">
                    <button className='w-[15%] h-full rounded bg-yellow-500 mt-10 mb-10 ml-20 p-1 text-xl'
                        onClick={() => setPageNo(pageNo - 1)} >
                        Back
                    </button>

                    <button className='w-[15%] h-full rounded bg-blue-500 mt-10 mb-10 ml-96 p-1 text-xl'
                        onClick={() => setPageNo(pageNo + 1)} >
                        Next
                    </button>
                </div>   
            </div>
            <div className="w-[20%] h-full"></div>
        </div>
    );
}
export default StaffSummary;