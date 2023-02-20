// - Знайти та вивести довижину настипних стрінгових значень
// 'hello world', 'lorem ipsum', 'javascript is cool'
// let one = 'hello world';
// console.log(one.length);
// let two = 'lorem ipsum';
// console.log(two.length);
// let three = 'javascript is cool';
// console.log(three.length);

// - Перевести до великого регістру наступні стрінгові значення
// 'hello world', 'lorem ipsum', 'javascript is cool'
// let one = 'hello world';
// console.log(one.toUpperCase());
// let two = 'lorem ipsum';
// console.log(two.toUpperCase());
// let three = 'javascript is cool';
// console.log(three.toUpperCase());

// - Перевести до нижнього регістру настипні стрінгові значення
// 'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'
// let helloworld = 'HELLO WORLD';
// console.log(helloworld.toLowerCase());
// let loremipsum = 'LOREM IPSUM';
// console.log(loremipsum.toLowerCase());
// let javascriptiscool = 'JAVASCRIPT IS COOL';
// console.log(javascriptiscool.toLowerCase());

// - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.
// let str = ' dirty string   ';
// console.log(str.replaceAll(' ',''));

// - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
//     let str = 'Ревуть воли як ясла повні';
// let arr = stringToarray(str); ['Ревуть', 'воли', 'як', 'ясла', 'повні']
// function stringToarray(str) {
//     return str.split(' ');
// }
// let arr = 'Ревуть воли як ясла повні';
// console.log(stringToarray(arr));

// //- є масив чисел [10,8,-7,55,987,-1011,0,1050,0] . за допомоги map  перетворити всі об'єкти в масиві на стрінгові.
// let numbers = [10, 8, -7, 55, 987, -1011, 0, 1050, 0];
// let string = numbers.map(num => num.toString());
// console.log(string);

// - створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого, або навпаки в залежності від значення аргументу direction.
//     let nums = [11,21,3];
// sortNums(nums,'ascending') // [3,11,21]
// sortNums(nums,'descending') // [21,11,3]
//
// let nums = [11,21,3];
// let sort = nums.sort((a, b) => a - b);
// console.log(sort);

// let nums = [11,21,3];
// let sort = nums.sort((b, a) => a - b);
// console.log(sort);

// - є масив, -- відсортувати його за спаданням за monthDuration
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
//  let sort1 = coursesAndDurationArray.sort((b,a) => a.monthDuration - b.monthDuration);
// console.log(sort1);

// -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// let filter = coursesAndDurationArray.filter(u => u.monthDuration > 5);
// console.log(filter);

// - за допомоги map перетворити кожен елемент на наступний тип {id,title,monthDuration}
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
//
// let map = coursesAndDurationArray.map((value, index) => {
//     return {id: index + 1, title: value.title, monthDuration: value.monthDuration};
// });
// console.log(map);

// описати колоду карт (від 6 до туза без джокерів)
// let cards = [
//     {number: 6,suit: 'clubs',color: 'black'},
//     {number: 6,suit: 'diamonds',color: 'red'},
//     {number: 6,suit: 'hearts',color: 'red'},
//     {number: 6,suit: 'spades',color: 'black'},
//     {number: 7,suit: 'clubs',color: 'black'},
//     {number: 7,suit: 'diamonds',color: 'red'},
//     {number: 7,suit: 'hearts',color: 'red'},
//     {number: 7,suit: 'spades',color: 'black'},
//     {number: 8,suit: 'clubs',color: 'black'},
//     {number: 8,suit: 'diamonds',color: 'red'},
//     {number: 8,suit: 'hearts',color: 'red'},
//     {number: 8,suit: 'spades',color: 'black'},
//     {number: 9,suit: 'clubs',color: 'black'},
//     {number: 9,suit: 'diamonds',color: 'red'},
//     {number: 9,suit: 'hearts',color: 'red'},
//     {number: 9,suit: 'spades',color: 'black'},
//     {number: 10,suit: 'clubs',color: 'black'},
//     {number: 10,suit: 'diamonds',color: 'red'},
//     {number: 10,suit: 'hearts',color: 'red'},
//     {number: 10,suit: 'spades',color: 'black'},
//     {number: 'jack',suit: 'clubs',color: 'black'},
//     {number: 'jack',suit: 'diamonds',color: 'red'},
//     {number: 'jack',suit: 'hearts',color: 'red'},
//     {number: 'jack',suit: 'spades',color: 'black'},
//     {number: 'queen',suit: 'clubs',color: 'black'},
//     {number: 'queen',suit: 'diamonds',color: 'red'},
//     {number: 'queen',suit: 'hearts',color: 'red'},
//     {number: 'queen',suit: 'spades',color: 'black'},
//     {number: 'king',suit: 'clubs',color: 'black'},
//     {number: 'king',suit: 'diamonds',color: 'red'},
//     {number: 'king',suit: 'hearts',color: 'red'},
//     {number: 'king',suit: 'spades',color: 'black'},
//     {number: 'ace',suit: 'clubs',color: 'black'},
//     {number: 'ace',suit: 'diamonds',color: 'red'},
//     {number: 'ace',suit: 'hearts',color: 'red'},
//     {number: 'ace',suit: 'spades',color: 'black'}
// ];
// console.log(cards);

