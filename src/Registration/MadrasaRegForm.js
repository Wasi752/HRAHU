import { useState } from "react";


function Form() {
    const [name, setName] = useState("");
    const [designation, setDesignation] = useState("");
    const [eMail, setEMail] = useState("");
    const [phone, setPhone] = useState("");

    const submit = () => {
        const user = {
            name: name,
            designation: designation,
            e_mail: eMail,
            phone: phone
        };

        fetch('http://localhost:3002/create-madrasa', {
            method: 'POST', // or 'PUT'
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(user),
        })
            .then((response) => window.alert("Data is Sent"));
    };
    return (
        <div className="w-full h-screen ">

            <div className="w-full h-4/6 bg-gray-100 p-5 ">
                <p className="mt-1 ml-5 text-left underline mr-10">Input Information</p>
                <div className="mt-1 flex"><label className="ml-4 pr-2 mt-7 ">Name :</label>
                    <input
                        type="text"
                        value={name}
                        onChange={e => setName(e.target.value)}
                        className="h-[10%] w-[65%] p-4 border border-blue-300 rounded-md m-3"
                    />
                </div>
                <div className="mt-1 flex"><label className="ml-8 pr-3 pl-1 mt-7">Designation :</label>
                    <input
                        type="text"
                        value={designation}
                        onChange={e => setDesignation(e.target.value)}
                        className="h-[10%] w-[65%] p-4 border border-blue-300 rounded-md m-3"
                    />
                </div>
                <div className="mt-1 flex"><label className="ml-4 pr-4 pl-3 mt-7">E-Mail :</label>
                    <input
                        type="text"
                        value={eMail}
                        onChange={e => setEMail(e.target.value)}
                        className="h-[10%] w-[65%] ml-2 p-4 border border-blue-300 rounded-md m-3"
                    />
                </div>
                <div className="mt-1 flex"><label className=" ml-9 pr-4 mt-7">Phone :</label>
                    <input
                        type="text"
                        value={phone}
                        onChange={e => setPhone(e.target.value)}
                        className="h-[10%] w-[65%] p-4 border border-blue-300 rounded-md m-3"
                    />
                </div>
                <div className="flex ml-28">
                    <button
                        type="button"
                        onClick={submit}
                        className="text-center text-1xl text-white font-bold h-[80%] w-[70%] ml-1 bg-blue-600 hover:text-blue-300 p-3 border rounded-md ">Submit</button>
                </div>
            </div>



        </div>
    )
}