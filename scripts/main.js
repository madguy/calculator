const BUTTONS = document.querySelectorAll("#keys > button");

function writeResult(text = '0') {
  document.querySelector('#result').innerText = text
}

for (let button of BUTTONS) {
  button.addEventListener("click", (e) => {
    let element = e.target;
    console.log(element.dataset.value);
  });
}
