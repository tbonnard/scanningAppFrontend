
import './styles/app.css';
import './styles/buttons.css';


import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'


import {
  Routes,
  Route,
  Link,
  Redirect
} from "react-router-dom"
import { Navigate } from 'react-router-dom';

import axios from 'axios'

import csrfServices from './services/getCsrfApp'

import Messages from './components/messages/Messages'

import Header from './components/global/Header';
import LoadingComponent from './components/global/LoadingComponent';
import NotificationTemp from './components/global/NotificationTemp';

import Intro from './components/home/Intro';
import Examples from './components/home/Examples'
import HowItWorks from './components/home/HowItWorks'
import Transparency from './components/home/Transparency'


import { setNotification } from './reducers/notificationReducer';

function App() {
  
  const dispatch = useDispatch()
  
  const property = useSelector(state => state.property)

  const getCountry = () => {
        // var requestUrl = "http://ip-api.com/json"    // this one also free for non commercial - no key
    // axios.get('https://api.ipregistry.co/?key=tryout') // this one free at start - with key
    axios.get('http://ip-api.com/json')
    .then(function (response) {
      // console.log(response.data.location.country.name)
        // console.log(response.data.country)
        return response;
    })
  }


  useEffect(() => {
    // csrfServices.getCsrfToken();
    // getCountry()
  }, [dispatch])


  return (
    <div className="App">

      <Routes>
        
  
        <Route path='/messages'  element={        
            <>
              <Header />
              <Messages />
            </>         
          } />

        <Route path='/'  element={
          <>
          <LoadingComponent />
          <Header />
          <Intro />
          <Examples />
          <HowItWorks />
          <Transparency />
          </>
          } />

      </Routes>

      <NotificationTemp />
    </div>
  );
}

export default App;
