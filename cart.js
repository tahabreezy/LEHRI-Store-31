document.addEventListener('DOMContentLoaded', function() {
    const cartItems = JSON.parse(localStorage.getItem('cart')) || [];
    const cartTableBody = document.getElementById('cartItems');
    const subtotalElement = document.getElementById('subtotal');
    const totalElement = document.getElementById('total');

    function renderCartItems() {
        cartTableBody.innerHTML = '';
        let subtotal = 0;

        cartItems.forEach((item, index) => {
            const itemTotal = item.price * item.quantity;
            subtotal += itemTotal;

            const row = document.createElement('tr');
            row.innerHTML = `
                <th scope="row">
                    <div class="d-flex align-items-center">
                        <img src="img/vegetable-item-3.png" class="img-fluid me-5 rounded-circle" style="width: 80px; height: 80px;" alt="${item.name}">
                    </div>
                </th>
                <td>
                    <p class="mb-0 mt-4">${item.name}</p>
                </td>
                <td>
                    <p class="mb-0 mt-4">$${item.price.toFixed(2)}</p>
                </td>
                <td>
                    <div class="input-group quantity mt-4" style="width: 100px;">
                        <div class="input-group-btn">
                            <button class="btn btn-sm btn-minus rounded-circle bg-light border" data-index="${index}">
                                <i class="fa fa-minus"></i>
                            </button>
                        </div>
                        <input type="text" class="form-control form-control-sm text-center border-0" value="${item.quantity}">
                        <div class="input-group-btn">
                            <button class="btn btn-sm btn-plus rounded-circle bg-light border" data-index="${index}">
                                <i class="fa fa-plus"></i>
                            </button>
                        </div>
                    </div>
                </td>
                <td>
                    <p class="mb-0 mt-4">$${itemTotal.toFixed(2)}</p>
                </td>
                <td>
                    <button class="btn btn-md rounded-circle bg-light border mt-4 remove-item" data-index="${index}">
                        <i class="fa fa-times text-danger"></i>
                    </button>
                </td>
            `;
            cartTableBody.appendChild(row);
        });

        const shippingCost = 3.00; // Flat shipping rate
        subtotalElement.textContent = `$${subtotal.toFixed(2)}`;
        totalElement.textContent = `$${(subtotal + shippingCost).toFixed(2)}`;

        addEventListeners();
    }

    function addEventListeners() {
        document.querySelectorAll('.btn-minus').forEach(button => {
            button.addEventListener('click', function() {
                const index = this.getAttribute('data-index');
                if (cartItems[index].quantity > 1) {
                    cartItems[index].quantity -= 1;
                } else {
                    cartItems.splice(index, 1);
                }
                updateCart();
            });
        });

        document.querySelectorAll('.btn-plus').forEach(button => {
            button.addEventListener('click', function() {
                const index = this.getAttribute('data-index');
                cartItems[index].quantity += 1;
                updateCart();
            });
        });

        document.querySelectorAll('.remove-item').forEach(button => {
            button.addEventListener('click', function() {
                const index = this.getAttribute('data-index');
                cartItems.splice(index, 1);
                updateCart();
            });
        });
    }

    function updateCart() {
        localStorage.setItem('cart', JSON.stringify(cartItems));
        renderCartItems();
    }

    renderCartItems();
});
