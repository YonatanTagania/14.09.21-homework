// homework
// 1
let articles = [{
    title: "hello",
    writer: "moriniho",
    date: "09/08/16"
},
{
    title: "bamba",
    writer: "bibi",
    date: "05/24/11"
},
{
    title: "banana",
    writer: "moshe",
    date: "11/07/20"
},]

// A

articles.forEach((article) => {
    console.log(article);
});

// B

for (const article of articles) {
    console.log(article);
}

// 2
let cars = [{
    model: "mazda",
    year: 2018,
    color: "blue"
},
{
    model: "polo",
    year: 2008,
    color: "black"
},
{
    model: "audi",
    year: 2021,
    color: "grey"
}
]

// 2
for (i = 0; i < cars.length; i++) {
    for (const key in cars[i]) {
        console.log(key + " " + cars[i][key]);
    }
}

// 3

let books = [{
    name: "harry potter",
    writer: "j.k rowling",
    price: 80
},
{
    name: "jinji",
    writer: "israeli women",
    price: 50
},
{
    name: "sherlok holmes",
    writer: "i don't know",
    price: 80
}
]
// a
books.forEach((book) => {
    console.log(book);
});
// b
    books.forEach((book) => {
        console.log(book.writer);
    });

    // 4


    // A
    let numbers=[2,4,6,8,10,50]
let sum=0
numbers.forEach((number)=>{
sum+=number
})
// console.log(sum);



// B
let numsSum=0;
for (const number of numbers) {
    numsSum+=number
}

console.log(numsSum);