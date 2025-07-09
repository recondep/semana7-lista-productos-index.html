// Arreglo inicial de productos
let products = [
    { name: "Producto 1", price: 10, description: "Descripción del producto 1" },
    { name: "Producto 2", price: 20, description: "Descripción del producto 2" },
    { name: "Producto 3", price: 30, description: "Descripción del producto 3" }
];

// Función para renderizar la lista de productos
function renderProducts() {
    const productList = document.getElementById('product-list');
    productList.innerHTML = ''; // Limpiar la lista antes de renderizar

    products.forEach(product => {
        const li = document.createElement('li');
        li.textContent = `${product.name} - $${product.price}: ${product.description}`;
        productList.appendChild(li);
    });
}

// Función para agregar un nuevo producto
function addProduct() {
    const name = document.getElementById('product-name').value;
    const price = document.getElementById('product-price').value;
    const description = document.getElementById('product-description').value;

    if (name && price && description) {
        products.push({ name, price: parseFloat(price), description });
        renderProducts(); // Renderizar la lista actualizada
        clearInputs(); // Limpiar los campos de entrada
    } else {
        alert("Por favor, completa todos los campos.");
    }
}

// Función para limpiar los campos de entrada
function clearInputs() {
    document.getElementById('product-name').value = '';
    document.getElementById('product-price').value = '';
    document.getElementById('product-description').value = '';
}

// Evento para agregar un producto al hacer clic en el botón
document.getElementById('add-product').addEventListener('click', addProduct);

// Renderizar la lista de productos al cargar la página
window.onload = renderProducts;
