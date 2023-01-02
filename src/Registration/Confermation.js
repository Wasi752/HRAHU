import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

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
        <div className="flex flex-row">
            <div className="text-lg ml-10 mt-5 text-left w-[60%] h-[35%]">
                <p className="font-serif">{id}</p>
                <p className="text-xl text-red-500 font-bold font-serif">{name}</p>
                <p className="text-lg font-serif">{father}</p>
                <p className="text-lg font-serif">{mother}</p>
                <p className="text-lg font-serif">{presentAddress}</p>
                <p className="text-lg font-serif">{permanentAddress}</p>
                <p className="text-lg font-serif">{nationality}</p>
                <p className="text-lg font-serif">Date of Brith:{brith}</p>
                <p className="text-lg font-serif">NID:{nid}</p>
                <p className="font-serif">{contactNo}</p>
                <p className="font-serif">{email}</p>
                <p className="font-serif">Room No:{roomNo}</p>
                <p className="font-serif">Sit No{sitNo}</p>
                <p className="font-serif">Date of Brith:{brith}</p>
                <p className="font-serif">Last Jamat & Class Roll:{exJamat}, {classRool}</p>
                <p className="text-lg font-serif">Last Exam Name & Rool:{exexamName}, {examRoll}</p>
                <p className="text-lg font-serif">Last Year Dhakila No:{exDakhila}</p>
                <p className="text-lg font-serif">Admited Jamat & Dakhila No:{isJamat}, {dakhilaNo}</p>
                <p className="font-serif">Hifzul Quraan Dawr Group:{hifzDawr}</p>
                <p className="font-serif">Weekly Taqrir Group :{taqrir}</p>
                <p className="font-serif">Monthly Safaye Group:{safaye}</p>
            </div>
            <div className="w-[30%] h-[35%] ml-40 mt-10 justify-right ">
                <img src={"/" + image} alt="" className="w-[90%] h-[80%] ml-1" />

            </div>
        </div>
    );
}


function Confirmation() {
    const [confirm, setConfirm] = useState();
    const { menu } = useParams();
    const roll = parseInt(menu);

    useEffect(() => {
        fetch('http://localhost:3001/results')
            .then((response) => response.json())
            .then((data) => {
                const y = data.filter((x) => x.roll === roll)[0];
                setConfirm(
                    <Latter
                        id={(y.roll - y.roll) + 1}
                        name={y.name}
                        father={y.fname}
                        mother={y.mother}
                        presentAddress={y.vill + y.post + y.thana + y.jela}
                        permanentAddress={y.vill + y.post + y.thana + y.jela}
                        nationality={y.nationality}
                        brith={y.dateofBirth}
                        nid={y.nid}
                        exDakhila={y.exDakhila}
                        exJamat={y.exJamat}
                        classRool={y.classRool}
                        exexamName={y.exexamName}
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
                        image={y.image}
                    />);
            });
    }, [roll]);
    return (
        <div className="w-full h-full flex">
            <div className="w-2/12 h-full bg-gray-100"></div>
            <div className="w-8/12 h-full">
                <div>
                    <p className="text-center text-5xl text-red-700 font-serif font-bold"> Confermation Latter about Your Admission</p>
                    <p>Your Admission has done</p>
                </div>
                {confirm}
            </div>
            <div className="w-2/12 h-full bg-gray-100"></div>
        </div>
    );
}
export default Confirmation;