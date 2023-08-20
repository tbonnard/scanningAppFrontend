import axios from 'axios'

const baseUrl = process.env.NODE_ENV === 'production' ? process.env.REACT_APP_PROD_URL : process.env.REACT_APP_DEV_URL;
const urlCreate = `${baseUrl}api/message/`
const url = `${baseUrl}api/messages/`


const getMessagesfromProperty = async (itemObject) => {
  const response = await axios.get(`${url}${itemObject.number}` );
  return response.data
}

const createMessage = async (itemObject) => {
    const response = await axios.post(`${urlCreate}`, itemObject );
    return response.data
    
}

const exportedObject = { getMessagesfromProperty, createMessage } 

export default exportedObject


