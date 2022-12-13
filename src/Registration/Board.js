import { useState } from "react";

const divClassLeft = "flex flex-col w-full h-full ml-56 mt-20";

function Boards ({code, narabic, nbangla, nenglish, address, email, phone}){
    return(
        <div className="mt-1 flex flex-col w-full h-full">
            <div className={divClassLeft}>
                <p className="text-3xl text-red-500 font-bold font-serif text-green-200">{code}</p>
                <p className="text-3xl mt-3 text-red-500 font-bold font-serif">{narabic}</p>
                <p className="text-3xl mt-5 text-green-700 font-bold font-serif">{nbangla}</p>
                <p className="text-3xl mt-5 text-blue-700 font-bold font-serif">{nenglish}</p>
                <p className="text-2xl mt-3 text-white font-serif">{address}</p>
                <p className="text-2xl mt-3 text-white font-serif">{email}</p>
                <p className="text-2xl mt-3 text-white font-serif">{phone}</p>
            </div>              
        </div>
    )
}
function BoardList(){
    const [boards, setBoardList] = useState("");
    
        fetch('http://localhost:3001/boards')
            .then((response) => response.json())
            .then((data) => {
               const d = data.map(k =>
                        <Boards
                            code={k.code}
                            narabic={k.name_arabic}
                            nbangla={k.name_bangala}
                            nenglish={k.name_english}
                            address={k.address}
                            phone={k.phone}
                            email={k.e_mail}
                            />)
                        setBoardList(d)
            });
    return(
        <div className="w-full h-full flex bg-black">
            <div className="w-[15%] h-full"></div>
            <div className="w-[15%] h-full flex flex-col">
                <img src="hrahuImages/one.png" className="w-[30%] h-[30%] mt-96 ml-40"/>
                <img src="hrahuImages/two.png" className="w-[30%] h-[30%] mt-72 ml-40"/>
                <img src="hrahuImages/three2.jpeg" className="w-[30%] h-[20%] mt-96 ml-40"/>
                <img src="hrahuImages/four2.jpeg" className="w-[30%] h-[30%] mt-72 ml-40"/>
                <img src="hrahuImages/five2.jpeg" className="w-[30%] h-[20%] mt-72 ml-40"/>
                <img src="hrahuImages/six.jpeg" className="w-[30%] h-[20%] mt-72 ml-40"/>
            </div>
                <div className="w-[60%] h-full ">        
                    <p className="mt-20 mb-10 text-5xl text-red-700 font-bold font-serif text-left ml-40">Boards Under Al-Haiatul Ulya</p>
                    <div className="flex flex-col w-full h-full justify-center mb-20">
                        {boards}
                    </div>
                </div>
                
                <div className="w-[10%]" ></div>
            
        </div>
    )
}
export default BoardList; 