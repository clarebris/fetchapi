const loadProducts = async () => {
  try {
    const response = await fetch("https://fakestoreapi.com/products");
    const products = await response.json();
    createProducts(products);
  } catch (error) {
    console.error("Failed to fetch products:", error);
  }
};


loadProducts();
// Display products on the site
const createProducts = (products) => {
  const productsContainer = document.getElementById("products");
  productsContainer.innerHTML = "";

  products.forEach((product) => {
    const productDiv = document.createElement("div");
    productDiv.className = "product";

    const image = document.createElement("img");
    image.src = product.image;
    image.alt = product.title;
    image.onclick = () => createProductDetails(product);

    const title = document.createElement("h4");
    title.textContent = product.title;

    const price = document.createElement("p");
    price.textContent = `$${product.price.toFixed(2)}`;

    const cart = document.createElement("button");
    cart.classList.add("buy-button");
    cart.innerHTML = "Add to cart";
    cart.onclick = () => {
    cart.add(product);
    console.log("Product added to cart:", product);
    }

    productDiv.appendChild(image);
    productDiv.appendChild(title);
    productDiv.appendChild(price);
    productDiv.appendChild(cart);

    productsContainer.appendChild(productDiv);
  });
};

// ... Your Cart class and other functions ...

// Display product details when a product is clicked
const createProductDetails = (product) => {
  const detailsContainer = document.getElementsById("products");
  detailsContainer.innerHTML = "";

  const image = document.createElement("img");
  image.src = product.image;
  image.alt = product.title;

  const title = document.createElement("h2");
  title.textContent = product.title;

  const price = document.createElement("p");
  price.textContent = `$${product.price.toFixed(2)}`;

  const description = document.createElement("p");
  description.textContent = product.description;

  const addToCartButton = document.getElementsByClassName("buy-button");
  addToCartButton.textContent = "Add to Cart";
  addToCartButton.onclick = () => {
    cart.add(product);
    console.log("Product added to cart:", product);
    console.log("Cart total:", cart.getTotal());
    createCart();
  };

  detailsContainer.appendChild(image);
  detailsContainer.appendChild(title);
  detailsContainer.appendChild(price);
  detailsContainer.appendChild(description);
  detailsContainer.appendChild(addToCartButton);

  detailsContainer.style.display = "block";
  document.getElementById("products").style.display = "none";
};
createProductDetails();

// Create cart items and total
const createCart = () => {
  const cartItemsContainer = document.getElementById("cart-items");
  cartItemsContainer.innerHTML = "";

  /*cart_items.forEach((item) => {
    const cartItemDiv = document.createElement("div");

    const title = document.createElement("span");
    title.textContent = item.title;

    const price = document.createElement("span");
    price.textContent = `$${item.price.toFixed(2)}`;

    const removeButton = document.createElement("button");
    removeButton.textContent = "Remove";
    removeButton.onclick = () => {
      cart.remove(item.id);
      console.log("Product removed from cart:", item);
      console.log("Cart total:", cart.getTotal());
      createCart();
};

    cartItemDiv.appendChild(title);
    cartItemDiv.appendChild(price);
    cartItemDiv.appendChild(removeButton);

    cartItemsContainer.appendChild(cartItemDiv);
  });


  document.getElementById("cart-total").textContent = cart.getTotal();
  */
};

// Clear cart
const clearCart = () => {
  cart.clear();
  console.log("Cart cleared");
  createCart();
};

// ... Rest of your code ...

// Load products when the site loads
window.onload = () => {
  loadProducts();
  createCart();
};




