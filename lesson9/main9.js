// - створити блок,
// let block = document.createElement('div');

//     - додати йому класи wrap, collapse, alpha, beta
// block.classList.add('wrap','collapse','alpha','beta');

// - додати стилі(довільні значення) : колір фону, колір тексту, розмір тексту
// block.style.backgroundColor = 'yellow';
// block.style.color = 'red';
// block.style.fontSize = '40px';
// block.innerText = 'Vika';

// - додати цей блок в body.
// let body = document.querySelector('body');
// body.appendChild(block);

// - клонувати його повністю, та додати клон в body.
// let clone = block.cloneNode(true);
// clone.style.backgroundColor = 'green';
// body.appendChild(clone);

// - Є масив:
//     ['Main','Products','About us','Contacts']
// Зробити ul в середині якої будуть лежати елементи масиву (кожен в своєму li)
// let arr = ['Main','Products','About us','Contacts'];
// let body = document.querySelector('body');
// let list = document.createElement('ul');
//
// for (let listElement of list) {
//     let li = document.createElement('li');
//     li.innerText = listElement;
//     ul.appendChild(li);
// }
// body.appendChild(ul);

// - Є масив
// Для кожного елементу масиву зробити блок в якому вивести інформацію про title та monthDuration
// Завдання робити через цикли.
//     let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
//     let body = document.querySelector('body');
// for (let bodyElement of body) {
//     let div = documnet.createElement('div');
//     div.innerText = 'title: ${bodyElement} - monthDuration: ${bodyElement.monthDuration}'
//     body.appendChild(div);
// }

// - Є масив
// За допомоги скріпта для кожного елементу масиву зробити <div class='item'> ,  в якому буде <h1 class='heading'>  з title  елементу, та <p class='description'> з monthDuration елементу.
//     Завдання робити через цикли.
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// let body = document.querySelector('body');
// for (const list of coursesAndDurationArray) {
//   const div = document.createElement('div');
//   const h1 = document.createElement('h1');
//   const p = document.createElement('p');
//
//   div.classList.add('item');
//   h1.classList.add('heading');
//   p.classList.add('description');
//   h1.innerText = list.title;
//   p.innerText = list.monthDuration;
//   div.append(h1, p);
//   body.appendChild(div);
// }
// - є масив simpsons, котрий лежить в arrays.js (на цей момент ви вже знаєте де він знаходиться)
// Проітерувати його, створиши для кожного об'єкту  масиву <div class='member'> та наповнити його данними з об'єкту.
//     Якщо людською мовою: під кожного члена родини зробити блок та наповнити його інформацією з цього об'єкту
// let simpsons = [
//   {
//     name: 'Bart',
//     surname: 'Simpson',
//     age: 10,
//     info: 'Бартолом\'ю ДжоДжо «Барт» Сімпсон (англ. Bartholomew JoJo «Bart» Simpson) — один із головних героїв мультиплікаційного серіалу Сімпсони. Барт — найстарша дитина Гомера і Мардж Сімпсон. У нього також є дві молодші сестри — Ліса і Меґґі. Барт є втіленням образу бешкетника та посереднього учня у школі. Разом зі своїм батьком Барт є одним із найвідоміших персонажів у цьому серіалі.',
//     photo: 'https://upload.wikimedia.org/wikipedia/uk/a/aa/Bart_simpson.png'
//   },
//   {
//     name: 'Homer',
//     surname: 'Simpson',
//     age: 40,
//     info: 'Гомер Джей Сімпсон (англ. Homer Jay Simpson) — один із головних героїв мультсеріалу «Сімпсони». Гомер — грубий і неввічливий батько родини, він має очевидні вади: товстий, лисий і не дуже розумний. Нерідко він поводиться як блазень, абсурдно, егоїстично і нетактовно, але все ж лишається симпатичним.',
//     photo: 'http://upload.wikimedia.org/wikipedia/en/0/02/Homer_Simpson_2006.png'
//   },
//   {
//     name: 'Marge',
//     surname: 'Simpson',
//     age: 38,
//     info: 'Ма́рджори Жакли́н «Мардж» Си́мпсон (в девичестве Бувье́) (англ. Marjorie Jacqueline «Marge» Simpson) — постоянный персонаж мультипликационного сериала «Симпсоны», её озвучивает Джулия Кавнер. Обычно носит зелёное платье, красные балетки, на шее — ожерелье из искусственного жемчуга и ездит на оранжевом универсале. У неё шикарные синие волосы, которые она обычно собирает в очень высокую причёску. Глаза цвета ореха (19s6e). Основное занятие — домохозяйка, большую часть времени проводит в заботе о доме, детях и Гомере. Образ Мардж копирует стереотип провинциальной американской домохозяйки 50-х годов. Мардж — единственный член семьи, посещающий церковь добровольно. Старается поддерживать нравственность не только своей семьи, но и всего города. Отлично готовит, особенно славятся её свиные отбивные и зефир. Любимое блюдо — лапша с маслом.',
//     photo: 'https://upload.wikimedia.org/wikipedia/ru/0/0b/Marge_Simpson.png'
//   },
//   {
//     name: 'Lisa',
//     surname: 'Simpson',
//     age: 9,
//     info: 'Ли́за Мари́ Си́мпсон (англ. Lisa Marie Simpson) — героиня мультипликационного сериала «Симпсоны». Средний ребёнок в семье, восьмилетняя девочка, выделяющаяся среди остальных Симпсонов прежде всего своим умом и рассудительностью.',
//     photo: 'https://upload.wikimedia.org/wikipedia/ru/e/ec/Lisa_Simpson.png'
//   },
//   {
//     name: 'Maggie',
//     surname: 'Simpson',
//     age: 1,
//     info: 'Ма́ргарет Эвелин «Мэ́гги» Си́мпсон (англ. Margaret Evelyn “Maggie” Simpson) — персонаж мультсериала «Симпсоны». Впервые появилась на телевидении в шоу Трейси Ульман, в короткометражке Good Night (англ.)русск. 19 апреля 1987 года. Мэгги была придумана и разработана карикатуристом Мэттом Грейнингом, пока он ждал встречи с Джеймсом Л. Бруксом. Названа в честь младшей сестры Грейнинга. После появления в шоу Трейси Ульман, через три года семья Симпсонов получила собственный сериал на телеканале Fox, дебют произошёл 17 декабря 1989 года.',
//     photo: 'https://upload.wikimedia.org/wikipedia/ru/9/9d/Maggie_Simpson.png'
//   },
// ];
// let body = document.querySelector('body');
// for (const list of simpsons) {
//   const div = document.createElement('div');
//   const h1 = document.createElement('h1');
//   const i = document.createElement('i');
//   const p = document.createElement('p');
//   const img = document.createElement('img');
//
//   div.classList.add('member');
//
//   h1.innerText = `${list.name} - ${list.surname}`;
//   i.innerText = `Age: ${list.age}`;
//   p.innerText = item.info;
//
//   img.setAttribute('alt', `${list.name} photo`);
//   img.setAttribute('src', list.photo);
//
//   div.append(h1, i, img, p);
//   body.appendChild(div);
// }

