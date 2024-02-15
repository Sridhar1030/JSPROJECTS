productList = document.querySelector(".productList")
product = document.querySelector(".product")
pDetails = document.querySelector(".p-details")
for (let i = 0; i < 15; i++) {
    const newProduct = document.createElement("div");
    newProduct.classList.add("product")
    newProduct.innerHTML = product.innerHTML
    productList.appendChild(newProduct);
}