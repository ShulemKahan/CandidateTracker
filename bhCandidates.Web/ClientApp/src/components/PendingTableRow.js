import React from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

function PendingTableRow({ candidate }) {
    return (
        <tr>
            <td><Link to={`/viewdetails/${candidate.id}`}>View Details

            </Link></td>
            <td>{candidate.firstName + ' ' + candidate.lastName}</td>
            <td>{candidate.phone}</td>
            <td>{candidate.email}</td>
            <td>{candidate.notes}</td>
        </tr>
    )
}

export default PendingTableRow