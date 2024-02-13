
// Sample items for the cart
const items = [
    { name: "Item 1", 
    price: 10.99, 
    quantity: 1 }, // array فيها كل العناصر
    { name: "Item 2",
     price: 15.99,
      quantity: 2 },
    // Add more items as needed
]; 

// Function to render the cart items
function renderCart() {
    const cartContainer = document.getElementById("cart-container");
    const totalPriceElement = document.getElementById("total-price");
    let totalPrice = 0;

    // Clear the cart container before rendering
    cartContainer.innerHTML = "";

    items.forEach((item) => {
        const itemContainer = document.createElement("div");
        itemContainer.className = "cart-item";

        const itemName = document.createElement("span");
        itemName.textContent = item.name;

        const itemQuantity = document.createElement("span");
        itemQuantity.textContent = `Qty: ${item.quantity}`;; 

        const itemPrice = document.createElement("span");
        itemPrice.textContent = `$${ (item.price * item.quantity).toFixed(2) }`;

        const increaseButton = document.createElement("button");
        increaseButton.textContent = "+";
        increaseButton.addEventListener("click", () => {
            item.quantity++;
            renderCart();
        });

        const decreaseButton = document.createElement("button");
        decreaseButton.textContent = "-";
        decreaseButton.addEventListener("click", () => {
            if (item.quantity > 1) {
                item.quantity--;
                renderCart();
            }
        });

        const removeButton = document.createElement("button");
        removeButton.textContent = "Remove";
        removeButton.addEventListener("click", () => {
            items.splice(items.indexOf(item), 1);
            renderCart();
        });

        itemContainer.appendChild(itemName);
        itemContainer.appendChild(itemPrice);
        itemContainer.appendChild(increaseButton);
        itemContainer.appendChild(itemQuantity);
        itemContainer.appendChild(decreaseButton);
        itemContainer.appendChild(removeButton);

        cartContainer.appendChild(itemContainer);

        totalPrice += item.price * item.quantity;
    });

    totalPriceElement.textContent = `Total Price: $${totalPrice.toFixed(
        2
    )}`;
}

// Initial rendering of the cart
renderCart();

