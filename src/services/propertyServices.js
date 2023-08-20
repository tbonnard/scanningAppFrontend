import axios from 'axios'

// const baseUrl = 'http://127.0.0.1:8000/api/property/'
const baseUrl = 'https://scanningapp.pythonanywhere.com/api/property/'

const propertyCreation = async (itemObject) => {
  const response = await axios.post(`${baseUrl}`, itemObject  );
  return response.data

}

const exportedObject = { propertyCreation } 

export default exportedObject


