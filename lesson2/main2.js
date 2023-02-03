// // МАСИВИ ТА ОБ'ЄКТИ
// // - Створити масив, наповнити його 10 елементами будь-якого типу, вивести кожен елемент в консоль
// let arr = ['one','two','three','four','fifth','six','seven','eight','nine','ten'];
// console.log(arr[0]);
// console.log(arr[1]);
// console.log(arr[2]);
// console.log(arr[3]);
// console.log(arr[4]);
// console.log(arr[5]);
// console.log(arr[6]);
// console.log(arr[7]);
// console.log(arr[8]);
// console.log(arr[9]);
// // // Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre
// let book01 = {
//     title: 'Sun',
//     pageCount: 300,
//     genre: 'novel'
// }
// console.log(book01);
// let book02 = {
//     title: 'Moon',
//     pageCount: 250,
//     genre: 'detective'
// }
// console.log(book02);
// let book03 = {
//     title: 'West',
//     pageCount: 100,
//     genre: 'story'
// }
// console.log(book03);
// // Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre, authors. Поле "автори" - являється  масивом. Кожен автор має поля name та age.
// let book1 = {
//     title: 'Sun',
//     pageCount: 300,
//     genre: 'novel',
//     authors: ['Ivan',35]
// }
// console.log(book1);
// let book2 = {
//     title: 'Moon',
//     pageCount: 250,
//     genre: 'detective',
//     authors: ['Sasha',45]
// }
// console.log(book2);
// let book3 = {
//     title: 'West',
//     pageCount: 100,
//     genre: 'story',
//     authors: ['Nina',19]
// }
// console.log(book3);
// //Створити масив з 10 об'єктами які описують сутніть "користувач". Поля: name, username,password. Вивести в консоль пароль кожного користувача
// let users1 = [
//         {skills: ['html', 'mysql', 'mongo'], id: 1, name: 'vasya', age: 31, status: true},
//         {skills: ['html', 'js'], id: 2, name: 'petya', age: 33, status: false},
//         {skills: ['html', 'js'], id: 3, name: 'anna', age: 28, status: true},
//         {skills: ['html', 'mysql', 'mongo'], id: 4, name: 'olya', age: 29, status: false}
//     ];
// let users = [
//     {name: 'Vika', username:'Vika01', password: 111},
//     {name: 'Sasha',username:'Sasha02',password: 222},
//     {name: 'Sonya', username:'Sonya03', password: 333},
//     {name: 'Tolya', username:'Tolya04', password: 444},
//     {name: 'Senya', username:'Senya05', password: 555},
//     {name: 'Kolya',username:'Kolya06', password: 666},
//     {name: 'Nina', username:'Nina07', password: 777},
//     {name: 'Anna', username:'Ann08', password: 888},
//     {name: 'Olya', username:'Olya09', password: 999},
//     {name: 'Vita', username:'Vita10', password: 110}
// ];
//     console.log(users[0]['password']);
//     console.log(users[1]['password']);
//     console.log(users[2]['password']);
//     console.log(users[3]['password']);
//     console.log(users[4]['password']);
//     console.log(users[5]['password']);
//     console.log(users[6]['password']);
//     console.log(users[7]['password']);
//     console.log(users[8]['password']);
//     console.log(users[9]['password']);
//
//     //ЛОГІЧНІ РОЗГАЛУЖЕННЯ
//- Є змінна х, якій ви надаєте довільне числове значення.
// Якщо змінна x не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'.
// let x = prompt('enter number');
// // if (x === '0') {
// //     console.log('Virno');
// // }else  {
// //     console.log('Ne virno');
// // }
// Перевірте  скрипт при a, що дорівнює 1, 0, -3
// let a = +prompt('enter your number');
// if (a === 1) {
//     console.log('Virno')
// }if ( a === 0) {
//     console.log('Virno')
// } if ( a === -3) {
//     console.log('Virno')
// } else if (a === 5) {
//     console.log('Ne virno')
// }

// Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число
// (в першу, другу, третю или четверту частину години).

// let time = prompt('Please enter your time');
// if (time <= 15) {
//     console.log('Перша чверть');
// } else if (time <= 30) {
//     console.log('Друга чверть');
// } else if (time <= 59) {
//     console.log('Половина')
// } else {
//     console.log('Від 0 до 59')
// }
// У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю).
// let day = +prompt('Please enter your day');
// if (day <= 10) {
//     console.log('Перша декада');
// } else if ( day <= 20) {
//     console.log('Друга декада');
// }else if (day <= 30) {
//     console.log('Третя декада');
// }else {
//     console.log('Від 0 до 30')
// }

// Скласти розклад на тиждень за домопоги switch.Користувач вводить порядковий номер дня тижня і на екрані відображається інфа що заплановано на цей день (можна замість плану на день, назву дня англійською).
// let schedule = +prompt('Enter your  number');
// switch (schedule) {
//     case 1:
//         console.log('Monday')
//         break;
//     case 2:
//         console.log('Tuesday')
//         break;
//     case 3:
//         console.log('Wednesday ')
//         break;
//     case 4:
//         console.log('Thursday ')
//         break;
//     case 5:
//         console.log('Friday ')
//         break;
//     case 6:
//         console.log('Saturday ')
//         break;
//     case 7:
//         console.log('Sunday ')
//         break;
// }
// - Користувач вводить або має два числа.
//     Потрібно знайти та вивести максимальне число з тих двох .
//     Також потрібно врахувати коли введені рівні числа.
// let number1 = +prompt('Enter you  first number');
//  let number2 = +prompt('Enter you  second number');
//  if (number1 > number2) {
//      console.log("Перше число більше ніж друге");
//  } else if (number1 < number2) {
//      console.log('Перше число менше ніж друге');
//  } else if (number1 = number2) {
//      console.log('Рівні числа')
// }

// є змінна х, яка може прийняти будь-яке значення (стрінг, число, undefined, null  і тд включно). Напишіть код який,
//     за допомоги  оператора || буде присвоювати змінній х значення "default"  якщо значення змінної х являється falsy (хибноподібні, тобто приводиться до false)
// let x = 10;
// let y = false;
// console.log(x || y);
//з файлу arrays.js (лежить в папці 2023 plan ) взяти масив coursesAndDurationArray. За допомоги іф перевірити кожен його елемент на тривалість навчання. У випадку якщо тривалість довша за 5 місяців вивести в консоль "Супер".
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// if(coursesAndDurationArray[0].monthDuration > 5) {
//     console.log('Супер');
// }
// if(coursesAndDurationArray[1].monthDuration > 5) {
//     console.log('Супер');
// }
// if(coursesAndDurationArray[2].monthDuration > 5) {
//     console.log('Супер');
// }
// if(coursesAndDurationArray[3].monthDuration > 5) {
//     console.log('Супер');
// }
// if(coursesAndDurationArray[4].monthDuration > 5) {
//     console.log('Супер');
// }
// if(coursesAndDurationArray[5].monthDuration > 5) {
//     console.log('Супер');
// }


