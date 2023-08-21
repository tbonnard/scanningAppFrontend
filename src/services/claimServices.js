import axios from 'axios'

const baseUrl = process.env.NODE_ENV === 'production' ? process.env.REACT_APP_PROD_URL : process.env.REACT_APP_DEV_URL;
const url = `${baseUrl}api/claim/`


const claimProperty = async (itemObject) => {
  console.log('bonjour')
  const response = await axios.post(`${url}`, itemObject );
  console.log(response.status)
  if (response.status.code === 400) {    
    return []
  }
  else {
    return response.data
  }
}


const exportedObject = { claimProperty } 

export default exportedObject


