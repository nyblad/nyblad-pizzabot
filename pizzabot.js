const vegetarian = "Vegetarian Pizza"
const hawaiian = "Hawaiian Pizza"
const pepperoni = "Pepperoni Pizza"

const pizzaPrice = 80

const orderButton = document.getElementById("button")
const confirmText = document.getElementById("confirm")

//FUNCTIONS

//Function to check if pizza is on the menu
//toLowerCase() makes the orderName return in just lowercase even if user types uppercase
let checkOrderName = (name) => {
  return (name.toLowerCase().includes("hawaii") || name.toLowerCase().includes("pepperoni") || name.toLowerCase().includes("vegetarian"))
}

//Function to check the thotal cost of pizzaz
let totalCost = (pizzaQuantity) => {
  return pizzaQuantity * pizzaPrice;
}

//Function to check the total cookingtime of pizzas
let cookingTime = (quantity) => {
  if (quantity <= 2) {
    return 10;
  } else if (quantity >= 3 && quantity <= 5) {
    return 15;
  } else if (quantity >= 6) {
    return 20;
  }
}

let addClassActive = () => {
  confirmText.classList.toggle("message-active")
  window.scrollTo(0, 590);
}

//RUN THE PIZZABOT USING ABOVE FUNCTIONS
//Click the button on site to start the bot
orderButton.onclick = () => {

  //Customer types in what pizza to order in HTML-form intype id "cust1"
  let orderName = document.getElementById("input-pizza").value;

  //Calling function checkOrderName to check if pizza is on menu, orderName is the argument we want to check
  let namePizza = checkOrderName(orderName)

  //If the argument orderName was matching a pizza from the menu, variabel namePizza is true and we want to move on
  if (namePizza === true) {
    //The customer types in how many pizzas in HTML-form input "input-quantity", variable orderQuantity gets the value from form
    let orderQuantity = document.getElementById("input-quantity").value;

    //Calling the function totalCost to calculate total cost of order, orderQuantity is the argument we want to check
    let orderTotal = totalCost(orderQuantity)

    //Calling the function to calculate cookingtime of order, orderQuantity is argument here too
    let orderTime = cookingTime(orderQuantity)

    //Everything ok and we get the confirmation message in the HTML
    addClassActive()
    confirmText.innerHTML = `Great, I'll get started on your ${orderQuantity} ${orderName} right away<br><br>It will cost ${orderTotal} kr<br><br>The pizzas will take ${orderTime} minutes to cook`;
  } else {
    //If variabel namePizza was false (not on the menu), we want to start over
    confirmText.innerHTML = 'Please start over and choose a pizza from the menu.'
  }
}
