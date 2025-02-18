//Task 1 Product price management scenario
let prices = [5, 7.50, 10, 15, 35]; //declare array
prices.push(40); //add value to array
prices.shift(); //remove the first instance
console.log(prices); //display the updated array

//Task 2 Modifying customer orders scenario
let orders = [2, 3, 8, 4, 12, 9]; //define array
orders[2] += 5; //add 5 to the 3rd order
console.log(`Number of orders: ${orders.reduce((total, amount) => total + amount, 0)}
Orders: ${orders}`); //display the number of instances, and the array of orders

//Task 3 Employee performance tracking scenario
let employee = {
    name: "John",
    role: "Administrator",
    performanceScore: 82,
    isActive: true
}; //declare object with properties
employee.performanceScore = 89; //update property
employee.promotionEligible = true; //add new property
console.log(employee); //log the updated object

//Task 4 Customer feedback records scenario
let feedback = [
    {customerName: "Michael", feedbackText: "my table caught fire", rating: 1},
    {customerName: "Vanessa", feedbackText: "my sofa caught fire", rating: 0},
    {customerName: "Jaden", feedbackText: "my fireplace caught fire", rating: 5}
]; // create array with objects
feedback.push({customerName: "Sam", feedbackText: "my chair caught fire", rating: 2});
console.log(feedback); //log the feedback array

//Task 5 Inventory management system scenario
let inventory = {
    itemName: "Table",
    stockCount: 42,
    price: 199
}; //create object inventory with properties
function calculateTotalValue(inventory) {
    let totalvalue = (inventory.stockCount * inventory.price);
    return totalvalue
}; //create method to return total value
console.log(`Inventory: Item Name: ${inventory.itemName}, Stock Count: ${inventory.stockCount}, Price: ${inventory.price}
Total value: ${calculateTotalValue(inventory)}`); //log inventory info and total value