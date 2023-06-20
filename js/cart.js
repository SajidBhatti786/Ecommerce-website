console.log("cart.js");
var urlParams = new URLSearchParams(window.location.search);
var productId = urlParams.get('productId');
document.addEventListener('DOMContentLoaded', function() {
 myCartMethod();
});

function myCartMethod() {
  console.log("myCartMethod");
  // Your code logic for the cart page here
  console.log('Product ID:', productId);
let html = `<div class="single-pro-image">
    <img src="%mainImage%" width="100%" id="MainImg" alt="">
    <div class="small-img-group">
        <div class="small-img-col">
            <img src="%small1%" alt="" width="100%" class="small-img" onclick="changeImage(this)">
        </div>
        <div class="small-img-col">
          <img src="%small2%" alt="" width="100%" class="small-img" onclick="changeImage(this)">
      </div>
      <div class="small-img-col">
        <img src="%small3%" alt="" width="100%" class="small-img" onclick="changeImage(this)">
    </div>
    <div class="small-img-col">
      <img src="%small4%" alt="" width="100%" class="small-img" onclick="changeImage(this)">
  </div>
    </div>
</div>
<div class="single-pro-detials">
  <h6>Home / T-shirts</h6>
  <h5>%title%</h5>
  <h2>%price%.00</h2>
  <select >
    <option>Select Size</option>
    <option>XL</option>
    <option>XXL</option>
    <option>small</option>
    <option>large</option>
  </select>
  <input type="number" value="1" min="1">
  <button onclick="addToCart(%data.id%)">Add To Cart</button>
  <h4>Product Details</h4>
  <span>%des%</span>

</div> `
  fetch('https://dummyjson.com/products/' + productId)
    .then(res => res.json())
   .then(data => {
     console.log(data);
      let newHTML = html.replace('%mainImage%', data.images[0]);
      newHTML = newHTML.replace('%small1%', data.images[1]);
      newHTML = newHTML.replace('%small2%', data.images[2]);
      newHTML = newHTML.replace('%small3%', data.images[3]);
      newHTML = newHTML.replace('%small4%', data.images[4]);
      newHTML = newHTML.replace('%title%', data.title);
      newHTML = newHTML.replace('%price%', data.price);
    newHTML = newHTML.replace('%des%', data.description);
    newHTML = newHTML.replace('%productId%', data.id);
    newHTML = newHTML.replace('%data.id%', data.id);
      document.getElementById('prodetails').insertAdjacentHTML('beforeend', newHTML);

    })
  

  // Perform any necessary actions or function calls for the cart page
}
// Use the product ID to fetch the product details from your data source
// Display the product information on the page as desired

var cartVisible = false;
var cartItems = [];

// Check if there are any cart items stored in localStorage
var storedCartItems = localStorage.getItem("cartItems");
if (storedCartItems) {
  try {
    cartItems = JSON.parse(storedCartItems);
    if (!Array.isArray(cartItems)) {
      cartItems = [];
    }
  } catch (error) {
    cartItems = [];
  }
  updateCart();
}

function toggleCart() {
  var cart = document.getElementById("cart");
  var cartButton = document.getElementById("cart-button");

  if (cartVisible) {
    cart.classList.remove("cart-visible");
    cart.classList.add("cart-hidden");
    // cartButton.innerHTML = "Cart";
  } else {
    cart.classList.remove("cart-hidden");
    cart.classList.add("cart-visible");
    // cartButton.innerHTML = "Close Cart";
  }

  cartVisible = !cartVisible;
}

function clearCart() {
  cartItems = [];
  updateCart();
  saveCartItems(); // Save cart items to localStorage
}

function addToCart(data) {
 cartItems.push(data);
 console.log("addToCart "+data);
  updateCart();
  saveCartItems(); // Save cart items to localStorage
}

function updateCart() {
  var cartItemsList = document.getElementById("cart-items");
  cartItemsList.innerHTML = "";

  for (var i = 0; i < cartItems.length; i++) {
    (function (index) {
      fetch('https://dummyjson.com/products/' + cartItems[index])
        .then(res => res.json())
        .then(data => {
          var listItem = document.createElement("li");
          listItem.classList.add("cart-item");

          var productImage = document.createElement("img");
          productImage.src = data.images[0];
          productImage.alt = data.title;
          listItem.appendChild(productImage);

          var detailsContainer = document.createElement("div");
          detailsContainer.classList.add("cart-item-details");

          var productName = document.createElement("h4");
          productName.textContent = data.title;
          detailsContainer.appendChild(productName);

          var productPrice = document.createElement("span");
          productPrice.textContent = "$" + data.price;
          detailsContainer.appendChild(productPrice);

          var removeButton = document.createElement("button");
          removeButton.innerHTML = "Remove";
          removeButton.addEventListener("click", function () {
            removeFromCart(index);
          });
          detailsContainer.appendChild(removeButton);

          listItem.appendChild(detailsContainer);
          cartItemsList.appendChild(listItem);
        });
    })(i);
  }
}

function removeFromCart(index) {
  cartItems.splice(index, 1);
  updateCart();
  saveCartItems(); // Save cart items to localStorage
}

function saveCartItems() {
  localStorage.setItem("cartItems", JSON.stringify(cartItems));
}
