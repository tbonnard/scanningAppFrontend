import '../../styles/selectNumber.css'

import closeIcon from '../../media/close.png'


import React, { useState } from 'react';
import { useDispatch } from 'react-redux'

import { propertyItem, propertyCreation } from '../../reducers/propertyReducer'

const SelectNumber = ({items, setItems, image, editNumber, setManualNumberFlag}) => {

    const dispatch = useDispatch()

    const [checkedResult, setCheckedResult] = useState('')
    const [selectedResult, setSelectedResult] = useState('')

    const resetGlobal = () => {
        setCheckedResult('')
        setSelectedResult('')
        setItems([])
        editNumber('')
        if (document.querySelector('#image')) {
            document.querySelector('#image').value = "";
            } 
            if (document.querySelector('#image')) {
            editNumber('')
            }
    }

    const handleChangeCheckedText = (e) => {
        setCheckedResult(e.target.value)
        setSelectedResult(e.target.value)
        dispatch(propertyItem(e.target.value.toUpperCase().replace(/#|_|-|\s|'*'/g, '')))
        editNumber(e.target.value)
      }
      
    const handleSubmitSelection = (e) => {
        e.preventDefault();
        const itemObject = {number:selectedResult.toUpperCase().replace(/#|_|-|\s|'*'/g, '')}
        dispatch(propertyCreation(itemObject))
        resetGlobal()
        // navigate(`/messages/`)
    }

    if (items.length === 0) {
        return null
    }

    return (
        <div className='selectNumberGlobal'>
            
            <img className='closeIcon' 
                        src={closeIcon}  
                        onClick={resetGlobal}
                        alt='cancel - close'
                        width={"30px"}
                    />
            <div className='selectNumberDiv'>
    
            <h3 className='selectNumberTitle'>select the correct number</h3>

            <div className='selectionDiv'>
                <fieldset className='selectionFieldset'>
                    <legend>Select the correct number:</legend>
                    {items.map((img, index) => 
                    <div key={index} className='selectColumns'>
                        <div  className='enterTextForm messageForm'>
                            <input type="radio" id={img} name={img} value={img} checked={checkedResult === img} onChange={handleChangeCheckedText}/>
                            <label htmlFor={img} className={checkedResult === img ? 'itemSelected' : ''}>{img}</label>
                        </div>
                        {/* { Number.isInteger((index+1)/3) ?  <></> :  <div className='whiteColumn'></div>} */}
                    </div>
                    )}
                </fieldset>

            <div className='imageUploaded'>
                <img id='file'
                    alt={image}
                    width={"300px"}
                    src={URL.createObjectURL(image)}
                />
                <br />
            </div>


                {selectedResult &&
                <div className='formValidateSelection'>
                    <div>
                        <form onSubmit={handleSubmitSelection}>
                            <button className='buttonFour buttonSelectItem' type='submit'>select {selectedResult}</button>
                        </form>
                    </div>
                    <div className=''>
                        
                        <button className='buttonTier buttonUpdateManuallyNumber'onClick={() => {resetGlobal(); editNumber(selectedResult); setManualNumberFlag(true)}}>or update the number manually</button>
                        
                    </div>
                </div>
                }

            </div>
            </div>

    </div>
  )
}

export default SelectNumber