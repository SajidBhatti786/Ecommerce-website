
/* Testing purpose start */
fetch('https://dummyjson.com/products/categories')
.then(res => res.json())
.then(console.log);
/* Testing purpose end */









// *********************************************************
//  *********************Products Page**************************
// *********************************************************
function abc()
{
  setTimeout(loadNames, 2000);
  
  
}
let products = [];
let products1 = [];

fetch('https://dummyjson.com/products?limit=100')
.then(res => res.json())
.then(console.log);
  
fetch('https://dummyjson.com/products?limit=100')
.then(res => res.json())
.then(data => {
  
  console.log("Array :"+Array.isArray(data))
  products1 = data.products.map(product => {

   
    return {category: product.category, image:product.images[0],price:product.price,id:product.id,title:product.title,description:product.description }
  }) 



})
console.log("products are here "+products1);



 const searchInput = document.querySelector("[data-search]")
 
  fetch('https://api.escuelajs.co/api/v1/products')
  .then(res => res.json())
  .then(data => {
  
    products = data.map(product => {

      
      
      return {category: product.category.name, image:product.images[0],price:product.price,id:product.id,title:product.title,description:product.description }
    }) 


  })
 

  
// adding catorgy name to header

async function loadNames() {
  var name=localStorage.getItem("firstname");
  console.log("Wel Come and name is: "+name);

  if(name.includes("shoes"))
  {
    document.querySelector('.header').textContent = "FOOT WEAR";
    console.log("Shoes section")

  }
  else if(name.includes('sunglasses'))
  {
    document.querySelector('.header').textContent = "SUN GLASSES";
    console.log("Shoes section")

  }
  else if(name.includes('tops'))
  {
    document.querySelector('.header').textContent = "TOPS";
    console.log("Shoes section")

  }
  else if(name.includes('bags'))
  {
    document.querySelector('.header').textContent = "BAGS";
    console.log("Shoes section")

  }
  else if(name.includes('jewellery'))
  {
    document.querySelector('.header').textContent = "JEWELLORY";
    console.log("Shoes section")

  }
  else if(name.includes('fragrances'))
  {
    document.querySelector('.header').textContent = "FRAGRANCES";
    console.log("Shoes section")

  }
  else if(name.includes('others-womens-watches-mens-watches-lighting-home-decoration'))
  {
    document.querySelector('.header').textContent = "ELECTRONICS & HOME DECORATION";
    console.log("Shoes section")

  }
  
  
  
  console.log("Wel Come");
  // for(i=8;i<=200;i++)
  // {
    // console.log("products1 "+products1);
    // products1.forEach(product =>{

    //     console.log("product is:: "+product);
    // })
    // console.log(products1);
  //   products.forEach(product =>{

    // const response = await fetch("https://api.escuelajs.co/api/v1/products/"+i);
    // const data = await response.json();
    // console.log(data);

  //         var html,newHtml;
  //         console.log("Inside products");
  //         product.category = product.category.toLowerCase();
  //         var x = name.includes(product.category)
  //         console.log("x is: "+x+" category is: "+product.category);
  //         if(x)
  //         {

  //         console.log("inside iffffffffffffffffffffffffffffffff");
  //          html = '<a href="cart.html" onclick=getId('+product.id+')><div class="pro"><img id="imgUrl'+product.id+'" src="%src%" alt=""><div class="des"><span>%category%</span><h5>%brand%</h5><div class="star"><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i></div><h4>$%price%.00</h4></div><a href="#"><i class="fa fa-shopping-cart cart" style="font-size: 1.2rem;"></i></a></div></a>'
  //         newHtml = html.replace('%src%',product.image);
  //         newHtml =  newHtml.replace('%category%',product.category);
  //         newHtml = newHtml.replace('%brand%',product.title);
  //         newHtml = newHtml.replace('%price%',product.price);
  //         document.querySelector('.pro-container').insertAdjacentHTML('beforeend',newHtml);
  //         }
  // })

  /*  ********************************************************************
   **************** inserting product in page **************************
  ************************************************************************
  */
  var found=false;
  console.log("Bright elements"+products1)
  console.log("Product ONE"+products1)
  products1.forEach(product =>{

    console.log("product 1 is: uuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuu"+product);

    // const response = await fetch("https://api.escuelajs.co/api/v1/products/"+i);
    // const data = await response.json();
    // console.log(data);
          var html,newHtml;
          console.log("x is: "+x)
          var x = name.includes(product.category)
          console.log(x)
          
          console.log("BARA X IS is: "+x+" and product cat is: "+product.category);
          if(x)
          {
            
          console.log("product:"+product);
           html = '<a href="cart.html" onclick=getId('+product.id+')><div class="pro"><img id="imgUrl'+product.id+'" src="%src%" alt=""><div class="des"><span>%category%</span><h5>%brand%</h5><div class="star"><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i></div><h4>$%price%.00</h4></div><a href="#"><i class="fa fa-shopping-cart cart" style="font-size: 1.2rem;"></i></a></div></a>'
          newHtml = html.replace('%src%',product.image);
          newHtml =  newHtml.replace('%category%',product.category);
          newHtml = newHtml.replace('%brand%',product.title);
          newHtml = newHtml.replace('%price%',product.price);
          document.querySelector('.pro-container').insertAdjacentHTML('beforeend',newHtml);
          found = true;
          }
          
          
  })
  
  }

  

  
  

      function display()
      {
        document.querySelector('.product__submenu').classList.add('yz');
      }
      function hide()
      {
        document.querySelector('.product__submenu').classList.remove('yz');
      }

    var x=0;
    async function showSearchBar()
    {
      
      document.querySelector('.search-container').style.display = 'block';
      document.querySelector('.search-container').classList.add('showSearchbar');
     x++;
    }
    function hideSearchBar()
    {
      
      const container = document.querySelector('.products__show');
      removeAllChildNodes(container);
      document.querySelector('.search-container').classList.remove('showSearchbar');
      document.querySelector('.search-container').classList.remove('search__active');

      document.getElementById('input').value = "";
      document.getElementById('input').placeholder='Search for Products';
      document.querySelector('.search__bar').classList.remove('search__active');
      x--;
      // document.querySelector('.search-container').style.display = 'none';

    }
    
   

  
  function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}


