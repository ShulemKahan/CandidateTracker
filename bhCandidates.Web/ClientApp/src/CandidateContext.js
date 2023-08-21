import React, { createContext, useContext, useState, useEffect } from 'react'
import axios from 'axios';

const statusContext = createContext()

const CandidatesContextComponent = ({ children }) => {
    const [pendingStatusCount, setPendingStatusCount] = useState(0)
    const [confirmedStatusCount, setConfirmedStatusCount] = useState(0)
    const [cancelledStatusCount, setCancelledStatusCount] = useState(0)

    const updateStatusCount = async () => {
        const { data } = await axios.get('/api/candidates/getstatuscount')
        console.log(data)
        setPendingStatusCount(data.pending)
        setConfirmedStatusCount(data.confirmed)
        setCancelledStatusCount(data.cancelled)
    }

    useEffect(() => {
        updateStatusCount()
    }, []);

    return (
        <statusContext.Provider value={{ pendingStatusCount, confirmedStatusCount, cancelledStatusCount, updateStatusCount }}>
            {children}
        </statusContext.Provider>
    )
}

const useStatusCount = () => {
    return useContext(statusContext);
}

export { CandidatesContextComponent, useStatusCount }