// Define a Product class
class Product {
  constructor(id, title, price, image) {
    this.id = id;
    this.title = title;
    this.price = price;
    this.image = image;
  }
}

// Define a ShoppingCart class
class ShoppingCart {
  constructor() {
    this.cart = [];
    this.cartItemsList = document.getElementById("cartItems");
    this.cartTotal = document.getElementById("cartTotal");
    this.clearCartButton = document.getElementById("clearCartButton");

    this.clearCartButton.addEventListener("click", () => this.clearCart());

    this.updateCart();
  }

  addProduct(product) {
    const existingItem = this.cart.find(
      (item) => item.product.id === product.id
    );

    if (existingItem) {
      existingItem.quantity++;
    } else {
      this.cart.push({ product, quantity: 1 });
    }

    this.updateCart();
  }

  removeProduct(productId) {
    this.cart = this.cart.filter((item) => item.product.id !== productId);
    this.updateCart();
  }

  clearCart() {
    this.cart = [];
    this.updateCart();
  }

  updateCart() {
    this.cartItemsList.innerHTML = "";
    let total = 0;

    this.cart.forEach((item) => {
      const cartItem = document.createElement("li");
      cartItem.classList.add("list-group-item");
      cartItem.innerHTML = `
                ${item.product.title} x${item.quantity} - $${(
        item.product.price * item.quantity
      ).toFixed(2)}
                <button data-product-id="${
                  item.product.id
                }" class="btn btn-danger remove-from-cart">Remove</button>
            `;
      this.cartItemsList.appendChild(cartItem);

      const removeButton = cartItem.querySelector(".remove-from-cart");
      removeButton.addEventListener("click", () =>
        this.removeProduct(item.product.id)
      );

      total += item.product.price * item.quantity;
    });

    this.cartTotal.textContent = total.toFixed(2);
  }
}

// Fetch products from the API
async function fetchProducts() {
  try {
    const response = await fetch("https://fakestoreapi.com/products");
    const productsData = await response.json();
    const products = productsData.map(
      (productData) =>
        new Product(
          productData.id,
          productData.title,
          productData.price,
          productData.image
        )
    );
    displayProducts(products);
  } catch (error) {
    console.error("Error fetching products:", error);
  }
}

// Display products
function displayProducts(products) {
  const productsContainer = document.getElementById("products");
  productsContainer.innerHTML = "";
  products.forEach((product) => {
    const productElement = document.createElement("div");
    productElement.classList.add("col-lg-4");
    productElement.innerHTML = `
            <div class="card mb-3 ">
                <img src="${product.image}" class="card-img-top" alt="${
      product.title
    }">
                <div class="card-body">
                    <h5 class="card-title">${product.title}</h5>
                    <p class="card-text">$${product.price.toFixed(2)}</p>
                    <button data-product-id="${
                      product.id
                    }" class="btn btn-primary add-to-cart">Add to Cart</button>
                </div>
            </div>
        `;
    productsContainer.appendChild(productElement);

    const addToCartButton = productElement.querySelector(".add-to-cart");
    addToCartButton.addEventListener("click", () =>
      shoppingCart.addProduct(product)
    );
  });
}

// Initialize the app
const shoppingCart = new ShoppingCart();
fetchProducts();