//  searchInput.addEventListener("input",e => {
//   var value = e.target.value;
  
//    //e.firstElementChild can be used.
//    var child = e.lastElementChild;
   
//    const container = document.querySelector('.products__show');
//    removeAllChildNodes(container);
     
//   products.forEach(product => {
    
    
//     console.log("inside for each");
   
    
//     if(value==="")
//     {
//       document.querySelector('.search-container').classList.add('showSearchbar');

//       document.querySelector('.search-container').classList.remove('search__active');
//     }
//     else if(value!=null || value!="" )
//     {
     
//       document.querySelector('.search-container').classList.add('search__active');
//       document.querySelector('.search-container').classList.remove('showSearchbar');


//       var e = document.querySelector(".products__show");
        
     
     
      
      
//      console.log(product);

//       value = value.toLowerCase();
//       product_category = product.category;
//       product_category = product_category.toLowerCase();

//       if(product_category.includes(value))
//       {
        
//         console.log("inside mere walafuncion")
//         var element = document.querySelector('.products__show');
//         var newHTML;
//         // html =  '<div id="main" class="main1" href="cart.html" onclick="cart(%pid%)"><a href="cart.html" ><p style="display:none class="pid"></p><img id="image" src="%src%" alt="" ><div class="sale__button"><span class="sale__text">Sale</span></div><i class="fa fa-eye myIcon" style="font-size:2rem"></i><i class="fa fa-shopping-cart myIcon myIcon1" style="font-size:2rem"></i><div id="category" ><strong class="txt">Category:  </strong><span class="txt">%category%</span></div><div id="rating"><strong class="txt">Rating:  </strong><span class="txt">%rating%</span></div><div id="price"><strong class="txt">Price:   </strong><span class="txt">%price%</div></span> </a></div>';
//         html = '<a href="cart.html" onclick=getId('+product.id+')><div class="pro"><img id="imgUrl'+product.id+'" src="%src%" alt=""><div class="des"><span>%category%</span><h5>%brand%</h5><div class="star"><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i></div><h4>$%price%.00</h4></div><a href="#"><i class="fa fa-shopping-cart cart" style="font-size: 1.2rem;"></i></a></div></a>'

