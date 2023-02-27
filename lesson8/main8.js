// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// function User (id,name,surname,email,phone) {
//     this.id = id;
//     this.name = name;
//     this.surname = surname;
//     this.email = email;
//     this.phone = phone;
// }
// let user1 = new User('one','Vika','Torbych,','vtorbych3@gmail.com','0991767526');
// console.log(user1);

// створити пустий масив, наповнити його 10 об'єктами new User(....)
// function User (newusers) {
//     this.newusers = newusers;
// }
// let user1 = [
//     new User('Vova','Torbych',123),
//     new User('Vika','Torbych',123),
//     new User('Olya','Torbych',123),
//     new User('Katya','Torbych',123),
//     new User('Igor','Torbych',123),
//     new User('Nina','Torbych',123),
//     new User('Lena','Torbych',123),
//     new User('Olena','Torbych',123),
//     new User('Nastya','Torbych',123),
//     new User('Tanya','Torbych',123),
// ];
// console.log(user1);

// - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)
// function User (id,name,surname,phone) {
//     this.id = id;
//     this.name = name;
//     this.surname = surname;
//     this.phone = phone;
//     this.filteredUsr = this.id.filter(function(user) {
//         return user % 2 === 0;
//     });
// }
// let user1 = [
//     new User(1,'Vova','Torbych',123),
//     new User(2,'Vika','Torbych',123),
//     new User(3,'Olya','Torbych',123),
//     new User(4,'Katya','Torbych',123),
//     new User(5,'Igor','Torbych',123),
//     new User(6,'Nina','Torbych',123),
//     new User(7,'Lena','Torbych',123),
//     new User(8,'Olena','Torbych',123),
//     new User(9,'Nastya','Torbych',123),
//     new User(10,'Tanya','Torbych',123),
// ];
//
// console.log(user1.filteredUsr);
//
// - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)

// function User (id,name,surname,phone) {
//     this.id = id;
//     this.name = name;
//     this.surname = surname;
//     this.phone = phone;
//     this.sortUsr = this.newusers.sort(function(a,b) {
//         return  a.id - b.id;
//     });
// }
//
// let user1 = [
// //     new User(1,'Vova','Torbych',123),
// //     new User(2,'Vika','Torbych',123),
// //     new User(3,'Olya','Torbych',123),
// //     new User(4,'Katya','Torbych',123),
// //     new User(5,'Igor','Torbych',123),
// //     new User(6,'Nina','Torbych',123),
// //     new User(7,'Lena','Torbych',123),
// //     new User(8,'Olena','Torbych',123),
// //     new User(9,'Nastya','Torbych',123),
// //     new User(10,'Tanya','Torbych',123),
// // ];
//
// console.log(user1.sortUsr);

// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
// class Client {
//     constructor(id,name,surname,email,phone,order){
//     this.id = id;
//     this.name = name;
//     this.surname = surname;
//     this.email = email;
//     this.phone = phone;
//     this.order = order;
//
// }
// }
// let client1 = new Client('1','Vika','Torbych','vtorbych3','099',['pen','book','gum']);
// console.log(client1);

// / створити пустий масив, наповнити його 10 об'єктами Client2
// function Clients2 (id,name,surname,email,phone,order) {
//   this.id = id;
//   this.name = name;
//   this.surname = surname;
//   this.email = email;
//   this.phone = phone;
//   this.order = order;
// }
//
// let client1 = [
//     new Clients2(1,'Vova','Torbych','vtorb','001',['pen','apple']),
//     new Clients2(2,'Vika','Torbych','vtorb','001',['pen','apple']),
//     new Clients2(3,'Nina','Torbych','vtorb','001',['pen','apple']),
//     new Clients2(4,'Olya','Torbych','vtorb','001',['oil','apple']),
//     new Clients2(5,'Katya','Torbych','vtorb','001',['app','charge','heat','table']),
//     new Clients2(6,'Senya','Torbych','vtorb','001',['pen','apple']),
//     new Clients2(7,'Igor','Torbych','vtorb','001',['pen','apple']),
//     new Clients2(8,'Natya','Torbych','vtorb','001',['pen','apple']),
//     new Clients2(9,'Nelya','Torbych','vtorb','001',['case','apple','iphone']),
//     new Clients2(10,'Tanya','Torbych','vtorb','001',['h', 'p','g','gg','jj'])
// ];
// console.log(client1);

// - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)
// function Clients2 (id,name,surname,email,phone,order) {
//     this.id = id;
//   this.name = name;
//   this.surname = surname;
//   this.email = email;
//   this.phone = phone;
//   this.order = order;
//     this.sortCli = client1.sort(function (a, b) {
//         return a.order.length - b.order.length;
//     });
// }
// let client1 = [
//     new Clients2(1,'Vova','Torbych','vtorb','001',['pen','apple']),
//     new Clients2(2,'Vika','Torbych','vtorb','001',['pen','apple']),
//     new Clients2(3,'Nina','Torbych','vtorb','001',['pen','apple']),
//     new Clients2(4,'Olya','Torbych','vtorb','001',['oil','apple']),
//     new Clients2(5,'Katya','Torbych','vtorb','001',['app','charge','heat','table']),
//     new Clients2(6,'Senya','Torbych','vtorb','001',['pen','apple']),
//     new Clients2(7,'Igor','Torbych','vtorb','001',['pen','apple']),
//     new Clients2(8,'Natya','Torbych','vtorb','001',['pen','apple']),
//     new Clients2(9,'Nelya','Torbych','vtorb','001',['case','apple','iphone']),
//     new Clients2(10,'Tanya','Torbych','vtorb','001',['h', 'p','g','gg','jj'])
// ];
// console.log(client1.sortCli);

// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна.
// додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// function Car (model,manufactures,year,maxspeed,volume) {
//     this.model = model;
//     this.manufactures = manufactures;
//     this.year = year;
//     this.maxspeed = maxspeed;
//     this.volume = volume;
//     this.greeting = function () {
//         console.log(`їдемо зі швидкістю ${this.maxspeed} на годину`);
//     };
// }
// let car1 = new Car('tayota','China','2015','100 km','100');
// // console.log(car1);
// console.log(car1.greeting());

// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// function Car (model,manufactures,year,maxspeed,volume) {
//     this.model = model;
//     this.manufactures = manufactures;
//     this.year = year;
//     this.maxspeed = maxspeed;
//     this.volume = volume;
//     this.info = function () {
//         console.log(`model: ${this.model} `);
//         console.log(`manufactures: ${this.manufactures} `);
//         console.log(`year: ${this.year} `);
//         console.log(`maxspeed: ${this.maxspeed} `);
//         console.log(`volume: ${this.volume} `);
//     };
// }
// let car1 = new Car('tayota','China','2015','100 km','100');
// console.log(car1.info());

// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// function Car (model,manufactures,year,maxspeed,volume) {
//     this.model = model;
//     this.manufactures = manufactures;
//     this.year = year;
//     this.maxspeed = maxspeed;
//     this.volume = volume;
//     this.greeting = function (){
//         console.log(`підвищене значення : ${this.maxspeed}`);
//     }
// }
// let car1 = new Car('tayota','China','2015','100 km','100');
// let newSpeed = {
//     maxspeed: '101km'
// }
// car1.greeting.call(newSpeed);

// -- changeYear (newValue) - змінює рік випуску на значення newValue
// function Car (model,manufactures,year,maxspeed,volume) {
//     this.model = model;
//     this.manufactures = manufactures;
//     this.year = year;
//     this.maxspeed = maxspeed;
//     this.volume = volume;
//     this.greeting = function (){
//         console.log(`новий рік випуску : ${this.year}`);
//     }
// }
// let car1 = new Car('tayota','China','2015','100 km','100');
// let newValue = {
//     year: '2020'
// }
// car1.greeting.call(newValue);

// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
// function Car (model,manufactures,year,maxspeed,volume) {
//     this.model = model;
//     this.manufactures = manufactures;
//     this.year = year;
//     this.maxspeed = maxspeed;
//     this.volume = volume;
//     this.addDriver = function (driver) {
//         this.driver = driver;
//         console.log(`${driver.name}`);
//     }
// }
// let car1 = new Car('tayota','China','2015','100 km','100');
// let driver = {name:'Olya'};
// car1.addDriver(driver);
// console.log(car1);

// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
//  class Car {
// constructor (model,manufactures,year,maxspeed,volume) {
//     this.model = model;
//     this.manufactures = manufactures;
//     this.year = year;
//     this.maxspeed = maxspeed;
//     this.volume = volume;
//     this.greeting = function () {
//         console.log(`їдемо зі швидкістю ${this.maxspeed} на годину`);
//     };
// }
// }
// let car1 = new Car('tayota','China','2015','100 km','100');
// console.log(car1);
// console.log(car1.greeting());

//     -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// class Car {
// constructor (model,manufactures,year,maxspeed,volume) {
//     this.model = model;
//     this.manufactures = manufactures;
//     this.year = year;
//     this.maxspeed = maxspeed;
//     this.volume = volume;
//     this.info = function () {
//         console.log(`model: ${this.model} `);
//         console.log(`manufactures: ${this.manufactures} `);
//         console.log(`year: ${this.year} `);
//         console.log(`maxspeed: ${this.maxspeed} `);
//         console.log(`volume: ${this.volume} `);
//     };
// }
// }
// let car1 = new Car('tayota','China','2015','100 km','100');
// console.log(car1.info());


