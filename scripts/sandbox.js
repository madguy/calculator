function writeConsole(text = '') {
  let consoleElement = document.querySelector('#console');
  consoleElement.innerText = text;
  console.log(text);
}

writeConsole('sandbox...');
