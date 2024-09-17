const products = document.getElementById('products-list');

async function fetchData() {
    const response = await fetch('https://dummyjson.com/products');
    const data = await response.json();
    const allproducts = data.products;
    console.log(allproducts)
    renderProducts(allproducts);
}

fetchData();

function renderProducts(product) {
    product.forEach(product => {
        const productCard = `
            <div class="product-card">
                <img src="${product.thumbnail}" alt="${product.title}" class="product-image">
                <h3 class="product-title">${product.title}</h3>
                <p class="product-description">${product.description.substring(0, 80)}...</p>
                <p class="product-price">$${product.price}</p>
                <a href="#" class="product-button">Buy Now</a>
            </div>
        `;
        products.innerHTML += productCard;
    });
}