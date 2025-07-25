let inventory = [
    { id: 1, name: "Apples", stock: 50, pricePerUnit: 0.5, lowStockThreshold: 10 },
    { id: 2, name: "Bread", stock: 20, pricePerUnit: 2.0, lowStockThreshold: 5 },
    { id: 3, name: "Milk", stock: 15, pricePerUnit: 3.5, lowStockThreshold: 5 },
    { id: 4, name: "Eggs", stock: 30, pricePerUnit: 0.2, lowStockThreshold: 12 },
    { id: 5, name: "Bananas", stock: 40, pricePerUnit: 0.3, lowStockThreshold: 10 }
];

function displayInventory() {
    console.log("\nGrocery Store Inventory:");
    console.log("ID | Name | Stock | Price per Unit | Status");
    console.log("---------------------------------------------");
    
    inventory.forEach(item => {
        // Check if stock is below threshold
        let status = item.stock <= item.lowStockThreshold ? "Low Stock!" : "In Stock";
        console.log(`${item.id} | ${item.name} | ${item.stock} | $${item.pricePerUnit.toFixed(2)} | ${status}`);
    });
}

function addItem(id, name, stock, pricePerUnit, lowStockThreshold) {
    let exists = inventory.find(item => item.id === id);
    if (exists) {
        console.log(`Error: Item with ID ${id} already exists!`);
        return;
    }
    
    inventory.push({
        id: id,
        name: name,
        stock: stock,
        pricePerUnit: pricePerUnit,
        lowStockThreshold: lowStockThreshold
    });
    console.log(`\n${name} added to inventory!`);
}

function updateStock(id, quantity) {
    let item = inventory.find(item => item.id === id);
    if (!item) {
        console.log(`Error: Item with ID ${id} not found!`);
        return;
    }
    
    item.stock = Math.max(0, item.stock + quantity);
    console.log(`\nStock for ${item.name} updated to ${item.stock}`);
    
    if (item.stock <= item.lowStockThreshold) {
        console.log(`Alert: ${item.name} is low on stock! Current stock: ${item.stock}`);
    }
}

function calculateTotalValue() {
    let total = inventory.reduce((sum, item) => sum + item.stock * item.pricePerUnit, 0);
    console.log(`\nTotal Inventory Value: $${total.toFixed(2)}`);
}

function removeItem(id) {
    let index = inventory.findIndex(item => item.id === id);
    if (index === -1) {
        console.log(`Error: Item with ID ${id} not found!`);
        return;
    }
    
    let removedItem = inventory.splice(index, 1)[0];
    console.log(`\n${removedItem.name} removed from inventory!`);
}

console.log("Grocery Store Inventory System\n");

displayInventory();

addItem(6, "Orange Juice", 10, 4.0, 3);

updateStock(1, -10);

updateStock(2, 20);

removeItem(3);

calculateTotalValue();

displayInventory();