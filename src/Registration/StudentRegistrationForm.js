import { useState } from "react";
import useAuthentication from "../util";

const inputClass = "h-[10%] w-[65%] p-4 border border-blue-300 rounded-md m-1";
const lableClass = "ml-0 pr-2 mt-5 text-xl font-bold";
const divClassRight = "flex flex-col w-full h-full ml-40";
const divClassLeft = "flex flex-col w-full h-full ml-44";

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
function StudentRegistrationForm() {
    const [name, setName] = useState("");
    const [nameArabic, setNameArabic] = useState("");
    const [nameEnglish, setNameEnglish] = useState("");
    const [father, setFather] = useState("");
    const [village, setVillage] = useState("");
    const [postOffice, setPostOffice] = useState("");
    const [policeStation, setPoliceStation] = useState("");
    const [district, setDistrict] = useState("");
    const [stdType, setSTypy] = useState("");
    const [Phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    const [image, setImage] = useState("");
    const [brith, setBrith] = useState("");
    const [nid, setNid] = useState("");
    useAuthentication();
    const submit = () => {
        if (name.length < 4) {
            window.alert('Name must be contain atleast 3 Characters');
            return;
        }
        getB64(image, (imageString) => {
            const user = {
                name: name,
                name_arabic: nameArabic,
                name_english: nameEnglish,
                father: father,
                village: village,
                postOffice: postOffice,
                policeStation: policeStation,
                district: district,
                stdType: stdType,
                contact_no: Phone,
                e_mail: email,
                image: imageString,
                brith: brith,
                nid: nid,
            }
            fetch('http://localhost:3001/studentRegistration', {
                method: 'POST', // or 'PUT'
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(user),
            })
                .then((response) => window.alert("Data With Image are Uploaded"));
        }
        );

    };
    return (
        <div className="w-full h-full flex mt-10 mb-56">
            <div className="w-[10%] h-full"></div>

            <div className="w-[80%] h-full bg-gray-100 ">
                <p className="mt-1 mb-10 text-4xl text-red-700 font-bold font-serif text-center">Enter Student Information</p>
                <div className="flex w-full h-full divide-x-2 divide-slate-500">
                    <div className="mt-1 flex flex-col w-full h-full ">
                        <div className={divClassLeft}>
                            <label className={lableClass}>01. Name :</label>
                            <input type="text" value={name} onChange={e => setName(e.target.value)} className={inputClass} />
                        </div>
                        <div className={divClassLeft}>
                            <label className={lableClass}>03. Name in Arabic :</label>
                            <input type="text" value={nameArabic} onChange={e => setNameArabic(e.target.value)} className={inputClass} />
                        </div>
                        <div className={divClassLeft}>
                            <label className={lableClass}>05. name in English :</label>
                            <input type="text" value={nameEnglish} onChange={e => setNameEnglish(e.target.value)} className={inputClass} />
                        </div>
                        <div className={divClassLeft}>
                            <label className={lableClass}>07. Contact No :</label>
                            <input type="text" value={Phone} onChange={e => setPhone(e.target.value)} className={inputClass} />
                        </div>
                        <div className={divClassLeft}>
                            <label className={lableClass}>09. E-mail :</label>
                            <input type="text" value={email} onChange={e => setEmail(e.target.value)} className={inputClass} />
                        </div>
                        <div className={divClassLeft}>
                            <label className={lableClass}>11. Date of Birth :</label>
                            <input type="date" value={brith} onChange={e => setBrith(e.target.value)} className={inputClass} />
                        </div>
                        <div className={divClassLeft}>
                            <label className={lableClass}>15. NID No :</label>
                            <input type="text" value={nid} onChange={e => setNid(e.target.value)} className={inputClass} />
                        </div>
                    </div>
                    <div className={"mt-1 flex flex-col w-full h-full ml-40"}>
                        <div className={divClassRight}>
                            <label className={lableClass}>02. Student Type:</label>
                            <input type="text" value={stdType} onChange={e => setSTypy(e.target.value)} className={inputClass} />
                        </div>
                        <div className={divClassRight}>
                            <label className={lableClass}>04. Fother Name :</label>
                            <input type="text" value={father} onChange={e => setFather(e.target.value)} className={inputClass} />
                        </div>
                        <div className={divClassRight}>
                            <label className={lableClass}>06. Village :</label>
                            <input type="text" value={village} onChange={e => setVillage(e.target.value)} className={inputClass} />
                        </div>
                        <div className={divClassRight}>
                            <label className={lableClass}>08. Post Office :</label>
                            <input type="text" value={postOffice} onChange={e => setPostOffice(e.target.value)} className={inputClass} />
                        </div>
                        <div className={divClassRight}>
                            <label className={lableClass}>10. Police Station :</label>
                            <input type="text" value={policeStation} onChange={e => setPoliceStation(e.target.value)} className={inputClass} />
                        </div>
                        <div className={divClassRight}>
                            <label className={lableClass}>12. District :</label>
                            <input type="text" value={district} onChange={e => setDistrict(e.target.value)} className={inputClass} />
                        </div>
                        <div className={divClassRight}>
                            <label className={lableClass}>14. Image :</label>
                            <input type="file"
                                onChange={e => setImage(e.target.files[0])}
                                className={inputClass} />
                        </div>
                    </div>
                </div>
                <div className={divClassRight}>
                    <button
                        type="button"
                        onClick={submit}
                        className="text-center text-2xl text-white font-bold h-[10%] w-[84%] p-4 border border-blue-300 rounded-md ml-5 mb-10 mr-3 mt-10 bg-blue-600 hover:text-blue-300">Submit</button>
                </div>
            </div>
            <div className="w-[10%]" ></div>
        </div>
    );
}
export default StudentRegistrationForm;