function checkTheMoney(money, target){
    return new Promise((resolve, reject)=>{
        if(money>=target){
            resolve("Da du tien");
        } else {
            reject(`Con thieu ${target - money}`);
        }
    })
}
function run(){
    let money = document.getElementById("boxOfMoney").value;
    let target = document.getElementById("boxOfTarget").value;
    let check = checkTheMoney(money, target);
    check.then((data)=>{
        document.getElementById("results").innerHTML = data;
    }).catch((err)=>{
        document.getElementById("results").innerHTML = err;
    })
}