import axios from 'axios'

// const baseUrl = 'http://127.0.0.1:8000/api/messages/'
// const baseCreateUrl = 'http://127.0.0.1:8000/api/message/'
const baseUrl = 'https://scanningapp.pythonanywhere.com/api/messages/'
const baseCreateUrl = 'https://scanningapp.pythonanywhere.com/api/message/'

const getMessagesfromProperty = async (itemObject) => {
  const response = await axios.get(`${baseUrl}${itemObject.number}` );
  return response.data
}

const createMessage = async (itemObject) => {
    const response = await axios.post(`${baseCreateUrl}`, itemObject );
    return response.data
    
}

const exportedObject = { getMessagesfromProperty, createMessage } 

export default exportedObject


