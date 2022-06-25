/*
Challenge - Make a button that on click changes the background color to a unique hex value

JS Steps:
1. Make a function called hexChanger
2. Create a variable that has six letters/numbers preceded by a #
3. Create a variable that takes in the unique hex and changes the h3 text to that variable
4. Change the background color to the unique variable 

*/

function hexChanger() {
  let uniqueHex = "#";
  let hText = document.getElementById("hexValues");
  let characters = "ABCDEF0123456789";

  for (let i = 0; i < 6; i++) {
    uniqueHex += characters.charAt(
      Math.floor(Math.random() * characters.length)
    );
  }
  console.log(uniqueHex);
  document.body.style.background = uniqueHex;
  console.log(hText);
  hText.innerHTML = uniqueHex;
}
