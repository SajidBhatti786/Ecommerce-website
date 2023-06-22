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
let html = `<div class="img-section">
    <img src="%mainImage%" alt="" id="MainImg">
    <div class="small-images">
      <img src="%small1%" alt="" onclick="changeImage(this)">
      <img src="%small2%" alt="" onclick="changeImage(this)">
      <img src="%small3%" alt="" onclick="changeImage(this)">
      <img src="%small4%" alt="" onclick="changeImage(this)">
    </div>
  </div>
  <div class="description" >
    <h6 data-aos="fade-up" data-aos-duration="1500">%brand%</h6>
    <h5 data-aos="fade-up" data-aos-duration="1500">%title%</h5>
    <div class="price" data-aos="zoom-out" data-aos-duration="1500">
      <h3 class="old-price" data-aos="fade-up" data-aos-duration="1500" >$%price%.00</h3>
      <h3 data-aos="fade-up" data-aos-duration="1500">$%newPrice%</h3>
    </div>

    <div class="select-group" data-aos="fade-up" data-aos-duration="1500">
      <select>
        <option>Select Size</option>
        <option>XL</option>
        <option>XXL</option>
        <option>Small</option>
        <option>Large</option>
      </select>
      <input type="number" value="1" min="1" data-aos="fade-up" data-aos-duration="1500">
    </div>
    <button onclick="addToCart(%pd%)" data-aos="fade-up" data-aos-duration="1500">Add To Cart</button>
    <h2 data-aos="fade-up" data-aos-duration="1500">Product Details</h2>
      <div class="rating" data-aos-duration="1500">
      <span data-aos="fade-up" data-aos-duration="1500">Rating: %rating% </span>
      
      </div>
    <span data-aos="fade-up" data-aos-duration="1500">%des%</span>
  </div> `
  fetch('https://dummyjson.com/products/' + productId)
    .then(res => res.json())
   .then(data => {
     console.log("data"+data);
     let newHTML = html.replace('%mainImage%', data.images[0]);
     newHTML = newHTML.replace('%brand%', data.brand);
     newHTML = newHTML.replace('%rating%', data.rating);
     newHTML = newHTML.replace('%newPrice%', data.price - (data.price * data.discountPercentage / 100));
      newHTML = newHTML.replace('%reviews%', data.reviews);
      newHTML = newHTML.replace('%small1%', data.images[1]);
      newHTML = newHTML.replace('%small2%', data.images[2]);
      newHTML = newHTML.replace('%small3%', data.images[3]);
      newHTML = newHTML.replace('%small4%', data.images[4]);
      newHTML = newHTML.replace('%title%', data.title);
      newHTML = newHTML.replace('%price%', data.price);
    newHTML = newHTML.replace('%des%', data.description);
    newHTML = newHTML.replace('%productId%', data.id);
     newHTML = newHTML.replace('%data.id%', data.id);
      newHTML = newHTML.replace('%pd%', data.id);
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
async function changeImage(param){
  
  document.querySelector('#MainImg').src = param.src;
 };

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
  total = 0;
  document.getElementById("cart-total").innerHTML = "Cart is Empty!";
  cartItems = [];
  updateCart();
  saveCartItems(); // Save cart items to localStorage
}

function addToCart(data) {
   showAlert("Added to cart successfully!");

 
 cartItems.push(data);
 

 console.log("addToCart "+data);
  updateCart();
  saveCartItems(); // Save cart items to localStorage
}

function updateCart() {
  var cartItemsList = document.getElementById("cart-items");
  cartItemsList.innerHTML = "";
  var total = 0;
  
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
        productPrice.textContent = "$" + data.price + ".00";
          detailsContainer.appendChild(productPrice);
        total = total + data.price;
        console.log("total: "+total);
          var removeButton = document.createElement("button");
          removeButton.innerHTML = "Remove";
          removeButton.addEventListener("click", function () {
            removeFromCart(index);
          });
        document.getElementById("cart-total").innerHTML = "Total: $" + total + ".00";
          detailsContainer.appendChild(removeButton);

          listItem.appendChild(detailsContainer);
          cartItemsList.appendChild(listItem);
        });
   })(i);
   
   
  }
  if (cartItems.length == 0)
  {
      document.getElementById("cart-total").innerHTML = "Cart is Empty!";

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
var alertQueue = []; // Queue to store the alert messages

function showAlert(message) {
  alertQueue.push(message); // Add the message to the queue

  if (!document.getElementById("alert").classList.contains("show")) {
    displayNextAlert();
  }
}

function displayNextAlert() {
  var alertElement = document.getElementById("alert");
  var alertMessage = document.getElementById("alert-message");

  if (alertQueue.length > 0) {
    var message = alertQueue.shift(); // Get the next message from the queue

    alertMessage.textContent = message;
    alertElement.classList.add("show");

    setTimeout(function() {
      alertElement.classList.remove("show");
      alertElement.classList.add("hide");

      setTimeout(function() {
        alertElement.classList.remove("hide");
        displayNextAlert(); // Display the next alert in the queue
      }, 300); // Delay before showing the next alert
    }, 3000); // Time for each alert to be displayed
  }
}

/* Searchbar */



const searchArea = document.getElementById("search-area");
const searchInput = document.querySelector(".search-input");
const searchButton = document.querySelector(".search-button");
const searchResults = document.querySelector(".search-results");

searchButton.addEventListener("click", function() {
  const query = searchInput.value.trim();
  searchProducts(query);
});

function searchProducts(query) 
{
flag = false;
  fetch("https://dummyjson.com/products/search?q=" + query)
    .then(response => response.json())
    .then(data => {
      searchResults.innerHTML = ""; // Clear previous search results

      if (isObjectWithData(data)) {
        searchArea.style.height = "100vh";
        
        Object.values(data).forEach(product1 => {
          Object.values(product1).forEach(product => { 
            console.log("p:"+product)
          var html = `<div class="product" onclick="redirectToProductDetails(%productId%)" data-aos="fade-up" data-aos-duration="1500">
      <img src="%src%" alt="Product 1">
      <div class="product-info">
        <h3 class="product-brand">%category%</h3>
        <h2 class="product-name">%title%</h2>
        <p class="product-description">%description%</p>
        <div class="product-price" >
          <span class="discount-percentage">%discount%% OFF</span>
          <span class="price-old">$%price%</span>
          <span class="price-new">$%newPrice%</span>
        </div>
        <button class="add-to-cart">Add to Cart</button>
      </div>
    </div>`
        newHtml = html.replace('%src%', product.images[0]);
        newHtml = newHtml.replace('%productId%',product.id);
          newHtml =  newHtml.replace('%category%',product.category);
          newHtml = newHtml.replace('%brand%', product.brand);
          newHtml = newHtml.replace('%title%',product.title);
        newHtml = newHtml.replace('%price%', product.price);
        newHtml = newHtml.replace('%discount%', product.discountPercentage);
        newHtml = newHtml.replace('%product%', product.id);
        newHtml = newHtml.replace('%newPrice%', product.price - (product.price * product.discountPercentage / 100));
          newHtml = newHtml.replace('%description%', product.description);
            searchResults.insertAdjacentHTML('beforeend', newHtml);
            flags = true;
          })
        });
      } 
      if (flag) {
        console.log("in if");
            searchResults.insertAdjacentHTML('beforeend', "<p>No results found.</p>");
      }
    })
    .catch(error => {
      console.error("Error:", error);
      searchResults.innerHTML = "<p>An error occurred while fetching the search results.</p>";
    });
}

function isObjectWithData(obj) {
  return typeof obj === "object" && obj !== null && Object.keys(obj).length > 0;
}
function hideSearchBar() {
  const searchArea = document.getElementById("search-area");
  searchArea.style.display = "none";
}
function showSearchBar() {
  const searchArea = document.getElementById("search-area");
  searchArea.style.display = "block";
}
function Change(){  //show menu toggler for mobile
    

    console.log("clicked");
    
    document.querySelector('.mobile__nav').classList.add('show__nav');
    document.querySelector('.body__move').classList.add('abc');
}
  function Change1(){  //hide menu toggler for mobile
    
    document.querySelector('.mobile__nav').classList.remove('show__nav');
    document.querySelector('.body__move').classList.remove('abc');
}
  