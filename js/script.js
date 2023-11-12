const cart = [];

const flights = [
  {
    id: 101,
    from: "Tel aviv",
    to: "amsterdam",
    price: 40,
    dates: [
      { depart: new Date("24.11.2023") },
      { return: new Date("1.12.2023") },
    ],
  },
  {
    id: 202,
    from: "Tel aviv",
    to: "london",
    price: 75,
    dates: [
      { depart: new Date("28.11.2023") },
      { return: new Date("12.12.2023") },
    ],
  },
  {
    id: 303,
    from: "Athens",
    to: "Prague",
    price: 95,
    dates: [
      { depart: new Date("28.11.2023") },
      { return: new Date("12.12.2023") },
    ],
  },
  {
    id: 404,
    from: "Berlin",
    to: "Prague",
    price: 22,
    dates: [
      { depart: new Date("28.11.2023") },
      { return: new Date("12.12.2023") },
    ],
  },
  {
    id: 505,
    from: "London",
    to: "Berlin",
    price: 100,
    dates: [
      { depart: new Date("28.11.2023") },
      { return: new Date("12.12.2023") },
    ],
  },
];

const users = [
  {
    username: "user1",
    password: "123",
    isAdmin: false,
    email: "1@1",
  },
  {
    username: "user2",
    password: "124",
    isAdmin: false,
    email: "1@1",
  },
  {
    username: "admin",
    password: "125",
    isAdmin: true,
    email: "1@1",
  },
];

function validate() {
    let username = document.getElementById("username").value;
    let passpass = document.getElementById("password").value;
    let checked = document.getElementById("checkbox").checked;
    let email = document.getElementById("email").value;
  
    let user = users.find(
      (user) => user.password === passpass && user.email === email
    );
  
    if (user) {
       let userInfoJSON = JSON.stringify(user);
      localStorage.setItem("userInfo", userInfoJSON);
  
      if (user.isAdmin && checked) {
         window.location.href = "./main.html?admin=true";
      } else {
         window.location.href = "./main.html?admin=false";
      }
    } else {
       alert("Invalid username or password");
    }
  }
  
  // Get the value of the 'admin' parameter from the URL
  const urlParams = new URLSearchParams(window.location.search);
  const isAdmin = urlParams.get('admin');
  
  // Check if the 'admin' parameter is present and has the value 'true'
  if (isAdmin === 'true') {
    // Display admin features
    document.getElementById('admin-features').style.display = 'block';
    document.getElementById('regular-features').style.display = 'none';
  }
  

function clearLogin() {
  let message = "Do you wish to logout?";
  let confirmation = window.confirm(message);
  if (confirmation) {
    alert("Congratulations! You've successfully logged out.");
    localStorage.removeItem("userInfo");
  }
}

function addFlight() {
  const takeOffDest = prompt("Please write departure destination ");
  const landDest = prompt("Please write arrival destination ");
  const newFlightPrice = prompt("Please write flight price ");

  const newFlight = {
    from: takeOffDest,
    to: landDest,
    price: newFlightPrice,
  };

  flights.push(newFlight);
  alert("Flight added successfully!");
  console.log(flights);
}

function sortFlightPrice() {
  flights.sort((a, b) => a.price - b.price);
  alert("Flights price sorted!");
}

function searchFlight() {
  const flightNumber = prompt("Please write the flight's id");
  const searchedFlight = flights.find((flight) => {
    return parseInt(flight.id) === parseInt(flightNumber);
  });
  console.log(searchedFlight);
}

function updatePrice() {
  const flightId = parseInt(prompt("Enter the ID of the flight to update:"));
  const newPrice = parseFloat(prompt("Enter the new price:"));

  const flightToUpdate = flights.find((flight) => flight.id === flightId);
  flightToUpdate.price = newPrice;
  alert("Flight price updated successfully!");
}

function buyFlight(id, from, to, price) {
  let message = "Do you wish to buy this flight?";
  let confirmation = window.confirm(message);

  if (confirmation) {
    alert(
      "Congratulations! You've successfully baught this flight ticket. to view this go to cart page "
    );
    cart.push({ id, from, to, price });
    localStorage.setItem("myCartArray", JSON.stringify(cart));
        // console.log(cart)
  } else {
    return;
  }
}


//print from array to main
const container = document.getElementById("flight-list");
flights.forEach((flight) => {
  const card = document.createElement("div");
  card.classList.add("flight-card");
  card.innerHTML = `
  
        <h2>${flight.id}</h2>
        <p>From: ${flight.from}</p>
        <p>To: ${flight.to}</p>
        <p>Price: ${flight.price}$</p>
        <button onclick="buyFlight(${flight.id}, '${flight.from}', '${flight.to}', ${flight.price})">Buy flight</button>
    `;
  container.appendChild(card);
});



