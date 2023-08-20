
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux'

import loadingGif from '../../media/loadinggif.gif'

import '../../styles/loadingComponent.css'

const LoadingComponent = () => {

  const loadingState = useSelector(state => state.loadingFlag)

  const [flagDuration, setFlagDuration] = useState(false)

  const durationMessage = () => {
    setTimeout(() => {
      setFlagDuration(true)
      setTimeout(() => {
        setFlagDuration(false)
      }, 15000);
    }, 7000);
  }

  useEffect(() => {
      if (flagDuration) {
        setFlagDuration(false)
        setTimeout(() => {
          durationMessage()
        }, 7000);
      } else {
        durationMessage()
      }
  }, [loadingState])
  

  if (!loadingState) {
    return null
  }

  return (
    <div className='loadingDiv'>
        <img id='loading'
        alt='loading'
        width={"150px"}
        src={loadingGif}/>
        <p>detecting the number</p>

      {flagDuration &&
      <p>Sorry for the duration, the AI is still processing to determine a number</p>
      }

    </div>
  )
}

export default LoadingComponent