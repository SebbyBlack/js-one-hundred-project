/* 
Challenge - Make a button that when clicked changes the body's background color.

Steps :
1. I need to make an array who's items contain different colors (Doesn't matter how many, as long as it's more than 1)
2. I need to create a variable that generates a random number between 0 and the array's length
3. I need to change to BG color to be the color of the array's index (random number)
*/

function changeColor() {
  // Array of colors
  let colors = [
    "red",
    "blue",
    "green",
    "orange",
    "yellow",
    "purple",
    "aquamarine",
    "grey",
    "pink",
    "violet",
  ];

  // Variable that grabs a random color from the array
  let randomColor = colors[Math.floor(Math.random() * colors.length)];

  // Styles the BG color of the body to the random array index
  document.body.style.backgroundColor = randomColor;
}
