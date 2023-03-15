let sumPoinOfMale = 0;
let sumPoinOfFemale = 0;
let countMale = 0;
let countFemale = 0;
let students = [
    {
        name: "Ha",
        gender: 'female',
        poin: 8
    },
    {
        name: "Huy",
        gender: 'male',
        poin: 9
    },
    {
        name: "Hung",
        gender: 'male',
        poin: 7
    },
    {
        name: "Phuong",
        gender: 'female',
        poin: 6
    },
    {
        name: "Huyen",
        gender: 'female',
        poin: 10
    },
    {
        name: "Long",
        gender: 'male',
        poin: 5
    },
    {
        name: "Luan",
        gender: 'male',
        poin: 10
    },
    {
        name: "Linh",
        gender: 'female',
        poin: 8
    }
];
students.forEach((value, index, array) => {
    if(value.gender === "male"){
        sumPoinOfMale+=value.poin;
        countMale++;
    } else {
        sumPoinOfFemale += value.poin;
        countFemale++;
    }
})
let avarage = (sumPoinOfMale+sumPoinOfFemale)/(countMale+countFemale);
console.log(avarage);