//         newHTML = html.replace('%src%',product.image);
//         newHTML = newHTML.replace('%pid%',product.id);
//         newHTML = newHTML.replace('%category%',product.category);
//         newHTML = newHTML.replace('%rating%',product.rating+"("+product.count+")");
//         newHTML = newHTML.replace('%price%',product.price);
    
//         document.querySelector('.products__show').insertAdjacentHTML('beforeend',newHTML);
//       }
      
//     }
    
//     else
//     {
//       console.log("else");
      
      
//     }
   
//   }) //yaha tak
//   products1.forEach(product => {
    
    
//     console.log("inside for each");
   
    
//     if(value==="")
//     {
      
//       document.querySelector('.search__bar').classList.remove('search__active');
//     }
//     else if(value!=null || value!="" )
//     {
     
//       document.querySelector('.search__bar').classList.add('search__active');

//       var e = document.querySelector(".products__show");
        
     
     
      
      
//      console.log(product);

//       value = value.toLowerCase();
//       product_category = product.category;
//       product_category = product_category.toLowerCase();

//       if(product_category.includes(value))
//       {
        
        
//         var element = document.querySelector('.products__show');
//         var newHTML;
//         html = '<a href="cart.html" onclick=getId('+product.id+')><div class="pro"><img id="imgUrl'+product.id+'" src="%src%" alt=""><div class="des"><span>%category%</span><h5>%brand%</h5><div class="star"><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i></div><h4>$%price%.00</h4></div><a href="#"><i class="fa fa-shopping-cart cart" style="font-size: 1.2rem;"></i></a></div></a>'
    
//         newHtml = html.replace('%src%',product.image);
//         newHtml =  newHtml.replace('%category%',product.category);
//         newHtml = newHtml.replace('%brand%',product.title);
//         newHtml = newHtml.replace('%price%',product.price);
        
    
//         document.querySelector('.products__show').insertAdjacentHTML('beforeend',newHtml);
//       }
      
//     }
    
//     else
//     {
//       console.log("else");
      
      
//     }
   
//   }) //yaha tak

//  }) //there it is


 

  // async function showProducts(value)
  // {
  //   console.log("inside show");
  //   for( i=1;i<=4;i++)
  //     {
  //       const response =  await fetch("https://fakestoreapi.com/products/"+i);
  //        const data =  await response.json();
  //        var element = document.querySelector('.products__show');
  //        var newHTML;
  //        if(data.category.includes(value))
  //        {
        
  //     html =  '<div id="main"><img id="image" src="%src%" alt=""><div class="sale__button"><span class="sale__text">Sale</span></div><i class="fa fa-eye myIcon" style="font-size:2rem"></i><i class="fa fa-shopping-cart myIcon myIcon1" style="font-size:2rem"></i><div id="category" ><strong class="txt">Category:  </strong><span class="txt">%category%</span></div><div id="rating"><strong class="txt">Rating:  </strong><span class="txt">%rating%</span></div><div id="price"><strong class="txt">Price:   </strong><span class="txt">%price%</div></span></div>';

  //     newHTML = html.replace('%src%',data.image);
  //     newHTML = newHTML.replace('%category%',data.category);
  //     newHTML = newHTML.replace('%rating%',data.rating.rate+"("+data.rating.count+")");
  //     newHTML = newHTML.replace('%price%',data.price);

  //     document.querySelector('.products__show').insertAdjacentHTML('beforeend',newHTML);
  //        }
  //        else
  //        {
  //         console.log("no match");
  //        }
  //     }

  // }
