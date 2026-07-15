var car = {
    brand : "BMW",
    model : "modern",
    year : 2016,
    color : "black" 
}
console.log(car);
console.log(car.brand);
console.log(car["year"]);
car.color = "black";
car.Price = 20000
console.log(car);
delete car.year;
console.log(car.year); //undefined

var obj = {
    "student-name" : "Sara",
    age : 20
}
console.log(obj["student-name"]);

var obj2 ={
     name: "Ali", age: 25, city: "Cairo"
}
console.log(Object.keys(obj2));
console.log(Object.values(obj2));
console.log(obj2.hasOwnProperty("job"));

var setting = {
    theme: "dark",
    lang: "en",
}
Object.freeze(setting);
setting.theme = "light" //ignored
setting.fontSize = 16; // ignored
console.log(setting);






var cities = ["Cairo", "Alex", "Giza", "Luxor", "Aswan"];

console.log(cities);
console.log(cities.length);

console.log(cities[0]); // first city
console.log(cities[1]); // second city
console.log(cities[cities.length - 1]); // last city

cities.push("Mansoura");
console.log(cities);

cities.unshift("Tanta");
console.log(cities);

cities.pop();
console.log(cities);

cities.shift();
console.log(cities);

var courses = ["HTML", "CSS", "JS", "React"];

console.log(courses.indexOf("JS"));
console.log(courses.includes("Python"));

var items = ["pen", "book", "bag"];

items.forEach(function(item, index){
    console.log(index, item);
});

var colors = ["red", "green", "blue", "yellow"];

for(var color of colors){
    if(color == "blue"){
        break;
    }
    console.log(color);
}

var letters = ["A", "B", "C"];

letters.push("D");
letters.push("E");

letters.shift();

console.log(letters);
console.log(letters.length);







var fruits = ["apple", "banana", "cherry"];

var upper = fruits.map(function(item){
    return item.toUpperCase();
});

console.log(upper);
console.log(fruits);

var numbers = [10, 55, 30, 80, 45, 90];

var result = numbers.filter(function(num){
    return num > 50;
});

console.log(result);

var cities = ["Cairo", "Giza", "Alex", "Aswan"];

var city = cities.find(function(item){
    return item.startsWith("A");
});

var index = cities.findIndex(function(item){
    return item.startsWith("A");
});

console.log(city);
console.log(index);

var letters = ["a", "b", "c", "d", "e"];

var copy = letters.slice(1, 4);

console.log(copy);
console.log(letters);

var words = ["one", "two", "three", "four", "five"];

var removed = words.splice(1, 2);

console.log(removed);
console.log(words);

var nums = [40, 100, 1, 5, 25];

nums.sort(function(a, b){
    return a - b;
});

console.log(nums);

var ages = [16, 21, 17, 19];

var any = ages.some(function(age){
    return age >= 18;
});

var all = ages.every(function(age){
    return age >= 18;
});

console.log(any);
console.log(all);

var numbers = [5, 10, 15, 20];

var total = numbers.reduce(function(sum, num){
    return sum + num;
}, 0);

console.log(total);






const students = [
  { name: "Omar", grade: 80 },
  { name: "Mona", grade: 90 },
  { name: "Ali", grade: 70 }
];

for (let student of students) {
  console.log(student.name, student.grade);
}

const students = [
  { name: "Omar", grade: 80 },
  { name: "Mona", grade: 90 },
  { name: "Ali", grade: 70 }
];

const highAchievers = students
  .filter(student => student.grade >= 80)
  .map(student => student.name);

console.log(highAchievers);

const products = [
  { name: "Laptop", price: 1200 },
  { name: "Phone", price: 800 },
  { name: "Headphones", price: 150 }
];

const totalPrice = products.reduce((sum, product) => sum + product.price, 0);

console.log("Total price:", totalPrice);

const arr = ["js", "html1", "css", "js", "react", "js"];

const count = arr.filter(item => item === "js").length;


console.log(count);

const classroom = {
  teacher: "Mr. Smith",
  students: ["Alice", "Bob", "Charlie", "Diana"]
};

console.log("Teacher:", classroom.teacher);
console.log("Number of students:", classroom.students.length);
console.log("Last student:", classroom.students[classroom.students.length - 1]);

const items = [
  { id: 1, title: "Pen", price: 10 },
  { id: 2, title: "Book", price: 50 },
  { id: 3, title: "Bag", price: 25 }
];


const upperTitles = items.map(item => item.title.toUpperCase());
console.log("Uppercase titles:", upperTitles);


const cheapProducts = items.filter(item => item.price < 30);
console.log("Cheap products:", cheapProducts);


const total = items.reduce((sum, item) => sum + item.price, 0);
console.log("Total price:", total);

