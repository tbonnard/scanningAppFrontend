
import React, { useEffect } from 'react';

import { useDispatch } from 'react-redux'

import UploadImage from '../upload/UploadImage'

import '../../styles/intro.css'
import backimg from '../../media/backimage.png'

const Intro = () => {
  
  const dispatch = useDispatch()

  useEffect(() => {
      window.scrollTo({left: 0, top:0,  behavior: "smooth"});
}, [dispatch])

  return (
    <>
    <div className='intro'>
      <div className='introDiv'>
        <div className='descriptionText'>
            Introducing [appName]: <br/>
            communicate with other vehicules
        </div>
        <div className='descriptionText'>
        [appName] is an easy tool that lets you add a message to any other vehicules! All hateful messages will be censored to make sure people send respectful and constructive messages!
        </div>
        <UploadImage />
      </div>
      {/* <img src={backimg} className='backimg' /> */}
      <div className='backimg'></div>
      </div> 
   </>
  )
}

export default Intro