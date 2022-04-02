let buttons = document.querySelectorAll("#keys button");

for (let button of buttons) {
  button.addEventListener("click", (e) => {
    let element = e.target;
    console.log(element.dataset.value);
  });
}
