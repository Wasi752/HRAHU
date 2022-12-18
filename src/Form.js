import { useState } from "react";

const inputClass = "h-[10%] w-[65%] p-4 border border-blue-300 rounded-md m-1";
const lableClass = "ml-0 pr-2 mt-5 text-xl font-bold";
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
function Form() {
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [image, setImage] = useState("");

    const submit = () => {
        if(name.length < 5){
            window.alert(`Name must be contain atleast 5 Characters`);
            return;
        }
        if(password.length < 8){
            window.alert(`Password must be contain atleast 8 numbers & Characters`);
            return;
        }
        getB64(image, (imageString) => {
            const user = {
                name: name,
                password : password,
                image: imageString,
            }
            console.log(user);
            fetch('http://localhost:3001/studentRegistration', {
            method: 'POST', // or 'PUT'
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(user),
        })
            .then((response) => window.alert("image is Uploaded"));
        }
        );
        
    };
    return (
        <div className="w-full h-full flex mt-20 mb-56">
            <div className="w-[10%] h-full"></div>

            <div className="w-[80%] h-full bg-gray-100 ">
                <p className="mt-5 mb-10 text-3xl text-red-700 font-bold font-serif text-left text-center">Enter Staff Information</p>
                <div className="flex w-full h-full justify-center divide-x-2 divide-slate-500">
                    <div className="mt-1 flex flex-col w-full h-full ">
                        <div className={divClassLeft}>
                            <label className={lableClass}>01. Name :</label>
                            <input type="text" value={name} onChange={e => setName(e.target.value)} className={inputClass} />
                        </div>
                        <div className={divClassLeft}>
                            <label className={lableClass}>02. Password :</label>
                            <input type="password" value={password} onChange={e => setPassword(e.target.value)} className={inputClass} />
                        </div>
                        <div className={divClassLeft}>
                            <label className={lableClass}>03. Image :</label>
                            <input type="file"
                                onChange={e => setImage(e.target.files[0])}
                                className={inputClass} />
                        </div>
                        <div className={divClassRight}>
                            <button
                                type="button"
                                onClick={submit}
                                className="text-center text-2xl text-white font-bold h-[10%] w-[65%] p-4 border border-blue-300 rounded-md ml-1 mb-5 mr-3 mt-12 bg-blue-600 hover:text-blue-300">Submit</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Form;
