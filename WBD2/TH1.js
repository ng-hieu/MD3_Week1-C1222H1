const onMyBirthday = (isKayoSick) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (!isKayoSick) {
                resolve(2);
            } else {
                reject("Kayo is Sick");
            }
        })

    });
};
onMyBirthday(false)
    .then((data) => {
        console.log(`I have ${data} cakes`);
    })// In the console: I have 2 cakes
    .catch((eror) => {
        console.log(eror)
    })
    .finally(() => {
        console.log('Party')
    })