const button = document.querySelectorAll("button");
const display = document.querySelector(".display");
for (let i = 0; i < 16; i++) {
  button[i].addEventListener("click", sapa);
}

let angka1;
let operator = "";
let angka2;

function sapa(event) {
  if (
    display.textContent === "ERR" &&
    !event.target.classList.contains("clear") &&
    !event.target.classList.contains("all_clear")
  ) {
    return;
  } else if (event.target.classList.contains("operator")) {
    angka1 = Number(display.textContent);
    operator = event.target.textContent;
    display.textContent = "0";
  } else if (event.target.classList.contains("clear")) {
    if (display.textContent === "ERR") {
      display.textContent = "0";
    } else {
      display.textContent = display.textContent.slice(0, -1);
    }

    if (display.textContent === "") {
      display.textContent = "0";
    }
  } else if (event.target.classList.contains("all_clear")) {
    display.textContent = "0";
    angka1 = 0;
    angka2 = 0;
    operator = "";
  } else if (event.target.classList.contains("equals")) {
    if (operator === "") {
      display.textContent = "0";
    } else {
      angka2 = Number(display.textContent);
      if (operator === "+") {
        display.textContent = angka1 + angka2;
      } else if (operator === "-") {
        display.textContent = angka1 - angka2;
      } else if (operator === "/") {
        if (angka2 !== 0) {
          display.textContent = angka1 / angka2;
        } else {
          display.textContent = "Kesalahan";
        }
      }
    }
    if (display.textContent.length > 8) {
      display.textContent = "ERR";
    }
    operator = "";
  } else {
    if (display.textContent.length < 8) {
      if (display.textContent === "0") {
        display.textContent = event.target.textContent;
      } else {
        display.textContent += event.target.textContent;
      }
    }
  }
}
