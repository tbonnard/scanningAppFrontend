
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'

import { claimProperty } from '../../reducers/claimReducer';

const Claimer = () => {
    
    
    const dispatch = useDispatch()

    const property = useSelector(state => state.property)

    const [email, setEmail] = useState('')


    const handleSubmit = (e) => {
        e.preventDefault()
        const itemObject = {email, property:property.number}
        dispatch(claimProperty(itemObject))
    }


  return (
    <div >
        <h2>Claim the property</h2>
        <p>claiming a property will allow you to receive notifications when a new message is sent</p>
        <form onSubmit={handleSubmit}>
            <div className=''>
                <input type="email" placeholder='your email' value={email} onChange={(e) => setEmail(e.target.value)} required/>
                <button type='submit'>claim</button>
            </div>
        </form>
  </div>
  )
}

export default Claimer