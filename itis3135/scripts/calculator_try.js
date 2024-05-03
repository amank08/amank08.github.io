window.onload = function () {
    const display = document.getElementById('display');
    let expression = [];

    document.querySelectorAll('.btn.number').forEach(button => {
        button.addEventListener('click', () => {
            const num = button.textContent;
            appendDisplay(num);
        });
    });

   document.querySelectorAll('.btn.operator').forEach(button => {
        button.addEventListener('click', () => {
            const operator = button.textContent;
            appendDisplay(` ${operator} `);
        });
    });

    document.querySelector('.btn.clear').addEventListener('click', () => {
        clearDisplay();
    });

    document.querySelector('.btn.decimal').addEventListener('click', () => {
        appendDecimal();
    });

    document.querySelector('.btn.equal').addEventListener('click', () => {
        calculateResult();
    });

    function appendDisplay(content) {
        if (display.value === "Error") {
            clearDisplay();
        }
        display.value += content;
    }

    function clearDisplay() {
        display.value = '';
    }

    function appendDecimal() {
        const lastSegment = display.value.split(' ').pop();
        if (!lastSegment.includes('.')) {
            appendDisplay('.');
        }
    }

    function calculateResult() {
        try {
            const expression = display.value.replace(/x/g, '*');
            const result = new Function(`return ${expression}`)();
            display.value = result;
        } catch (e) {
            display.value = "Error";
        }
    }
};
