// for (let i = 50; i > 150; i -= 10) {
//     console.log(i);
// }
// console.log('Hello My Friends');

// const name = "Mango";
// console.log(name.split("")); // ["M", "a", "n", "g", "o"]

// const message = "JavaScript - це цікаво";
// console.log(message.split(" ")); // ["JavaScript", "-", "це", "цікаво"]

// const nameClients = ['Ruslan', 'Alya', 'Milla', 'Alex'];
// console.log(nameClients.includes('Milla'));
// console.log(nameClients.includes('Frank'));

// const numbers = [];

// numbers.push(1);
// console.log(numbers);

// numbers.push(2,3);
// console.log(numbers);

// const clients = ["Mango", "Ajax", "Poly", "Kiwi", "Pedro", "Frank", "Torro"];
// console.log(clients.slice());

// const scores = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// const deletedScores = scores.splice(5,2);
// console.log(scores);
// console.log(deletedScores);

// const clients = ["Mango", "Ajax", "Poly", "Kiwi", "Pedro", "Frank", "Torro"];
// const deletName = clients.splice(4,2);
// console.log(deletName);

// const colors = ["red", "green", "blue"];
// colors.splice(2,0,'ghf','xlfjndlkn','kjnkjk');
// console.log(colors);

// const animals = ['lion', 'tiger', 'elephant', 'crocodile', 'monkey'];
// animals.splice(2,0,777);
// console.log(animals);

// const languages = ["C", "C++", "Java", "JavaScript"];
// languages.splice(2,1, 'lklklklk');
// console.log(languages);

// const fruits = ["apple", "peach", "pear", "banana"];

// // Change code below this line
// const lastElementIndex = fruits.length -1;
// console.log(lastElementIndex);

// const lastElement = fruits[lastElementIndex];
// console.log(lastElement);

// const max = 10;
// for (let i = 0; i < max; i += 1) {
//   console.log(`${max} % ${i} = `, max % i);

// const target = 6;
// let sum = 0;

// for (let i = 0; i <= target; i += 1) {
//   sum += i;
// }

// console.log(sum);

// Change code below this line

// const numders = ['er','et','ey','eu','ei'];

// for (let i = 0; i < numders.length; i+=1) {
//   console.log(`${i +1}: ${numders[i]}`);
// }

// const names = ['Afgh','Rkjnk','Ohghg','Pfffd'];
// const numbers = ['380665554433','380665554433','380665554433','380665554433'];

// const namesList = names.split(',');
// const numbersList = numbers.split(',');

// for (let i = 0; i <li namesList.length; i+=1) {
//   console.log(`${namesList[i]}: ${numbersList[i]}`);

// }

// const string = ['Change code below this line'];
// const words = string.split(" ");

// let longestWord = "";

// for (let word of words) {
//   if (word.length > longestWord.length){
//     longestWord = word;
//   }

// }

// console.log(longestWord);

// Change code above this line

// let a = 6;
// let b = false;
// let c = "12";
// let d = 1;
// let result = a + d + c + b;
// console.log(result);

// Функції-----------------------------------------------

// let c = 10;

// if(true) {
//   // let b = 5;
//   c = 1;

//   if(true) {
//     // let b = 5;
//     c = 15;
//   }
// }
// console.log(c);

// function showName(name = 'Anonymus', age) {
//   console.log(`Hello ${name}! Your age is ${age}.`);
// }
// showName('Ann', 45);
// showName();
// showName();

// function culculate (a, b) {
//   return a + b;
// }

// const rrr = culculate(555, 5);
// console.log(rrr);

// const culc = function(a, b) {
//   return a + b;
// }
// console.log(culc(3,789));

// Псевдоелемент arguments-----------------------

// function getSum (a, b) {
//   return arguments;
// }
// console.log(getSum(8, 7, 9, 23));

// function getSum () {
//   let total = 0;

//   for (let i = 0; i < arguments.length; i += 1){
//     total += arguments[i];
//   }

//   return total;
// }
// console.log(getSum(8, 7, 9, 23, 6, 7));

// Стек викликів-----------------------
// Практичне завдання-----------------------

// const courses = ['HTML', 'CSS', 'JS', 'Node', 'React'];

// function addCourse(name) {
//   if(!courses.includes(name)) {
//     courses.push(name);
//   }
// }

// function removeCourse(name) {
//   const indexCourse = courses.indexOf(name);
//   console.log(indexCourse);

//   if(indexCourse === -1) {
//     return;
//   }
//   courses.splice(indexCourse, 1);
// }

// function updateCourse(oldName, newName) {
//   const indexCourse = courses.indexOf(oldName);

//   if(indexCourse !== -1) {
//     courses.splice(indexCourse, 1, newName);
//   }
// }

// addCourse('React Native');
// removeCourse('Node');
// updateCourse('React', 'Vue');

// console.log(courses);

// function longestString() {
//   let longest = '';

//   for(let i = 0; i < arguments.length; i += 1) {
//     if(arguments[i].length > longest.length) {
//       longest = arguments[i];
//     }
//   }
//   return longest;
// }
// console.log(longestString('6546', 'mjj', 'qwwqwqwwqwqw'))

// Обєкти-----------------------------------------------

// const book = {
//   title: "The Last Kingdom",
//   author: "Bernard Cornwell",
//   genres: ["historical prose", "adventure"],
//   isPublic: true,
//   rating: 8.38,
// };

