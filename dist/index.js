// **********************************************
// ******************* BÖLÜM 1 ******************
// **********************************************
const kardesPayi = (name) => {
    name
        ? console.log(`Bir Tane ${name} için, bir de benim için`)
        : console.log(`Bir Tane senin için bir tane benim için`);
};
kardesPayi("emre");
kardesPayi();
// **********************************************
// ******************* BÖLÜM 2 ******************
// **********************************************
function isLeapYear(year) {
    return (year % 4 == 0 && year % 100 !== 0) || year % 400 === 0;
}
const leapYear24 = isLeapYear(2024);
const leapYear21 = isLeapYear(2021);
const leapYear20 = isLeapYear(2020);
const leapYear19 = isLeapYear(2019);
console.log(leapYear24, leapYear21, leapYear20, leapYear19);
const dune = {
    title: "Dune",
    originalTitle: "Dune Part One",
    director: "Denis Villeneuve",
    releaseYear: 2021,
    boxOffice: {
        budget: 165000000,
        grossUS: 108327830,
        grossWorldwide: 400671789,
    },
};
const cats = {
    title: "Cats",
    director: "Tom Hooper",
    releaseYear: 2019,
    boxOffice: {
        budget: 95000000,
        grossUS: 27166770,
        grossWorldwide: 73833348,
    },
};
// SORU 2;
function getProfit(movie) {
    return movie.boxOffice.grossWorldwide - movie.boxOffice.budget;
}
const profitDune = getProfit(dune);
const profitCats = getProfit(cats);
console.log(`profitDune:${profitDune},| profitCats:${profitCats}`);
//Arrayler
// **********************************************
// ******************* BÖLÜM 1 ******************
// **********************************************
const ages = [];
// **********************************************
// ******************* BÖLÜM 2 ******************
// **********************************************
const gameBoard = [
    ["Fahrettin", "Emre", "Uçar"],
    ["Sude", "Ayla", "Yıldız"],
];
// **********************************************
// ******************* BÖLÜM 4 ******************
// **********************************************
const getTotal = (array) => {
    return array.reduce((totalPrice, product) => totalPrice + product.price, 0);
};
const products = [
    { name: "product1", price: 350 },
    { name: "product2", price: 450 },
    { name: "product3", price: 550 },
];
const total = getTotal(products);
console.log("Ürünlerin Toplam Fiyatı:" + total);
// UNİONLAR 
// **********************************************
// ******************* BÖLÜM 1 ******************
// **********************************************
let highScore;
highScore = 1;
highScore = true;
// **********************************************
// ******************* BÖLÜM 2 ******************
// **********************************************
let stuff;
stuff = ["Fahrettin", "Emre", "Uçar"];
stuff = [0, 1, 2,];
let colors = [];
// **********************************************
// ******************* BÖLÜM 6 ******************
// **********************************************
const greet = (name) => {
    if (Array.isArray(name)) {
        name.forEach((isim) => {
            console.log(`Merhaba ${isim}`);
        });
    }
    else {
        console.log(`Merhaba ${name}`);
    }
};
greet("Emre");
greet(["Sude", "Ayla", "Yıldız"]);
export {};
//# sourceMappingURL=index.js.map