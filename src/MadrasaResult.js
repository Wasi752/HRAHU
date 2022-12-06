import { useState } from "react";

function MadrasaResult (){
    const tbl = "border border-spacing-1 p-5 text-center";
    const [result, setResult] = useState();
        fetch('http://localhost:3000/results')
            .then((response) => response.json())
            .then((data) => {
                const folafol = data.map(y => {
                const totalNo = y[0].bukhari1 + y[0].bukhari2 + y[0].muslim1 + y[0].muslim2 + y[0].tirmizi1 + y[0].tirmizi2 + y[0].abudaud + y[0].nasayee + y[0].tahabi + y[0].muwattan;
                let division;
                if(totalNo >= 800){
                    division = "Mumtaj";
                } else if(totalNo >= 650 && totalNo < 800){
                    division = "Jaiyed Jiddan";
                } else if(totalNo >= 500 && totalNo < 650){
                    division = "Jaiyed";
                } else if(totalNo >= 330 && totalNo < 500){
                    division = "Maqbul";
                } else {
                    division = "Rasib";
                }
        <div className="w-[90%] h-[80%] justify-center ml-10 mt-20 bg-gray-100">
            <p className="text-3xl text-center pt-10 font-bold mb-5 font-serif text-blue-500">Dawra-e Hadis Examination-1443/2022</p>
            <p className="text-3xl text-center mt-1 font-bold mb-5 font-serif">Al-Haiatul Ulya Lil-Jamiatil Qawmia Bangladesh</p>
            <p className="text-3xl text-left ml-10 mt-20 font-bold mb-5 font-serif text-blue-500">Madrasa : {y[0].mname}</p>
            
            <div className="flex flex-col justify-center w-full h-[80%] mt-20 bg-gray-100">
                <table className="w-[95%] h-[80%] border border-spacing-1 ml-10 text-center">
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
                        <th className={tbl}>Total</th>
                        <th className={tbl}>Class</th>
                        <th className={tbl}>M Score</th>
			    	</tr>
			    	<tr>
			    		<td className={tbl}> {y[0].srl} </td>
			    		<td className={tbl}> {y[0].roll}</td>
			    		<td className={tbl}> {y[0].name} </td>
			    		<td className={tbl}> {y[0].bukhari1} </td>
                        <td className={tbl}> {y[0].bukhari2} </td>
                        <td className={tbl}> {y[0].muslim1} </td>
                        <td className={tbl}> {y[0].muslim2} </td>
                        <td className={tbl}> {y[0].tirmizi1} </td>
                        <td className={tbl}> {y[0].tirmizi2} </td>
                        <td className={tbl}> {y[0].abudaud} </td>
                        <td className={tbl}> {y[0].nasayee} </td>
                        <td className={tbl}> {y[0].tahabi} </td>
                        <td className={tbl}> {y[0].muwattan} </td>
                        <td className={tbl}> {totalNo}</td>
                        <td className={tbl}> {division}</td>
                        
			    	</tr>
			    </table>
            </div>
        </div>
            })
            setResult(folafol);
    });

    return(
        <div className="w-full h-full">
            {result}
        </div>
    )
}
export default MadrasaResult;