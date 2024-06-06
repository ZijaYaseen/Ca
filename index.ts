const display: HTMLInputElement = (document.querySelector('form[name="calc"] input[name="display"]') as HTMLInputElement);

function clearDisplay(): void {
    display.value = '';
}

function deleteLast(): void {
    display.value = display.value.slice(0, -1);
}

function appendToDisplay(value: string): void {
    display.value += value;
}

function calculate(): void {
    try {
        display.value = eval(display.value);
    } catch (e) {
        display.value = 'Error';
    }
}
