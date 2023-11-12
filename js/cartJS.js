const cartStorage = localStorage.getItem('myCartArray')
const c = JSON.parse(cartStorage)
// console.log(c)
console.log(c)

const cartContainer = document.getElementById("cart-cards");

c.forEach((flight) => {
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