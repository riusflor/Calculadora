let currentNumber = '';
let previousNumber = '';
let selectedOperator = '';

function appendToResult(value) {
    currentNumber += value;
    document.getElementById('result').value = currentNumber;
}

function setOperator(operator) {
    if (currentNumber !== '') {
        if (previousNumber !== '' && selectedOperator !== '') {
            calculate();
        }
        selectedOperator = operator;
        previousNumber = currentNumber;
        currentNumber = '';
    }
}
const confettiColors = ['#ff6600', '#00cc66', '#ff3399', '#3399ff', '#ffcc00'];

function showConfetti() {
    const confettiContainer = document.getElementById('confetti-container');
    for (let i = 0; i < 100; i++) {
        const confetti = document.createElement('div');
        confetti.className = 'confetti';
        confetti.style.left = `${Math.random() * 100}vw`;
        confetti.style.animationDelay = `${Math.random() * 3}s`;
        confetti.style.backgroundColor = confettiColors[Math.floor(Math.random() * confettiColors.length)];
        confettiContainer.appendChild(confetti);
    }
    setTimeout(() => {
        confettiContainer.innerHTML = ''; // Limpiar el confeti después de un tiempo
    }, 3000);
}
function clearResult() {
    currentNumber = '';
    previousNumber = '';
    selectedOperator = '';
    document.getElementById('result').value = ''; // Restablecer el display
}
let explosionVisible = false; // Agregar esta variable para controlar la visibilidad de la explosión

function showExplosion() {
    if (!explosionVisible) {
        const explosionContainer = document.getElementById('explosion-container');
        explosionContainer.style.display = 'flex';

        setTimeout(() => {
            explosionContainer.style.display = 'none';
            explosionVisible = false;
            clearResult(); // Restablecer el display después de la explosión
        }, 1000);
        
        explosionVisible = true;
    }
}

function calculate() {
    if (selectedOperator && previousNumber !== '' && currentNumber !== '') {
        switch (selectedOperator) {
            case '+':
                currentNumber = parseFloat(previousNumber) + parseFloat(currentNumber);
                break;
            case '-':
                currentNumber = parseFloat(previousNumber) - parseFloat(currentNumber);
                break;
            case '*':
                currentNumber = parseFloat(previousNumber) * parseFloat(currentNumber);
                break;
            case '/':
                currentNumber = parseFloat(previousNumber) / parseFloat(currentNumber);
                break;
        }
        if (isNaN(currentNumber) || !isFinite(currentNumber)) {
            // Si ocurre un error o hay cuenta infinita, mostrar explosión
            showExplosion();
            return; // Salir de la función sin realizar más acciones
        }
        document.getElementById('result').value = currentNumber;
        previousNumber = '';
        selectedOperator = '';
        // Llamar a la función para mostrar el confeti
        showConfetti();
    }
}

function clearResult() {
    currentNumber = '';
    previousNumber = '';
    selectedOperator = '';
    document.getElementById('result').value = '';
}
