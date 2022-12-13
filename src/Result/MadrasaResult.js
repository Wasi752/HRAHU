import { results } from "./resultData"


export function MadrasaResult({ id, srl, roll, name, bukhari1, bukhari2, muslim1, muslim2, tirmizi1, tirmizi2, abudaud, nasayee, tahabi, muwattan, total, divi, mscore }) {
    const tbl = "border border-blue-300 p-3 text-left text-xl";
    return (
        <div className="flex flex-col justify-center w-full h-[80%] mt-1 bg-gray-100">
            <table className="w-[90%] h-[80%] border ml-20 text-left">
                
                <tr>
                    <td className={tbl}> {srl}</td>
                    <td className={tbl}> {roll}</td>
                    <td className={tbl}> {name}</td>
                    <td className={tbl}> {bukhari1}</td>
                    <td className={tbl}> {bukhari2}</td>
                    <td className={tbl}> {muslim1}</td>
                    <td className={tbl}> {muslim2}</td>
                    <td className={tbl}> {tirmizi1}</td>
                    <td className={tbl}> {tirmizi2}</td>
                    <td className={tbl}> {abudaud}</td>
                    <td className={tbl}> {nasayee}</td>
                    <td className={tbl}> {tahabi}</td>
                    <td className={tbl}> {muwattan}</td>
                    <td className={tbl}> {total}</td>
                    <td className={tbl}> {divi}</td>
                    <td className={tbl}> {mscore}</td>

                </tr>
            </table>
        </div>

    )
};
results.map(c => c.bukhari1 + c.bukhari2 + c.muslim1 + c.muslim2 + c.tirmizi1 + c.tirmizi2 + c.abudaud + c.nasayee + c.tahabi + c.muwattan)
        .forEach(d =>{
        let division;
            if(d > 799){
                division = "Mumtaj";
            } else if(d > 649){
                division = "Jaiyed Jiddan";
            } else if(d > 499){
                division = "Jaiyed";
            } else if(d > 329){
                division = "Maqbul";
            } else {
                division = "Rasib";
            }
            console.log(d, division);
        });

function MadrasaResults({mname}) {
    const tbl = "border border-green-300 p-3 text-center";         
    const madrasa1 = results.filter(k => k.mname === "Darul Uloom Al-Islamia Dhaka")
        .map(y =>
            <MadrasaResult
                id={y.id}
                srl={y.id + 10}
                roll={y.roll + 100}
                name={y.name}
                bukhari1={y.bukhari1}
                bukhari2={y.bukhari2}
                muslim1={y.muslim1}
                muslim2={y.muslim2}
                tirmizi1={y.tirmizi1}
                tirmizi2={y.tirmizi2}
                abudaud={y.abudaud}
                nasayee={y.nasayee}
                tahabi={y.tahabi}
                muwattan={y.muwattan}
                total={y.bukhari1 + y.bukhari2 + y.muslim1 + y.muslim2 + y.tirmizi1 + y.tirmizi2 + y.abudaud + y.nasayee + y.tahabi + y.muwattan}
                />
                )
        
    return (
        <div className="w-[90%] h-[80%] justify-center ml-24 mt-20 bg-gray-100 mb-48">
            <p className="text-5xl text-center pt-10 font-bold mb-5 font-serif text-blue-500">Dawra-e Hadis Examination-1443/2022</p>
            <p className="text-3xl text-center mt-1 font-bold mb-5 font-serif">Al-Haiatul Ulya Lil-Jamiatil Qawmia Bangladesh</p>
            <p className="text-3xl text-left ml-10 mt-10 font-bold mb-5 font-serif text-blue-500">Madrasa : {mname}</p>
            <table className="w-[90%] h-[80%] border border-spacing-1 ml-20 text-left">
                <tr>
                    <th className={tbl}>Srl</th>
                    <th className={tbl}>Roll</th>
                    <th className={tbl}>Name </th>
                    <th className={tbl}>Bukhari-1</th>
                    <th className={tbl}>Bukhari-2</th>
                    <th className={tbl}>Muslim-1</th>
                    <th className={tbl}>Muslim-2</th>
                    <th className={tbl}>Tirmizi-1</th>
                    <th className={tbl}>Tirmizi-2</th>
                    <th className={tbl}>Abu Dauod</th>
                    <th className={tbl}>Nasayee & Ibn Mazah</th>
                    <th className={tbl}>Tahabi</th>
                    <th className={tbl}> Muwattan</th>
                    <th className={tbl}>Total</th>
                    <th className={tbl}>Class</th>
                    <th className={tbl}>M Score</th>
                </tr>
            </table>
            <div className="justify-left">{madrasa1}</div>
            
            
        </div>
    )
}

export default MadrasaResults;			    