// - знайти піковий туз
// let searchAce = cards.filter(item => item.number === 'ace' && item.suit === 'spades');
// console.log(searchAce);

// - всі шістки
// let searchSix = cards.filter(item => item.number === 6);
// console.log(searchSix);

// - всі червоні карти
// let searchRed = cards.filter(item => item.color === 'red');
// console.log(searchRed);

// - всі буби
// let searchDiamonds = cards.filter(item => item.suit === 'diamonds');
// console.log(searchDiamonds);

// - всі трефи від 9 та більше
// let searchClubs = cards.filter(item => item.suit === 'clubs'
//     && (item.number >= 9 || typeof item.number === 'string'));
// console.log(searchClubs);
// Взяти описану колоду карт, та за допомоги reduce упакувати всі карти по "мастях" в об'єкт
// let ObjectSuits = cards.reduce((obj, card) => {
//     if (obj[card.suit]) {
//         obj[card.suit].push(card);
//     } else {
//         obj[card.suit] = [card];
//     }
//     return obj;
// }, {});
//
// console.log(ObjectSuits);

// взяти з arrays.js (який лежить в папці 2023 plan) масив coursesArray
// --написати пошук всіх об'єктів, в який в modules є sass
// let coursesArray = [
//     {
//         title: 'JavaScript Complex',
//         monthDuration: 5,
//         hourDuration: 909,
//         modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
//     },
//     {
//         title: 'Java Complex',
//         monthDuration: 6,
//         hourDuration: 909,
//         modules: ['html',
//             'css',
//             'js',
//             'mysql',
//             'mongodb',
//             'angular',
//             'aws',
//             'docker',
//             'git',
//             'java core',
//             'java advanced']
//     },
//     {
//         title: 'Python Complex',
//         monthDuration: 6,
//         hourDuration: 909,
//         modules: ['html',
//             'css',
//             'js',
//             'mysql',
//             'mongodb',
//             'angular',
//             'aws',
//             'docker',
//             'python core',
//             'python advanced']
//     },
//     {
//         title: 'QA Complex',
//         monthDuration: 4,
//         hourDuration: 909,
//         modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
//     },
//     {
//         title: 'FullStack',
//         monthDuration: 7,
//         hourDuration: 909,
//         modules: ['html',
//             'css',
//             'js',
//             'mysql',
//             'mongodb',
//             'react',
//             'angular',
//             'aws',
//             'docker',
//             'git',
//             'node.js',
//             'python',
//             'java']
//     },
//     {
//         title: 'Frontend',
//         monthDuration: 4,
//         hourDuration: 909,
//         modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
//     }
// ];

// let findSass = coursesArray.filter(item => item.modules.includes('sass'));
// console.log(findSass);

// --написати пошук всіх об'єктів, в який в modules є docker

// let findDocker = coursesArray.filter(item => item.modules.includes('docker'));
// console.log(findDocker);