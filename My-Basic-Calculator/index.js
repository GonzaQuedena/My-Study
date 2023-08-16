const output = document.querySelector('.calculator__output');
let expression = '';

const append = (val) => {
    expression += val;
    output.textContent = expression;
}

const clearOutput = () => {
    expression = ' ';
    output.textContent = '0';
}

const deleteLast = () => {
    if (expression.length > 0) {
        expression = expression.slice(0, -1);
        output.textContent = expression;
    }
}

const calculate = () => {
    try {

        const result = eval(expression);
        expression = result.toString();
        output.textContent = expression;

    } catch (error) {
        output.textContent = 'ERROR!';
    }
}

const buttons = document.querySelectorAll('.calculator__btn');

buttons.forEach(btn => {

    btn.addEventListener('click', () => {

        const btnText = btn.textContent;

        switch (btnText) {

            case 'DEL':
                deleteLast();
                break;

            case 'CL':
                clearOutput();
                break;

            case '=':
                calculate();
                break;

            default:
                append(btnText);
                break;
        }

    });

});