const ulProducts = document.getElementById("ul-products");

export default function updateProductsList() {
  ulProducts.innerHTML = "";
  console.log("oi");
  const array = JSON.stringify(sessionStorage.products);
  const li = document.createElement("li");
  li.textContent = array;
  ulProducts.appendChild(li);
}
updateProductsList();