// const bookTitle = book.title;
// console.log(bookTitle);

// const bookGenres = book.genres;
// console.log(bookGenres);

// const bookPrice = book.price;
// console.log(bookPrice); // нема  такого

// const user = {
//   name: "Jacques Gluke",
//   tag: "jgluke",
//   location: {
//     country: "Jamaica",
//     city: "Ocho Rios",
//   },
//   hobbies: ["swiming", "music", "sci-fi"],
// };

// const userLocation = user.location;
// console.log(userLocation);

// const userLocationCity = user.location.city;
// console.log(userLocationCity);

// const userHobbies = user.hobbies;
// console.log(userHobbies[2]);

// const numberOfHobbies = user.hobbies.length;
// console.log(numberOfHobbies);

// const book = {
//   title: "The Last Kingdom",
//   author: "Bernard Cornwell",
//   genres: ["historical prose", "adventure"],
//   isPublic: true,
//   rating: 8.38,
// };

// book.title = "Last King";
// book.isPublic = false;
// book.rating = 10.5;

// console.log(book.title);
// console.log(book.isPublic);
// console.log(book.rating);

// book.pageCount = 839;
// book.originalLanguage = "en";
// book.translations = ["ua","pro", "blabla"]

// console.log(book.pageCount);
// console.log(book.originalLanguage);
// console.log(book.translations);

// const name = "Ruslan Kostenko";
// const age = 29;

// const user = {
//   name,
//   age,
// };

// console.log(user.name);
// console.log(user.age);

// const propName = "name";
// const user = {
//   age: 25,
//   [propName] : "Ruslan Kostenko",
// };

// // user[propName] = "Ruslan Kostenko";

// console.log(user.name);

// const bookShelf = {
//   books: ['The Last Kingdom', 'Dream Guardian'],
//   getBooks() {
//     console.log('Цей метод буде повертати всі книги - властивість books');
//   },
//   addBook() {
//     console.log('Цей метод буде додавати нову книгу у властивість books');
//   },
// };

// bookShelf.getBooks();
// bookShelf.addBook();

// const bookShelf = {
//   books: ["The Last Kingdom"],
//   getBooks() {
//     console.log(this);
//   },
// };

// // Перед крапкою знаходиться об'єкт bookShelf,
// // тому, викликаючи метод, this буде зберігати посилання на нього.
// bookShelf.getBooks();

// const book = {
//   title: "The Last Kingdom",
//   author: "Bernard Cornwell",
//   genres: ["historical prose", "adventure"],
//   rating: 8.38,
// };

// for (const key in book) {
//   // Ключ
//   console.log(key);
//   // Значення властивості з таким ключем
//   console.log(book[key]);
// }

// const animal = {
//   legs: 4,
// };
// const dog = Object.create(animal);
// dog.name = "Манго";

// console.log(dog); // {name: 'Манго'}
// console.log(dog.name); // 'Манго'
// console.log(dog.legs); // 4

// const animal = {
//   legs : 4,
// };
// const dog = Object.create(animal);
// dog.name = "Mango";

// console.log(dog);
// console.log(dog.name);
// console.log(dog.legs);

// const book = {
//   title: "The Last Kingdom",
//   author: "Bernard Cornwell",
//   genres: ["historical prose", "adventure"],
//   rating: 8.38,
// };

// for(const key in book) {
//   if(book.hasOwnProperty(key)) {
//     console.log(key);
//     console.log(book[key]);
//   }
// }

// const book = {
//   title: "The Last Kingdom",
//   author: "Bernard Cornwell",
//   rating: 8.38,
// };
// const keys = Object.keys(book);
// console.log(keys); // ['title', 'author', 'rating']

// const values = Object.values(book);
// console.log(values); // ['The Last Kingdom', 'Bernard Cornwell', 8.38]

// const book = {
//   title : 'The Last Of Us',
//   author : 'Bred',
//   rating: 9.99,
// };

// const keys = Object.keys(book);
// console.log(keys);

// const values = Object.values(book);
// console.log(values);

// const goods = {
//   apples : 6,
//   grappes : 3,
//   bread : 4,
//   cheese : 7,
// };

// const values = Object.values(goods);
// console.log(values);

// let total = 0;
// for(const value of values) {
//   total += value;
// }
// console.log(total);

// const apartment = {
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
// };
// const values = [];
// // Change code below this line
// const keys = Object.keys(apartment);

// for (const key of keys) {
//   console.log(key);
//   console.log(apartment[key]);
// };

// const values = Object.values(apartment);

// for (const value of values) {
//   console.log(value);
// };

// const book = {
//     title : 'The Last Of Us',
//     author : 'Bred',
//     rating: 9.99,
//   };

//   const keys = Object.keys(book);
//   console.log(keys);

//   const values = Object.values(book);
//   console.log(values);

//   const entries = Object.entries(book);
//   console.log(entries);

// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     rating: 8.38,
//   },
//   {
//     title: "На березі спокійних вод",
//     author: "Роберт Шеклі",
//     rating: 8.51,
//   },
//   {
//     title: "Сон смішної людини",
//     author: "Федір Достоєвський",
//     rating: 7.75,
//   },
// ];

// for (const book of books) {
//   console.log(book);
//   console.log(book.title);
//   console.log(book.author);
//   console.log(book.rating);
// }

// const bookNames = [];
// for (const book of books) {
//   bookNames.push(book.title);
//   console.log(bookNames);
// }

