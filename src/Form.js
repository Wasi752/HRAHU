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
    const [email, setEmail] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("");
    const [image, setImage] = useState("");

    const isValid = () => {
        const uppercaseRegExp = /(?=.*?[A-Z])/;
        const lowercaseRegExp = /(?=.*?[a-z])/;
        const digitsRegExp = /(?=.*?[0-9])/;
        const specialCharRegExp = /(?=.*?[#?!@$%^&*-])/;
        const minLengthRegExp = /.{8,}/;
        const uppercasePassword = uppercaseRegExp.test(password);
        const lowercasePassword = lowercaseRegExp.test(password);
        const digitsPassword = digitsRegExp.test(password);
        const specialCharPassword = specialCharRegExp.test(password);
        const minLengthPassword = minLengthRegExp.test(password);
        if (name.length < 5) {
            window.alert(`Name must be contain atleast 5 Characters`);
        } else if (password.length === 0) {
            window.alert("Password is empty");
        } else if (!uppercasePassword) {
            window.alert("At least one Uppercase");
        } else if (!lowercasePassword) {
            window.alert("At least one Lowercase");
        } else if (!digitsPassword) {
            window.alert("At least one digit");
        } else if (!specialCharPassword) {
            window.alert("At least one Special Characters");
        } else if (!minLengthPassword) {
            window.alert("At least minumum 8 characters");
        } else if (email.length < 10) {
            window.alert("E-mail is not valid");
        }
        else {
            return true;
        }
        return false;
    }

    const submit = () => {
        if (!isValid()) return;
        getB64(image, (imageString) => {
            const user = {
                name: name,
                email: email,
                password: password,
                confirmPassword: confirmPassword,
                image: imageString,
            }

            fetch('http://localhost:3001/studentRegistration', {
                method: 'POST', // or 'PUT'
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(user),
            })
                .then((response) => window.alert("image is Uploaded"));
                setName("");
                setEmail("");
                setPassword("");
                setConfirmPassword("");
                setImage("");
        });

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
                            <label className={lableClass}>02. E-mail :</label>
                            <input type="text" value={email} onChange={e => setEmail(e.target.value)} className={inputClass} />
                        </div>
                        <div className={divClassLeft}>
                            <label className={lableClass}>03. Password :</label>
                            <input type="password" value={password} onChange={e => setPassword(e.target.value)} className={inputClass} />
                        </div>
                        <div className={divClassLeft}>
                            <label className={lableClass}>04. Confirm Password :</label>
                            <input type="password" value={confirmPassword} onChange={e => setConfirmPassword(e.target.value)} className={inputClass} />
                        </div>
                        <div className={divClassLeft}>
                            <label className={lableClass}>05. Image :</label>
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
