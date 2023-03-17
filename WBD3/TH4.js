axios = require('axios');

function getJSONAPI() {
    return new Promise((resolve) => {
        axios.get('http://jsonplaceholder.typicode.com/posts')
            .then(function (item) {
                resolve(item.data);
            })
    })
}
getJSONAPI().then((result)=>{
    console.log(result);
})