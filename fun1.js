function search() {
    // الحصول على القيمة من حقل البحث
    var input = document.getElementById('Search-item');
    var filter = input.value.toLowerCase();
    var productList = document.getElementById('product-list');
    var products = productList.getElementsByClassName('product1');

    // تصفية المنتجات بناءً على القيمة المدخلة
    for (var i = 0; i < products.length; i++) {
        var productName = products[i].getElementsByTagName('h3')[0].innerText.toLowerCase();
        if (productName.indexOf(filter) > -1) {
            products[i].style.display = ""; // عرض المنتج
        } else {
            products[i].style.display = "none"; // إخفاء المنتج
        }
    }
}
let cart = [];

// وظيفة لإضافة عنصر إلى السلة
function addToCart(productName, productPrice) {
    const existingProduct = cart.find(item => item.name === productName);
    if (existingProduct) {
        existingProduct.quantity++;
    } else {
        cart.push({ name: productName, price: productPrice, quantity: 1 });
    }
    updateCart();
}

// وظيفة لتحديث واجهة المستخدم
function updateCart() {
    const cartList = document.getElementById('cart');
    cartList.innerHTML = ''; // مسح قائمة السلة الحالية
    cart.forEach(item => {
        const li = document.createElement('li');
        li.textContent = `${item.name} - $${item.price} (الكمية: ${item.quantity})`;
        cartList.appendChild(li);
    });
}

// وظيفة لمسح السلة
function clearCart() {
    cart = [];
    updateCart();
}