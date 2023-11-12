const cartStorage = localStorage.getItem("myCartArray");
const cart = JSON.parse(cartStorage);

const cartContainer = document.getElementById("cart-cards");

cart.forEach((flight) => {
  const card = document.createElement("div");
  card.classList.add("flight-card");
  card.innerHTML = `
  
        <h2>${flight.id}</h2>
        <p>From: ${flight.from}</p>
        <p>To: ${flight.to}</p>
        <p>Price: ${flight.price}$</p>
    `;
  cartContainer.appendChild(card);
});

const prices = cart.map((flight) => flight.price);
console.log(prices);
const totalPrice = prices.reduce((sum, price) => sum + price, 0);

//
let numberInput = document.getElementById("myNumberInput");

let clientAmount = numberInput.addEventListener("input", function () {
let inputValue = numberInput.value;
document.getElementById("cart-sum").innerHTML = inputValue * totalPrice + "$";
});


