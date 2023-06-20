
//  fetch('https://dummyjson.com/products')
//  .then(res => res.json())
//  .then(json => console.log(json))
fetch('https://dummyjson.com/products/categories')
.then(res => res.json())
.then(console.log);
async function loadNames() {
  
  // fetch('https://dummyjson.com/products')
  // .then(res => res.json())
  // .then(json => console.log(json))
  // fetch('https://dummyjson.com/products')
  // .then(res => res.json())
  // .then(json => console.log(json))
  // console.log("othy");
    for(i=1;i<=50;i++)
    {
      console.log("inside for");
        fetch('https://dummyjson.com/products/1')
  .then(res => res.json())
  .then(json => console.log(json))

    
    const response = await fetch("https://dummyjson.com/products/"+i);
    const data = await response.json();
    
    var element = document.querySelector('.iphone');
    var newHTML;
    html =  '<div id="main"><img id="image" src="%src%" alt=""><div class="sale__button"><span class="sale__text">Sale</span></div><i class="fa fa-eye myIcon" style="font-size:2rem"></i><i class="fa fa-shopping-cart myIcon myIcon1" style="font-size:2rem"></i><div id="category" ><strong class="txt">Category:  </strong><span class="txt">%category%</span></div><div id="rating"><strong class="txt">Rating:  </strong><span class="txt">%rating%</span></div><div id="price"><strong class="txt">Price:   </strong><span class="txt">%price%</div></span></div>';
    console.log(data.images[4]);
    newHTML = html.replace('%src%',data.images[4]);
    newHTML = newHTML.replace('%category%',data.category);
    newHTML = newHTML.replace('%rating%',data.rating.rate+"("+data.rating.count+")");
    newHTML = newHTML.replace('%price%',data.price);

    document.querySelector('.iphone').insertAdjacentHTML('beforeend',newHTML);
    }
    for(i=51;i<=100;i++)
    {
        

     
    const response = await fetch("https://dummyjson.com/products/"+i);
    const data = await response.json();
    
    var element = document.querySelector('.iphone');
    var newHTML;
    html =  '<div id="main"><img id="image" src="%src%" alt=""><div class="sale__button"><span class="sale__text">Sale</span></div><i class="fa fa-eye myIcon" style="font-size:2rem"></i><i class="fa fa-shopping-cart myIcon myIcon1" style="font-size:2rem"></i><div id="category" ><strong class="txt">Category:  </strong><span class="txt">%category%</span></div><div id="rating"><strong class="txt">Rating:  </strong><span class="txt">%rating%</span></div><div id="price"><strong class="txt">Price:   </strong><span class="txt">%price%</div></span></div>';

    newHTML = html.replace('%src%',data.images[0]);
    newHTML = newHTML.replace('%category%',data.category);
    newHTML = newHTML.replace('%rating%',data.rating.rate+"("+data.rating.count+")");
    newHTML = newHTML.replace('%price%',data.price);

    document.querySelector('.iphone').insertAdjacentHTML('beforeend',newHTML);
    }
    console.log("loop over");
    
  }
  async function loadNames1() {
    
  }
  loadNames();
  
      function display()
      {
        document.querySelector('.product__submenu').classList.add('yz');
      }
      function hide()
      {
        document.querySelector('.product__submenu').classList.remove('yz');
      }

      
    
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


  
 
  


  
 
  
//nav toggler  
// const collapsibles = document.querySelectorAll(".collapsible");
// collapsibles.forEach((item) =>
//   item.addEventListener("click", function () {
//     this.classList.toggle("collapsible--expanded");
//   })
// );

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


  // fetch('https://jsonplaceholder.typicode.com/posts/1/photos')
  // .then(response => response.json())
  // .then(json => console.log(json))