document.addEventListener('DOMContentLoaded', () => {
    const cart = document.querySelector('.cart');

    cart.addEventListener('click', function (event) {
        if (event.target.classList.contains('btn-plus')) {
            const quantityElement = event.target.previousElementSibling;
            let quantity = parseInt(quantityElement.textContent);
            quantity++;
            quantityElement.textContent = quantity;
            updateTotalPrice();
        }

        if (event.target.classList.contains('btn-minus')) {
            const quantityElement = event.target.nextElementSibling;
            let quantity = parseInt(quantityElement.textContent);
            if (quantity > 1) {
                quantity--;
                quantityElement.textContent = quantity;
                updateTotalPrice();
            }
        }

        if (event.target.classList.contains('btn-delete')) {
            const itemRow = event.target.closest('.cart-item');
            itemRow.remove();
            updateTotalPrice();
        }

        if (event.target.classList.contains('btn-heart')) {
            event.target.classList.toggle('liked');
        }
    });

    function updateTotalPrice() {
        const items = document.querySelectorAll('.cart-item');
        let total = 0;

        items.forEach(item => {
            const price = parseFloat(item.querySelector('.item-price').textContent);
            const quantity = parseInt(item.querySelector('.item-quantity').textContent);
            total += price * quantity;
        });

        document.querySelector('.total-price').textContent = total.toFixed(2);
    }
});
