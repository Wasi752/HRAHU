import StaffSummary from "./StaffList";
import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from 'react';

function StaffDetail({ i, id, name, father, mother, present_address, permanent_address, academic_achievement, languages_skills, designation, contact_no, e_mail, room_no, image }) {

    return (
        <div className="flex flex-row">
            <div className="text-lg ml-10 mt-5 text-left w-[60%] h-[35%]">
                <p className="font-serif">{id}</p>
                <p className="text-xl text-red-500 font-bold font-serif">{name}</p>
                <p className="text-lg font-serif">{father}</p>
                <p className="text-lg font-serif">{mother}</p>
                <p className="text-lg font-serif">{present_address}</p>
                <p className="text-lg font-serif">{permanent_address}</p>
                <p className="text-lg font-serif">{academic_achievement}</p>
                <p className="text-lg font-serif">{languages_skills}</p>
                <p className="text-lg font-serif">{designation}</p>
                <p className="font-serif">{contact_no}</p>
                <p className="font-serif">{e_mail}</p>
                <p className="font-serif">{room_no}</p>

            </div>
            <div className="w-[30%] h-[35%] ml-40 mt-10 justify-right ">
                <img src={"/" + image} className="w-[90%] h-[80%] ml-1" />

            </div>
        </div>
    );
}

function StaffDetails() {
    const { menu } = useParams();
    const idNo = parseInt(menu);
    const [pageNo, setPageNo] = useState(1);
    const [staff, setStaff] = useState();

    useEffect(() => {
        fetch('https://mocki.io/v1/10e2cef1-2965-41d8-b94e-984e14deb6de')
            .then((response) => response.json())
            .then((data) => {
                const y = data
                    .filter((x) => x.id === idNo)
                    .map((b, i) =>
                        <StaffDetail
                            i={i + 1 + (1 * (pageNo - 1))}
                            id={b.id}
                            name={b.name}
                            father={b.father}
                            mother={b.mother}
                            present_address={b.present_address}
                            permanent_address={b.permanent_address}
                            academic_achievement={b.academic_achievement}
                            languages_skills={b.languages_skills}
                            designation={b.designation}
                            contact_no={b.contact_no}
                            e_mail={b.e_mail}
                            room_no={b.room_no}
                            image={b.image} />);

                setStaff(y);
            });
    }, [pageNo]);

    return (
        <div className="w-full h-full flex">
            <div className="w-[20%] h-full bg-yellow-100">
                <p className="text-2xl font-serif font-extrabold ml-10 mb-5 mt-40 text-blue-500">Staff Details</p>
            </div>
            <div className="flex flex-col ml-5 w-[60%] h-[80%] mt-20 bg-gray-100">
                <div><p className="justify-left">{staff}</p></div>
                <div>
                    <Link to={"/sdetails/" + (idNo - 1)} >
                        <button className='w-[15%] h-full rounded bg-yellow-500 mt-10 mb-10 ml-20 p-1 text-xl'
                            onClick={() => setPageNo(pageNo - 1)} >
                            Back
                        </button></Link>
                    <Link to={"/sdetails/" + (idNo + 1)} >
                        <button className='w-[15%] h-full rounded bg-blue-500 mt-10 mb-10 ml-96 p-1 text-xl'
                            onClick={() => setPageNo(pageNo + 1)} >
                            Next
                        </button></Link>
                </div>
            </div>
            <div className="w-[20%] h-full"></div>
        </div>
    );
}
export default StaffDetails;