//   fetch("https://fakestoreapi.com/products/"+i)
 
//   .then((res) => res.json())
//   .then((json) => document.getElementById("image").src = json.image);

//   fetch("https://fakestoreapi.com/products/1")
 
//   .then((res) => res.json())
//   .then((json) => document.getElementById("category").innerHTML = json.category);

//   fetch("https://fakestoreapi.com/products/1")
 
//   .then((res) => res.json())
//   .then((json) => document.getElementById("rating").innerHTML ="Rating: " + json.rating.rate+ "("+json.rating.count+")");

//   fetch("https://fakestoreapi.com/products/1")
 
//   .then((res) => res.json())
//   .then((json) => document.getElementById("price").innerHTML ="price: " + json.price);


  
 
  


  
 
  


/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
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




// *********************************************************
//  *********************Cart Page**************************
// *********************************************************

async function loadProducts(){
     console.log(data);
 
  console.log("no data");
  for(i=8;i<=200;i++)
  {
    console.log("inside this loop")
          var html,newHtml;
          const response = await fetch("https://api.escuelajs.co/api/v1/products/"+i);
          const data = await response.json();
         


           html = '<a href=cart.html"><div class="pro" onclick=getProductDesc('+i+')>< <img id="imgUrl'+i+'" src="%src%" alt=""><div class="des"><span>%category%</span><h5>%brand%</h5><div class="star"><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i></div><h4>$%price%.00</h4></div><a href="#"><i class="fa fa-shopping-cart cart" style="font-size: 1.2rem;"></i></a></div></a>';
          newHtml = html.replace('%src%',data.images[0]);
          newHtml = newHtml.replace('%id%',data.id)
          newHtml =  newHtml.replace('%category%',data.category.name);
          newHtml = newHtml.replace('%brand%',data.title);
          newHtml = newHtml.replace('%price%',data.price);
          document.querySelector('.pro-container').insertAdjacentHTML('beforeend',newHtml);
  }
  
  

}
// loadProducts();
async function changeImage(param){
  
  document.querySelector('#MainImg').src = param.src;
 };

//  cart
function showCart()
{
  var element = document.querySelector('.shopping-cart')
  console.log("show cart");
  document.querySelector('.shopping-cart').classList.toggle('show__cart');
  var saved = localStorage.getItem('wishlistItems');
  console.log(saved);
  document.querySelector('.shopping-cart').innerHTML = saved;

  // for (let i = 0; i < nodes.length; i++) {
  //   var name=localStorage.getItem("nodes"+[i]+"");
  //  console.log(name);
  // }
  

}
function hideCart()
{
  console.log("hide cart");
  document.querySelector('.shopping-cart').classList.remove('show__cart');
}
function addToCart()
{


  var p = document.querySelector('.value').value;
  var saved = localStorage.getItem('wishlistItems');
  console.log(saved);
  document.querySelector('.shopping-cart').innerHTML = saved;
  
  var html,newHtml;
  console.log("add to cart");
  var name=localStorage.getItem("pid");
  console.log(products1[name-1]);
  var element = document.querySelector('.shopping-cart');
   html = '<div class="pro" onclick="cart(2)"><img src="%image%" alt=""><div class="des"><span>%brand%</span><h5>%title%</h5><div class="star"><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i></div><h4>$%price%.00</h4><h4 class="totalPrice"><strong>Total: </strong>$%total%.00</h4></div></div>';
  newHtml = html.replace('%image%',products1[name-1].image);
  newHtml = newHtml.replace('%brand%',products1[name-1].category);
  newHtml = newHtml.replace('%title%',products1[name-1].title);
  newHtml = newHtml.replace('%price%',products1[name-1].price);
  newHtml = newHtml.replace('%total%',products1[name-1].price * p);


  nodes = [];
  element.insertAdjacentHTML('beforeend',newHtml);
  var nodes = document.querySelector('.shopping-cart');
  console.log(nodes.innerHTML);
  localStorage.setItem('wishlistItems', nodes.innerHTML);
 
 
 

}


  
let overlay = document.getElementById("overlay");
function showOverlay() {
  overlay.style.zindex = 1;
  overlay.style.opacity = 0.3;
}

