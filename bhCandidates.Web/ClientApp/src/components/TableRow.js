import React from "react";

function TableRow({ candidate }) {
    return (
        <tr>
            <td>{candidate.firstName + ' ' + candidate.lastName}</td>
            <td>{candidate.phone}</td>
            <td>{candidate.email}</td>
            <td>{candidate.notes}</td>
        </tr>
    )
}

export default TableRow