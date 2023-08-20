
import React from 'react';

import UploadImage from '../upload/UploadImage'

import '../../styles/intro.css'
import backimg from '../../media/backimage.png'

const Intro = () => {
    
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