function hideOverlay() {
  overlay.style.zindex = -1;
  overlay.style.opacity = 0;
}


// *********************************************************
//  *********************Index Page**************************
// *********************************************************


let slideIndex = 0;


function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 2000); // Change image every 2 seconds
}

function getValue(val)
{
  localStorage["key"] = 4;
  localStorage.setItem("firstname", val);
}

function getId(id)
{
  console.log(id);
  localStorage.setItem("pid", id);
  localStorage.setItem("category", cat);
  console.log("description taken");
  
}

async function setCart()
{
  console.log("Wel Come");
  var name=localStorage.getItem("pid");
 
  console.log("name is: "+name);
  console.log("Wel Come");
 
          var html,newHtml;
          // const response = await fetch("https://api.escuelajs.co/api/v1/products/"+name);
          const response = await fetch("https://dummyjson.com/products/"+name);
          const data = await response.json();
         console.log(data);

          
          html = '<div class="single-pro-image"><img src="%mainImage%" width="100%" id="MainImg" alt=""><div class="small-img-group"><div class="small-img-col"><img src="%small1%" alt="" width="100%" class="small-img" onclick="changeImage(this)"></div><div class="small-img-col"><img src="%small2%" alt="" width="100%" class="small-img" onclick="changeImage(this)"></div><div class="small-img-col"><img src="%small3%" alt="" width="100%" class="small-img" onclick="changeImage(this)"></div><div class="small-img-col"><img src="%small4%" alt="" width="100%" class="small-img" onclick="changeImage(this)"></div></div></div><div class="single-pro-detials"><h6>Home / T-shirts</h6><h5>%title%</h5><h2>$%price%.00</h2><select ><option>Select Size</option><option>XL</option><option>XXL</option><option>small</option><option>large</option></select><input type="number" value="1" min="1" class="value"><button onclick="addToCart(this.div)">Add To Cart</button><h4>Product Details</h4><span>%des%</span></div>'
          newHtml = html.replace('%mainImage%',data.images[0]);
          newHtml = newHtml.replace('%small1%',data.images[0]);
          newHtml = newHtml.replace('%small2%',data.images[1]);
          newHtml = newHtml.replace('%small3%',data.images[2]);
          newHtml = newHtml.replace('%small4%',data.images[3]);
          newHtml = newHtml.replace('%title%',data.title);
          newHtml = newHtml.replace('%price%',data.price);
          newHtml = newHtml.replace('%des%',data.description);

          
          document.querySelector('#prodetails').insertAdjacentHTML('beforeend',newHtml);
 

}

function myFunction()
{
  console.log("myFuncton called");
}

function showed()
{
  // e.preventDefault(); // prevent default behavior
  document.querySelector('.navigation').classList.toggle('nav--active');
  let x  = document.querySelector('.body__move');
  console.log(x);
  x.classList.toggle('no-scroll');
  // document.querySelector('.navigation').style.zindex = '99999999999';
}

/***************************************************
 * ********************* Testing cart ***************
 * ***************************************************
*/

function addToCart()
{
  console.log("Wel Come");
  var quantity = document.querySelector('.value').value;
  console.log("value is:"+quantity)
  var name=localStorage.getItem("pid");
  console.log("abc is : "+abc.value);
  fetch('https://dummyjson.com/carts/1', {
  method: 'PUT', /* or PATCH */
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    merge: true, // this will include existing products in the cart
    products: [
      {
        id: name,
        quantity: quantity,
      },
    ]
  })
})
.then(res => res.json())
.then(console.log);

}