const products = document.getElementById('products-list');

async function fetchData() {
    const response = await fetch('https://dummyjson.com/products');
    const data = await response.json();
    const allproducts = data.products;
    console.log(allproducts)
    renderProducts(allproducts);
}

const renderProducts = (res) =>{
    products.innerHTML=``;
    res.map((product)=>{
        products.innerHTML+=`<div class="card">
            <h2>${product.title}</h2>
            <img src="${product.thumbnail}">
            <p>${product.description}</p>
        </div>`
    })
}

fetchData();