// let totalRating = 0;

// for(const book of books) {
//   totalRating += book.rating;
// }

// console.log(totalRating);

// const avarageRating = (totalRating / books.length).toFixed(1);
// console.log(avarageRating);

// const playlist = {
//   name: 'Мій супер плейлист',
//   rating: 5,
//   tracks: ['track-1', 'track-2', 'track-3'],
//   trackCount: 3,
//   getName(){
//     console.log('Так це гет нейм :)', );
//   },
// }

// console.log(playlist);

// const number = 'AH 7575 BH';

// const car = {
//   mark: 'Ford',
//   model: 'Mondeo',
//   wheels: 4,
//   isFromUSA: true,
//   // number: number,
//   number,

// };

// car.color = 'black';
// car.isFromUSA = false;

// car['wheels'] = 8;

// console.log(car.mark);
// console.log(car.model);
// console.log(car.number);
// console.log(car['wheels']);
// console.log(car['isFromUSA']);
// console.log(car['ma'+'rk']);

// const human1 = {
//   name: 'Olya',
//   age: 29,
//   eyes: 'brown',
// };

// const human2 = human1;

// console.log(human1);
// console.log(human2);

// console.log(human1 === human2);

// human1.mood = 'happy',
// human1.eyes = 'green',

// for (let key in human1) {
//   console.log(`${key}:`, human1[key]);
// }

// const keyList = Object.keys(human1);
// for (const key of keyList) {
//   console.log(`${key}:`, human1[key]);
// }

// console.log(keyList);

// Задача порахувати сумму нарах.

// const salaries = {
//   Andrii: 3000,
//   Anna: 1200,
//   Sofiya: 2000,
// };

// function getResult(salaries) {
//   const values = Object.values(salaries);

//  let totalSum = 0;
//  for (let value of values) {
//   totalSum += value;
//  }
//  return totalSum;
// }

// console.log(getResult(salaries));

// const products = [
//   { name: "Radar", price: 1300, quantity: 4 },
//   { name: "Scanner", price: 2700, quantity: 3 },
//   { name: "Droid", price: 400, quantity: 7 },
//   { name: "Grip", price: 1200, quantity: 9 },
// ];

// function getAllPropValues(propName) {
//   // Change code below this line
//   const  =[];
//   console.log(propName)

//   // Change code above this line
// }
// console.log(products);

// Деструктуризація та spread/rest-------------------------

// const temps = [14, -4, 25, 8, 11];
// console.log(temps);
// console.log(Math.max(temps));

// console.log(...temps);
// console.log(Math.max(...temps));

// console.log([...temps]);

// const copyOfTemps = [...temps];
// console.log(copyOfTemps);

// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     rating: 8.38,
//   },
//   {
//     title: "На березі спокійних вод",
//     author: "Роберт Шеклі",
//     rating: 8.51,
//   },
// ];

// for (const book of books) {
//   console.log(book.title);
//   console.log(book.author);
//   console.log(book.rating);
// }

// for (const book of books) {
//   const {title, author, rating} = book;

//   console.log(title);
//   console.log(author);
//   console.log(rating);

// }

// for (const {title, author, rating} of books) {
//   console.log(title);
//   console.log(author);
//   console.log(rating);
// }

// const user = {
//   name: 'Jac',
//   tag: 'jgd',
//   stats: {
//     followers: 5603,
//     views: 4888,
//     likes: 5555,
//   },
// };

// const {
//   name,
//   tag,
//   stats: {followers, views: userViews, likes: userLikes = 0 },
//  } = user;

// console.log(name); // Jacques Gluke
// console.log(tag); // jgluke
// console.log(followers); // 5603
// console.log(userViews); // 4827
// console.log(userLikes); // 1308

// const rgb = [200, 255, 100];
// const [red, green, blue] = rgb;

// console.log(`R:${red}, G:${green}, B:${blue}`);

// const rgb = [200, 255, 100];
// let red, green, blue;

// [red, green, blue] = rgb;
// console.log(`R:${red}, G:${green}, B:${blue}`);

// const rgb = [200, 255, 100];
// const [red, green, blue, alfa=0.3] = rgb;

// console.log(`r:${red}, g:${green}, b:${blue}, a:${alfa},`);

// const [red, ...colors] = rgb;

// console.log(`R:${red}`);
// console.log(`Colors:${colors}`);

// const [, , blue] = rgb;

// console.log(`Blue:${blue}`)

// function doStuffWithBook(title, numberOfPages, downloads, rating, public) {
//   // Робимо щось з параметрами
//   console.log(title);
//   console.log(numberOfPages);
//   // І так далі

// // ❌ Що таке 736? Що таке 10283? Що таке true?
// doStuffWithBook("The Last Kingdom", 736, 10283, 8.38, true);
// };

// function doStuffWithBook (book) {
//   console.log(book.title);
//   console.log(book.numberOfPages);
// }

// // ✅ Все зрозуміло
// doStuffWithBook({
//   title: "The Last Kingdom",
//   numberOfPages: 736,
//   downloads: 10283,
//   rating: 8.38,
//   isPublic: true,
// });

// function doStuffWithBook (book) {
//   const {title, numberOfPages,downloads, rating, isPublic} =book;
//   console.log(title);
//   console.log(numberOfPages);
// };

