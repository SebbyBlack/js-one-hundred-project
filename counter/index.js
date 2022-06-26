function addButton() {
  let value = document.getElementById("myValue");
  console.log(value);
  let newTotal = parseInt(value.innerHTML) + 1;
  value.innerHTML = newTotal;
}

function subButton() {
  let value = document.getElementById("myValue");
  console.log(value);
  let newTotal = parseInt(value.innerHTML) - 1;
  value.innerHTML = newTotal;
}
