// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
// function area(a, b) {
//    let result = a * b;
//    return result;
// }
// let first = area(5,5);
// console.log(first);

// - створити функцію яка обчислює та повертає площу кола з радіусом r
// function circle (area) {
//     let r = area ** 2;
//     let pi = 3.14;
//     return area * r * pi;
//
// }
// let number = circle(2);
// console.log(number);

// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
// function cylinder (area) {
//     let r = 2;
//     let h = 3;
//     let pi = 3.14;
//     return area * r * h * pi;
//
// }
// let number = cylinder(2);
// console.log(number);

// - створити функцію яка приймає масив та виводить кожен його елемент
// function firstarray (array) {
// document.write (
//     `${users[0]}`,
//
//     `${users[1]}`,
//         `${users[2]}`
//
// )
// }
// let users = ['hi','by','write'];
// firstarray();
//- створити функцію яка створює параграф з текстом. Текст задати через аргумент
//
//  function text(name,p) {
//     document.write(
//     `
//         <div>
//             <h2> ${name} </h2>
//             <p> ${p} </p>
//
//         </div>
//      `
//     );
//  }
//  text('yana','ahhahahahha');

//- створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий

// function list(descr) {
//     document.write(
//         `
//         <div>
//         <ul>
//         <li>${descr}</li>
//         <li>${descr}</li>
//         <li>${descr}</li>
// </ul>
//
//
//         </div>
//         `
//
//     )
// }
// list('1234456677');

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий.
// Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)


// function list(descr,number) {
//     document.write(`<ul>`);
//     for (let i = 0; i < number; i++){
//         document.write(`<li>${descr}</li>`);
//     }
//     document.write(`</ul>`);
// }


// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список



// function firstarray (array) {
//     document.write(`<ul>`);
//     for (let arrayElement of array) {
//         document.write(`<li>${arrayElement}</li>`);
//
//     }
//     document.write(`</li>`);
// }

// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.

// let users = [
//     {name: 'vasya', age: 31,id: 10},
//     {name: 'petya', age: 30, id: 10},
//     {name: 'kolya', age: 29, id: 10},
//     {name: 'olya', age: 28, id: 10},
//     {name: 'max', age: 30, id: 10},
//     {name: 'anya', age: 31, id: 10},
//     {name: 'oleg', age: 28, id: 10},
//     {name: 'andrey', age: 29, id: 10},
//     {name: 'masha', age: 30, id: 10},
//     {name: 'olya', age: 31, id: 10},
//     {name: 'max', age: 31, id: 10}
// ];
// function foo (users) {
//     document.write(
//         `<div>
//         ${users.name}
//     </div>,
//      <div>${users.age}</div>,
//  <div>${users.id}</div>
//             `)
//  }
//  foo(users)

// - створити функцію яка повертає найменьше число з масиву
// function number(arrnumbers) {
//     let min = 0;
//     for (let arrnumber of arrnumbers) {
//         if (min > number) {
//             min = number
//         }
//     }
//     return min;
// }
// number([12,25,23,851]);
// - створити функцію sum(arr)яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад sum([1,2,10]) //->13
//
// function sum(arr) {
//     let sum = 0;
//     for (let i = 0; i < arr.length; i++)
//         sum += arr[i];
//
//     return sum;
// }
//
// let arr = [1, 2, 3, 4];
// console.log(sum(arr))
//
// - створити функцію swap(arr,index1,index2). Функція міняє місцями заняення у відаовідних індексах
// Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]
//
// function swap(arr, index1, index2) {
//     let temp = arr[index1];
//
//
//     arr[index1] = arr[index2];
//
//
//     arr[index2] = temp;
// }
//
// let arr = [5, 6, 7, 8];
//
// swap(arr, 0, 3);
//
// console.log(arr);
//
// Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)x
// Приклад exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD') // => 250

//  function exchange(UAN,currencyValues,exchangeCurrency) {
//      for (let item of currencyValues) {
//          if (item.currency === exchangeCurrency) {
//              return UAN / item.value;
//          }
//      }
//     exchange(
//         20000,
//         [
//             {currency:'eur',value: 42},
//             {currency:'eur',value: 42},
//             {currency:'eur',value: 42}
//         ],
//         'USD'
//     )


    )


 }
