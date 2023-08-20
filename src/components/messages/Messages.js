
import React, { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux'

import { getMessagesfromProperty } from '../../reducers/messagesReducer'

import MessagesList from './MessagesList'


const Messages = () => {
    
    const dispatch = useDispatch()

    const messages = useSelector(state => state.messages)
    const property = useSelector(state => state.property)

  useEffect(() => {
      dispatch(getMessagesfromProperty(property))
      setTimeout(() => {
        window.scrollTo({left: 0, top:document.body.scrollHeight,  behavior: "smooth"});
      }, 750)
  }, [property])

  return (
    <div className='MessagesGlobal'>
        <MessagesList items={messages} />
  </div>
  )

}

export default Messages