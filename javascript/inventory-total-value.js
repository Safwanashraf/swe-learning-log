const products = [
  { name: "Laptop", size: "15 inch", price: 1200, quantity: 5 },
  { name: "Smartphone", size: "6.5 inch", price: 800, quantity: 10 },
  { name: "Headphones", size: "Medium", price: 150, quantity: 20 },
  { name: "Keyboard", size: "Full", price: 90, quantity: 15 },
  { name: "Mouse", size: "Small", price: 45, quantity: 25 },
  { name: "Monitor", size: "24 inch", price: 220, quantity: 8 },
  { name: "Tablet", size: "10 inch", price: 500, quantity: 12 },
  { name: "Printer", size: "A4", price: 300, quantity: 6 },
  { name: "Camera", size: "Compact", price: 650, quantity: 7 },
  { name: "Speaker", size: "Large", price: 180, quantity: 14 }
];

function totalValue(products){ 
    let totalValue = 0; 
    for (let i = 0; i < products.length; i++){ 
        totalValue += products[i].price * products[i].quantity; 
    } 
    return totalValue; 
} 
console.log(totalValue(products));