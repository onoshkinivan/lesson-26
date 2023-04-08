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
    addTask();
    taskInput.value = '';
})
doneTask()
deleteTask()
function addTask() {
    let li = document.createElement('li');
    li.className = 'item';
    li.textContent = inp.value;
    ul.append(li);
    inp.value = '';

    let geb = document.createElement('div');
    li.append(geb);
    geb.className = 'item__btns';

    let add = document.createElement('i');
    add.className = 'fa-solid fa-comment-slash';
    geb.append(add);

    let ge = document.createElement('i');
    ge.className = ' fa-solid fa-radio';
    geb.append(ge);
}

function doneTask() {

    ul.addEventListener('click', function (event) {
        //Найти элемент на которого кликнули
        let target = event.target
        //Проверить наличие класса
        if(target.classList.contains('fa-comment-slash')) {
        //Добавить класс done родителю
        target.closest('li').classList.toggle('done');
        }
        localStorage.setItem('htmlLS', ul.innerHTML)
    })
}

function deleteTask() {
    ul.addEventListener('click', function (event) {
        let target = event.target
        //Проверить наличие класса
        if(target.classList.contains('fa-radio')) {
        target.closest('li').remove();
        }
    })
}