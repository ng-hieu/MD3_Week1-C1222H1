function delay(time){
   return new Promise((resolve)=>setTimeout(resolve, time))
}
async function countTime(value){
   while (value>0){
      document.getElementById("result").innerHTML = value;
      value--;
      await delay(1000);
   }
   return "counter finished";
}

function run(){
   let valueTime = document.getElementById("boxOfValue").value;
   let duringCount = countTime(valueTime);
   duringCount.then((data)=>{
      document.getElementById("result").innerHTML = data;
   });
}