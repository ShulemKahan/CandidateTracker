import React, { useEffect, useState } from "react";
import { useParams, useHistory } from 'react-router-dom'
import axios from 'axios'
import { useStatusCount } from "../CandidateContext";

const ViewDetails = () => {

    const [candidate, setCandidate] = useState({})
    const [update, setUpdate] = useState({})
    const { id } = useParams()
    const history = useHistory()
    const { updateStatusCount } = useStatusCount()

    useEffect(() => {
        const getCandidate = async () => {
            const { data } = await axios.get(`api/candidates/getcandidate?id=${id}`)
            setCandidate(data)
        }
        getCandidate()
    }, [])

    const onStatusUpdate = async (e) => {
        setUpdate({ id: id, status: e.name })
        const { data } = await axios.get(`api/candidates/updatestatus`, { params: { id: id, status: e.target.name } })
        updateStatusCount()
        history.push('/pending')
    }
    const { firstName, lastName, phone, email, notes } = candidate
    return (
        <div className='card mb-2 bg-light'>
            <div className='card-body'>
                <h5 className='card-text'>{firstName + ' ' + lastName}</h5>
                <h5 className='card-text'>{phone}</h5>
                <h5 className='card-text'>{email}</h5>

                <p className='card-text'>{notes}</p>
                <hr />

                <button name="Confirm" className='btn btn-info btn-centered btn-block' onClick={onStatusUpdate} >Confirm</button>
                <button name="Cancelled" className='btn btn-dark btn-block' onClick={onStatusUpdate}>Cancel</button>


            </div>
        </div>
    )
}

export default ViewDetails