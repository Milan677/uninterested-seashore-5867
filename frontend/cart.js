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
     
    let cartPrice=0;
   
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
    // let card_quantity_text=document.querySelector("#q")
     if (event.target.classList.contains("inc")) {  
         var cardElement = event.target.closest(".card");
         var card_quantity_text= cardElement.querySelector(".card .quantity h3")
        card_quantity_text.innerText++ 
     }

  if(event.target.classList.contains("dec")){
    const cardElement = event.target.closest(".card");
    let card_quantity_text= cardElement.querySelector(".card .quantity h3")
    if(card_quantity_text.innerText<2){
        card_quantity_text.innerText=2
    }
    card_quantity_text.innerText--
  }
});







}


//.......quantity increment and decrement.....
// let main1 = document.querySelector(".left");
// main1.addEventListener("click", (event) => {
//     // let card_quantity_text=document.querySelector("#q")
//   if (event.target.classList.contains("inc")) {
   
//     const cardElement = event.target.closest(".card");
//     let card_quantity_text= cardElement.querySelector(".card .quantity h3")

//     card_quantity_text.innerText++ 
//   }

//   if(event.target.classList.contains("dec")){
//     const cardElement = event.target.closest(".card");
//     let card_quantity_text= cardElement.querySelector(".card .quantity h3")
//     if(card_quantity_text.innerText<2){
//         card_quantity_text.innerText=2
//     }
//     card_quantity_text.innerText--
//   }
// });


