
import React, { useEffect, useState } from 'react';

const Message = ({item}) => {
    

  const [inappropriateFlagClass, setInappropriateFlagClass] = useState('textMessageStandard')
  const [claimerFlagClass, setClaimerFlagClass] = useState('message')
  const [claimerFlagClassDesc, setClaimerFlagClassDesc] = useState('messageDescription')
  const [date, setDate] = useState('')

    useEffect(() => {
      const createdDate = new Date(item.created)
      const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour:'numeric',  minute:'numeric',  second:'numeric' }
      const output = createdDate.toLocaleDateString("en-US", options)
      setDate(output)

      if (item.claimerFlag === true) {
        setClaimerFlagClass('messageRight')
        setClaimerFlagClassDesc('messageDescriptionRight')
      }

      if (item.profanityFlag === true) {
        setInappropriateFlagClass('inappropriateFlagClass')
        setClaimerFlagClassDesc('messageDescriptionInappropriate')
      }
 

    },[item])


  if (!item) {
    return null
  }

  return (
      <div className={claimerFlagClass}>
        <div className={claimerFlagClassDesc}>
          <p className={inappropriateFlagClass}>{item.description}</p>
        </div>
        <div className='messageDateDiv'>
          <p className='messageDate'>{date}</p>
        </div>
    </div>
  )
}

export default Message