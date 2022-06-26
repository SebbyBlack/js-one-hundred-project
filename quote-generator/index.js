function generateQuote() {
  console.log(quotes[0]);

  let randomQuote = quotes[Math.floor(Math.random() * quotes.length)];

  console.log(randomQuote);

  let quoteArea = document.getElementById("quoteArea");
  let quoter = document.getElementById("quoter");

  quoter.innerHTML = "- " + randomQuote.name;
  quoteArea.innerHTML = '"' + randomQuote.quote + '"';
}
