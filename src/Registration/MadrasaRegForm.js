import { useState } from "react";

const lcl = "ml-4 pr-2 mt-1 text-xl font-bold font-serif";
const icl = "h-[10%] w-[65%] p-4 border border-blue-300 rounded-md mt-1";

function MadrasaRegForm() {
    const [namearabic, setNameArabic] = useState("");
    const [namebangla, setNameBangla] = useState("");
    const [nameenglish, setNameEnglish] = useState("");
    const [address, setAddress] = useState("");
    const [muhtamim, setMuhtamim] = useState("");
    const [nazim, setNazim] = useState("");
    const [mcode, setMCode] = useState("");
    const [ilhaq, setIlhaq] = useState("");
    const [board, setboard] = useState("");
    const [jela, setJela] = useState("");
    const [division, setDivision] = useState("");
    const [eMail, setEMail] = useState("");
    const [phone, setPhone] = useState("");

    const submit = () => {
        const user = {
            name_arabic: namearabic,
            name_bangala: namebangla,
            name_english: nameenglish,
            address: address,
            e_mail: eMail,
            phone: phone,
            muhtamim: muhtamim,
            nazim: nazim,
            code_no: mcode,
            ilhaq_no: ilhaq,
            board: board,
            jela: jela,
            division: division
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
        <div className="w-full h-full flex ">

            <div className="w-[80%] h-full bg-gray-100 p-5 justify-center mt-10 flex flex-col ">
                <p className="mt-10 ml-40 text-3xl text-blue-700 font-bold font-serif text-left">Input Madrasa Information</p>
                <div className="mt-1 ml-40"><label className={lcl}>Name of Madrasa :</label>
                    <input
                        type="text"
                        placeholder="Arabic"
                        value={namearabic}
                        onChange={e => setNameArabic(e.target.value)}
                        className={icl}
                    />
                </div>
                <div className="mt-1 ml-40"><label className={lcl}>Name of Madrasa :</label>
                    <input
                        type="text"
                        placeholder="Bangali"
                        value={namebangla}
                        onChange={e => setNameBangla(e.target.value)}
                        className={icl}
                    />
                </div>
                <div className="mt-1 ml-40"><label className={lcl}>Name of Madrasa :</label>
                    <input
                        type="text"
                        placeholder="English"
                        value={nameenglish}
                        onChange={e => setNameEnglish(e.target.value)}
                        className={icl}
                    />
                </div>
                <div className="mt-1 ml-40"><label className={lcl}>Name of Board :</label>
                    <input
                        type="text"
                        value={board}
                        onChange={e => setboard(e.target.value)}
                        className="h-[10%] w-[65%] p-4 border border-blue-300 rounded-md mt-1 ml-5"
                    />
                </div>
                <div className="mt-1 ml-40"><label className={lcl}>Address :</label>
                    <input
                        type="text"
                        value={address}
                        onChange={e => setAddress(e.target.value)}
                        className="h-[10%] w-[65%] p-4 border border-blue-300 rounded-md mt-1 ml-20"
                    />
                </div>
                <div className="flex flex-row">
                    <div className="w-[50%] h-full justify-left">
                        <div className="mt-1 ml-40 flex w-[80%]"><label className={lcl}>Muhtamim Name:</label>
                            <input
                                type="text"
                                value={muhtamim}
                                onChange={e => setMuhtamim(e.target.value)}
                                className="h-[10%] w-[65%] p-4 border border-blue-300 rounded-md mt-1 ml-1"
                            />
                        </div>
                        <div className="mt-1 ml-40 flex w-[80%]"><label className={lcl}> Name of Nazim  :</label>
                            <input
                                type="text"
                                value={nazim}
                                onChange={e => setNazim(e.target.value)}
                                className="h-[10%] w-[65%] p-4 border border-blue-300 rounded-md mt-1 ml-4"
                            />
                        </div>
                        <div className="mt-1 ml-40 flex w-[80%]"><label className={lcl}>Madrasa Code :</label>
                            <input
                                type="text"
                                value={mcode}
                                onChange={e => setMCode(e.target.value)}
                                className="h-[10%] w-[65%] p-4 border border-blue-300 rounded-md mt-1 ml-5"
                            />
                        </div>
                        <div className="mt-1 ml-40 flex w-[80%]"><label className={lcl}> Madrasa Ilhaq :</label>
                            <input
                                type="text"
                                value={ilhaq}
                                onChange={e => setIlhaq(e.target.value)}
                                className="h-[10%] w-[65%] p-4 border border-blue-300 rounded-md mt-1 ml-5"
                            />
                        </div>
                    </div>
                    <div className="w-[50%] h-full justify-left">
                        <div className="mt-1 ml-1 flex w-[60%] "><label className="ml-4 mt-1 text-xl font-bold font-serif">Jela :</label>
                            <input
                                type="text"
                                value={jela}
                                onChange={e => setJela(e.target.value)}
                                className="h-[10%] w-[80%] p-4 border border-blue-300 rounded-md mt-1 ml-8"
                            />
                        </div>
                        <div className="mt-1 ml-1 flex w-[60%]"><label className={lcl}>Division :</label>
                            <input
                                type="text"
                                value={division}
                                onChange={e => setDivision(e.target.value)}
                                className="h-[10%] w-[80%] p-4 border border-blue-300 rounded-md mt-1 ml-4"
                            />
                        </div>
                        <div className="mt-1 ml-1 flex w-[60%]"><label className={lcl}>E-Mail :</label>
                            <input
                                type="text"
                                value={eMail}
                                onChange={e => setEMail(e.target.value)}
                                className="h-[10%] w-[80%] p-4 border border-blue-300 rounded-md mt-1 ml-10"
                            />
                        </div>
                        <div className="mt-1 ml-1 flex w-[60%]"><label className={lcl}>Phone :</label>
                            <input
                                type="text"
                                value={phone}
                                onChange={e => setPhone(e.target.value)}
                                className="h-[10%] w-[80%] p-4 border border-blue-300 rounded-md mt-1 ml-10"
                            />
                        </div>
                        
                    </div>
                </div>
                <div className="ml-40 w-[80%] h-[10%] flex">
                            <button
                                type="button"
                                onClick={submit}
                                className="text-center text-2xl ml-40 text-white font-bold h-[80%] w-[80%] bg-blue-600 hover:text-blue-300 p-4 mt-5 border rounded-md ">Submit</button>
                </div>    
            </div>
        </div>
    )
}
export default MadrasaRegForm;