const productArrays = JSON.parse(sessionStorage.getItem("products")) || [];
import updateProductsList from "./shop.js";

const form = document.getElementById("product-form");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const titleInput = form.querySelector('input[name="title"]');
  const titleValue = titleInput.value.trim();

  if (titleValue) {
    productArrays.push(titleValue);

    titleInput.value = "";

    console.log(productArrays);
    saveProductsOnSession();
    updateProductsList();
  }
});

function saveProductsOnSession() {
  sessionStorage.setItem("products", JSON.stringify(productArrays));
}

updateProductsList();
