const url = "https://api.kanye.rest";
const refreshBt = document.getElementById("refresh");
refreshBt.addEventListener("click", getQuote);
const h1 = document.querySelector("h1");

function getQuote() {
  fetch(url).then((response) => {
    response.json().then((data) => {
      const result = data.quote;

      generateQuote(result);
      setBg();
    });
  });
}

// function createQuote(data) {
//   const quote = document.createElement("p");
//   quote.innerText = data;
//   quote.style.fontFamily =
//     "Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif";

//   return quote;
// }

// function generateQuote(result) {
//   const newQuote = createQuote(result);

//   document.getElementById("add").append(newQuote);
// }

const setBg = () => {
  const randomColor = Math.floor(Math.random() * 16777215).toString(16);
  document.body.style.backgroundColor = "#" + randomColor;
};

function generateQuote(data) {
  const q = data;

  document.getElementById("add").innerHTML = q;
}

h1.addEventListener("mouseover", getQuote);

const timer = setInterval(getQuote, 5000);
