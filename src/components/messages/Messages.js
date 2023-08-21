
import React, { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux'

import { useNavigate } from 'react-router-dom';

import { getMessagesfromProperty } from '../../reducers/messagesReducer'
import { setPropertyItem } from '../../reducers/propertyReducer';

import MessagesList from './MessagesList'
import MessageForm from './MessageForm';
import Claimer from './Claimer';


const Messages = () => {
    
    const dispatch = useDispatch()

    const navigate = useNavigate();

    const messages = useSelector(state => state.messages)
    const property = useSelector(state => state.property)
    const notifClaimer = useSelector(state => state.notifClaimer)


  useEffect(() => {
    if (property.length === 0) {
      if(localStorage.getItem('propertyScanningApp')) {
        const propertyLocal = JSON.parse(localStorage.getItem('propertyScanningApp'));
        dispatch(setPropertyItem(propertyLocal))
      } else {
        navigate(`/`)
      }

    }
  }, [dispatch])

  useEffect(() => {
      dispatch(getMessagesfromProperty(property))
      setTimeout(() => {
        window.scrollTo({left: 0, top:document.body.scrollHeight,  behavior: "smooth"});
      }, 750)
  }, [property])


  return (
    <>
      <div className='MessagesGlobal'>
          <MessagesList items={messages} />
      </div>
      <MessageForm />
      {notifClaimer &&
                <Claimer />
              }
    </>


  )

}

export default Messages