// function doStuffWithBook ({
//   title,
//   numberOfPages,
//   downloads,
//   rating,
//   isPublic,
// }) {
//   console.log(title);
//   console.log(numberOfPages);
//   console.log(rating);
//   console.log(downloads);
//   console.log(isPublic);
// };

// const bookShelf = {
//   books: ["The last kingdom", "Haze", "The guardian of dreams"],
//   updateBook(oldName, newName) {
//     // Change code below this line
//     console.log(this);

//     // Change code above this line
//   },

// };
// bookShelf.updateBook();

// const atTheOldToad = {
//   potions: ["Speed potion", "Dragon breath", "Stone skin"],
//   removePotion(potionName) {
//     // Change code below this line
//     // this.potions.indexOf(potionName)
//    for (const potion of potions) {
//      if (this.potions includes removePotiom(potionName)) {
//        this.potions.splice(potionName, 1)
//      },
//    }

// Change code above this line
//   },
// };

// Знайти максимальний рейтинг

// const authors = {
//   kiwi: 4,
//   poly: 7,
//   ajax: 9,
//   mango: 6,
// }

// const values = Object.values(authors);

// function findMax(values) {
//   let maxRating = values[0];
//   for (let value of values) {
//     if (maxRating < value ) {
//       maxRating = value;
//     }
//   }
//   return maxRating;
// }
// console.log(findMax(values));

// for (const key of keys) {
//   console.log(key);
//   console.log(Math.max(...authors[key]));
// }

// -----------------------------------------------------

// // Звичайне оголошення функції
// function classicAdd(a, b, c) {
//   return a + b + c;
// }

// // Те саме стрілочною функцією
// const arrowAdd = (a, b, c) => {
//   return a + b + c;
// };

// console.log(classicAdd (3, 5, 5));
// console.log(arrowAdd (3, 5, 9));

// const add = a => {
//   return a + 8;
// }

// console.log(add(7));

// const add = (a, b, c) => {
//   console.log(add(a, b, c));
//   return a + b + c;
// };

// const add = (a, b, c) => a + b + c;

// console.log(add(4 ,5, 5));

// const doMath = function (a, b, callback) {
//   const result = callback(a, b);

//   console.log(result);
// };

// doMath(7, 9, function (x, y) {
//   return x + y;
// });

// doMath(7, 3, function (x, y) {
//   return x - y;
// });

// const buttonRef = document.querySelector('.js-button');

// const handleBtnClick = function () {
//   console.log('клік' + Date.now());
// };

// buttonRef.addEventListener('click', handleBtnClick);

// const filter = function (array) {
//   for (const el of array) {
//     console.log(el);
//   }
// };

// filter([1,2,3,4,5]);

// filter([1,2,3,4,5,6,7,8,9]);

// const dirtyMultiply = (array, value) => {
//   for (let i = 0; i < array.length; i += 1) {
//     array[i] = array[i] * value;
//   }
// };

// const numbers = [1, 2, 3, 4, 5, 6];
// dirtyMultiply(numbers, 2);

// console.log(numbers);

// const pureMultiply = (array, value) => {
//   const newArray = [];

//   array.forEach(element => {
//     newArray.push(element * value);
//   });

//   return newArray;
// };

// const numbers = [1, 2, 3, 4, 5, 6];
// const doubledNumbers = pureMultiply(numbers, 2);

// console.log(doubledNumbers);

// array.map((item, index, array => {

// })

// const planets = ["Земля", "Марс", "Венера", "Юпітер"];

// const planetsInUpperCase = planets.map(planet => planet.toUpperCase());
// console.log(planetsInUpperCase);

// const planetsToLowerCase = planets.map(planet => planet.toLowerCase());
// console.log(planetsToLowerCase);

// console.log(planets);

// const students = [
//   { name: "Манго", score: 83 },
//   { name: "Полі", score: 59 },
//   { name: "Аякс", score: 37 },
//   { name: "Ківі", score: 94 },
//   { name: "Х'юстон", score: 64 },
// ];

// const names = students.map(student => student.name);
// const scores = students.map(stud => stud.score);

// console.log(names);
// console.log(scores);

// const values = scores;

// const valuesMore50 = values.filter(value => value >= 50);
// const valueLess50 = values.filter(value => value < 50);

// console.log(valuesMore50);
// console.log(valueLess50);

// const students = [
//   { name: "Манго", courses: ["математика", "фізика"] },
//   { name: "Полі", courses: ["інформатика", "математика"] },
//   { name: "Ківі", courses: ["фізика", "біологія"] },
// ];

// const allCourses = students.flatMap(student => student.courses);
// // ['математика', 'фізика', 'інформатика', 'математика', 'фізика', 'біологія'];

// const uniqueCourses = allCourses.filter((course, index, array) => array.indexOf(course) === index
// );
// console.log(uniqueCourses);

// масив.find((element, index, array) => {
//   // Тіло колбек-функції
// });

// const colorPickerOptions = [
//   { label: "red",color: "#F44336" },
//   { label: "green", color: "#4CAF50" },
//   { label: "blue", color: "#2196F3" },
//   { label: "pink", color: "#E91E63" },
//   { label: "indigo", color: "#3F51B5" },
// ];

// console.log(colorPickerOptions.findIndex(option => option.label === "blue"));
// console.log(colorPickerOptions.findIndex(option => option.label === "pink"));
// console.log(colorPickerOptions.findIndex(option => option.label === "white"));

