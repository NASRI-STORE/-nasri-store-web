// NASRI STORE - Script File

let cart = [];
let total = 0;

function addToCart(productName, price) {
    cart.push({ name: productName, price: price });
    total += price;
    updateCartUI();
    alert(`تمت إضافة ${productName} إلى سلة المشتريات!`);
}

function updateCartUI() {
    const cartCount = document.getElementById('cart-count');
    const cartItems = document.getElementById('cart-items');
    const totalPrice = document.getElementById('total-price');

    if (cartCount) cartCount.innerText = cart.length;
    if (totalPrice) totalPrice.innerText = total;

    if (cartItems) {
        if (cart.length === 0) {
            cartItems.innerHTML = '<p>السلة فارغة حالياً.</p>';
        } else {
            cartItems.innerHTML = cart.map(item => `<div style="display:flex; justify-content:space-between; margin-bottom:8px;"><span>${item.name}</span><strong>${item.price} TND</strong></div>`).join('');
        }
    }
}

function submitOrder(event) {
    event.preventDefault();
    if (cart.length === 0) {
        alert('سلة المشتريات فارغة! يرجى إضافة منتجات أولاً.');
        return;
    }
    alert('شكراً لك! تم استلام طلبك بنجاح، وسنتصل بك قريباً لتأكيد التوصيل والدفع عند الاستلام.');
    cart = [];
    total = 0;
    updateCartUI();
    event.target.reset();
}
