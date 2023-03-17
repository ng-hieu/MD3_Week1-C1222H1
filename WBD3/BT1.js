const axios = require("axios");
async function getPictureOfDay(){
    let picture = await axios.get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY');
    let memory = picture.data;
    console.log(memory)
}
getPictureOfDay()