import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";


function Safayee({ srl, dakhila, jamat, roll, name }) {
    return (
        <div className="">
            <table className="">
                <tr className="">
                    <td className=""> {srl}</td>
                    <td className=""> {dakhila}</td>
                    <td className=""> {jamat}</td>
                    <td className=""> {roll}</td>
                    <td className=""> {name}</td>
                </tr>
            </table>
        </div>
    )
};
function SafayeeGroups() {

    const { menu } = useParams();
    const jcode = parseInt(menu);
    const [page, setPage] = useState(1);
    const [safayeeGroup, setSafayeeGroup] = useState();
    const [groupName, setGroupName] = useState();

    useEffect(() => {
        fetch('http://localhost:3001/fazilatResult')
            .then((response) => response.json())
            .then((data) => {
                const y = data.filter((f) => f.jamat === "মিশকাত")
                    .map(d => `${d.roll} ${d.jamat} ${d.roll} ${d.name}`);
                const x = data.filter((f) => f.jamat === "জালালাইন")
                    .map(d => `${d.roll} ${d.jamat} ${d.roll} ${d.name}`);
                const z = data.filter((f) => f.jamat === "হিদায়া")
                    .map(d => `${d.roll} ${d.jamat} ${d.roll} ${d.name}`);
                const a = data.filter((f) => f.jamat === "শরহে বেকায়া")
                    .map(d => `${d.roll} ${d.jamat} ${d.roll} ${d.name}`);
                    const f = y.map(e=> y[0] + x[0] + z[0] + a[0]);
                console.log(f[0]);

                //     .map((x, i) =>
                //         <Safayee 
                //             srl={i + 1}
                //             dakhila={x.roll}
                //             jamat={x.jamat}
                //             roll={x.roll}
                //             name={x.name}
                //         />);
                // setSafayeeGroup(y);
                // const group = data.filter((f) => f.jcode === jcode)
                //     .map(x => x.division);
                // setGroupName(group[0]);
            });

    }, [page, jcode]);
    return (
        <div className="w-full h-full flex mb-56">
            <div className="w-[5%] h-full mt-20"></div>
            <div className="flex flex-col ml-1 w-[90%] h-[80%] mt-10 bg-gray-100">
                <p className="text-5xl text-center pt-10 font-bold mb-5 font-serif text-blue-500">Safayee Groups</p>
                <p className="text-4xl text-green-800 text-center mt-1 font-bold mb-5 font-serif">Jamia Sharyeiah Malibug, Dhaka</p>
                <p className="text-3xl text-left ml-28 mt-10 font-bold font-serif text-red-500">Group NO : {groupName}</p>
                <table className="">
                    <tr className="">
                        <td className="">Srl</td>
                        <td className="">Dakhila NO</td>
                        <td className="">Jamat </td>
                        <td className="">Roll NO</td>
                        <td className="">Name</td>
                    </tr>
                </table>

                <p className="ml-72">{safayeeGroup}</p>
                <div>
                    <Link to={"/safayee/" + (jcode - 1)} >
                        <button className='w-[15%] h-full rounded bg-yellow-500 mt-10 mb-10 ml-20 p-1 text-xl'
                            onClick={() => setPage(page - 1)} >
                            Back
                        </button>
                    </Link>
                    <Link to={"/safayee/" + (jcode + 1)} >
                        <button className='w-[15%] h-full rounded bg-blue-500 mt-20 mb-10 ml-96 p-1 text-xl justify-end'
                            onClick={() => setPage(page + 1)} >
                            Next
                        </button>
                    </Link>
                </div>
            </div>

            <div className="w-[5%] h-full"></div>
        </div>
    );
}

export default SafayeeGroups;
