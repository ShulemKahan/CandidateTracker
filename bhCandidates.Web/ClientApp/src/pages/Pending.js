import React, { useEffect, useState } from "react";
import axios from 'axios'
import PendingTableRow from "../components/PendingTableRow";

const Pending = () => {

    const [candidates, setCandidates] = useState([])

    useEffect(() => {
        const getCandidates = async () => {
            const { data } = await axios.get(`api/candidates/getcandidatesbystatus?status=pending`)
            console.log(data)
            setCandidates(data)

        }
        getCandidates()
    }, [])

    return (
        <div className="container mt-4">
            <h3>Pending</h3>
            <br/>
        <table className="table table-bordered bg-light">
            <thead>
                <tr>
                    <th></th>
                    <th>Name</th>
                    <th>Phone</th>
                    <th>Email</th>
                    <th>Notes</th>
                </tr>
            </thead>
            <tbody>
                
                    {candidates.map((c, i) => {
                        return <PendingTableRow
                            key={i}
                            candidate={c} />

                    })}
            </tbody>
        </table>
        </div>
    )
}

export default Pending