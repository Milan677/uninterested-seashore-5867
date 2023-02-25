const showdata = () => {
    fetch("http://localhost:4500/cart", {
        headers: {
            "Content-type": "application/json",
            Authorization: localStorage.getItem("token")
        }
    })
    .then((res) => res.json())
    .then((res) => {
        displayCartdata(res);
            console.log(res);
            priceUpdate(res)
    })
    .catch((err) => console.log(err));
}

showdata()

function displayCartdata(data){
   let main=document.querySelector(".left")
   main.innerHTML=null
    if (!Array.isArray(data)) {
        console.error("Data is not an array");
        return;
    }

    data.forEach((element) => {
        main.innerHTML+=`
    <div class="card">
        <div class="imgBx">
            <img src=${element.image} alt="">
        </div>
        <div class="content">
             <h2><i class="fa-sharp fa-solid fa-indian-rupee-sign"></i><span>${element.price}</span></h2>
             <h3>
                 <i style="color:orangered;" class="fa-solid fa-star"></i>
                     <i style="color:orangered;" class="fa-solid fa-star"></i>
                     <i style="color:orangered;" class="fa-solid fa-star"></i>
                     <i style="color:orangered;" class="fa-solid fa-star"></i>
                     <i style="color:orangered;" class="fa-solid fa-star-half-stroke"></i>
                     <span>${element.rating}</span>
             </h3>
             <p>${element.description}</p>
             <br>
             <div class="dltRow">
                 <div class="quantity">
                     <button class="inc">+</button>
                     <h3 id="q">${element.quantity}</h3>
                     <button  class="dec">-</button>
                 </div>
                 <div class="deleteBtn">
                     <button class="deleteButton">Delete</button>
                 </div>
             </div> 
        </div>
    </div>`
    })

}

//............delete card by clicking delete button............
let main = document.querySelector(".left");
main.addEventListener("click", (event) => {
  if (event.target.classList.contains("deleteButton")) {
   
    const cardElement = event.target.closest(".card");
    const payload= {
      description: cardElement.querySelector(".card p").textContent,
    };
    
    fetch("http://localhost:4500/cart/delete",{
      method:"DELETE",
      headers:{
        "Content-type":"application/json",
        Authorization:localStorage.getItem("token")
      },
      body:JSON.stringify(payload)
    })
    .then(res=>res.json())
    .then((res)=>{
      console.log(res)
       displayupdatedCartdata(res)
       priceUpdate(res)
    })
    .catch((err)=>console.log(err))
    
  }
});

function  displayupdatedCartdata(data){
    let main=document.querySelector(".left")
   main.innerHTML=null
    if (!Array.isArray(data)) {
        console.error("Data is not an array");
        return;
    }

    data.forEach((element) => {
        main.innerHTML+=`
    <div class="card">
        <div class="imgBx">
            <img src=${element.image} alt="">
        </div>
        <div class="content">
             <h2><i class="fa-sharp fa-solid fa-indian-rupee-sign"></i><span>${element.price}</span></h2>
             <h3>
                 <i style="color:orangered;" class="fa-solid fa-star"></i>
                     <i style="color:orangered;" class="fa-solid fa-star"></i>
                     <i style="color:orangered;" class="fa-solid fa-star"></i>
                     <i style="color:orangered;" class="fa-solid fa-star"></i>
                     <i style="color:orangered;" class="fa-solid fa-star-half-stroke"></i>
                     <span>${element.rating}</span>
             </h3>
             <p>${element.description}</p>
             <br>
             <div class="dltRow">
                 <div class="quantity">
                     <button class="inc">+</button>
                     <h3 id="q">${element.quantity}</h3>
                     <button class="dec">-</button>
                 </div>
                 <div class="deleteBtn">
                     <button class="deleteButton">Delete</button>
                 </div>
             </div> 
        </div>
    </div>`
    })

}

//.............price updated.............