// console.log([1, 2, 3, 4, 5].every(value => value >= 0));

// console.log([1, 2, 3,-10, 4, 5].every(value => value >= 0));

// console.log([1, 2, 3, 4, 5].some(value => value >= 0));

// console.log([-1, -2, 3,-10, -4, -5].some(value => value >= 0));

// console.log([1, 2, 3, 4, 5].some(value => value < 0));

// console.log([1, 2, 3,-10, 4, 5].some(value => value < 0));

// const total = [2, 7, 3, 14, 6].reduce((previousValue, number) => {
//   return previousValue + number;
// }, 0);

// console.log(total);

// const students = [
//   { name: "Манго", score: 83 },
//   { name: "Полі", score: 59 },
//   { name: "Аякс", score: 37 },
//   { name: "Ківі", score: 94 },
//   { name: "Х'юстон", score: 64 },
// ];

// const totalScore = students.reduce((total, student) => {
//   return total + student.score;
// }, 0);

// const averageScore = totalScore / students.length;
// console.log(averageScore);

// const tweets = [
//   { id: "000", likes: 5, tags: ["js", "nodejs"] },
//   { id: "001", likes: 2, tags: ["html", "css"] },
//   { id: "002", likes: 17, tags: ["html", "js", "nodejs"] },
//   { id: "003", likes: 8, tags: ["css", "react"] },
//   { id: "004", likes: 0, tags: ["js", "nodejs", "react"] },
// ];

// const likes = tweets.reduce((totalLikes, tweet) => totalLikes + tweet.likes, 0);

// console.log(likes);

// // змінна та принцип роботи метода
// const tags = tweets.reduce((allTags, tweet) => {
//   allTags.push(...tweet.tags);

//   return allTags;
// }, []);

// console.log(tags);

// // функція
// const getTags = tweets =>
// tweets.reduce((allTags,tweet) => {
//   allTags.push(...tweet.tags);

//   return allTags;
// }, []);

// console.log(getTags(tweets));

// const scores = [61,19,74,35,92,56];
// const descendingScores = [...scores].sort((a,b) => b - a);

// console.log(descendingScores);

// const students = ["Віка", "Андрій", "Олег", "Юля", "Борис", "Катя"];

// const inAlphabetOrder = [...students].sort((a, b) => a.localeCompare(b));
// console.log(inAlphabetOrder);

// const inReversOrder = [...students].sort((a, b) => b.localeCompare(a));
// console.log(inReversOrder);

// const students = [
//   { name: "Манго", score: 83 },
//   { name: "Полі", score: 59 },
//   { name: "Аякс", score: 37 },
//   { name: "Ківі", score: 94 },
// ];

// const inAscendingScoreOrder = students.sort(
//   (firstStudent, secondStudent) => firstStudent.score - secondStudent.score
// );

// const inDescendingScoreOrder = students.sort(
//   (firstStudent, secondStudent) => secondStudent.score - firstStudent.score
// );

// const inAlphabeticalOrder = students.sort(
//   (firstStudent, secondStudent) => firstStudent.name.localeCompare(secondStudent.name)
// );

// const students = [
//   { name: "Манго", score: 83 },
//   { name: "Полі", score: 59 },
//   { name: "Аякс", score: 37 },
//   { name: "Ківі", score: 94 },
// ];

// const inAscendingScoreOrder = students.sort(
//   (firstStudent, secondStudent) => firstStudent.score - secondStudent.score
// );

// const inDescendingScoreOrder = students.sort(
//   (firstStudent, secondStudent) => secondStudent.score - firstStudent.score
// );

// const inAlphabeticalOrder = students.sort((firstStudent, secondStudent) =>
//   firstStudent.name.localeCompare(secondStudent.name)
// );

// console.log(inAscendingScoreOrder);
// console.log(inDescendingScoreOrder);
// console.log(inAlphabeticalOrder);

// const students = [
//   { name: "Манго", score: 83, courses: ["математика", "фізика"] },
//   { name: "Полі", score: 59, courses: ["інформатика", "математика"] },
//   { name: "Аякс", score: 37, courses: ["фізика", "біологія"] },
//   { name: "Ківі", score: 94, courses: ["література", "інформатика"] },
// ];

// const sortedByAscendingScore = [...students].sort((a,b) => a.score - b.score);
// const names = sortedByAscendingScore.map(student => student.name);

// console.log(names);

// const numes = [...students]
// .sort((a,b) => a.score - b.score)
// .map(student => student.name);

// console.log(numes);

// const uniqueSortedCourses = students
// .flatMap(student => student.courses)
// .filter((course, index, array) => array.indexOf(course) === index)
// .sort((a,b) => a.localeCompare(b));

// console.log(uniqueSortedCourses);

// Контекстне слово THIS

// const petya ={
//   userName: "Petya",
//   showName() {
//     console.log(petya.userName);
//   },
// };

// petya.showName();

// const roman = {
//   userName: "Roman",
//   showName() {
//     console.log(this.userName);
//   },
// };

// roman.showName();

// const bookShelf = {
//   authors: ["Бернард Корнуелл", "Роберт Шеклі"],
//   getAuthors () {
//     return this.authors;
//   },
//   addAuthor (authorName) {
//     this.authors.push(authorName);
//   },
// };

// console.log(bookShelf.getAuthors ());
// bookShelf.addAuthor("Лі Тіан");
// console.log(bookShelf.getAuthors());

