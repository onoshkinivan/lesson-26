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


let inp = document.querySelector('#taskInput');
let ul = document.querySelector('#list');
let btn = document.querySelector('#addBtn');

btn.addEventListener('click', function () {
    let li = document.createElement('li');
    li.className = 'item';
    li.textContent = inp.value;
    ul.append(li);
    inp.value = '';

    let geb = document.createElement('div');
    li.append(geb);
    geb.className = 'item__btns';

    let add = document.createElement('i');
    add.className = 'fa-thin fa-pen';
    geb.append(add);

    add.addEventListener('click', function () {
        li.classList.toggle('done');
    })

    let ge = document.createElement('i');
    ge.className = 'fa-solid fa-trash-can';
    geb.append(ge);

    ge.addEventListener('click', function () {
        li.remove();
    })
})

