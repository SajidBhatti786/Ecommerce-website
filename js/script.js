document.addEventListener('DOMContentLoaded', function() {
  if (window.location.pathname === '/buttonSlider') {
    // Invoke method specific to the cart page
    console.log("widnow button slider")
  }
});

let products1 = [];
    // Function to display the loading message
    function showLoading() {
      document.getElementById('loading').style.display = 'block';
    }

    // Function to hide the loading message
    function hideLoading() {
      document.getElementById('loading').style.display = 'none';
    }

    // Function to display the product data
function showProductData() {
  
      const contentElement = document.getElementById('content');
      contentElement.innerHTML = '';
      // contentElement.classList.add('row');
      var found = false;
  if (Array.isArray(products1)) {
   
    products1.forEach(function (product) {
      console.log("product" + product.title)
      if (1  )
          {
              var html = `<div class="product" data-aos="zoom-out" data-aos-duration="2000">
      <img src="%src%" alt="Product 1" onclick="redirectToProductDetails(%productId%)">
      <div class="product-info">
        <h3 class="product-brand" onclick="redirectToProductDetails(%productId1%)">%category%</h3>
        <h2 class="product-name" onclick="redirectToProductDetails(%productId2%)">%title%</h2>
        <p class="product-description" onclick="redirectToProductDetails(%productId3%)">%description%</p>
        <div class="product-price" onclick="redirectToProductDetails(%productId4%)">
          <span class="discount-percentage">%discount%% OFF</span>
          <span class="price-old">$%price%</span>
          <span class="price-new">$%newPrice%</span>
        </div>
        <button class="add-to-cart"  onclick="addToCart(%data.id%)"">Add to Cart</button>
      </div>
    </div>`
        newHtml = html.replace('%src%', product.image);
        newHtml = newHtml.replace('%data.id%', product.id);
        newHtml = newHtml.replace('%productId%', product.id);
        newHtml = newHtml.replace('%productId1%', product.id);
        newHtml = newHtml.replace('%productId2%', product.id);
        newHtml = newHtml.replace('%productId3%', product.id);
        newHtml = newHtml.replace('%productId4%', product.id);
          newHtml =  newHtml.replace('%category%',product.category);
          newHtml = newHtml.replace('%brand%', product.brand);
          newHtml = newHtml.replace('%title%',product.title);
        newHtml = newHtml.replace('%price%', product.price);
        newHtml = newHtml.replace('%discount%', product.discount);
        newHtml = newHtml.replace('%product%', product.id);
        newHtml = newHtml.replace('%newPrice%', product.price - (product.price * product.discount / 100));
          newHtml = newHtml.replace('%description%', product.description);
            contentElement.insertAdjacentHTML('beforeend', newHtml);
            found = true;
          }
          
        }
        
        );
      } else {
        showError('Invalid data format');
      }
      if (!found) {
        let newHtml = '<h1>Data not found!!</h1>'
        contentElement.insertAdjacentHTML('beforeend', newHtml);
      }
    }

    // Function to display the error message
    function showError(message) {
      const errorElement = document.getElementById('error');
      errorElement.innerHTML = message;
    }

    // Fetch data from the API
    function fetchData() {
      showLoading();

let products = [];

let data = localStorage.getItem("productData");


  
fetch('https://dummyjson.com/products/category/'+data)
.then(res => res.json())
.then(data => {
  
  console.log("Array :"+Array.isArray(data))
  products1 = data.products.map(product => {

   
    return {category: product.category,discount: product.discountPercentage
, image:product.images[0],price:product.price,id:product.id,title:product.title,description:product.description }
  }) 



})
        .then(function(data) {
          hideLoading();
          showProductData(data);
        })
        .catch(function(error) {
          hideLoading();
          showError(error.message);
        });
    }

    // Load the data when the page is ready
document.addEventListener('DOMContentLoaded', function() {
  fetchData().then(function(data) {
    displayData(data);
  });
});

function getValue(val)
{
  localStorage["key"] = 4;
  localStorage.setItem("productData", val);
}
function displayData() {
  
  
  showProductData(data);
  
}

function redirectToProductDetails(productId) {
  // Construct the URL of the next page with the product ID as a parameter
  var url = 'cart.html?productId=' + encodeURIComponent(productId);
  
  // Redirect the user to the next page
  window.location.href = url;
}


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
  // cartItemsList.innerHTML = "";
  var total = 4;
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
 
}

function removeFromCart(index) {
  cartItems.splice(index, 1);
  updateCart();
  saveCartItems(); // Save cart items to localStorage
}

function saveCartItems() {
  localStorage.setItem("cartItems", JSON.stringify(cartItems));
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

function searchProducts(query) {
  fetch("https://dummyjson.com/products/search?q=" + query)
    .then(response => response.json())
    .then(data => {
      searchResults.innerHTML = ""; // Clear previous search results

      if (isObjectWithData(data)) {
        searchArea.style.height = "100vh";

        Object.values(data).forEach(product1 => {
          Object.values(product1).forEach(product => {
            var html = `<div class="product" >
      <img src="%src%" alt="Product 1" onclick="redirectToProductDetails(%productId%)">
      <div class="product-info">
        <h3 class="product-brand" onclick="redirectToProductDetails(%productId1%)">%category%</h3>
        <h2 class="product-name" onclick="redirectToProductDetails(%productId2%)">%title%</h2>
        <p class="product-description" onclick="redirectToProductDetails(%productId3%)">%description%</p>
        <div class="product-price" onclick="redirectToProductDetails(%productId4%)">
          <span class="discount-percentage">%discount%% OFF</span>
          <span class="price-old">$%price%</span>
          <span class="price-new">$%newPrice%</span>
        </div>
        <button class="add-to-cart"  onclick="addToCart(%data.id%)"">Add to Cart</button>
      </div>
    </div>`
        newHtml = html.replace('%src%', product.images[0]);
        newHtml = newHtml.replace('%data.id%', product.id);
        newHtml = newHtml.replace('%productId%', product.id);
        newHtml = newHtml.replace('%productId1%', product.id);
        newHtml = newHtml.replace('%productId2%', product.id);
        newHtml = newHtml.replace('%productId3%', product.id);
        newHtml = newHtml.replace('%productId4%', product.id);
          newHtml =  newHtml.replace('%category%',product.category);
          newHtml = newHtml.replace('%brand%', product.brand);
          newHtml = newHtml.replace('%title%',product.title);
        newHtml = newHtml.replace('%price%', product.price);
        newHtml = newHtml.replace('%discount%', product.discountPercentage);
        newHtml = newHtml.replace('%product%', product.id);
        newHtml = newHtml.replace('%newPrice%', product.price - (product.price * product.discountPercentage / 100));
          newHtml = newHtml.replace('%description%', product.description);
             searchResults.insertAdjacentHTML('beforeend', newHtml);
          });
        });
      } else {
        searchResults.insertAdjacentHTML(
          "beforeend",
          "<p>No results found.</p>"
        );
      }
    })
    .catch(error => {
      console.error("Error:", error);
      searchResults.innerHTML =
        "<p>An error occurred while fetching the search results.</p>";
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

function Change(){
    

    console.log("clicked");
    
    document.querySelector('.mobile__nav').classList.add('show__nav');
    document.querySelector('.body__move').classList.add('abc');
}
  function Change1(){
    
    document.querySelector('.mobile__nav').classList.remove('show__nav');
    document.querySelector('.body__move').classList.remove('abc');
  }