// function foo() {
//   console.log(this);
// }

// foo(); // window без "use strict" і undefined з "use strict"

// const petya = {
//   username: "Petya",
//   showThis () {
//     console.log(this);
//   },
//   showName () {
//     console.log(this.username);
//   },
// };

// petya.showThis ();
// petya.showName ();

// function showThis () {
//   console.log("this in showThis: ", this);
// };

// showThis();

// const user = {
//   username: "Mango",
// };

// user.showContext = showThis;
// user.showContext ();

// const customer = {
//   firstName: "Jacob",
//   lastName: "Mercer",
//   getFullName () {
//     return `${this.firstName} ${this.lastName}`;
//   },
// };

// function makeMassage(callback) {
//   console.log(`to do of ${callback()}.`);
// }

// makeMassage(customer.getFullName);

// makeMassage(customer.getFullName.bind(customer)); +++++

// const showThis = () => {
//   console.log('this in showThis:', this);
// };

// showThis();

// const user = {
//   username: 'Mango',
// };

// user.showContext = showThis;

// user.showContext();

// const hotel = {
//   username: 'Resort hotel',
//   showThis() {
//     const foo = () => {
//       console.log('this in foo:', this);
//     };

//     foo();
//     console.log('this in showThis:', this);
//   },
// };

// hotel.showThis();

// Методи функцій************************

// function greetGuest(greeting) {
//   console.log(`${greeting}, ${this.username}.`);
// };

// const mango = {
//   username: 'Манго',
// };
// const poly = {
//   username: 'Полі',
// };

// greetGuest.call(mango, 'Welcome');
// greetGuest.call(poly, 'Welcome to Ukraine');

// greetGuest.apply(mango, ['Welcome']);
// greetGuest.apply(poly, ['Hello my friend']);

// function greet(clientName) {
//   return `${clientName}, ласкаво просимо в «${this.service}».`;
// }

// const steam = {
//   service: "Steam",
// };
// const steamGreeter = greet.bind(steam);
// steamGreeter("Манго"); // "Манго, ласкаво просимо в «Steam»."

// const gmail = {
//   service: "Gmail",
// };
// const gmailGreeter = greet.bind(gmail);
// gmailGreeter("Полі"); // "Полі, ласкаво просимо в «Gmail»."

// ООП ***********************

// const baseSalary = 30000;
// const overtime = 10;
// const rate = 20;

// const getWage = (baseSalary, overtime, rate) => {
//   console.log(baseSalary + overtime * rate);
// };

// getWage(baseSalary, overtime, rate);

// const employee = {
//   baseSalary: 75000,
//   overtime: 10,
//   rate: 25,
//   getWage () {
//     console.log(this.baseSalary + this.overtime * this.rate);
//   },
// };

// employee.getWage()

// const animal = {
//   legs: 4,
// };
// const dog = Object.create(animal);
// dog.name = 'Mango';

// console.log(dog);
// console.log(animal.isPrototypeOf(dog));

// console.log(dog.hasOwnProperty('name'));
// console.log(dog.name);

// console.log(dog.hasOwnProperty('legs'));
// console.log(dog.legs);

// const animal = {eats: true};
// const dog = Object.create(animal);
// dog.barks = true;

// for(const key in dog) {
//   console.log(key);
// };

// for(const key in dog) {
//   if(!dog.hasOwnProperty(key)) continue;

//   console.log(key);
// };
// console.log(animal.isPrototypeOf(dog));

// const animalKeys = Object.keys(animal);
// console.log(animalKeys)

// const dogKeys = Object.keys(dog);
// console.log(dogKeys)

// Класи *****************************

// class User {
//   constructor(name, email) {
//     this.name = name;
//     this.email = email;
//   }
// }

// const mango = new User('Mango', 'mango@gmail.com');
// console.log(mango);

// const poly = new User('poly', 'poly@gmail.com');
// console.log(poly);

// class Uzer {
//   constructor({name, email}) {
//     this.name = name;
//     this.email = email;
//   }
// }

// const mangi = new Uzer({
//   name: 'Mangi',
//   email: 'mangi@gmail.com',
// });
// console.log(mangi);

// const polya = new Uzer({
//   name: 'Polya',
//   email: 'polya@gmail.com',
// });
// console.log(polya);

// class Uzef {
//   constructor({name, email}) {
//     this.name = name;
//     this.email = email;
//   }

//   getEmail() {
//     return this.email;
//   }

//   changeEmail(newEmail) {
//     this.email = newEmail;
//   }
// }

// class Uuser {
//   name;
//   #email;

//   constructor({name, email}) {
//     this.name = name;
//     this.#email = email;
//   }

//   getEmail() {
//     return this.#email;
//   }

//   changeEmail(newEmail) {
//     this.#email = newEmail;
//   }
// }

// const mangust = new Uuser({
//   name: 'Mangust',
//   email: 'mangust@mail.com',
// });
// mangust.changeEmail('mangust@supermail.com');
// console.log(mangust.getEmail());
// // console.log(mangust.#email); помилкаааааааа

// class User {
//   static Roles = {
//     ADMIN: 'admin',
//     EDITOR: 'editor',
//   };

//   #email;
//   #role;

//   constructor({email, role}) {
//     this.#email = email;
//     this.#role =role;
//   }

//   get role() {
//     return this.#role;
//   }

