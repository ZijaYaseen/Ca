var display = document.querySelector('form[name="calc"] input[name="display"]');
function clearDisplay() {
    display.value = '';
}
function deleteLast() {
    display.value = display.value.slice(0, -1);
}
function appendToDisplay(value) {
    display.value += value;
}
function calculate() {
    try {
        display.value = eval(display.value);
    }
    catch (e) {
        display.value = 'Error';
    }
}
