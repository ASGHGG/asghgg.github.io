// cart.js

document.addEventListener('DOMContentLoaded', () => {
    const cartItemsContainer = document.getElementById('cart-items');
    const checkoutButton = document.getElementById('checkout-button');
    let cart = JSON.parse(localStorage.getItem('cart')) || [];

    function displayCartItems() {
        cartItemsContainer.innerHTML = '';
        if (cart.length === 0) {
            cartItemsContainer.innerHTML = '<p>Your cart is empty.</p>';
        } else {
            cart.forEach(item => {
                const itemElement = document.createElement('div');
                itemElement.className = 'cart-item';
                itemElement.innerHTML = `
                    <h3>${item.name}</h3>
                    <p>Price: $${item.price}</p>
                `;
                cartItemsContainer.appendChild(itemElement);
            });
        }
    }

    function checkout() {
        localStorage.removeItem('cart');
        window.location.href = 'checkout.html';
    }

    checkoutButton.addEventListener('click', checkout);

    displayCartItems();
});