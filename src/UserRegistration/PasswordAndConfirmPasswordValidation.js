import { useState } from "react";
import PasswordInputField from './PasswordInputField';
import ConfirmPasswordInputField from "./ConfirmPasswordInputField";
import { Link } from "react-router-dom";

function PasswordAndConfirmPasswordValidation() {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [passwordError, setPasswordErr] = useState("");
    const [confirmPasswordError, setConfirmPasswordError] = useState("");
    const [passwordInput, setPasswordInput] = useState({
        password: '',
        confirmPassword: ''
    })
    
        const handlePasswordChange = (evnt) => {
            const passwordInputValue = evnt.target.value.trim();
            const passwordInputFieldName = evnt.target.name;
            const NewPasswordInput = { ...passwordInput, [passwordInputFieldName]: passwordInputValue }
            setPasswordInput(NewPasswordInput);

        }
        const handleValidation = (evnt) => {
            const passwordInputValue = evnt.target.value.trim();
            const passwordInputFieldName = evnt.target.name;
            //for password 
            if (passwordInputFieldName === 'password') {
                const uppercaseRegExp = /(?=.*?[A-Z])/;
                const lowercaseRegExp = /(?=.*?[a-z])/;
                const digitsRegExp = /(?=.*?[0-9])/;
                const specialCharRegExp = /(?=.*?[#?!@$%^&*-])/;
                const minLengthRegExp = /.{8,}/;
                const passwordLength = passwordInputValue.length;
                const uppercasePassword = uppercaseRegExp.test(passwordInputValue);
                const lowercasePassword = lowercaseRegExp.test(passwordInputValue);
                const digitsPassword = digitsRegExp.test(passwordInputValue);
                const specialCharPassword = specialCharRegExp.test(passwordInputValue);
                const minLengthPassword = minLengthRegExp.test(passwordInputValue);
                let errMsg = "";
                if (passwordLength === 0) {
                    errMsg = "Password is empty";
                } else if (!uppercasePassword) {
                    errMsg = "At least one Uppercase";
                } else if (!lowercasePassword) {
                    errMsg = "At least one Lowercase";
                } else if (!digitsPassword) {
                    errMsg = "At least one digit";
                } else if (!specialCharPassword) {
                    errMsg = "At least one Special Characters";
                } else if (!minLengthPassword) {
                    errMsg = "At least minumum 8 characters";
                } else {
                    errMsg = "";
                }
                setPasswordErr(errMsg);
            }
            // for confirm password
            if (passwordInputFieldName === "confirmPassword" || (passwordInputFieldName === "password" && passwordInput.confirmPassword.length > 0)) {

                if (passwordInput.confirmPassword !== passwordInput.password) {
                    setConfirmPasswordError("Confirm password is not matched");
                } else {
                    setConfirmPasswordError("");
                }

            }
        }
        const signup = () => {
            if (username.length < 5) {
                window.alert(`Name must be contain atleast 5 Characters`);
                return;
            }
        const user = {
            username: username,
            email: email,
        }
        fetch('http://localhost:3001/signup', {
            method: 'POST', // or 'PUT'
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(user),
        })
            .then((response) => {
                window.alert("Your information is saved")
            });
    };
    return (
        <div className="flex w-screen h-screen bg-gray-900">
            <div className="w-4/12 h-full"></div>
            <div className="w-4/12 h-full mt-[6%]">
                <div className='bg-gray-800 flex flex-col justify-center px-[10%] py-[20%]'>
                    <form className='flex flex-col w-full text-white'>
                        <h2 className='text-4xl text-teal-500 font-bold text-center py-7'>SIGNUP</h2>

                        <input
                            value={username}
                            onChange={e => setUsername(e.target.value)}
                            type="text"
                            placeholder="Username"
                            className='m-3 px-4 py-3 rounded-lg bg-gray-700 focus:border-blue-500 focus:bg-gray-800 focus:outline-none'
                        />
                        <input
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                            type="text"
                            placeholder="Email"
                            className='m-3 px-4 py-3 rounded-lg bg-gray-700 focus:border-blue-500 focus:bg-gray-800 focus:outline-none'
                        />
                        <PasswordInputField
                            handlePasswordChange={handlePasswordChange}
                            handleValidation={handleValidation}
                            passwordValue={passwordInput.password}
                            passwordError={passwordError} />
                        <ConfirmPasswordInputField
                            handlePasswordChange={handlePasswordChange}
                            handleValidation={handleValidation}
                            confirmPasswordValue={passwordInput.confirmPassword}
                            confirmPasswordError={confirmPasswordError} />
                        <button
                            type="button"
                            onClick={signup}
                            className='m-3 px-4 py-3 bg-teal-500 shadow-lg shadow-teal-500/50 hover:shadow-teal-500/40 text-white font-semibold rounded-lg text-2xl  hover:bg-teal-400'
                        >SIGNUP
                        </button>
                    </form>
                    <p className="mt-2 text-teal-300">Already Registered?</p>
                    <Link to="/signin"><p className="text-teal-300 underline">SignIn</p></Link>
                </div>
            </div>
            <div className="w-4/12 h-full">
            </div>
        </div>

    )
}
export default PasswordAndConfirmPasswordValidation;