//   set role(newRole) {
//     this.#role = newRole;
//   }
// }

// const mango = new User({
//   email: 'mango@mail.com',
//   role: User.Roles.ADMIN,
// });

// console.log(mango.Roles);
// console.log(User.Roles);

// console.log(mango.role);
// mango.role = User.Roles.EDITOR;
// console.log(mango.role);

// class User {
//   static #takenEmails = [];

//   static isEmailTaken(email) {
//     return User.#takenEmails.includes(email);
//   }

//   #email;

//   constructor({email}) {
//     this.#email = email;
//     User.#takenEmails.push(email);
//   }
// }

// const mango = new User ({email: 'mango@mail.com'});

// console.log(User.isEmailTaken('poly@mail.com'));
// console.log(User.isEmailTaken('mango@mail.com'));

// class User {
//   #email;

//   constructor(email) {
//     this.#email = email;
//   }

//   get email() {
//     return this.#email;
//   }

//   set email(newEmail) {
//     this.#email = newEmail;
//   }
// }

// class ContentEditor extends User {
//   constructor({email, posts}) {
//     super(email);
//     this.posts = posts;
//   }

//   addPost(post) {
//     this.posts.push(post);
//   }

// }

// // const editor = new ContentEditor ('mango@mail.com');
// const editor = new ContentEditor ({ email: "mango@mail.com", posts: [] });

// console.log(editor);
// console.log(editor.email);

// editor.addPost('post-1');
// console.log(editor.posts);

// class Car {
//   static #MAX_PRICE = 50000;
//   // Change code below this line
//   static checkPrice ({price}) {
//     if(this.checkPrice > this.MAX_PRICE) {
//       return "Error! Price exceeds the maximum";
//     }
//   }

//   // Change code above this line
//   constructor({ price }) {
//     this.price = price;
//   }
// }

// const audi = new Car({ price: 36000 });
// const bmw = new Car({ price: 64000 });

// console.log(Car.checkPrice(audi.price)); // "Success! Price is within acceptable limits"
// console.log(Car.checkPrice(bmw.price)); // "Error! Price exceeds the maximum"

// console.log(document);

// const body = document.body;
// console.log(body);

// const list = body.firstElementChild;
// console.log(list);

// const firstListItem = list.firstElementChild;
// console.log(firstListItem);

// const listItems = list.children;
// console.log(listItems);

// const listWithId = document.querySelector('#menu');
// listWithId.style.textTransform = 'uppercase' ;
// listWithId.style.fontSize = '24px';
// console.log(listWithId);

// const listWithClass = document.querySelector('.menu');
// console.log(listWithClass)

// const menuItemsByTagName = document.querySelectorAll('li');
// console.log(menuItemsByTagName);

// const menuItemByClass = document.querySelectorAll('.menu-item');
// console.log(menuItemByClass);

// const firstMenuItem = document.querySelector('.menu-item');
// firstMenuItem.style.color = 'violet';
// console.log(firstMenuItem)

// const text = document.querySelector(".article-text");
// console.log(text.textContent); // text inside p.article-text

// const title = document.querySelector(".article-title");
// title.textContent = 'Welcome to Bahamas!';
// console.log(title.textContent)

// const heading = document.createElement('h1');
// console.log(heading);

// heading.textContent = 'This is a heading';
// console.log(heading);

// const image = document.createElement('img');
// image.src = "https";
// image.alt = 'Nature';
// console.log(image);

// const list = document.querySelector('.username');

// const lastItem = document.createElement("li");
// lastItem.textContent = "Poly";
// list.append(lastItem);

// const firstItem = document.createElement('li');
// firstItem.textContent = 'Ajax';
// list.prepend(firstItem);

// const title = document.createElement('h2');
// title.textContent = 'USERNAMES';
// list.before(title);

// const text = document.createElement('p');
// text.textContent = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum tenetur assumenda fugiat maxime, soluta aspernatur quasi nihil in asperiores ad distinctio illo et debitis error iure voluptate numquam maiores nisi. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum tenetur assumenda fugiat maxime, soluta aspernatur quasi nihil in asperiores ad distinctio illo et debitis error iure voluptate numquam maiores nisi!";
// list.after(text);

// const article = document.querySelector(".article");
// console.log(article.innerHTML);

// const title = document.querySelector(".article .title");
// console.log(title.innerHTML);

// const text = document.querySelector(".article .text");
// console.log(text.innerHTML);

// const link = document.querySelector(".article .link");
// console.log(link.innerHTML);

// const technologies = ["HTML", "CSS", "JavaScript", "React", "Node"];
// const list = document.querySelector('.list');

// const markup = technologies
// .map((technology) => `<li class="list-item">${technology}</li>`)
// .join('');
// console.log(markup);

// list.innerHTML = markup;

// const article = document.querySelector('.article');
// const htmlString = `<p class='article-text'>Nullam quis ante. Vestibulum dapibus nunc ac augue. In consectetuer turpis ut velit.</p>
// <a class='link' href='#'>Read more...</a>`;

// article.innerHTML += htmlString;

// const list = document.querySelector('.list');

// const newTechnologies = ["React", "TypeScript", "Node.js"];
// const markup = newTechnologies
// .map((newTechnology) => `<li class='list-item new'>${newTechnology}</li>`)
// .join('');

// list.insertAdjacentHTML('beforeend', markup);
// list.insertAdjacentHTML('beforebegin', '<h2>Popular technologies</h2>')

