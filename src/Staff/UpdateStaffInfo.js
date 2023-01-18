import { useState } from "react";
import { useParams } from "react-router-dom";


const inputClass = "h-[10%] w-[65%] p-4 border border-blue-300 rounded-md m-1";
const divClassRight = "flex flex-col w-full h-full ml-40";
const divClassLeft = "flex flex-col w-full h-full ml-56";

const getB64 = (file, cb) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = function () {
        cb(reader.result)
    };
    reader.onerror = function (error) {
        console.log('Error: ', error);
    };
}

function UpdateStaffData() {
    const [name, setName] = useState("");
    const [father, setFather] = useState("");
    const [mother, setMother] = useState("");
    const [paddress, setPAddress] = useState("");
    const [peraddres, setPerAddress] = useState("");
    const [academic, setAcademic] = useState("");
    const [language, setLanguage] = useState("");
    const [designation, setDesignation] = useState("");
    const [Phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    const [room, setRoom] = useState("");
    const [image, setImage] = useState("");
    const [nationality, setNationality] = useState("");
    const [brith, setBrith] = useState("");
    const [nid, setNid] = useState("");
    const { id } = useParams();


    const submit = () => {
        getB64(image, (imageString) => {
            const user = {
                name: name,
                father: father,
                mother: mother,
                present_address: paddress,
                permanent_address: peraddres,
                academic_achievement: academic,
                languages_skills: language,
                designation: designation,
                contact_no: Phone,
                e_mail: email,
                room_no: room,
                image: imageString,
                nationality: nationality,
                brith: brith,
                nid: nid,

            }
            fetch('http://localhost:3001/employees/' + id, {
                method: 'PUT', 
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(user),
            })
                .then((response) => window.alert("Data & image are Update"));
                

        });
    };

    return (
        <div className="w-full h-full flex mt-20 mb-56">
            <div className="w-[10%] h-full"></div>

            <div className="w-[80%] h-full bg-gray-100 ">
                <p className="mt-5 mb-10 text-3xl text-red-700 font-bold font-serif text-center">Enter Staff Information</p>
                <div className="flex w-full h-full justify-center divide-x-2 divide-slate-500">
                    <div className="mt-1 flex flex-col w-full h-full ">
                        <div className={divClassLeft}>
                            <input type="text" placeholder="Name" value={name} onChange={e => setName(e.target.value)} className={inputClass} />
                        </div>
                        <div className={divClassLeft}>
                            <input type="text" placeholder="Mother Name" value={mother} onChange={e => setMother(e.target.value)} className={inputClass} />
                        </div>
                        <div className={divClassLeft}>
                            <input type="text" placeholder="Premanent Address" value={peraddres} onChange={e => setPerAddress(e.target.value)} className={inputClass} />
                        </div>
                        <div className={divClassLeft}>
                            <input type="text" placeholder="Language Skills" value={language} onChange={e => setLanguage(e.target.value)} className={inputClass} />
                        </div>
                        <div className={divClassLeft}>
                            <input type="text" placeholder="Phone No" value={Phone} onChange={e => setPhone(e.target.value)} className={inputClass} />
                        </div>
                        <div className={divClassLeft}>
                            <input type="text" placeholder="Room No" value={room} onChange={e => setRoom(e.target.value)} className={inputClass} />
                        </div>
                        <div className={divClassLeft}>
                            <input type="text" placeholder="Nationality" value={nationality} onChange={e => setNationality(e.target.value)} className={inputClass} />
                        </div>
                        <div className={divClassLeft}>
                            <input type="text" placeholder="NID No" value={nid} onChange={e => setNid(e.target.value)} className={inputClass} />
                        </div>
                    </div>
                    <div className={"mt-1 flex flex-col w-full h-full ml-40"}>
                        <div className={divClassRight}>
                            <input type="text" placeholder="Fother Name" value={father} onChange={e => setFather(e.target.value)} className={inputClass} />
                        </div>
                        <div className={divClassRight}>
                            <input type="text" placeholder="Present Address" value={paddress} onChange={e => setPAddress(e.target.value)} className={inputClass} />
                        </div>
                        <div className={divClassRight}>
                            <input type="text" placeholder="Academic Achievement" value={academic} onChange={e => setAcademic(e.target.value)} className={inputClass} />
                        </div>
                        <div className={divClassRight}>
                            <input type="text" placeholder="Designation" value={designation} onChange={e => setDesignation(e.target.value)} className={inputClass} />
                        </div>
                        <div className={divClassRight}>
                            <input type="text" placeholder="E-mail" value={email} onChange={e => setEmail(e.target.value)} className={inputClass} />
                        </div>
                        <div className={divClassRight}>
                            <input type="file" onChange={e => setImage(e.target.files[0])} className={inputClass} />
                        </div>
                        <div className={divClassRight}>
                            <input type="text" placeholder="Date of Brith" value={brith} onChange={e => setBrith(e.target.value)} className={inputClass} />
                        </div>
                        <div className={divClassRight}>
                            <button
                                type="button"
                                name="submit"
                                onClick={submit}
                                className="text-center text-2xl text-white font-bold h-[10%] w-[65%] p-2 border border-blue-300 rounded-md ml-1 mb-5 mr-3 mt-1 bg-blue-600 hover:text-blue-300">Submit</button>
                        </div>

                    </div>
                </div>
            </div>

            <div className="w-[10%]" ></div>

        </div>
    );
}
export default UpdateStaffData;