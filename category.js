




async function fetchProducts(url) {
  try {
    const response = await fetch(url)
      .then((res) => res.json())
      .then((json) => {
        const products = document.querySelector(".products");
        json.forEach((element) => {
          console.log(element);
          const product = document.createElement("div");
          product.classList.add("product-container");
          products.appendChild(product);

          const image = document.createElement("img");
          image.src = element.image;
          image.innerHTML = element.image;

          const details = document.createElement("div");
          details.classList.add("detail-container");

          const pricediv = document.createElement("div");
          details.classList.add("pcice_cart");

          const product_title = document.createElement("h4");
          product_title.innerHTML = element.title;
          if (product_title.textContent.length > 20) {
            product_title.textContent =
              product_title.textContent.substring(0, 20) + " ...";
          }
          details.appendChild(product_title);

          const description = document.createElement("p");
          description.innerHTML = element.description;

          if (description.textContent.length > 20) {
            description.textContent =
              description.textContent.substring(0, 20) + " ...";
          }

          details.appendChild(description);

          const category = document.createElement("h5");
          category.innerHTML = element.category;
          details.appendChild(category);

          const price = document.createElement("h4");
          price.innerHTML = element.price;
          pricediv.appendChild(price);

         

          product.appendChild(image);
          product.appendChild(details);
          product.appendChild(pricediv);
        });
      });
  } catch (error) {
    console.log("there is an error");
  }
}
fetchProducts('https://fakestoreapi.com/products/category/jewelery');


async function fetchProducts(url) {
  try {
    const response = await fetch(url)
      .then((res) => res.json())
      .then((json) => {
        const products = document.querySelector(".electronics");
        json.forEach((element) => {
          console.log(element);
          const product = document.createElement("div");
          product.classList.add("product-container");
          electronics.appendChild(product);

          const image = document.createElement("img");
          image.src = element.image;
          image.innerHTML = element.image;

          const details = document.createElement("div");
          details.classList.add("detail-container");

          const pricediv = document.createElement("div");
          details.classList.add("pcice_cart");

          const product_title = document.createElement("h4");
          product_title.innerHTML = element.title;
          if (product_title.textContent.length > 20) {
            product_title.textContent =
              product_title.textContent.substring(0, 20) + " ...";
          }
          details.appendChild(product_title);

          const description = document.createElement("p");
          description.innerHTML = element.description;

          if (description.textContent.length > 20) {
            description.textContent =
              description.textContent.substring(0, 20) + " ...";
          }

          details.appendChild(description);

          const category = document.createElement("h5");
          category.innerHTML = element.category;
          details.appendChild(category);

          const price = document.createElement("h4");
          price.innerHTML = element.price;
          pricediv.appendChild(price);

          product.appendChild(image);
          product.appendChild(details);
          product.appendChild(pricediv);
        });
      });
  } catch (error) {
    console.log("there is an error");
  }
}
fetchProducts("https://fakestoreapi.com/products/category/electronics");

