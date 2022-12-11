
import { useState } from "react";
import data from "./data";

const inputClass = "h-[10%] w-[65%] p-4 border border-blue-300 rounded-md m-3";
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
            
                <div className="w-[80%] h-full bg-gray-100 p-5 justify-center">        
                    <p className="mt-1 ml-5 text-left underline mr-10">Add New Staff Information</p>
                    <div className="mt-1 flex flex-col">
                        <label className="ml-4 pr-2 mt-7 ">1. Name :</label>    
                        <input type="text" value= {nationality} onChange={e => setNationality(e.target.value)} className={inputClass}/>
                    </div>
                    <div className="mt-1 flex"><label className="ml-8 pr-3 pl-1 mt-7">Religion :</label>           
                        <input 
                            type="text" 
                            value= {religion} 
                            onChange={e => setRrligion(e.target.value)} 
                            className="h-[10%] w-[65%] p-4 border border-blue-300 rounded-md m-3"
                        />
                    </div>
                    <div className="mt-1 flex"><label className="ml-4 pr-4 pl-3 mt-7">Birth Day :</label>   
                        <input 
                            type="text" 
                            value= {brith} 
                            onChange={e => setBrith(e.target.value)} 
                            className="h-[10%] w-[65%] ml-2 p-4 border border-blue-300 rounded-md m-3"
                        />
                    </div>
                    <div className="mt-1 flex"><label className=" ml-9 pr-4 mt-7">NID No :</label>        
                        <input 
                            type="password" 
                            value= {nid} 
                            onChange={e => setNid(e.target.value)} 
                            className="h-[10%] w-[65%] p-4 border border-blue-300 rounded-md m-3"
                        />
                    </div>
                    <div className="ml-12 pr-3 pl-8">
                        <button 
                            type="button"
                            onClick={submit} 
                            className="text-center text-1xl text-white font-bold h-[80%] w-[80%] ml-10 bg-blue-600 hover:text-blue-300 p-3 border rounded-md ">Submit</button>
                    </div>
                </div>
                
                <div className="w-[10%]" ></div>
            
        </div>
    );
}
export default StaffForm;