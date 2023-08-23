
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'

import { claimProperty } from '../../reducers/claimReducer';
import { setnotifClaimerReducer } from '../../reducers/notifClaimerReducer';


import closeIcon from '../../media/close.png'
import '../../styles/claimerGlobal.css'


const Claimer = () => {
    
    
    const dispatch = useDispatch()

    const property = useSelector(state => state.property)

    const [email, setEmail] = useState('')


    const handleSubmit = (e) => {
        e.preventDefault()
        const itemObject = {email, property:property.id}
        dispatch(claimProperty(itemObject))
        dispatch(setnotifClaimerReducer(false))
    }

    const closeClaimNotif = () => {
        dispatch(setnotifClaimerReducer(false))
    }

  return (
    <div className='claimerGlobal'>
              <img className='closeIcon' 
                        src={closeIcon}  
                        onClick={closeClaimNotif}
                        alt='cancel - close'
                        width={"30px"}
                    />

        <div className='claimerDiv'>
            <h2 className='selectNumberTitle'>Claim the property</h2>
            <p>claiming a property will allow you to receive notifications when a new message is sent to "{property.number}"</p>
            <form onSubmit={handleSubmit} >
                <div className='claimerFormDiv'>
                    <input className='enterTextNumber messageFormInput inputClaimer' type="email" placeholder='your email' value={email} onChange={(e) => setEmail(e.target.value)} required/>
                    <button className="buttonPrimary" type='submit'>claim</button>
                </div>
            </form>
        </div>
  </div>
  )
}

export default Claimer