function calculateTotal() {
    const pizzaPrice = 10.00;
    const burgerPrice = 8.00;
    const pastaPrice = 12.00;
    const saladPrice = 6.00;

    const pizzaQuantity = document.getElementById('pizza-quantity').value;
    const burgerQuantity = document.getElementById('burger-quantity').value;
    const pastaQuantity = document.getElementById('pasta-quantity').value;
    const saladQuantity = document.getElementById('salad-quantity').value;

    const totalPrice = (pizzaPrice * pizzaQuantity) +
                       (burgerPrice * burgerQuantity) +
                       (pastaPrice * pastaQuantity) +
                       (saladPrice * saladQuantity);

    document.getElementById('total-price').innerText = 'Total Price: $' + totalPrice.toFixed(2);
}
