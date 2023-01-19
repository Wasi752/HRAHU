import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import { BASE_URL, FETCH, GET } from "../Config";

const CLS =(value)=> 
<p className="text-lg font-serif">{value}</p>

function StaffDetail({ i, id, name, father, mother, present_address, permanent_address, academic_achievement, languages_skills, designation, contact_no, e_mail, room_no, nationality, brith, nid, image }) {

    return (
        <div className="flex flex-row">
            <div className="text-lg ml-10 mt-5 text-left w-[60%] h-[35%]">
                <p className="font-serif">{id}</p>
                <p className="text-xl text-red-500 font-bold font-serif">{name}</p>
                {CLS(father)}
                {CLS(mother)}
                {CLS(present_address)}
                {CLS(permanent_address)}
                {CLS(academic_achievement)}
                {CLS(languages_skills)}
                {CLS(designation)}
                {CLS(contact_no)}
                {CLS(e_mail)}
                {CLS('Room No:' + room_no)}
                {CLS(nationality)}
                {CLS('Date of Brith:' + brith)}
                {CLS('NID:' + nid)}
            </div>
            <div className="w-[30%] h-[35%] ml-40 mt-10 justify-right ">
                <img src={"/" + image} alt="Staff of Al-Haitul Ulya" className="w-[90%] h-[80%] ml-1" />

            </div>
        </div>
    );
}

function StaffDetails() {
    const { id } = useParams();
    const idNo = parseInt(id);
    const [pageNo, setPageNo] = useState(1);
    const [staff, setStaff] = useState();
    const navigate = useNavigate();

    const deleteData = () => {
        fetch(BASE_URL + id, {
            method: 'DELETE'
        })
            .then((response) => {
                navigate("/summary");
            });


    }
    useEffect(() => {
        
           GET('',(data) => {
                const y = data.filter((x) => x.id === idNo)[0];
                setStaff(
                    <StaffDetail
                        i={y.id}
                        {...y}
                    />
                );
            });
    }, [pageNo, idNo]);

    return (
        <div className="w-full h-full flex">
            <div className="w-[20%] h-full flex flex-row mt-20 "></div>
            <div className="flex flex-col w-[60%] h-[80%] mt-20 bg-gray-100">
                <div className="flex flex-row w-full h-full">
                    <div className="w-[80%]">
                        <p className="text-2xl font-serif font-extrabold ml-10 mb-5 mt-10 text-blue-500">Staff Details</p>
                    </div>
                    <div className="w-[20%] flex">
                    <Link to={"/sdetails/" + (idNo + "/edit")}>
                        <img src="/editIcon.jpeg" className="w-[70%] h-[30%] mt-10" alt="Update Profile"/></Link>
                        <img src="/deleteIcon.jpeg" className="w-[16%] h-[30%] mt-10 ml-5" alt="Update Profile" onClick={deleteData} />
                    </div>

                </div>


                <div>
                    <div className="justify-left">{staff}</div>

                </div>
                <div className="flex w-full">
                    <div className="w-[80%]">
                        <Link to={"/sdetails/" + (idNo - 1)} >
                            <button className='w-[12%] h-[40%] rounded bg-yellow-500 mt-10 mb-10 ml-10 p-1 text-xl'
                                onClick={() => setPageNo(pageNo - 1)} >
                                Back
                            </button></Link>
                    </div>
                    <div className="w-[20%]">
                        <Link to={"/sdetails/" + (idNo + 1)} >
                            <button className='w-[50%] h-[40%] rounded bg-blue-500 mt-10 mb-10 ml-20 p-1 text-xl'
                                onClick={() => setPageNo(pageNo + 1)} >
                                Next
                            </button></Link>
                    </div>
                </div>
            </div>
            <div className="w-[15%] h-full"></div>
        </div>
    );
}
export default StaffDetails;