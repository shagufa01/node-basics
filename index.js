const axios = require('axios');

// axios.get('https://jsonplaceholder.typicode.com/posts')
// .then(result => {
//   console.log(result.data)
// })
//  .catch(error => {
//    console.log(error);
//  })
 
async function fetchApi() {
  try {
    const result = await axios.get('https://jsonplaceholder.typicode.com/posts');
    console.log(result.data);
  } catch (error) {
    console.log(error);
  }
}

fetchApi();