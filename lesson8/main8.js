// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone +
// function User (id,name,surname,email,phone) {
// створити пустий масив, наповнити його 10 об'єктами new User(....)+
// function User (id,name,surname,phone) {
//     this.id=id;
//     this.name= name;
//     this.surname = surname;
//     this.phone =phone;
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

// - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)+
// console.log(user1.filter((user) => !(user.id % 2)));

// - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)
// зробила за спаданням,якщо за зростанням то (a.id - b.id);
// console.log(user1.sort((a, b) => (b.id - a.id)));

// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
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
//     new Clients2(9,'Nelya','Torbych','vtorb','001',['case','apple','iphone','fvfv','fvffvf','fvfv']),
//     new Clients2(10,'Tanya','Torbych','vtorb','001',['h', 'p','g','gg','jj'])
// ];


// - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)
// console.log(client1.sort((a, b) => (a.order.length - b.order.length)));

// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна.
// додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
// function Car  (model,manufactures,year,maxspeed,volume) {
//         this.model = model;
//         this.manufactures = manufactures;
//         this.year = year;
//         this.maxspeed = maxspeed;
//         this.volume = volume;
//         this.drives = [];
//
//     this.drive = function () {
//         return `їдемо зі швидкістю ${this.maxspeed} на годину`
//     }
//     this.info =  function  () {
//         for (let key in this) {
//             console.log(`${key.toUpperCase()} - ${JSON.stringify(this[key])}`);
//         }
//         console.log('info:')
//     }
//     this.increaseMaxSpeed = function (newSpeed)
//     {
//         let speed = this.maxspeed + newSpeed;
//         this.maxspeed = speed < 0 ? 0 : speed;
//     }
//     this.changeYear = function (newValue) {
//         this.year = newValue;
//     }
//     this.addDriver = function  (name,age) {
//         this.drives.push(new Driver(name,age));
//     }
// }
// function Driver (name,age) {
//         this.name = name;
//         this.age = age;
//     }
// let car1 = new Car('tayota','China',2015,100,200);
// console.log(car1.drive());
// console.log(car1.info());
// console.log(car1.increaseMaxSpeed(15));
// console.log(car1.info());
// console.log(car1.changeYear(2018));
// console.log(car1.info());
// car1.addDriver('Vita',25);
// console.log(car1.info());




// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
//     -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
//     -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
//     -- changeYear (newValue) - змінює рік випуску на значення newValue
//     -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car

//  class Car {
// constructor (model,manufactures,year,maxspeed,volume) {
//     this.model = model;
//     this.manufactures = manufactures;
//     this.year = year;
//     this.maxspeed = maxspeed;
//     this.volume = volume;
//     this.drives = [];
// }
//     drive() {
//          return `їдемо зі швидкістю ${this.maxspeed} на годину`
//      }
//      info () {
//          for (let key in this) {
//              console.log(`${key.toUpperCase()} - ${JSON.stringify(this[key])}`);
//          }
//          console.log('info:')
//      }
//          increaseMaxSpeed(newSpeed)
//          {
//             let speed = this.maxspeed + newSpeed;
//              this.maxspeed = speed < 0 ? 0 : speed;
//          }
//          changeYear (newValue) {
//         this.year = newValue;
//          }
//          addDriver (name,age) {
//        this.drives.push(new Driver(name,age));
// }
//
//
//
// }
// class Driver {
//     constructor(name,age) {
//         this.name = name;
//         this.age = age;
//     }
// }
// let car1 = new Car('tayota','China',2015,100,200);
// console.log(car1.drive());
// console.log(car1.info());
// console.log(car1.increaseMaxSpeed(15));
// console.log(car1.info());
// console.log(car1.changeYear(2018));
// console.log(car1.info());
// car1.addDriver('Vita',25);
// console.log(car1.info());

// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
// function Cinderella (name,age,size){
// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
// За допомоги циклу знайти яка попелюшка повинна бути з принцом.
// Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку
// class Human {
//     constructor(name, age) {
//         this.name = name;
//         this.age = age;
//     }
// }
// class Popelushka extends Human {
//     constructor(name, age, footSize) {
//         super(name, age);
//         this.footSize = footSize;
//     }
// }
// class Prince extends Human {
//     constructor(name, age, bootSize) {
//         super(name, age);
//         this.bootSize = bootSize;
//     }
//     findPrincess1(arr) {
//         for (const candidate of arr) {
//             if (candidate.footSize === this.bootSize) {
//                 return candidate;
//             }
//         }
//     }
//     findPrincess2(arr) {
//         return arr.find((candidate) => candidate.footSize === this.bootSize);
//     }
// }
//
// const popelArr = [
// new Cinderella('Vika',16,36),
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
// const prince = new Prince('Dima', 18, 36);
//
// console.log(prince.findPrincess1(popelArr));
// console.log('*******')
// console.log(prince.findPrincess2(popelArr));