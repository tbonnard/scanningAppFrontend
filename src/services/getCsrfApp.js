import axios from 'axios'


const baseUrl = process.env.NODE_ENV === 'production' ? process.env.REACT_APP_PROD_URL : process.env.REACT_APP_DEV_URL;
const url = `${baseUrl}api/get-csrf-token/`

const getCsrfToken  = async () => {
  const response = await axios.post(`${url}`)
  // console.log(response.data)
  document.cookie = `csrftoken=${response.data.csrftoken}; Path=/`;
  return response.data;
}

// FOR INFORMATION IF NEEDED
function getCookie(name) {
  let cookieValue = null;
  if (document.cookie && document.cookie !== '') {
      const cookies = document.cookie.split(';');
      for (let i = 0; i < cookies.length; i++) {
          const cookie = cookies[i].trim();
          // Does this cookie string begin with the name we want?
          if (cookie.substring(0, name.length + 1) === (name + '=')) {
              cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
              break;
          }
      }
  }
  return cookieValue;
}
// const csrftoken = getCookie('csrftoken');

const exportedObject = { getCsrfToken  } 

export default exportedObject

