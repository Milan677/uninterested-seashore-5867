let shoppingData = JSON.parse(localStorage.getItem("CartData")) || [];
let productCards = document.querySelector(".productCards");
let clothesTotalPrize = document.querySelector("#clothesTotalPrize");
const totalPrizeShow = document.querySelector("#totalPrizeShow");



//...........click to return cart page
let cartpage = document.querySelector(".return-btn");

cartpage.addEventListener("click", function (event) {
  event.preventDefault()
  location.href = "cart.html";
})

//.............click to go credit card page...........
let forBtn = document.querySelector("form");

forBtn.addEventListener("submit", (e) => {
  e.preventDefault();
  const countryInfo = document.querySelector("#countrySelect");
  const firstName = document.querySelector("#firstName");
  const lastName = document.querySelector("#lastName");
  const company = document.querySelector("#company");
  const address = document.querySelector("#address");
  const city = document.querySelector("#city");
  const pincode = document.querySelector("#pincode");
  const phone = document.querySelector("#phone");

  location.href = "credit.html";
});

//............click viw more to return back to product page............

let view_more_btn=document.querySelector(".viewmore")

view_more_btn.addEventListener("click",()=>{
   location.href="product.html"
})