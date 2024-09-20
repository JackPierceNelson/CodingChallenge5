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

// Task 3: Create a Function to Place an Order

function placeOrder(customerName, orderedItems) {
    // Check if there are enough stock for each item in the order
    for(let item of orderedItems) {const inventoryItem = Inventory.find(product => product.name === item.name);
       if (!inventoryItem) {
        console.error(`Error: ${item.name} is not found in inventory`);
        return;
       } 
       if (inventoryItem.quantity < item.quantity) {
        console.error(`Error: Insufficient stock for ${item.name}. Available: ${inventoryItem.quantity}, Ordered: ${item.quantity}`);
        return;
       }

    }
    // If all items are available, subtract the ordered quantity from the products stock
    for (let item of orderedItems) {const inventoryItem = Inventory.find(product => product.name === item.name);
        inventoryItem.quantity -= item.quantity
        
    }
    // Add a new order in the order array
    const newOrder = {
        customerName: customerName, items: orderedItems, status: "Pending"
    };
    orders.push(newOrder);
    console.log(`Order placed succesfully for ${customerName}`);
}
placeOrder("Alice", [{
    name: "Latte", quantity: 1}
]);