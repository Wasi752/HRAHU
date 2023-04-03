import { useEffect, useState } from "react";
import { boardList } from "./Board";
import useAuthentication from "../util";


const tbl = "border border-blue-300 p-3 text-left text-xl";
const td = (prop, nbn, nen)=>{
    return (
        <td className={tbl}> {prop} <p>{nbn}</p> <p>{nen}</p></td>
    )
}
function MadrasaList({ id, code, ilhaq, mnamearabic, mnamebangali, mnameenglish, address, muhtamim, nazim, jela, divis, email, phone }) {
    return (
        <div className="flex flex-col justify-center w-[80%] h-full ml-56">
            <table className="w-full h-full text-justify border border-green-700">
            <tr className="w-full h-full ml-56">
                {td(id)}
                {td(code)}
                {td(ilhaq)}
                {td(mnamearabic, mnamebangali, mnameenglish)}
                {td(address)}
                {td(phone)}
                {td(email)}
                {td(muhtamim)}
                {td(nazim)}
                {td(jela)}
                {td(divis)}
            </tr>
            </table>
        </div>
    )
}
const th = (head)=>{
    return (
        <th className={tbl}>{head}</th>
    )
}
function MadrasaLists({ board }) {
    useAuthentication();
    const [madrasaL, setMadrasaL] = useState("");
    
        fetch('http://localhost:3001/madrasa')
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
                            {...k}
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
                        {th('Srl')}
                        {th('Code')}
                        {th('Ilhaq' )}
                        {th('Name of Madrasa')}
                        {th('Address')}
                        {th('Phone')}
                        {th('E-mail')}
                        {th('Mutamim')}
                        {th('Nazim')}
                        {th('Jala')}
                        {th('Division')}
                    </tr>
                </table>
                
            </div>
            {madrasaL}
        </div>
    )
}
export default MadrasaLists;