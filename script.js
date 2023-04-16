const inp = document.querySelector('#taskInput');
const ul = document.querySelector('#list');
const btn = document.querySelector('#addBtn');
let tasks = [];

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
        if (target.classList.contains('fa-comment-slash')) {
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
        if (target.classList.contains('fa-radio')) {
            target.closest('li').remove();
        }
    })
}

/*
const addBtn = document.querySelector('#addBtn');
const taskInput = document.querySelector('#taskInput');
const list = document.querySelector('#list');
let tasks = [];

if (localStorage.getItem('tasksLS')) {
    tasks = JSON.parse(localStorage.getItem('tasksLS'))
}

tasks.forEach(task => {
    const cssClass = task.complete ? "item done" : "item";
    list.insertAdjacentHTML("beforeend",
        `<li class="${cssClass}" id="${task.id}">${task.text}
     <div class="btns">
          <i class="fa-solid fa-comment-slash" data-action="complete"></i>
          <i class="fa-solid fa-radio" data-action="delete"></i>
     </div>
    </li>`
    )
})

list.addEventListener('click', function (event) {
    let target = event.target
    if (target.dataset.action == 'complete') {
        completeBtn();
    }
    if (target.dataset.action == 'delete') {
        removeTask();
    }
    writeLS();
})

addBtn.addEventListener('click', function () {
    const newItem = document.createElement('li');
    addTask(newItem);
    list.append(newItem);
    taskInput.value = '';
    writeLS();
})

function addTask(newItem) {
    newItem.classList.add('item');
    newItem.textContent = taskInput.value;
    const itemBtns = document.createElement('div');
    newItem.append(itemBtns);
    itemBtns.className = 'item__btns';

    const doneBtn = document.createElement('i');
    doneBtn.className = 'fa-solid fa-comment-slash';
    itemBtns.append(doneBtn);
    doneBtn.setAttribute('data-action', 'delete')

    const deleteBtn = document.createElement('i');
    deleteBtn.className = 'fa-solid fa-radio';
    itemBtns.append(deleteBtn);
    deleteBtn.setAttribute('data-action', 'delete');

    let newTask = {
        id: Date.now(),
        text: taskInput.value,
        complete: false
    }

    tasks.push(newTask);
    newItem.setAttribute('id', newTask.id);
}

function completeBtn(target) {
    target.closest('li').classList.toggle('done');
    let currentId = target.closest('li').id;

    const index = tasks.findIndex((task) => {
        return task.id == currentId;
    })

    if (tasks[index].complete == false) {
        tasks[index].complete = true;
    } else {
        tasks[index].complete = false;
    }
}

function removeTask(target) {
    target.closest('li').remove();
    taskInput.value = '';
    const index = tasks.findIndex((task) => {
        return task.id == target.closest('li').id;
    })

    tasks.splice(index, 1);
}

function writeLS() {
    localStorage.setItem('tasksLS', JSON.stringify(tasks))
}*/