const peso = document.querySelector('.calculator__input1')
const altura = document.querySelector('.calculator__input2')
const valorImc = document.querySelector('.imc')
const calcular = document.querySelector('.calculator__btn')

calcular.addEventListener('click', (event) => {

    event.preventDefault();

    const pesoKg = parseFloat(peso.value);
    const alturaCm = parseFloat(altura.value);

    const alturaM = alturaCm / 100;

    const imc = pesoKg / (alturaM * alturaM);

    valorImc.textContent = imc.toFixed(2);

    if (imc < 18.5) {
        valorImc.textContent = 'Tu Indice de Masa Corporal es Baja';
    } else if (imc < 25) {
        valorImc.textContent = 'Tu Indice de Masa Corporal es Normal';
    } else if (imc < 30) {
        valorImc.textContent = 'Tu Indice de Masa Corporal es Sobrepeso'
    } else {
        valorImc.textContent = 'Tu Indice de Masa Corporal es Obeso'
    }
})