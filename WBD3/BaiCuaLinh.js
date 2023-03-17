//Bài tập: Sử dụng đường dẫn https://jsonplaceholder.typicode.com/todos và thư viện axios
// dùng 2 cách promise và async/await để in ra số lượng các công việc đã hoàn thành
// (các đối tượng có thuộc tính completed: true).

let count = 0;
const axios = require('axios');
let memory;
// axios.get('https://jsonplaceholder.typicode.com/todos').then((dataObj)=>{
//     memory = dataObj.data;
//     for (let i = 0; i < memory.length; i++) {
//         if(memory[i].completed === true){
//             count++;
//         }
//     }
//     console.log(count)
// });

async function checkMemory(){
    let data = (await axios.get('https://jsonplaceholder.typicode.com/todos')).data;

    for (let i = 0; i < data.length; i++) {
        if(data[i].completed === true){
            count++;
        }
    }
    console.log(count);
}
checkMemory();
