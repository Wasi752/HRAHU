import { useEffect, useState } from "react";

const tbl = "border border-blue-300 p-3 text-left text-xl";

function MadrasaList({ id, code, ilhaq, mnamearabic, mnamebangali, mnameenglish, address, muhtamim, nazim, jela, divis, email, phone }) {
    return (
        <div className="flex flex-col justify-center w-[80%] h-full ml-56">
            <table className="w-full h-full text-justify border border-green-700">
            <tr className="w-full h-full ml-56">
                <td className={tbl}> {id}</td>
                <td className={tbl}> {code}</td>
                <td className={tbl}> {ilhaq}</td>
                <td className={tbl}> {mnamearabic}
                    <p>{mnamebangali}</p>
                    <p>{mnameenglish}</p></td>
                <td className={tbl}> {address}</td>
                <td className={tbl}> {phone}</td>
                <td className={tbl}> {email}</td>
                <td className={tbl}> {muhtamim}</td>
                <td className={tbl}> {nazim}</td>
                <td className={tbl}> {jela}</td>
                <td className={tbl}> {divis}</td>
            </tr>
            </table>
        </div>
    )
}
function MadrasaLists({ board }) {
    const [madrasaL, setMadrasaL] = useState("");
    
        fetch('http://localhost:3001/madrasas')
            .then((response) => response.json())
            .then((data) => {
               const d = data.map(k =>
                        <MadrasaList
                            id={k.id}
                            code={k.code_no}
                            ilhaq={k.ilhaq_no}
                            mnamearabic={k.name_arabic}
                            mnamebangali={k.name_bangala}
                            mnameenglish={k.name_english}
                            address={k.address}
                            phone={k.phone}
                            email={k.e_mail}
                            muhtamim={k.muhtamim}
                            nazim={k.nazim}
                            jela={k.jela}
                            divis={k.division} />)
                        setMadrasaL(d)
            });
    return (
        <div className="w-full h-full mt-20 mb-40">
            <div>
                <p className="text-5xl text-center pt-10 font-bold mb-5 font-serif text-green-700">Dawra-e Hadis Madrasa List : 1443/2022/1429</p>
                <p className="text-3xl text-center mt-1 font-bold mb-5 font-serif">Al-Haiatul Ulya Lil-Jamiatil Qawmia Bangladesh</p>
            </div>

            <p className="text-3xl text-left text-red-700 ml-56 mt-10 font-bold mb-5 font-serif">Board : {board}</p>

            <div className="w-[80%] h-full justify-center flex ml-56">
                <table className="w-full h-full text-justify border border-green-700">
                    <tr className="w-full h-full">
                        <th className={tbl}>Srl</th>
                        <th className={tbl}>Code</th>
                        <th className={tbl}>Ilhaq </th>
                        <th className={tbl}>Name oF Madrasa</th>
                        <th className={tbl}>Address</th>
                        <th className={tbl}>Phone</th>
                        <th className={tbl}>E-mail</th>
                        <th className={tbl}>Mutamim</th>
                        <th className={tbl}>Nazim</th>
                        <th className={tbl}>Jala</th>
                        <th className={tbl}>Division</th>
                    </tr>
                    
                </table>
                
            </div>
            {madrasaL}
        </div>
    )
}
export default MadrasaLists;