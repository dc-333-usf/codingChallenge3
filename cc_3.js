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