import {staffdata} from "./StaffList";

function StaffSummaryDiv({id, name, designation, contact_no, e_mail}){
    return (
        <div className="w-full h-screen flex">
            <div className="w-[20%] h-full bg-green-200"></div>
            <div className="flex flex-col ml-5 w-[60%] h-[80%] mt-20 bg-gray-100">
                    <p className="text-3xl text-justify-center ml-10 mb-5 text-blue-500">Staff Summary</p>
                <div className="text-lg ml-3 mt-5">
                    <p>{id}</p>
                    <p className="text-2xl, text-red-500 font-extrabold">{name}</p>
                    <p className="text-lg">{designation}</p>
                    <p>{contact_no}</p>
                    <p>{e_mail}</p>
                </div>
            
            </div>
            <div className="w-[20%] h-full"></div>
        </div>
    );
}

function StaffSummary(){
    const x = staffdata.map(a => <StaffSummaryDiv id={a.id} name={a.name} designation={a.designation} contact_no={a.contact_no} e_mail={a.e_mail}/>);
    return(
        <div>{x}</div>
    );
}
export default StaffSummary;