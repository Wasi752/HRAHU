import {staffdata} from "./StaffList";

function StaffSummaryDiv({id, name, designation, contact_no, e_mail, image}){
    return (
        <div className="flex flex-row">
                <div className="text-lg ml-10 mt-5 text-left w-[60%] h-[35%]">
                    <p className="font-serif">{id}</p>
                    <p className="text-xl text-red-500 font-bold font-serif">{name}</p>
                    <p className="text-lg font-serif">{designation}</p>
                    <p className="font-serif">{contact_no}</p>
                    <p className="font-serif">{e_mail}</p>
                </div>
                <div className="w-[30%] h-[35%] ml-40 mt-10 justify-right ">
                    <img src={image} className="w-[60%] h-[50%] ml-1" />
                    <button className="border text-sm hover:text-blue-500 pr-5 pl-5 mt-1 mr-20" >Detail</button>
                </div>
        </div> 
    );
}

function StaffSummary(){
    const x = staffdata.map(a => <StaffSummaryDiv id={a.id} name={a.name} designation={a.designation} contact_no={a.contact_no} e_mail={a.e_mail} image={a.image}/>);
    return(
        <div className="w-full h-full flex">
            <div className="w-[20%] h-full bg-green-100">
            <p className="text-2xl font-serif font-extrabold ml-10 mb-5 mt-40 text-blue-500">Staff Summary</p>
            
            </div>
            <div className="flex flex-col ml-5 w-[60%] h-[80%] mt-20 bg-gray-100">
                    
                    <p className="justify-left">{x}</p>
            </div>
        
            
            <div className="w-[20%] h-full"></div>
        </div>
    );
}
export default StaffSummary;