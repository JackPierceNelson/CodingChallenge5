// Task 1: Create an Inventory Array of Product Objects

const Inventory = [
    {name: "Espresso", price: 3, quantity: 10},
    {name: "Latte", price: 4, quantity: 5},
    {name: "Cappuccino", price: 4, quantity: 6},
    {name: "Mocha", price: 5, quantity: 4}
];

// Task 2 Create an Orders Array of Order Objects

const orders = [];

orders.push(
    {customerName: "Jack", 
        items: [{name: "Espresso", quantity: 1}], status: "Pending"},
    {customerName: "Robert", 
        items: [{name: "Latte", quantity: 1}], status: "Complete"}
)