
import React from 'react';

import notificationIconHome from '../../media/notificationHome.png'
import uploadIconHome from '../../media/send.png'
import sendIconHome from '../../media/upload.png'

const HowItWorks = () => {
    
  return (
    <div className='standardContainer' id='howItWorks'>
      <div className='standardDiv'>
        <h3 className='descriptionText title'>HOW IT WORKS</h3>
        <p className='descriptionSubText'>
        let's say there's a vehicle parked in your space, or it's blocking a driveway, 
        or it's got a broken light and you want to let it know
        </p>

          <div className='descriptionDivFlex'>
            <div className='descriptionText'>
              <img src={uploadIconHome} className='imageHowITWorks' />
                <p>upload a license plate image (or enter it manually)</p>
            </div>
            <div className='descriptionText'>
              <img src={sendIconHome} className='imageHowITWorks' />
              <p>Send a message related to that number (will be analyzed to avoid hateful speech)</p>
            </div>
            <div className='descriptionText'>
              <img src={notificationIconHome} className='imageHowITWorks' />
              <p>when an owner claimed the property, he is notified for each new message</p>
            </div>
            </div>
          </div>
      </div>
  )
}

export default HowItWorks