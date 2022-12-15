import { useState } from "react";
import { Link } from "react-router-dom";

function Signin() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const signin = () => {
        const user = {
            username: username,
            password: password
        };

        fetch('http://localhost:3001/signin', {
            method: 'POST', // or 'PUT'
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(user),
        })
            .then(response => {
                if (response.status === 200) {
                    return response.json()
                }
            })
            .then((body) => {
                if (body) {
                    window.alert(`Signed in as ${body.username}`)
                }
                else {
                    window.alert(`No user exists with user name: ${username}`)
                }
            });
    };

    return (
        <div className="flex w-screen h-screen bg-gray-900">
            <div className="w-4/12"></div>
            <div className="w-4/12 mt-[6%]">
                <div className='bg-gray-800 flex flex-col justify-center px-[10%] py-[20%]'>
                    <form className='flex flex-col w-full text-white'>
                        <h2 className='text-4xl text-teal-500 font-bold text-center py-7'>SIGNIN</h2>
                        <input
                            value={username}
                            onChange={e => setUsername(e.target.value)}
                            type="text"
                            placeholder="Username"
                            className='m-3 px-4 py-3 rounded-lg bg-gray-700 focus:border-blue-500 focus:bg-gray-800 focus:outline-none'
                        />
                        <input
                            value={password}
                            onChange={e => setPassword(e.target.value)}
                            type="password"
                            placeholder="Password"
                            className='m-3 px-4 py-3 rounded-lg bg-gray-700 focus:border-blue-500 focus:bg-gray-800 focus:outline-none'
                        />
                        <Link to="/home"
                            type="button"
                            onClick={signin}
                            className='m-3 px-4 py-3 bg-teal-500 shadow-lg text-center shadow-teal-500/50 hover:shadow-teal-500/40 text-white font-semibold rounded-lg text-2xl  hover:bg-teal-400'
                        >SIGNIN
                        </Link>
                    </form>
                    <p className="mt-2 text-teal-300">New User?</p>
                    <Link to="/"><p className="text-teal-300 underline">SignUp</p></Link>
                </div>
            </div>
            <div className="w-4/12 h-full"></div>
        </div>
    );
}
export default Signin;