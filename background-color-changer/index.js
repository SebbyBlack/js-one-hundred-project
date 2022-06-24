function changeColor() {
  let colors = [
    "red",
    "blue",
    "green",
    "orange",
    "yellow",
    "purple",
    "aquamarine",
  ];
  var randomColor = colors[Math.floor(Math.random() * colors.length)];
  document.body.style.backgroundColor = randomColor;
}
