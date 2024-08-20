

let cart = [];
const cartItemsDiv = document.getElementById('cart-items');
const totalBillElement = document.getElementById('total-bill');
const orderStatusElement = document.getElementById('order-status');

function addToCart(item, price, quantity = 1) {
    const existingItem = cart.find(cartItem => cartItem.item === item);
    if (existingItem) {
        existingItem.quantity += quantity; // Increase by selected quantity
        existingItem.totalPrice = existingItem.quantity * price;
    } else {
        cart.push({
            item: item,
            quantity: quantity, // Add selected quantity
            totalPrice: price * quantity
        });
    }
    updateCart();
}

function updateCart() {
    cartItemsDiv.innerHTML = '';
    let totalBill = 0;

    cart.forEach(cartItem => {
        totalBill += cartItem.totalPrice;
        const itemDiv = document.createElement('div');
        itemDiv.innerHTML = `
            <span>${cartItem.item} (x${cartItem.quantity})</span>
            <span>$${cartItem.totalPrice.toFixed(2)}</span>
        `;
        cartItemsDiv.appendChild(itemDiv);
    });

    totalBillElement.textContent = `Total: $${totalBill.toFixed(2)}`;
}

function submitOrder() {
    const paymentMethod = document.getElementById('payment-method').value;
    if (cart.length === 0) {
        orderStatusElement.textContent = 'Your cart is empty!';
        return;
    }

    // Simulate payment process
    setTimeout(() => {
        orderStatusElement.textContent = `Payment Successful with ${paymentMethod}. Thank you for your purchase!`;
        cart = [];
        updateCart();
    }, 1000);
}
