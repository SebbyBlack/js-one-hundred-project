let imageArray = [
  "/image-slider/images/angry.jpg",
  "/image-slider/images/cry.jpg",
  "/image-slider/images/happy.jpg",
  "/image-slider/images/ohno.jpg",
  "/image-slider/images/ohno2.jpg",
  "/image-slider/images/oof.jpg",
  "/image-slider/images/smirk.jpg",
];

let index = 0;

function imageRight() {
  let image = document.getElementById("image");

  if (index >= imageArray.length - 1) {
    index = 0;
  } else {
    index += 1;
  }
  image.src = imageArray[index];
}

function imageLeft() {
  let image = document.getElementById("image");

  if (index === 0) {
    index = imageArray.length - 1;
    console.log(index);
  } else {
    index -= 1;
  }
  image.src = imageArray[index];
}
