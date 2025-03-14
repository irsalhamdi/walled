const shop = {
    name: "My Shop",
    location: "Downtown",
    inventory: [],
  
    addProduct(name, price, quantity) {
      const newProduct = { name: name, price: price, quantity: quantity };
      let length = this.inventory.length;
      this.inventory[length] = newProduct;
    },
  
    sellProduct(name, quantity) {
      let product = null;
      for (let i = 0; i < this.inventory.length; i++) {
        if (this.inventory[i].name === name) {
          product = this.inventory[i];
          break;
        }
      }
      
      if (product !== null) {
        if (product.quantity >= quantity) {
          product.quantity -= quantity;
        } else {
          console.log("Stock Habis");
        }
      } else {
        console.log("Produk tidak ditemukan");z
      }
    },
  
    checkStock(name) {
      for (let i = 0; i < this.inventory.length; i++) {
        if (this.inventory[i].name === name) {
          return this.inventory[i].quantity;
        }
      }
      return "Produk tidak ditemukan";
    },
  
    showInventory() {
      console.log("Inventory:");
      for (let i = 0; i < this.inventory.length; i++) {
        console.log(this.inventory[i].name + " - Price: " + this.inventory[i].price + ", Stock: " + this.inventory[i].quantity);
      }
    }
  };
  
  // Contoh penggunaan
  shop.addProduct("Laptop", 15000, 10);
  shop.addProduct("Mouse", 200, 50);
  shop.sellProduct("Laptop", 2);
  console.log("Stock Laptop:", shop.checkStock("Laptop"));
  shop.showInventory();
  
  

// const shop = {
//     name: "My Shop",
//     location: "Downtown",
//     inventory: {},

//     addProduct(name, price, quantity) {
//         if (this.inventory[name]) {
//             console.log("Product already exists.");
//         } else {
//             this.inventory[name] = { price: price, quantity: quantity };
//             console.log(`Product ${name} added.`);
//         }
//     },
// };

// shop.addProduct("Laptop", 15000, 10); 
// shop.addProduct("Laptop", 20000, 5);  

