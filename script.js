const tasks = [
    { name: 'Go to hell', competed: false },
    { name: 'To buy buckwheat', competed: false }
]

const inputEl = document.querySelector('#input')
const btnEl = document.querySelector('#btn')
const listEl = document.querySelector('#list')

function addTask(task) {
    if (task) {
        tasks.push({ name: task, complited: false })
    }
    localStorage.setItem('tasks', JSON.stringify(tasks))
}

btnEl.addEventListener('click', () => {
    const t = inputEl.value
    addTask(t)
    inputEl.value = ''
    showTask()
});

// Пытался решить проблему
// function showTask() {
//     listEl.innerHTML = ''
//     tasks.forEach((item) => {
//         const t = document.createElement('li')
//         t.textContent = `${item.name}`
//         t.classList.add('liEl')
//         listEl.appendChild(t)
//         const liEl = document.querySelectorAll('li');
//         liEl.forEach((r) => {
//             const butEl = document.querySelector('.delete');
//             if (!r.contains(butEl)) {
//                 const b = document.createElement('button')
//                 b.textContent = 'Удалить задачу'
//                 b.classList.add('delete')
//                 r.appendChild(b)
//             }
//         });
//         liEl.forEach((r) => {
//             const butEl = document.querySelector('.complete');
//             if (!r.contains(butEl)) {
//                 const b = document.createElement('button')
//                 b.textContent = 'Выполнить задачу'
//                 b.classList.add('complete')
//                 r.appendChild(b)
//             }
//         });
//     });
// }

function showTask() {
    listEl.innerHTML = ''
    tasks.forEach((item) => {
        listEl.innerHTML += `
        <li class = "liEl">${item.name}
        <button class="complete">Выполнить задачу</button>
        <button class="delete">Удалить задачу</button>
        </li>`;
    });
}

showTask()

const comBtns = document.querySelectorAll('.complete');
const delBtns = document.querySelectorAll('.delete');

delBtns.forEach(element => {
    element.addEventListener('click', function (a) {
        const liEl = a.target.closest('li')
        liEl.remove()
    });
});

comBtns.forEach(elem => {
    elem.addEventListener('click', function (a) {
        const liEl = a.target.closest('li')
        liEl.classList.toggle('done')
    });
});

const objectives = document.querySelectorAll('.liEl');
objectives.forEach(item => {
    item.addEventListener('dblclick', () => {
        let task = prompt("Передумали? Распустилась медуза? Напишите новую задачу:", "Собрать творог")
        if (task) {
            let children = [...item.childNodes].filter(n => n.nodeType !== 3)
            while (item.firstChild) {
                item.removeChild(item.firstChild)
            }
            item.appendChild(document.createTextNode(`${task}`))
            children.forEach(child => {
                item.appendChild(child)
            });
        } else {
            return item.textContent
        }
    });
});