// Цикл в циклі
// - Є масив coursesArray котрий лежить в arrays.js (на цей момент ви вже знаєте де він знаходиться)
//
// Створити для кожного елементу масиву свій блок, блок розділити блоками, в яких будуть зберігатись значення окремих властивостей, для властивості modules зробити список з елементами
// Приклад структири знаходиться у файлі example.png який лежить в папці з поточним фйлом
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
// let body = document.querySelector('body');
// for (let item of coursesArray) {
//   const block = document.createElement('div');
//   const title = document.createElement('h1');
//   const duration = document.createElement('div');
//   const month = document.createElement('div');
//   const hour = document.createElement('div');
//   const ul = document.createElement('ul');
//
//   title.innerText = item.title;
//   month.innerText = `monthDuration: ${item.monthDuration}`;
//   hour.innerText = `hourDuration: ${item.hourDuration}`;
//
//   for (const module of item.modules) {
//     const li = document.createElement('li');
//     li.innerText = module;
//     li.classList.add('blue', 'list-none');
//     ul.appendChild(li);
//   }
//
//   block.classList.add('main');
//   title.classList.add('text-center', 'blue');
//   duration.classList.add('flex');
//   month.classList.add('blue', 'text-center', 'grow1');
//   hour.classList.add('blue', 'text-center', 'grow5');
//   ul.classList.add('margin0', 'blue')
//
//   duration.append(month, hour);
//   block.append(title, duration, ul);
//   body.append(block);
// }

// - Створити довільний елемент з id = text та створити кнопку.Використовуючи JavaScript, зробіть так, щоб при натисканні на кнопку зникав елемент з id="text".
// <div id="text">Element</div>
// <button id="hideButton">By</button>
// let hideButton = document.getElementById('hideButton');
// let text = document.getElementById('text');
// hideButton.addEventListener('click', function() {
//     text.style.display = 'none';
// });

// - створити інпут який приймає вік людини та кнопку яка підтверджує дію.При натисканні на кнопку зчитати інформацію з інпуту та перевірити вік чи меньше він ніж 18, та повідомити про це користувача
// <label htmlFor="ageInput">Введіть свій вік:</label>
// <input type="number" id="ageInput">
//     <button onClick="checkAge()">Підтвердити</button>
//     <p id="errorMessage" style="color: red;"></p>
//
//     function checkAge() {
//     let ageInput = document.getElementById('ageInput');
//     let errorMessage = document.getElementById('errorMessage');
//     let age = parseInt(ageInput.value);
//
//     if (age < 18) {
//     errorMessage.textContent = 'Вік менше 18 років!';
// } else {
//     errorMessage.textContent = '';
// }
// }
//





