const axios = require("axios");
let promis = new Promise((resolve)=>{
   axios.get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY').then((result)=>{
        resolve(result.data)
    });
})
promis.then((data)=>{
    console.log(data)
})

