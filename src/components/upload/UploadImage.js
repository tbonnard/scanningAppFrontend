
import '../../styles/uploadImage.css'

import React, { useState, useEffect } from 'react';
import axios from 'axios';

import { useNavigate } from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux'


import { propertyItem, propertyCreation } from '../../reducers/propertyReducer'
import { setLoading } from '../../reducers/loadingReducer';
import { setNotification } from '../../reducers/notificationReducer';

import SelectNumber from './SelectNumber';


const UploadImage = () => {
    
  const dispatch = useDispatch()

  const navigate = useNavigate();

  const property = useSelector(state => state.property)
  const loading = useSelector(state => state.loadingFlag)

  const [imageState, setImageState] = useState(null)
  const [imageResult, setImageResult] = useState([])
  const [enterManuallyFlag, setEnterManuallyFlag] = useState(false)
  const [numberManually, setNumberManually] = useState('')

  useEffect(() => {
    if (property.number)
    {
      navigate(`/messages/`)
    }
}, [property])



  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(setLoading(true))
    setLoading(true)
    setImageState(e.target.files[0])
    let form_data = new FormData();
    form_data.append('image', e.target.files[0]);

    const baseUrl = process.env.NODE_ENV === 'production' ? process.env.REACT_APP_PROD_URL : process.env.REACT_APP_DEV_URL;
    const url = `${baseUrl}api/uploadimage/`

    axios.post(url, form_data, {
      headers: {
        'content-type': 'multipart/form-data'
      }
    })
        .then(res => {
          // console.log(res.data['all_text'].split("\n"))
          // console.log(res.data['annotations'])
          const resultText = res.data['all_text'].split("\n")
          if (resultText.length === 1) {
            const itemObject = {number:resultText[0].toUpperCase().replace(/#|_|-|\s|'*'/g, '')}
            dispatch(propertyItem(itemObject))
            dispatch(propertyCreation(itemObject))
            // navigate(`/messages/`)
            dispatch(setLoading(false))
          } else {      
            setImageResult(resultText)
            dispatch(setLoading(false))
          }
   
          
        })
        .catch(err => {
          // console.log(err)
          dispatch(setLoading(false))
          errorMessageDisplay()
        }
        )
  };
  

  const errorMessageDisplay = () => {
    dispatch(setNotification({message:`an error occured, please try again or enter the number manually`, style:'error'}))
  }

  const handleSubmitSelectionManually = (e) => {
    e.preventDefault();
    const itemObject = {number:numberManually.toUpperCase().replace(/#|_|-|\s|'*'/g, '')}
    dispatch(propertyCreation(itemObject))
    resetGlobal()
    resetInputUploadImageManualField()
    // navigate(`/messages/`)
  }

 
  const resetGlobal = () => {
    setImageState(null)
    setImageResult([])
  }

  const resetInputUploadImageManualField = () => {
    if (document.querySelector('#image')) {
      document.querySelector('#image').value = "";
    } 
    if (document.querySelector('#image')) {
      setNumberManually('')
    }
  }

  const handleHowItWorks = () => {
    console.log(document.querySelector('#howItWorks'))
    window.scrollTo({left: 0, top:document.querySelector('#howItWorks').offsetTop,  behavior: "smooth"});
  }


  return (
    <div className="uploadGlobalForm">


    {!loading && imageResult.length === 0 &&
      <div className='formUploadOrText'>
        {!enterManuallyFlag &&
          <div className=''>
            <form onSubmit={handleSubmit} className="formUpload">   
              <div className="file-upload-wrapper" data-text="Upload an image"> 
              {/* <label for="file" >Upload a photo to detect the number</label> */}
                <input type="file"
                      id="image"
                      className="file-upload-field"
                      name="file-upload-field"
                      accept="image/png, image/jpeg, , image/jpg"  onChange={(e) => handleSubmit(e)} required/>
                </div>  
              </form>
            </div>
          }
         
            {enterManuallyFlag &&
            <form onSubmit={handleSubmitSelectionManually} className='enterTextForm'>
                <input className="enterTextNumber" type="text" placeholder='Enter a number' value={numberManually} onChange={(e) => setNumberManually(e.target.value)} required/>
                <button className="buttonPrimary" type='submit'>submit</button>
            </form>
            }
           
           <div className='formUploadButtons'>
              <button className="buttonTier" onClick={() => setEnterManuallyFlag(!enterManuallyFlag)}>{enterManuallyFlag ?  'or upload an image' : 'or enter number manually'}</button>
              <button className='buttonTier' onClick={handleHowItWorks}>see how it works</button>
           </div>
        </div>
    }

      <SelectNumber items={imageResult} image={imageState} setItems={setImageResult} editNumber={setNumberManually} setManualNumberFlag={setEnterManuallyFlag}/>

  </div>
  )
}

export default UploadImage