const axios = require("axios");
async function getAllUser (){
    let picture = await axios.get('https://jsonplaceholder.typicode.com/users');
    let memory = picture.data;
    console.log(memory)
}
getAllUser ()