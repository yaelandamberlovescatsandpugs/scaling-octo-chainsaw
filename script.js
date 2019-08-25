// const axios = require('axios')
// That is normally how u write it

const gettingAPI = async () => {
  try {
    let response = await axios.get('https://jsonplaceholder.typicode.com/photos/1')
    console.log(response.data)
    if(!response) console.log(`Bad Request`)

    let div = document.getElementById('show')
    let h3 = document.createElement('h3')
    let img = document.createElement('img')
    div.appendChild(h3).innerHTML = response.data.title
    



  } catch (error) {
    console.error(error.message)
  }
}
gettingAPI()