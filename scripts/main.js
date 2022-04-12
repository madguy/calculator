'use strict';
const BUTTONS = document.querySelectorAll('#keys > button');

function writeResult(text) {
  document.querySelector('#result').innerText = text || '0';
}

function addText(value) {}

function saveOperator(value) {}

function clear() {}

function clearEntry() {}

for (let button of BUTTONS) {
  button.addEventListener('click', (e) => {
    let element = e.target;
    let value = element.dataset.value;
    switch (value) {
      case '0':
      case '1':
      case '2':
      case '3':
      case '4':
      case '5':
      case '6':
      case '7':
      case '8':
      case '9':
        addText(value);
        break;
      case 'plus':
      case 'minus':
      case 'multiply':
      case 'divide':
        saveOperator(value);
        break;
      case 'equal':
        break;
      case 'clear':
        clear();
        break;
      case 'ce':
        clearEntry();
        break;
    }
  });
}