//     -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// class Car {
// constructor (model,manufactures,year,maxspeed,volume) {
//     this.model = model;
//     this.manufactures = manufactures;
//     this.year = year;
//     this.maxspeed = maxspeed;
//     this.volume = volume;
//     this.greeting = function (){
//         console.log(`підвищене значення : ${this.maxspeed}`);
//     }
// }
// }
// let car1 = new Car('tayota','China','2015','100 km','100');
// let newSpeed = {
//     maxspeed: '101km'
// }
// car1.greeting.call(newSpeed);

//     -- changeYear (newValue) - змінює рік випуску на значення newValue
// class Car {
// constructor (model,manufactures,year,maxspeed,volume) {
//     this.model = model;
//     this.manufactures = manufactures;
//     this.year = year;
//     this.maxspeed = maxspeed;
//     this.volume = volume;
//     this.greeting = function (){
//         console.log(`новий рік випуску : ${this.year}`);
//     }
// }
// }
// let car1 = new Car('tayota','China','2015','100 km','100');
// let newValue = {
//     year: '2020'
// }
// car1.greeting.call(newValue);

//     -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
// class Car{
// constructor (model,manufactures,year,maxspeed,volume) {
//     this.model = model;
//     this.manufactures = manufactures;
//     this.year = year;
//     this.maxspeed = maxspeed;
//     this.volume = volume;
//     this.addDriver = function (driver) {
//         this.driver = driver;
//         console.log(`${driver.name}`);
//     }
// }
// }
// let car1 = new Car('tayota','China','2015','100 km','100');
// let driver = {name:'Olya'};
// car1.addDriver(driver);
// console.log(car1);

// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
// function Cinderella (name,age,size){
//     this.name = name;
//     this.age =age;
//     this.size = size;
// }
// let cinderella1 = [
//     new Cinderella('Vika',16,36),
//     new Cinderella('Inna',17,35),
//     new Cinderella('Olya',18,36),
//     new Cinderella('Yulia',19,34),
//     new Cinderella('Nika',20,32),
//     new Cinderella('Vita',21,37),
//     new Cinderella('Anna',22,38),
//     new Cinderella('Lila',20,34),
//     new Cinderella('Katya',15,35),
//     new Cinderella('Nastya',18,37),
// ];
// console.log(cinderella1);
// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
// class Prince {
//     constructor (name,age,findShoe){
//         this.name = name;
//         this.age = age;
//         this.findShoe = findShoe;
//     }
//
// }
//
// let prince1 = [new Prince('Vova',23,32)];
// console.log(prince1);

// За допомоги циклу знайти яка попелюшка повинна бути з принцом.
// function Cinderella (name,age,size){
//     this.name = name;
//     this.age =age;
//     this.size = size;
//     this.greeting = function (){
//         for (let i = 0;i < cinderella1.length; i++){
//             let cinderella = cinderella1[i];
//             if (cinderella1[i].size === 32) {
//                 console.log('Your wife');
//                 console.log(cinderella1[i]);
//             }else {
//                 console.log('Not your wife');
//             }
//         }
//     }
//     }
// let cinderella1 = [
//     new Cinderella('Vika',16,36),
//     new Cinderella('Inna',17,35),
//     new Cinderella('Olya',18,36),
//     new Cinderella('Yulia',19,34),
//     new Cinderella('Nika',20,32),
//     new Cinderella('Vita',21,37),
//     new Cinderella('Anna',22,38),
//     new Cinderella('Lila',20,34),
//     new Cinderella('Katya',15,35),
//     new Cinderella('Nastya',18,37),
// ];
// console.log(cinderella1);
// console.log(cinderella1.greeting());

// Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку
// function Cinderella (name,age,size){
//     this.name = name;
//     this.age =age;
//     this.size = size;
//     this.greeting = function (princess) {
//         return princess.size === 32;
//     }
// }
// let cinderella1 = [
//     new Cinderella('Vika',16,36),
//     new Cinderella('Inna',17,35),
//     new Cinderella('Olya',18,36),
//     new Cinderella('Yulia',19,34),
//     new Cinderella('Nika',20,32),
//     new Cinderella('Vita',21,37),
//     new Cinderella('Anna',22,38),
//     new Cinderella('Lila',20,34),
//     new Cinderella('Katya',15,35),
//     new Cinderella('Nastya',18,37),
// ];
// console.log(cinderella1.find(greeting));