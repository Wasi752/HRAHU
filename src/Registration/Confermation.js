import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const para = "text-2xl font-serif m-1";
function Latter({
    i,
    id,
    name,
    father,
    mother,
    presentAddress,
    permanentAddress,
    nationality,
    brith,
    nid,
    exDakhila,
    exJamat,
    classRool,
    exexamName,
    examRoll,
    isJamat,
    dakhilaNo,
    contactNo,
    email,
    roomNo,
    sitNo,
    hifzDawr,
    taqrir,
    safaye,
    image
}) {
    return (
        <div className="flex flex-row border border-green-600">
            <div className="text-lg ml-10 mt-5 text-left w-[70%] h-[75%] mb-5 mt-10 ">
                <p className={para}>Dakhila NO : {id}</p>
                <p className="text-xl text-red-500 font-bold font-serif">Name : {name}</p>
                <p className={para}>Father Name : {father}</p>
                <p className={para}>Mother Name : {mother}</p>
                <p className={para}>Present Address : {presentAddress}</p>
                <p className={para}>Permanent Address : {permanentAddress}</p>
                <p className={para}> Nationality : {nationality}</p>
                <p className={para}>Date of Brith : {brith}</p>
                <p className={para}>NID :{nid}</p>
                <p className={para}>Contact No : {contactNo}</p>
                <p className={para}>E-mail : {email}</p>
                <p className={para}>Room No : {roomNo}</p>
                <p className={para}>Sit No : {sitNo}</p>
                <p className={para}>Date of Brith : {brith}</p>
                <p className={para}>Last Jamat & Class Roll : {exJamat}, {classRool}</p>
                <p className={para}>Last Exam Name & Rool : {exexamName}, {examRoll}</p>
                <p className={para}>Last Year Dhakila No : {exDakhila}</p>
                <p className={para}>Admited Jamat & Dakhila No: {isJamat}, {dakhilaNo}</p>
                <p className={para}>Hifzul Quraan Dawr Group : {hifzDawr}</p>
                <p className={para}>Weekly Taqrir Group : {taqrir}</p>
                <p className={para}>Monthly Safaye Group : {safaye}</p>
            </div>
            <div className="w-[30%] h-full ml-5 mt-20 justify-right">
                <img src={"/" + image} alt="" className="w-[85%] h-[43%] ml-1" />

            </div>
        </div>
    );
}


function Confirmation() {
    const [confirm, setConfirm] = useState();
    const [madrasaName, setMadrasaName] = useState("");
    const [jamat, setJamat] = useState("");
    const { menu } = useParams();
    const roll = parseInt(menu);

    useEffect(() => {
        fetch('http://localhost:3001/fazilatResult')
            .then((response) => response.json())
            .then((data) => {
                const con = data.filter((x) => x.roll === roll)
                    .map((y, i) =>
                        <Latter
                            id={i + 1}
                            name={y.name}
                            father={y.fname}
                            mother={y.mother}
                            presentAddress={`${y.vill}, ${y.post}, ${y.thana}, ${y.jela}`}
                            permanentAddress={`${y.vill}, ${y.post}, ${y.thana}, ${y.jela}`}
                            nationality={y.nationality}
                            brith={y.dateOfBirth}
                            nid={y.nid}
                            exDakhila={y.exDakhila}
                            exJamat={y.exJamat}
                            classRool={y.classRool}
                            exexamName={y.exexamNam}
                            examRoll={y.examRoll}
                            isJamat={y.isJamat}
                            dakhilaNo={y.dakhilaNo}
                            contactNo={y.contactNo}
                            email={y.email}
                            roomNo={y.roomNo}
                            sitNo={y.sitNo}
                            hifzDawr={y.hifzDawr}
                            taqrir={y.taqrir}
                            safaye={y.safaye}
                            image={y.image} />);
                setConfirm(con);
                const nam = data.filter((f) => f.roll === roll)
                    .map(x => x.madrasa);
                setMadrasaName(nam[0]);
                const jamat = data.filter((f) => f.roll === roll)
                    .map(x => x.jamat);
                setJamat(jamat[0]);
            });
    }, [roll]);
    return (
        <div className="w-full h-screen flex">
            <div className="w-2/12 h-full"></div>
            <div className="w-8/12 h-full flex flex-col mb-10">

                <p className="text-center text-5xl text-red-700 font-serif font-bold mt-10"> Confermation Latter about Your Admission</p>
                <p className="text-center text-3xl text-blue-800 font-serif font-bold mt-5">{madrasaName}</p>
                <p className="text-center text-3xl text-yellow-900 font-serif font-bold mt-5">জামাত : {jamat}</p>
                <p className="text-3xl text-left text-green-700 font-serif font-bold mt-10 mb-10">Your Admission has done</p>

                {confirm}

            </div>
            <div className="w-2/12 h-full"></div>
        </div>
    );
}
export default Confirmation;