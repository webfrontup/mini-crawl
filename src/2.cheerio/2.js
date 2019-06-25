const cheerio = require('cheerio');
const html = `
<ul id="fruit">
    <li>Apple</li>
    <li class="favorite">Banana</li>
    <li>Peach</li>
</ul>    

`;
let $ = cheerio.load(html);
let fruit = $("#fruit");
let lis = fruit.find("li");

let fruits = [];
// lis.each((index, li) => {
//     return fruits.push($(li).text());
// });
// console.log(fruits);

// console.log(lis.first().text());
// console.log(lis.eq(1).text());
// console.log(lis.last().text());

// console.log(fruit.children().length) // 3
let favoriteFruits = fruit
	.children()
	.filter((index, item) => $(item).hasClass("favorite"));

console.log(favoriteFruits.length, "favoriteFruits");


