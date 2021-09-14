let names = ["moshe", "dani", "daviv",]

names.forEach((name, i) => {
    console.log(name, i);
});


let nums = [5, 4, 3, 2, 1]
nums.forEach((number, i) => {
    console.log(number, i);
})

nums.forEach((number) => {
    if (number % 2 == 0) {
        console.log(`${number} zugi`);
    }
    else {
        console.log(`${number} not zugi`);
    }
})


let objects = [{
    name: "david",
    age: 30
},
{
    name: "dani",
    age: 26
},
{
    name: "haim",
    age: 50
}]

for (const object of objects) {
    console.log(object);
}




let person = {
    name: "moti",
    age: 35,
    employed: true,
    eyesColor: "brown"
}


for (const key in person) {
    console.log(key);
    console.log(person[key]);
    // console.log(key+" "+person[key]);

}



