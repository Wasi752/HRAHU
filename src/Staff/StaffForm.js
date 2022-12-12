
import { useState } from "react";
import data from "./data";

const inputClass = "h-[10%] w-[65%] p-4 border border-blue-300 rounded-md m-1";
const lableClass = "ml-0 pr-2 mt-5 text-xl font-bold";
const divClassRight = "flex flex-col w-full h-full ml-40";
const divClassLeft = "flex flex-col w-full h-full ml-56";
function StaffForm(){
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
    const [religion, setRrligion] = useState("");
    const [brith, setBrith] = useState("");
    const [nid, setNid] = useState("");

    const submit = ()=>{
        const user = {
            name: name,
            father: father,
            mother: mother,
            present_address: paddress,
            permanent_ddress: peraddres,
            academic_achievement: academic,
            languages_skills: language,
            designation: designation,
            contact_no: Phone,
            e_mail: email,
            room_no: room,
            image: image,
            nationality: nationality, 
            brith: brith, 
            nid: nid,
             
        };
        fetch('http://localhost:3001/create-employee', {
            method: 'POST', // or 'PUT'
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(user),
        })
            .then((response) => window.alert("Data is Sent"));
    };
    return(
        <div className="w-full h-full flex mt-20 mb-56">
            <div className="w-[10%] h-full"></div>
            
                <div className="w-[80%] h-full bg-gray-100 ">        
                    <p className="mt-5 mb-10 text-3xl text-red-700 font-bold font-serif text-left text-center">Enter Staff Information</p>
                    <div className="flex w-full h-full justify-center divide-x-2 divide-slate-500">
                        <div className="mt-1 flex flex-col w-full h-full ">
                            <div className={divClassLeft}>
                                <label className={lableClass}>01. Name :</label>    
                                <input type="text" value= {name} onChange={e => setName(e.target.value)} className={inputClass}/>
                            </div>
                            <div className={divClassLeft}>
                                <label className={lableClass}>03. Mother Name :</label>    
                                <input type="text" value= {mother} onChange={e => setMother(e.target.value)} className={inputClass}/>
                            </div>
                            <div className={divClassLeft}>
                                <label className={lableClass}>05. Premanent Address :</label>    
                                <input type="text" value= {peraddres} onChange={e => setPerAddress(e.target.value)} className={inputClass}/>
                            </div>
                            <div className={divClassLeft}>
                                <label className={lableClass}>07. Language Skills :</label>    
                                <input type="text" value= {language} onChange={e => setLanguage(e.target.value)} className={inputClass}/>
                            </div>
                            <div className={divClassLeft}>
                                <label className={lableClass}>09. Phone No :</label>    
                                <input type="text" value= {Phone} onChange={e => setPhone(e.target.value)} className={inputClass}/>
                            </div>
                            <div className={divClassLeft}>
                                <label className={lableClass}>11. Room No :</label>    
                                <input type="text" value= {room} onChange={e => setRoom(e.target.value)} className={inputClass}/>
                            </div>
                            <div className={divClassLeft}>
                                <label className={lableClass}>13. Nationality :</label>    
                                <input type="text" value= {nationality} onChange={e => setNationality(e.target.value)} className={inputClass}/>
                            </div>
                            <div className={divClassLeft}>
                                <label className={lableClass}>15. NID No :</label>    
                                <input type="text" value= {nid} onChange={e => setNid(e.target.value)} className={inputClass}/>
                            </div>
                        </div>
                        <div className={"mt-1 flex flex-col w-full h-full ml-40"}>
                            <div className={divClassRight}>
                                <label className={lableClass}>02. Fother Name :</label>    
                                <input type="text" value= {father} onChange={e => setFather(e.target.value)} className={inputClass}/>
                            </div>
                            <div className={divClassRight}>
                                <label className={lableClass}>04. Present Address :</label>    
                                <input type="text" value= {paddress} onChange={e => setPAddress(e.target.value)} className={inputClass}/>
                            </div>
                            <div className={divClassRight}>
                                <label className={lableClass}>06. Academic Achievement :</label>    
                                <input type="text" value= {academic} onChange={e => setAcademic(e.target.value)} className={inputClass}/>
                            </div>
                            <div className={divClassRight}>
                                <label className={lableClass}>08. Designation :</label>    
                                <input type="text" value= {designation} onChange={e => setDesignation(e.target.value)} className={inputClass}/>
                            </div>
                            <div className={divClassRight}>
                                <label className={lableClass}>10. E-mail :</label>    
                                <input type="text" value= {email} onChange={e => setEmail(e.target.value)} className={inputClass}/>
                            </div>
                            <div className={divClassRight}>
                                <label className={lableClass}>12. Upload Image :</label>    
                                <input type="text" value= {image} onChange={e => setImage(e.target.value)} className={inputClass}/>
                            </div>
                            <div className={divClassRight}>
                                <label className={lableClass}>14. Date of Brith :</label>    
                                <input type="text" value= {brith} onChange={e => setBrith(e.target.value)} className={inputClass}/>
                            </div>
                            <div className={divClassRight}>
                            <button 
                            type="button"
                            onClick={submit} 
                            className="text-center text-2xl text-white font-bold h-[10%] w-[65%] p-4 border border-blue-300 rounded-md ml-1 mb-5 mr-3 mt-12 bg-blue-600 hover:text-blue-300">Submit</button>
                            </div>

                        </div>
                    </div>
                    
                    
                    <div className="ml-12 pr-3 pl-8">
                        
                    </div>
                </div>
                
                <div className="w-[10%]" ></div>
            
        </div>
    );
}
export default StaffForm;