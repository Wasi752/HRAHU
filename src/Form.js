
import { useState } from "react";
import data from "./data";

function Form({setX}){
    const [nationality, setNationality] = useState("");
    const [religion, setRrligion] = useState("");
    const [brith, setBrith] = useState("");
    const [nid, setNid] = useState("");

    const submit = ()=>{
        const user = {
            nationality: nationality, 
            religion: religion, 
            brith: brith, 
            nid: nid
        };
        setX(user);
    };
    return(
        <div className="w-full h-screen ">
            
                <div className="w-full h-4/6 bg-gray-100 p-5 ">        
                    <p className="mt-1 ml-5 text-left underline mr-10">Input Information</p>
                    <div className="mt-1 flex"><label className="ml-4 pr-2 mt-7 ">Nationality :</label>    
                        <input 
                            type="text"
                            value= {nationality} 
                            onChange={e => setNationality(e.target.value)}  
                            className="h-[10%] w-[65%] p-4 border border-blue-300 rounded-md m-3"
                        />
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
                            className="text-center text-1xl text-white font-bold h-[80%] w-[85%] ml-10 bg-blue-600 hover:text-blue-300 p-3 border rounded-md ">Submit</button>
                    </div>
                </div>
                
           
            
        </div>
    );
}
export default Form;