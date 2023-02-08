// За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині
// for (let i = 0; i <= 10; i++) {
//     document.write(`<div class = 'target'>
//                     ${'ahahahha'}
//     </div>`);
// }
//- За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині
// for (let i = 0; i <= 10; i++) {
//     document.write(`<div class = 'target'>
//                     ${'1'}
//                     ${'ahahahha'}
//     </div>`);
// }
//- За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.
// let numbers = [
//     {name: 1,text: 'ahhahah'},
//     {name: 2,text: 'ahhahah'},
//     {name: 3,text: 'ahhahah'},
//     {name: 4,text: 'ahhahah'},
//     {name: 5,text: 'ahhahah'},
//     {name: 6,text: 'ahhahah'},
//     {name: 7,text: 'ahhahah'},
//     {name: 8,text: 'ahhahah'},
//     {name: 9,text: 'ahhahah'},
//     {name: 10,text: 'ahhahah'},
//     {name: 11,text: 'ahhahah'},
//     {name: 12,text: 'ahhahah'},
//     {name: 13,text: 'ahhahah'},
//     {name: 14,text: 'ahhahah'},
//     {name: 15,text: 'ahhahah'},
//     {name: 16,text: 'ahhahah'},
//     {name: 17,text: 'ahhahah'},
//     {name: 18,text: 'ahhahah'},
//     {name: 19,text: 'ahhahah'},
//     {name: 20,text: 'ahhahah'}
// ];
// let i = 0;
// while (i < numbers.length) {
//     let number = numbers[i];
//     i++;
//     document.write(`<div>
//
//             <h1>${number.text}</h1>
//
// </div>`);
//
// }
// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.
// let numbers = [
//     {index: 1,text: 'ahhahah'},
//     {index: 2,text: 'ahhahah'},
//     {index: 3,text: 'ahhahah'},
//     {index: 4,text: 'ahhahah'},
//     {index: 5,text: 'ahhahah'},
//     {index: 6,text: 'ahhahah'},
//     {index: 7,text: 'ahhahah'},
//     {index: 8,text: 'ahhahah'},
//     {index: 9,text: 'ahhahah'},
//     {index: 10,text: 'ahhahah'},
//     {index: 11,text: 'ahhahah'},
//     {index: 12,text: 'ahhahah'},
//     {index: 13,text: 'ahhahah'},
//     {index: 14,text: 'ahhahah'},
//     {index: 15,text: 'ahhahah'},
//     {index: 16,text: 'ahhahah'},
//     {index: 17,text: 'ahhahah'},
//     {index: 18,text: 'ahhahah'},
//     {index: 19,text: 'ahhahah'},
//     {index: 20,text: 'ahhahah'}
// ];
// let i = 0;
// while (i < numbers.length) {
//     let number = numbers[i];
//     i++;
//     document.write(`<div>
//
//             <h1> ${number.index}${number.text}</h1>
//
// </div>`);
//
// }
// - Використовуючи данні з масиву, за допомоги document.write та циклу
// побудувати структуру по шаблону
// let listOfItems = ['html', 'css', 'javascript', 'mysql', 'mongodb', 'react', 'angular', 'node.js'];
//
//  for (let listOfItem1 of listOfItems) {
//      document.write(`<li>${listOfItem1}</li>`)
//  }
//Використовуючи данні з масиву, за допомоги document.write та циклу
// побудувати структуру по шаблону  Зробити адекватну стилізацію
// Великими літерами прописанні властивості об'єкту які потрібно впровадити в шаблон
// let products = [
//     {
//         title: 'milk',
//         price: 22,
//         image: 'https://www.mcqueensdairies.co.uk/wp-content/uploads/2019/02/Mcqueens_1litre_whole_organic-300x300-3.jpg'
//     },
//     {
//         title: 'juice',
//         price: 27,
//         image: 'https://images-na.ssl-images-amazon.com/images/I/61jL2GCuKLL._SX679_PIbundle-24,TopRight,0,0_AA679SH20_.jpg'
//     },
//     {
//         title: 'tomato',
//         price: 47,
//         image: 'https://dictionary.cambridge.org/ru/images/thumb/tomato_noun_001_17860.jpg?version=5.0.74'
//     },
//     {
//         title: 'tea',
//         price: 15,
//         image: 'https://yogiproducts.com/wp-content/uploads/2009/03/YT-US-CAR-RelaxedMind-C23-202201-V2-3DFront_withGlow-300DPI-1.png'
//     },
// ];
//
// for (let i = 0; i < products.length; i++) {
//     let product = products[i];
//     document.write(`<div class="target">
//     <h3>${product.title} - ${product.price}</h3>
//     <img src=${product.image} alt="" className="product-image">
//
// </div>`);
// }

//є масив
//  за допомоги циклу вивести:
//  - користувачів зі статусом true
//  - користувачів зі статусом false
//  - користувачів які старші за 30 років
// let users = [
//     {name: 'vasya', age: 31, status: false},
//     {name: 'petya', age: 30, status: true},
//     {name: 'kolya', age: 29, status: true},
//     {name: 'olya', age: 28, status: false},
//     {name: 'max', age: 30, status: true},
//     {name: 'anya', age: 31, status: false},
//     {name: 'oleg', age: 28, status: false},
//     {name: 'andrey', age: 29, status: true},
//     {name: 'masha', age: 30, status: true},
//     {name: 'olya', age: 31, status: false},
//     {name: 'max', age: 31, status: true}
// ];
//
// for (let i = 0; i < users.length; i++) {
//     let user = users[i];
//
//         if (users[i].age > 30) {
//             console.log('old');
//             console.log(users[i]);
//     }
//         if (users[i].status === true) {
//             console.log('true');
//             console.log(users[i]);
//         }
//         if (users[i].status === false) {
//             console.log('false');
//             console.log(users[i]);
//         }
// }





