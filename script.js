// Função para calcular o IMC
function calcularIMCResultado() {
    let peso = document.getElementById('peso').value;
    let altura = document.getElementById('altura').value;
    let resultado = document.getElementById('resultado');
    if (peso > 0 && altura > 0) {
    const imc = peso / (altura * altura);
    let message, color, emoji;
    if (imc < 18.5) {
    message = 'Abaixo do peso';color = 'blue';emoji = '😢';
    } else if (imc >= 18.5 && imc < 25) {
    message = 'Peso normal';color = 'green';emoji = '😜';
    } else {
    message = 'Acima do peso';color = 'red';emoji = '😡';
    }
    resultado.innerHTML = `Seu IMC é ${imc.toFixed(2)}. ${message} ${emoji}.`;
    resultado.style.color = color;
    } else {
    resultado.innerHTML = 'Por favor, preencha seu peso e altura.';
    resultado.style.color = 'black';
    }
    }
    // Função para limpar os campos do formulário
    function limpar() {
    document.getElementById('peso').value = '';
    document.getElementById('altura').value = '';
    document.getElementById('resultado').innerHTML = '';
    }
    