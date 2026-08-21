/* TODO: Obtener la referencia en una constante para los elementos con las clases .task__input, .task__clear y .task__list */
const taskInput = document.querySelector('.taskinput')
const taskClear = document.querySelector('.taskclear')
const taskList = document.querySelector('.task__list')

let tasks = [
    {
        title: 'Estudiar javascript',
        completed: true
    },
    {
        title: 'Salir del receso a las 9:00pm',
        completed: true
    },
    {
        title: 'Realizar el reto del fin de semana',
        completed: false
    }
]

function renderTasks(tasks = []) {
  let lista = ''

  tasks.forEach((task) => {
    lista = lista + `<li>${task.title}</li>`
  });

  taskList.innerHTML = lista
}

renderTasks(tasks)