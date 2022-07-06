let currentValue;
let previousValue = 0;
let operand;
let equals;
let currentOperation;
let previousOperation;

let displayValue = document.querySelector("#displayNumber");
let displayPrevOperation = document.querySelector("#previousOperation");
let numberButtons = document.querySelectorAll(".numbers");
let operandButtons = document.querySelectorAll(".operator");
let adder = document.querySelector("#adder");
let multiplier = document.querySelector("#multiplier");
let subtractor = document.querySelector("#subtractor");
let divider = document.querySelector("#divider");

numberButtons.forEach((button) => {
  button.addEventListener("click", () => {
    previousValue = currentValue;
    currentValue = parseInt(button.innerHTML);
    displayValue.innerText = currentValue;

    console.log(previousValue, currentValue);
  });
});

operandButtons.forEach((button) => {
  button.addEventListener("click", () => {
    operand = button.innerText;
    displayValue.innerText = currentValue + " " + operand;
    console.log(operand);
  });
});

function clearAll() {
  currentValue = "";
  previousValue = "";
  displayValue.innerText = "0";
  displayPrevOperation.innerText = "";
}

function equalValues() {
  if (operand == "+") {
    currentOperation = previousValue + currentValue;
    displayValue.innerText = currentOperation;

    previousOperation = previousValue + "+" + currentValue;
    displayPrevOperation.innerText = previousOperation;

    console.log(parseInt(displayValue.innerText));
    return parseInt(displayValue.innerText);
  } else if (operand == "-") {
    currentOperation = previousValue - currentValue;
    displayValue.innerText = currentOperation;

    previousOperation = previousValue + "-" + currentValue;
    displayPrevOperation.innerText = previousOperation;

    console.log(parseInt(displayValue.innerText));
    return parseInt(displayValue.innerText);
  } else if (operand == "*") {
    currentOperation = previousValue * currentValue;
    displayValue.innerText = currentOperation;

    previousOperation = previousValue + "*" + currentValue;
    displayPrevOperation.innerText = previousOperation;

    console.log(parseInt(displayValue.innerText));
    return parseInt(displayValue.innerText);
  } else if (operand == "/") {
    currentOperation = previousValue / currentValue;
    displayValue.innerText = currentOperation;

    previousOperation = previousValue + "/" + currentValue;
    displayPrevOperation.innerText = previousOperation;

    console.log(parseInt(displayValue.innerText));
    return parseInt(displayValue.innerText);
  } else {
    displayValue.innerText = "Choose an operator";
  }
}
