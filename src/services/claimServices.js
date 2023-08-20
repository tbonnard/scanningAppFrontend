import axios from 'axios'

// const baseUrl = 'http://127.0.0.1:8000/api/claim/'
const baseUrl = 'https://scanningapp.pythonanywhere.com/api/claim/'

const claimProperty = async (itemObject) => {
  const response = await axios.post(`${baseUrl}`, itemObject );
  return response.data
}


const exportedObject = { claimProperty } 

export default exportedObject


