let númeroActual = '0'
let operador = ''
let operando = ''

// Consultar un elemento a la vez
const inputDisplay = document.querySelector('#inputDisplay')
// console.log({inputDisplay})
// Consultar múltiples elementos a la vez
const buttons = document.querySelectorAll('.btn')
console.log(buttons)

// EVENTOS

buttons.forEach(function(btn) {
    btn.addEventListener('click', function(event) {
        // console.log('¡Click!', event.target)

        const buttonText = event.target.textContent

        if ('*-+/'.includes(buttonText)) {
            // 02. Accionamos el operador
            operador = buttonText
            operando = Number(númeroActual)
            númeroActual = '0'
        } else if (buttonText === '=') {
            //TODO: Calcular las operaciones en base al número actual y el operando
        } else if (buttonText === 'CE') {
            // TODO: Limpiar el operando, operador y el input
        }   else {
                // 01. Se presionó algún número
                númeroActual = Number(númeroActual + buttonText)
            }
    

        inputDisplay.value = númeroActual
    })
})