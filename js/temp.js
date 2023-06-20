
async function loadProducts(){
    // console.log("isnide function");
    // const response = await fetch("https://api.escuelajs.co/api/v1/products/8");
    //         const data = await response.json();
    //         console.log(data);
   
    console.log("no data");
    for(i=8;i<=200;i++)
    {
            var html,newHtml;
            const response = await fetch("https://api.escuelajs.co/api/v1/products/"+i);
            const data = await response.json();
            console.log(data);


             html = '<div class="pro"><img id="imgUrl'+i+'" src="%src%" alt=""><div class="des"><span>%category%</span><h5>%brand%</h5><div class="star"><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i></div><h4>$%price%.00</h4></div><a href="#"><i class="fa fa-shopping-cart cart" style="font-size: 1.2rem;"></i></a></div>'
            newHtml = html.replace('%src%',data.images[0]);
            newHtml =  newHtml.replace('%category%',data.category.name);
            newHtml = newHtml.replace('%brand%',data.title);
            newHtml = newHtml.replace('%price%',data.price);
            document.querySelector('.pro-container').insertAdjacentHTML('beforeend',newHtml);
    }
    
    

}
loadProducts();
async function changeImage(param){
    
    document.querySelector('#MainImg').src = param.src;
   
    };

    // function changeBg(param)
    // {
    //     var x = param.src;
    //     console.log(x);
    //     const myArray = x.split("1.jpg");
    //     const p = myArray[0].split("/");
    //     console.log(p[6]);
    //     var url = myArray[0]+"2.jpg"
        
    //     document.querySelector('#imgUrl'+p[6]).src = url;
    // }
    // function changeBack(param)
    // {
        
    //     var x = param.src;
    //     console.log(x);
    //     const myArray = x.split("2.jpg");
    //     const p = myArray[0].split("/");
    //     console.log(p[6]);
    //     var url = myArray[0]+"1.jpg";
    //     console.log(url);
        
    //     document.querySelector('#imgUrl'+p[6]).src = url;
    // }