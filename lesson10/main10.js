// Стоврити форму з трьома полями для name,sruname,age та кнопкою. При натисканні на кнопку зчитати данні з полів, та вивести об'єкт в документ. Іншими словами : заповниои форму, натиснули кнопку, під формою з'явився блок з вашим об'єктом
// let form = document.forms.first;
// form.onsubmit = function (eo) {
//     eo.preventDefault();
//     let item = document.createElement('div');
//     let name = document.createElement('div');
//     let surname = document.createElement('div');
//     let age = document.createElement('div');
//
//     name.innerText = `name: ${form.name.value}`;
//     surname.innerText = `surname: ${form.surname.value}`;
//     age.innerText = `age: ${form.age.value}`;
//     item.append(name,surname,age);
//     document.body.appendChild(item);
// }

// є сторінка, на якій є блок, я кому знаходиьтся цифра. написати код, який при кожному перезавантажені сторінки буде додавати до неї +1
// let number = localStorage.getItem('number') || 0;
// let element = document.getElementById('number');
// let newCount = (+number + 1).toString();
// element.innerText = newCount;
// localStorage.setItem('number', newCount);

// Є сторінка index.html (назва довільна), при відвідуванні якої в локальне сховще, в масив sessions зберігається інформація про дату та час відвідування сторінки. Є ще сторінка sessions.html (назва довільна), при відвідуванні
// якої потрібно відмалювати всю інформацію про відвідування сторінки index.html. Інфу НЕ виводити в консоль, а побудувати дом структуру під кожну сессію
// Створюємо новий об'єкт session з поточною датою та часом
// let json = localStorage.getItem('sessions');
// let sessions = json ? JSON.parse(json) : [];
//
// sessions.push({
//     date: new Date().toISOString(),
//     appCodeName: navigator.appCodeName,
//     appVersion: navigator.appVersion,
// });
//
// localStorage.setItem('sessions', JSON.stringify(sessions));

//     зробити масив на 100 об'єктів та дві кнопки prev next
// при завантажені сторінки з'являються перші 10 об'єктів.
//     При натисканні next виводяться настпні 10 об'єктів
// При натисканні prev виводяться попередні 10 об'єктів
let arrnew = [
    { id: 1, name: "User 1", age: 25 },
    { id: 2, name: "User 2", age: 37 },
    { id: 3, name: "User 3", age: 42 },
    { id: 4, name: "User 4", age: 19 },
    { id: 5, name: "User 5", age: 30 },
    { id: 6, name: "User 6", age: 21 },
    { id: 7, name: "User 7", age: 55 },
    { id: 8, name: "User 8", age: 29 },
    { id: 9, name: "User 9", age: 46 },
    { id: 10, name: "User 10", age: 34 },
    { id: 11, name: "User 11", age: 23 },
    { id: 12, name: "User 12", age: 41 },
    { id: 13, name: "User 13", age: 27 },
    { id: 14, name: "User 14", age: 20 },
    { id: 15, name: "User 15", age: 38 },
    { id: 16, name: "User 16", age: 33 },
    { id: 17, name: "User 17", age: 22 },
    { id: 18, name: "User 18", age: 47 },
    { id: 19, name: "User 19", age: 31 },
    { id: 20, name: "User 20", age: 39 },
    { id: 21, name: "User 21", age: 26 },
    { id: 22, name: "User 22", age: 43 },
    { id: 23, name: "User 23", age: 28 },
    { id: 24, name: "User 24", age: 36 },
    { id: 25, name: "User 25", age: 45 },
    { id: 26, name: "User 26", age: 18 },
    { id: 27, name: "User 27", age: 40 },
    { id: 28, name: "User 28", age: 24 },
    { id: 29, name: "User 29", age: 50 },
    { id: 30, name: "User 30", age: 35 },
    { id: 31, name: "User 31", age: 49 },
    { id: 32, name: "User 32", age: 32 },
    { id: 33, name: "User 33", age: 52 },
    { id: 34, name: "User 34", age: 44 },
    { id: 35, name: "User 1", age: 25 },
    { id: 36, name: "User 2", age: 37 },
    { id: 37, name: "User 3", age: 42 },
    { id: 38, name: "User 4", age: 19 },
    { id: 39, name: "User 5", age: 30 },
    { id: 40, name: "User 6", age: 21 },
    { id: 41, name: "User 7", age: 55 },
    { id: 42, name: "User 8", age: 29 },
    { id: 43, name: "User 9", age: 46 },
    { id: 44, name: "User 10", age: 34 },
    { id: 45, name: "User 11", age: 23 },
    { id: 46, name: "User 12", age: 41 },
    { id: 47, name: "User 13", age: 27 },
    { id: 48, name: "User 14", age: 20 },
    { id: 49, name: "User 15", age: 38 },
    { id: 50, name: "User 16", age: 33 },
    { id: 51, name: "User 17", age: 22 },
    { id: 52, name: "User 18", age: 47 },
    { id: 53, name: "User 19", age: 31 },
    { id: 54, name: "User 20", age: 39 },
    { id: 55, name: "User 21", age: 26 },
    { id: 56, name: "User 22", age: 43 },
    { id: 57, name: "User 23", age: 28 },
    { id: 58, name: "User 24", age: 36 },
    { id: 59, name: "User 25", age: 45 },
    { id: 60, name: "User 26", age: 18 },
    { id: 61, name: "User 1", age: 25 },
    { id: 62, name: "User 2", age: 37 },
    { id: 63, name: "User 3", age: 42 },
    { id: 64, name: "User 4", age: 19 },
    { id: 65, name: "User 5", age: 30 },
    { id: 66, name: "User 6", age: 21 },
    { id: 67, name: "User 7", age: 55 },
    { id: 68, name: "User 8", age: 29 },
    { id: 69, name: "User 9", age: 46 },
    { id: 60, name: "User 10", age: 34 },
    { id: 11, name: "User 11", age: 23 },
    { id: 12, name: "User 12", age: 41 },
    { id: 13, name: "User 13", age: 27 },
    { id: 14, name: "User 14", age: 20 },
    { id: 15, name: "User 15", age: 38 },
    { id: 16, name: "User 16", age: 33 },
    { id: 17, name: "User 17", age: 22 },
    { id: 18, name: "User 18", age: 47 },
    { id: 19, name: "User 19", age: 31 },
    { id: 20, name: "User 20", age: 39 },
    { id: 21, name: "User 21", age: 26 },
    { id: 22, name: "User 22", age: 43 },
    { id: 23, name: "User 23", age: 28 },
    { id: 24, name: "User 24", age: 36 },
    { id: 25, name: "User 25", age: 45 },
    { id: 26, name: "User 26", age: 18 },
    { id: 27, name: "User 27", age: 40 },
    { id: 28, name: "User 28", age: 24 },
    { id: 29, name: "User 29", age: 50 },
    { id: 30, name: "User 30", age: 35 },
    { id: 31, name: "User 31", age: 49 },
    { id: 32, name: "User 32", age: 32 },
    { id: 33, name: "User 33", age: 52 },
    { id: 34, name: "User 34", age: 44 },
    { id: 35, name: "User 1", age: 25 },
    { id: 36, name: "User 2", age: 37 },
    { id: 37, name: "User 3", age: 42 },
    { id: 38, name: "User 4", age: 19 },
    { id: 39, name: "User 5", age: 30 },
    { id: 40, name: "User 6", age: 21 }
];
let page = 1;