function priceUpdate(data){
    let price=document.querySelector("#Price")
    let quantity=document.querySelector("#quantity")
    let total=document.querySelector("#totalPrice")
    // let quantityElem = document.querySelector('#q').textContent;
    if (!Array.isArray(data)) {
        console.error("Data is not an array");
        return;
    }
     
    var cartPrice=0;
   
    data.forEach((element)=>{
        let quantityElem = document.querySelector('#q').textContent;
         cartPrice=cartPrice+ (element.price*quantityElem)

    })

    quantity.innerHTML=data.length

    price.innerText=Math.floor(cartPrice)
    console.log(price.innerText)
    total.innerText= Math.floor(cartPrice-((cartPrice*25)/100))

    //....second part........

    let main1 = document.querySelector(".left");
  main1.addEventListener("click", (event) => {
             
    let cardElement = event.target.closest(".card");
    let card_quantity_text = cardElement.querySelector(".card .quantity h3");
    let itemPrice = cardElement.querySelector(".card .content h2 span").innerText;
    
    let cartPrice = parseFloat(price.innerText);
    let cartTotalPrice = parseFloat(total.innerText);
    
    if (event.target.classList.contains("inc")) {
        card_quantity_text.innerText++;
        cartPrice += parseFloat(itemPrice);
        cartTotalPrice = Math.floor(cartPrice - ((cartPrice * 25) / 100));
    } else if (event.target.classList.contains("dec")) {
        if (card_quantity_text.innerText < 2) {
            card_quantity_text.innerText=1
            return
            
        }else{
            card_quantity_text.innerText--;
            cartPrice -= parseFloat(itemPrice);
            cartTotalPrice = Math.floor(cartPrice - ((cartPrice * 25) / 100));
        }
    }
    
    price.innerText = Math.floor(cartPrice);
    total.innerText =  Math.floor(cartTotalPrice)
    

});

}





// function priceUpdate(data){
//     let price=document.querySelector("#Price")
//     let quantity=document.querySelector("#quantity")
//     let total=document.querySelector("#totalPrice")
//     // let quantityElem = document.querySelector('#q').textContent;
//     if (!Array.isArray(data)) {
//         console.error("Data is not an array");
//         return;
//     }
     
//     var cartPrice=0;
   
//     data.forEach((element)=>{
//         let quantityElem = document.querySelector('#q').textContent;
//          cartPrice=cartPrice+ (element.price*quantityElem)

//     })

//     quantity.innerHTML=data.length
//     let num3=cartPrice
//     var commas3 = num3.toString().split(".")[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
//     let num4= cartPrice-((cartPrice*25)/100)
//     var commas4 = num4.toString().split(".")[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
//     price.innerText=commas3 
//     console.log(price.innerText)
//     total.innerText= commas4

//     //....second part........

//     let main1 = document.querySelector(".left");
//   main1.addEventListener("click", (event) => {
             
//     let cardElement = event.target.closest(".card");
//     let card_quantity_text = cardElement.querySelector(".card .quantity h3");
//     let itemPrice = cardElement.querySelector(".card .content h2 span").innerText;
    
//     let cartPrice = parseFloat(price.innerText);
//     let cartTotalPrice = parseFloat(total.innerText);
    
//     if (event.target.classList.contains("inc")) {
//         card_quantity_text.innerText++;
//         cartPrice += parseFloat(itemPrice);
//         cartTotalPrice = Math.floor(cartPrice - ((cartPrice * 25) / 100));
//     } else if (event.target.classList.contains("dec")) {
//         if (card_quantity_text.innerText < 2) {
//             card_quantity_text.innerText=1
//             return
            
//         }else{
//             card_quantity_text.innerText--;
//             cartPrice -= parseFloat(itemPrice);
//             cartTotalPrice = Math.floor(cartPrice - ((cartPrice * 25) / 100));
//         }
//     }

 
   
//     var num1=cartPrice;
//     var commas = num1.toString().split(".")[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
   
//     var num2=cartTotalPrice;
//     var commas2 = num2.toString().split(".")[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    
//     price.innerText = commas
//     total.innerText =  commas2
    

// });

// }

// // var num = 1234567.89; var commas = num.toLocaleString ("en-US");


