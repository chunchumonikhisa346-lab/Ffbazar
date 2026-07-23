import { checkUser } from "./auth.js";
import { getAllProducts } from "./products.js";
import { getBalance } from "./balance.js";

document.addEventListener("DOMContentLoaded", async () => {

  // User Login Check
  checkUser(async (user) => {

    if (user) {

      console.log("Logged In:", user.email);

      // Show Balance
      const balance = await getBalance(user.uid);

      const balanceBox = document.getElementById("balance");

      if (balanceBox) {
        balanceBox.innerText = "৳" + balance;
      }

    } else {

      console.log("User Not Logged In");

    }

  });

  // Load Products
  const productContainer = document.getElementById("products");

  if (productContainer) {

    const snapshot = await getAllProducts();

    snapshot.forEach((doc) => {

      const item = doc.data();

      productContainer.innerHTML += `
        <div class="product-card">
          <img src="${item.image}" alt="${item.name}">
          <h3>${item.name}</h3>
          <p>৳${item.price}</p>
          <button onclick="location.href='product.html?id=${doc.id}'">
            Buy Now
          </button>
        </div>
      `;

    });

  }

});
