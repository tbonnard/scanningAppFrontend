
import React, { useState } from 'react';

import { useDispatch, useSelector } from 'react-redux'

import { createMessage } from '../../reducers/messagesReducer'

import '../../styles/messages.css'

const MessageForm = () => {
    
    // moins de 500 mots 
    // be respectful 
    // Mettre loading
    // Report message

    const dispatch = useDispatch()

    const [description, setDescription] = useState('')
    const property = useSelector(state => state.property)


    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(createMessage({description, property:property.id}))
        setDescription('')
    }

    return (
        <div className='messageFormDivGlobal'>
            <div className='messageFormDiv'>
                {/* <h2>Add your message</h2> */}
                <form onSubmit={handleSubmit} className='enterTextForm messageForm'>
                    <input type="text" className='enterTextNumber messageFormInput' placeholder='type your message' value={description} onChange={(e) => setDescription(e.target.value)} required/>
                    {/* <div className=''>
                        <button type='submit'>send</button>
                    </div> */}
                    <button className="buttonPrimary" type='submit'>send</button>
                </form>
            </div>
        </div>
    )

}

export default MessageForm