import axios from 'axios'

const baseUrl = process.env.NODE_ENV === 'production' ? process.env.REACT_APP_PROD_URL : process.env.REACT_APP_DEV_URL;
const url = `${baseUrl}api/claim/`


const claimProperty = async (itemObject) => {
  const response = await axios.post(`${url}`, itemObject );
  return response.data
}


const exportedObject = { claimProperty } 

export default exportedObject


