const taskInput = document.getElementById('task-input')
// const taskInput = document.querySelector('task-input')
const taskAdd = document.querySelector('.task__add')
const taskList = document.querySelector('.task__list')

// EVENTOS
// ELEMENTO .addEventListener(NOMBRE_EVENTO, CALLBACK)

taskAdd.addEventListener('click', function(event) {
    // Se ejecutará cuando hagamos click en el botón 'Añadir tarea'
    console.log('¡Cick!', taskInput.value)

    // TODO: 01 - Añadir el elemento li al elemento con la clase task__list
    const li = document.createElement('li')

    // TODO: Añadir un checkbox al li

    // TODO: 02 - Añadir el elemento span al elemento li con el texto de la caja taskInput

    taskList.appendChild(li)

    const checkbox = document.createElement('input')
    checkbox.setAttribute('type', 'checkbox')
    li.appendChild(checkbox)

    // MANEJO DEL DOM: Forma de crear elementos dinámicamente con el DOM de Javascript

    const span = document.createElement('span')
    span.textContent = taskInput.value
    li.appendChild(span)

    // TODO: 03 Añadir el elemento button al elemento li

    const button = document.createElement('button')
    button.textContent = 'Borrar'
    li.appendChild(button)

    taskList.appendChild(li)

    taskInput.value = ''

    // const button = document.createElement('button')
    // console.log({ button })
    // button.textContent = 'Hola soy un botón'
    // document.body.appendChild(button)
})

// TODO: 04 Permitir que al botón borrar remover una tarea de la lista

taskList.addEventListener('click', function(event) {
    // console.log('Hice click en cualquier parte de la lista del ul')

    const target = event.target // Elemento presionado

    if (target.tagName === 'BUTTON') {
        console.log('Eliminando tarea...')
        target.parentElement.remove()
    }

    if (target.tagName === 'INPUT' && target.type === 'checkbox') {
        console.log('Completando tarea...')
        target.classList.toggle('checked')
    }
})