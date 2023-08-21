import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { produce } from 'immer';
import { useHistory } from 'react-router-dom';
import { useStatusCount } from '../CandidateContext';

const AddCandidate = () => {

  const [candidate, setCandidate] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    notes: ''
  })

  const history = useHistory();
  const { updateStatusCount } = useStatusCount()

  const onButtonClick = async () => {
    await axios.post(`/api/candidates/addcandidate`, candidate)
    updateStatusCount()
    history.push('/')
  }
  const onTextchange = (e) => {
    const newCandidate = produce(candidate, draft => {
      draft[e.target.name] = e.target.value;
    });
    setCandidate(newCandidate);
  }

  return (
    <div className='container mt-5'>
      <div className='row'>
        <div className='col-md-8 offset-md-2 jumbotron'>
          <h3>Add new post</h3>
          <input type='text' className='form-control' placeholder='First Name' name='firstName' value={candidate.firstName} onChange={onTextchange} />
          <br />
          <input type='text' className='form-control' placeholder='Last Name' name='lastName' value={candidate.lastName} onChange={onTextchange} />
          <br />
          <input type='text' className='form-control' placeholder='Phone' name='phone' value={candidate.phone} onChange={onTextchange} />
          <br />
          <input type='text' className='form-control' placeholder='Email' name='email' value={candidate.email} onChange={onTextchange} />
          <br />
          <textarea className='form-control' placeholder="notes" name='notes' rows={3} value={candidate.notes} onChange={onTextchange}></textarea>
          <br></br>
          <button className='btn btn-primary' disabled={!candidate.firstName || !candidate.lastName || !candidate.phone} onClick={onButtonClick}>Add Candidate</button>
        </div>
      </div>
    </div>
  )
}

export default AddCandidate;