let prev = document.getElementById('prev');
let next = document.getElementById('next');

prev.addEventListener('click', () => handler(page -= 1));
next.addEventListener('click', () => handler(page += 1));
handler(page);

function handler(page, limit = 10) {
    let wrapper = document.getElementById('wrapper');

    let newArr = [];
    let startIndex = (page - 1) * limit;
    let endIndex = page * limit;

    if (endIndex < arrnew.length) {
        next.removeAttribute('disabled');
    } else {
        next.setAttribute('disabled', 'disabled');
        endIndex = arrnew.length;
    }
    if (startIndex > 0) {
        prev.removeAttribute('disabled');
    } else {
        prev.setAttribute('disabled', 'disabled');
    }

    for (let i = startIndex; i < endIndex; i++) {
        let users = arrnew[i];
        let item = document.createElement('div');
        let title = document.createElement('div');
        let type = document.createElement('div');

        item.classList.add('wrapper', 'item');

        title.innerText = `Id: ${users.id}`;
        type.innerText = `Name: ${users.name}`;

        item.append(title, type);
        newArr.push(item);
    }
    wrapper.replaceChildren(...newArr);
}
// *** Створити 3 інпута та кнопку. Один визначає кількість рядків, другий - кількість ячеєк, третій вмиіст ячеєк.
// function createTable() {
//     let rows = document.getElementById("rows").value;
//     let columns = document.getElementById("columns").value;
//     let content = document.getElementById("content").value;
//
//     let table = document.createElement("table");
//     let tbody = document.createElement("tbody");
//
//     for (var i = 0; i < rows; i++) {
//         var tr = document.createElement("tr");
//
//         for (var j = 0; j < columns; j++) {
//             var td = document.createElement("td");
//             var text = document.createTextNode(content);
//             td.appendChild(text);
//             tr.appendChild(td);
//         }
//
//         tbody.appendChild(tr);
//     }
//
//     table.appendChild(tbody);
//
//     let container = document.getElementById("tableContainer");
//     container.innerHTML = "";
//     container.appendChild(table);
// }
//     При натисканні кнопки, вся ця інформація зчитується і формується табличка, з відповідним вмістом.
// (Додатковачастина для завдання)