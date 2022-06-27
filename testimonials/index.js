let testimonial = [
  {
    name: "Jackson Dawn",
    quote: "I love everything about this product!",
    img: "/image-slider/images/angry.jpg",
  },
  {
    name: "Brett Launders",
    quote: "This product has save my life",
    img: "/image-slider/images/cry.jpg",
  },
  {
    name: "Terrel Terrels",
    quote: "Wow!!! This product is great!",
    img: "/image-slider/images/happy.jpg",
  },
  {
    name: "Serrif firres",
    quote: "I'd reccoment this product to all my friends!",
    img: "/image-slider/images/smirk.jpg",
  },
];

let index = 0;
let image = document.getElementById("image");
let quote = document.getElementById("quote");
let quoter = document.getElementById("quoter");

function moveRight() {
  if (index >= testimonial.length - 1) {
    index = 0;
  } else {
    index += 1;
  }

  image.src = testimonial[index].img;
  quote.innerHTML = testimonial[index].quote;
  console.log(quote);
  quoter.innerHTML = testimonial[index].name;
}

function moveLeft() {
  if (index == 0) {
    index = testimonial.length - 1;
  } else {
    index -= 1;
  }

  image.src = testimonial[index].img;
  quote.innerHTML = testimonial[index].quote;
  quoter.innerHTML = testimonial[index].name;
}
