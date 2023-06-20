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
      contentElement.classList.add('row');
      var found = false;
  if (Array.isArray(products1)) {
   
    products1.forEach(function (product) {
      console.log("product" + product.title)
      if (1  )
          {
              var html = `<div class="product-card " onclick="redirectToProductDetails('%product%')"><div class="product-image"><img src="%src%"></div><div class="product-info"><h3>%title%</h3><h4>$%price%.00</h4></div></div>`
          newHtml = html.replace('%src%',product.image);
          newHtml =  newHtml.replace('%category%',product.category);
          newHtml = newHtml.replace('%brand%', product.brand);
          newHtml = newHtml.replace('%title%',product.title);
        newHtml = newHtml.replace('%price%', product.price);
        newHtml = newHtml.replace('%product%', product.id);
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
        let newHtml = '<h1>Data no found!!</h1>'
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
fetch('https://dummyjson.com/products/search?q='+data)
.then(res => res.json())
.then(console.log);
  
      fetch('https://dummyjson.com/products/search?q=' + data)
.then(res => res.json())
.then(data => {
  
  console.log("Array :"+Array.isArray(data))
  products1 = data.products.map(product => {

   
    return {category: product.category, image:product.images[0],price:product.price,id:product.id,title:product.title,description:product.description }
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
