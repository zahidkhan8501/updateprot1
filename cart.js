let cart = [];
let total = 0;

function addItem(name, price) {
    const item = {
        name: name,
        price: price
    };

    cart.push(item);
    updateCart();
}

function removeItem(index) {
    cart.splice(index, 1);
    updateCart();
}

function updateCart() {
    const cartContainer = document.getElementById('cart-container');
    const totalElement = document.getElementById('total');

    // Clear the existing content
    cartContainer.innerHTML = '';

    // Display each item in the cart
    cart.forEach((item, index) => {
        const itemDiv = document.createElement('div');
        itemDiv.className = 'cartitem';
        itemDiv.innerHTML = `
            <p>Name: ${item.name}</p>
            <p>Price: ₹${item.price.toFixed(2)}</p>
            <button onclick="removeItem(${index})" class="r-btn">-</button>
        `;
        cartContainer.appendChild(itemDiv);
    });

    // Calculate and display the total price
    total = cart.reduce((acc, item) => acc + item.price, 0);
    totalElement.textContent = `Total: ₹${total.toFixed(2)}`;
}