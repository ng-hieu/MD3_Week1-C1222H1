let inputCheck = [1, 4, 6, 4, 3,5]
async function findMax(arr){
    let max = [0];
    if(arr instanceof Array){
        arr.forEach((value)=>{
            if(max<value){
                max = value;
            }
        })
        return max;
    }
    throw new Error("Khong phai mang")
}
async function inputArr(){
    try {
        let result = await findMax(inputCheck);
        console.log(`So lon nhat la: ${result}`)
    } catch (error){
        console.log(error.message);
    }
}
inputArr();