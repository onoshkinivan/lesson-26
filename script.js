// let list = document.createElement('ul');
// list.className = '#list';
// let li = document.createElement('input')
// li.textContent = input.value;
// li.append(list);

// let geb = document.createElement('div');
// geb.itemMode(list);
// geb.className = 'item__btns';

// let i1 = document.querySelector('fa-regular fa-square-check')
// i1.append('item__btns')

// i1.addEventListener('click', function () {
//     this.classList.toggle('done');
// })

// let i2 = document.querySelector('fa-solid fa-trash-can')
// i2.append('item__btns')

// i2.addEventListener('click', function () {
//     i2.parentNode.removeChild('fa-trash-can')
// })


let btn = document.querySelector('#addBtn');
let inp = document.querySelector('#taskInput');
let ul = document.querySelector('#list');

let li = document.createElement('li');
li.className = 'class1';
li.textContent = inp.value;
li.append(ul);

let geb = document.createElement('div');
geb.append(ul);
geb.className = 'item__btns';

let i1 = document.querySelector('.fa-regular .fa-square-check');
i1.append(geb);

i1.addEventListener('click', function () {
    this.classList.toggle('done');
})

let i2 = document.querySelector('fa-solid fa-trash-can')
i2.append(geb)

i2.addEventListener('click', function () {
    i2.parentNode.removeChild('fa-trash-can')
})