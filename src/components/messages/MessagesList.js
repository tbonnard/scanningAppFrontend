
import React from 'react';

import Message from './Message'

const MessagesList = ({items}) => {
    

  if (items.length === 0) {
    return (
        <div className='messagesList'>
            <p className='infoText'>no messages yet</p>
        </div>
    )
}

  return (
    <div className='messagesList'>
        {items.map((msg, ind) => <Message key={msg.id} item={msg} /> )}
  </div>
  )
}

export default MessagesList