// const refEl = {
//   parentEl : document.querySelector('#parent'),
//   childEl : document.querySelector('#child'),
//   descendantEl : document.querySelector('#descendant'),
// }

// refEl.parentEl.addEventListener('click', () => {
//   // alert('its parent alert');
//   console.log('event.target :', event.target)
// });

// refEl.childEl.addEventListener('click', () => {
//   alert('this is child alert');
// });

// refEl.descendantEl.addEventListener('click', () => {
//   alert('what is this? It is a descendant alert');
// });

//  const colorPalette = document.querySelector('.color-palette');
//  const output = document.querySelector('.output');

//  colorPalette.addEventListener('click', selectColor);

//  function selectColor(event) {
//   if(event.target.nodeName !== 'BUTTON') {
//     return;
//   }

//   const selectedColor = event.target.dataset.color;
//   output.textContent = `Selected color: ${selectedColor}`;
//   output.style.color = selectedColor;
//  }

//  createPaletteItems();

//  function createPaletteItems() {
//   const items = [];
//   for(let i = 0; i < 60; i ++) {
//     const color = getRandomColor();
//     const item = document.createElement('button');
//     item.type = 'button';
//     item.dataset.color = color;
//     item.style.backgroundColor = color;
//     item.classList.add('item');
//     items.push(item);

//   }
//   colorPalette.append(...items);
//  }

//  function getRandomColor() {
//   return `#${getRandomHex()}${getRandomHex()}${getRandomHex()}`;
//  }

//  function getRandomHex() {
//   return Math.round(Math.round() * 256)
//   .toString(16)
//   .padStart(2,'0');
//  }

// const colorPalette = document.querySelector(".color-palette");
// const output = document.querySelector(".output");

// colorPalette.addEventListener("click", selectColor);

// // This is where delegation «magic» happens
// function selectColor(event) {
//   if (event.target.nodeName !== "BUTTON") {
//     return;
//   }

//   const selectedColor = event.target.dataset.color;
//   output.textContent = `Selected color: ${selectedColor}`;
//   output.style.color = selectedColor;
// }

// // Some helper functions to render palette items
// createPaletteItems();

// function createPaletteItems() {
//   const items = [];
//   for (let i = 0; i < 60; i++) {
//     const color = getRandomColor();
//     const item = document.createElement("button");
//     item.type = "button";
//     item.dataset.color = color;
//     item.style.backgroundColor = color;
//     item.classList.add("item");
//     items.push(item);
//   }
//   colorPalette.append(...items);
// }

// function getRandomColor() {
//   return `#${getRandomHex()}${getRandomHex()}${getRandomHex()}`;
// }

// function getRandomHex() {
//   return Math.round(Math.random() * 256)
//     .toString(16)
//     .padStart(2, "0");
// }

// const resultEl = _.add(5,9);
// console.log(resultEl)

// console.log('first');

// setTimeout(()=> {
//   console.log('second')
// }, 2000)

// console.log('third');

// const button = document.querySelector('button');

// const  onClick = () => {
//   setTimeout(() => {
//     alert('I love js');
//   }, 2000);
// };

// console.log(onClick());

// button.addEventListener('click', onClick);

// const greet = () => {
//   console.log('Hello');
// };

// const timerId = setTimeout(greet, 3000);

// clearTimeout(timerId);

// const date = new Date();
// console.log("Date: ", date);

// console.log("getDate(): ", date.getDate());

// console.log("getDate(): ", date.getDay());

// console.log("getDate(): ", date.getMonth());

// console.log("getDate(): ", date.getFullYear());

// console.log("getUTCDate(): ", date.getUTCDate());

// const date = new Date("March 16, 2030 14:25:00");

// date.setMinutes(50);

// date.setFullYear(2040, 4, 8);

// console.log(date)

// const isSuccess = false;

// const promise = new Promise ((resolve, reject) => {
//   setTimeout(() => {
//     if (isSuccess) {
//       resolve('Success')
//     } else {
//       reject (' Error')
//     }
//   }, 3000)
// });

// promise
//   .then(value => {
//     console.log(value);
//   })
//   .catch(error => {
//     console.log(error);
//   })
//   .finally(()=> {
//     console.log('fine')
//   });

// const promise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve(5);
//   }, 2000);
// });

// promise
//   .then(value => {
//     console.log(value); // 5
//     return value * 2;
//   })
//   .then(value => {
//     console.log(value); // 10
//     return value * 3;
//   })
//   .then(value => {
//     console.log(value); // 30
//   })
//   .catch(error => {
//     console.log(error);
//   })
//   .finally(() => {
//     console.log("Final task");
//   });

// const makeGreeting = guestName => {
//   if (guestName === "" || guestName === undefined) {
//     return Promise.reject("Guest name must not be empty");
//   }

//   return Promise.resolve(`Welcome ${guestName}`);
// };

// makeGreeting("")
//   .then(greeting => console.log(greeting))
//   .catch(error => console.error(error));

const promise = new Promise((res, rej) => {
  setTimeout(() => {
    const val = Math.random();

    if (val > 0.5) {
      res("Yeeees");
    } else {
      rej("Noooo");
    }
    console.log(promise);
  }, 3000);
});

promise
  .then((value) => {
    console.log(value);
  })
  .catch((error) => {
    console.error(error);
  })
  .finally(() => {
    console.log();
  });
