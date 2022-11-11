
import { useState } from "react";
import data from "./data";

function Form(){
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setMobileNumber] = useState("");
    const [password, setPassword] = useState("");
    const [users, setUsers] = useState(data);

    const submit = ()=>{
        const user = {
            name: name, 
            email: email, 
            phone: phone, 
            password: password
        };
        setUsers([...users, user]);
    };
    return(
        <div className="w-full h-screen ">
            
            
                    
                <div className="w-full h-4/6 bg-gray-100 p-5 ">        
                    <p className="mt-1 ml-5 text-left underline mr-10">Input Information</p>
                    <div className="mt-1 flex"><label className="ml-1 pr-1 mt-7 ">User Name :</label>    
                        <input 
                            type="text"
                            value= {name} 
                            onChange={e => setName(e.target.value)}  
                            className="h-[10%] w-[65%] p-4 border border-blue-300 rounded-md m-3"
                        />
                    </div>
                    <div className="mt-1 flex"><label className="ml-8 pr-3 pl-1 mt-7">Email :</label>           
                        <input 
                            type="text" 
                            value= {email} 
                            onChange={e => setEmail(e.target.value)} 
                            className="h-[10%] w-[65%] p-4 border border-blue-300 rounded-md m-3"
                        />
                    </div>
                    <div className="mt-1 flex"><label className="ml-4 pr-4 pl-3 mt-7">Phone :</label>   
                        <input 
                            type="text" 
                            value= {phone} 
                            onChange={e => setMobileNumber(e.target.value)} 
                            className="h-[10%] w-[65%] ml-2 p-4 border border-blue-300 rounded-md m-3"
                        />
                    </div>
                    <div className="mt-1 flex"><label className=" ml-2 pr-2 mt-7">Password :</label>        
                        <input 
                            type="password" 
                            value= {password} 
                            onChange={e => setPassword(e.target.value)} 
                            className="h-[10%] w-[65%] p-4 border border-blue-300 rounded-md m-3"
                        />
                    </div>
                    <div className="ml-12 pr-3 pl-8">
                        <button 
                            type="button"
                            onClick={submit} 
                            className="text-center text-1xl text-white font-bold h-[80%] w-[90%] ml-6 bg-blue-600 hover:text-blue-300 p-3 border rounded-md ">Submit</button>
                    </div>
                </div>
                
           
            
                <p>{JSON.stringify(users)}</p>
        </div>
    );
}
export default Form;