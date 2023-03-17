async function onBirthday(isKayoSick){
    if(!isKayoSick){
        return 2
    } else {
        throw new Error("I'm sick")
    }
}
async function doSomething(){
    try{
        let result = await onBirthday(false);
        console.log(`I have ${result} cakes`)
    }
    catch (error){
        console.log(error.message);
    }
    finally {
        console.log('Party')
    }
}
doSomething();