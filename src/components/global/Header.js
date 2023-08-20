
import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom"

import { useDispatch, useSelector } from 'react-redux'

import { resetProperty } from '../../reducers/propertyReducer'
import { resetMessages } from '../../reducers/messagesReducer'
import { setLoading } from '../../reducers/loadingReducer';
import { setnotifClaimerReducer } from '../../reducers/notifClaimerReducer';

import '../../styles/header.css'
import notificationIcon from '../../media/notification.png'

const Header = () => {
    
  const dispatch = useDispatch()

  const property = useSelector(state => state.property)

  const [classHeader, setclassHeader] = useState('App-headerGlobal')

  useEffect(() => {
    if (window.location.pathname === '/')
    {
      setclassHeader('App-headerHome' );
    }
  },[])


  const handleClick = () => {
    window.scrollTo(0,0);
    dispatch(resetProperty())
    dispatch(resetMessages())
    dispatch(setLoading(false))
    if (window.location.pathname === '/')
    {
    window.location.reload(false);
    }
  }

  const handleClickNotification = () => {
    dispatch(setnotifClaimerReducer(true))
  }

  return (
    <div className={classHeader}>
      <div className='App-header'>
        <div className='App-header-divLogo'>
          <Link className='' to="/" onClick={handleClick}>[appName]</Link>
        </div>
        {property.number &&  <div >
          Number: <span className='App-header-divNumber'>{property.number}</span>
          <img className='notificationIcon' src={notificationIcon} onClick={handleClickNotification}/>
        </div>
              
        }
      </div>
  </div>
  )
}

export default Header

