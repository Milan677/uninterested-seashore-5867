
const showdata = () => {
    fetch("http://localhost:4500/furniture", {
        headers: {
            "Content-type": "application/json",
            Authorization: localStorage.getItem("token"),
        },
    })
        .then((res) => res.json())
        .then((res) => {
            displaydata(res);
            // console.log(res);
        })
        .catch((err) => console.log(err));
};

showdata();

function displaydata(data) {
    let main = document.getElementById("right");
    main.innerHTML = null;
    data.forEach((element) => {
        //   console.log(element);
        main.innerHTML += `
        <div class="card">
          <div class="face front">
            <div>
              <img src="${element.image}" alt="">
            </div><br>
            <div>
              <h4 style="color:rgb(210, 0, 0)">Sales Starts at INR <span>${element.price}</span></h4>
            </div>
          </div>
          <div class="face back">
            <div>
              <img src="${element.image}" alt="">
            </div>
            <div>
              <div>
                <h3>Price: <span class="price">${element.price}</span></h3>
                <h3>Flat 25% off</h3>
              </div><br>
              <h3>
                <i style="color:orangered;" class="fa-solid fa-star"></i>
                <i style="color:orangered;" class="fa-solid fa-star"></i>
                <i style="color:orangered;" class="fa-solid fa-star"></i>
                <i style="color:orangered;" class="fa-solid fa-star"></i>
                <i style="color:orangered;" class="fa-solid fa-star-half-stroke"></i>
                <span class="rating">${element.rating}</span>
              </h3>
              <p style="font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;">${element.description}</p><br>
              <button class="card-backside-btn">Add to cart <i class="fa-solid fa-cart-plus"></i></button>
            </div>
          </div>
        </div>
      `;
    });
}



//....fetching living room data........
const living = () => {
    fetch("http://localhost:4500/furniture/living", {
        headers: {
            "Content-type": "application/json",
            Authorization: localStorage.getItem("token"),
        },
    })
        .then((res) => res.json())
        .then((res) => {
            displaylivingroomdata(res);
            // console.log(res);
        })
        .catch((err) => console.log(err));
}

function displaylivingroomdata(data) {
    let main = document.getElementById("right");
    main.innerHTML = null;

    if (!Array.isArray(data)) {
        console.error("Data is not an array");
        return;
    }

    data.forEach((element) => {

      main.innerHTML += `
      <div class="card">
        <div class="face front">
          <div>
            <img src="${element.image}" alt="">
          </div><br>
          <div>
            <h4 style="color:rgb(210, 0, 0)">Sales Starts at INR <span>${element.price}</span></h4>
          </div>
        </div>
        <div class="face back">
          <div>
            <img src="${element.image}" alt="">
          </div>
          <div>
            <div>
              <h3>Price: <span class="price">${element.price}</span></h3>
              <h3>Flat 25% off</h3>
            </div><br>
            <h3>
              <i style="color:orangered;" class="fa-solid fa-star"></i>
              <i style="color:orangered;" class="fa-solid fa-star"></i>
              <i style="color:orangered;" class="fa-solid fa-star"></i>
              <i style="color:orangered;" class="fa-solid fa-star"></i>
              <i style="color:orangered;" class="fa-solid fa-star-half-stroke"></i>
              <span class="rating">${element.rating}</span>
            </h3>
            <p style="font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;">${element.description}</p><br>
            <button class="card-backside-btn">Add to cart <i class="fa-solid fa-cart-plus"></i></button>
          </div>
        </div>
      </div>
    `;
    });
}


//..............fetching dining room furnitures   ............. 

const dining = () => {
    fetch("http://localhost:4500/furniture/dining", {
        headers: {
            "Content-type": "application/json",
            Authorization: localStorage.getItem("token"),
        },
    })
        .then((res) => res.json())
        .then((res) => {
            displaydiningdata(res);
            // console.log(res);
        })
        .catch((err) => console.log(err));
}


function displaydiningdata(data) {
    let main = document.getElementById("right");
    main.innerHTML = null;

    if (!Array.isArray(data)) {
        console.error("Data is not an array");
        return;
    }

    data.forEach((element) => {

      main.innerHTML += `
      <div class="card">
        <div class="face front">
          <div>
            <img src="${element.image}" alt="">
          </div><br>
          <div>
            <h4 style="color:rgb(210, 0, 0)">Sales Starts at INR <span>${element.price}</span></h4>
          </div>
        </div>
        <div class="face back">
          <div>
            <img src="${element.image}" alt="">
          </div>
          <div>
            <div>
              <h3>Price: <span class="price">${element.price}</span></h3>
              <h3>Flat 25% off</h3>
            </div><br>
            <h3>
              <i style="color:orangered;" class="fa-solid fa-star"></i>
              <i style="color:orangered;" class="fa-solid fa-star"></i>
              <i style="color:orangered;" class="fa-solid fa-star"></i>
              <i style="color:orangered;" class="fa-solid fa-star"></i>
              <i style="color:orangered;" class="fa-solid fa-star-half-stroke"></i>
              <span class="rating">${element.rating}</span>
            </h3>
            <p style="font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;">${element.description}</p><br>
            <button class="card-backside-btn">Add to cart <i class="fa-solid fa-cart-plus"></i></button>
          </div>
        </div>
      </div>
    `;
    });
}


//...........bed room furniture................
const bedroom = () => {
    fetch("http://localhost:4500/furniture/bed", {
        headers: {
            "Content-type": "application/json",
            Authorization: localStorage.getItem("token"),
        },
    })
        .then((res) => res.json())
        .then((res) => {
            displaybedroomdata(res);
            console.log(res);
        })
        .catch((err) => console.log(err));
}


function displaybedroomdata(data) {
    let main = document.getElementById("right");
    main.innerHTML = null;

    if (!Array.isArray(data)) {
        console.error("Data is not an array");
        return;
    }

    data.forEach((element) => {

      main.innerHTML += `
      <div class="card">
        <div class="face front">
          <div>
            <img src="${element.image}" alt="">
          </div><br>
          <div>
            <h4 style="color:rgb(210, 0, 0)">Sales Starts at INR <span>${element.price}</span></h4>
          </div>
        </div>
        <div class="face back">
          <div>
            <img src="${element.image}" alt="">
          </div>
          <div>
            <div>
              <h3>Price: <span class="price">${element.price}</span></h3>
              <h3>Flat 25% off</h3>
            </div><br>
            <h3>
              <i style="color:orangered;" class="fa-solid fa-star"></i>
              <i style="color:orangered;" class="fa-solid fa-star"></i>
              <i style="color:orangered;" class="fa-solid fa-star"></i>
              <i style="color:orangered;" class="fa-solid fa-star"></i>
              <i style="color:orangered;" class="fa-solid fa-star-half-stroke"></i>
              <span class="rating">${element.rating}</span>
            </h3>
            <p style="font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;">${element.description}</p><br>
            <button class="card-backside-btn">Add to cart <i class="fa-solid fa-cart-plus"></i></button>
          </div>
        </div>
      </div>
    `;
    });
}

//........fetching bathroom furniture........
const bathroom = () => {
    fetch("http://localhost:4500/furniture/bath", {
        headers: {
            "Content-type": "application/json",
            Authorization: localStorage.getItem("token"),
        },
    })
        .then((res) => res.json())
        .then((res) => {
            displaybathroomdata(res);
            // console.log(res);
        })
        .catch((err) => console.log(err));
}

function displaybathroomdata(data) {
    let main = document.getElementById("right");
    main.innerHTML = null;

    if (!Array.isArray(data)) {
        console.error("Data is not an array");
        return;
    }

    data.forEach((element) => {

      main.innerHTML += `
      <div class="card">
        <div class="face front">
          <div>
            <img src="${element.image}" alt="">
          </div><br>
          <div>
            <h4 style="color:rgb(210, 0, 0)">Sales Starts at INR <span>${element.price}</span></h4>
          </div>
        </div>
        <div class="face back">
          <div>
            <img src="${element.image}" alt="">
          </div>
          <div>
            <div>
              <h3>Price: <span class="price">${element.price}</span></h3>
              <h3>Flat 25% off</h3>
            </div><br>
            <h3>
              <i style="color:orangered;" class="fa-solid fa-star"></i>
              <i style="color:orangered;" class="fa-solid fa-star"></i>
              <i style="color:orangered;" class="fa-solid fa-star"></i>
              <i style="color:orangered;" class="fa-solid fa-star"></i>
              <i style="color:orangered;" class="fa-solid fa-star-half-stroke"></i>
              <span class="rating">${element.rating}</span>
            </h3>
            <p style="font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;">${element.description}</p><br>
            <button class="card-backside-btn">Add to cart <i class="fa-solid fa-cart-plus"></i></button>
          </div>
        </div>
      </div>
    `;
    });
}




//..............search functionality.................
const debounce = (fn, delay) => {
    let timeoutId;
    return (...args) => {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
      timeoutId = setTimeout(() => {
        fn(...args);
      }, delay);
    };
  };
  
  const search = () => {
    let searchbox = document.querySelector(".searchText");
    let payload = {
      key: searchbox.value,
    };
    let url = new URL("http://localhost:4500/furniture/search");
    url.search = new URLSearchParams(payload).toString();
    fetch(url, {
      headers: {
        "Content-type": "application/json",
        Authorization: localStorage.getItem("token"),
      },
    })
      .then((res) => res.json())
      .then((res) => {
        // console.log(res);
        randomSearch(res);
      })
      .catch((err) => console.log(err));
  };

//   const handleKeyDown = (event) => {
//     if (event.key === 'Backspace') {
//       debounce(search, 0);
//     }
//   };
  
//   document.querySelector(".searchText").addEventListener('keydown', handleKeyDown);
  
  const debouncedSearch = debounce(search, 500); // 500ms delay
  
  document.querySelector(".searchText").addEventListener("keyup", () => {
    debouncedSearch();
  });
  
// const search = () => {
//     let searchbox = document.querySelector(".searchText");
//     let payload = {
//         key: searchbox.value,
//     };
//     let url = new URL("http://localhost:4500/furniture/search");
//     url.search = new URLSearchParams(payload).toString();
//     fetch(url, {
//         headers: {
//             "Content-type": "application/json",
//             Authorization: localStorage.getItem("token"),
//         },
//     })
//         .then((res) => res.json())
//         .then((res) => {
//             console.log(res);
//             randomSearch(res)
//         })
//         .catch((err) => console.log(err));
// };

// document.querySelector(".searchText").addEventListener("keyup", () => {
//         search();
//   });

function randomSearch(data) {
    let main = document.getElementById("right");
    main.innerHTML = null;

    if (!Array.isArray(data)) {
        console.error("Data is not an array");
        return;
    }

    data.forEach((element) => {

        main.innerHTML += `
        <div class="card">
          <div class="face front">
            <div>
              <img src="${element.image}" alt="">
            </div><br>
            <div>
              <h4 style="color:rgb(210, 0, 0)">Sales Starts at INR <span>${element.price}</span></h4>
            </div>
          </div>
          <div class="face back">
            <div>
              <img src="${element.image}" alt="">
            </div>
            <div>
              <div>
                <h3>Price: <span class="price">${element.price}</span></h3>
                <h3>Flat 25% off</h3>
              </div><br>
              <h3>
                <i style="color:orangered;" class="fa-solid fa-star"></i>
                <i style="color:orangered;" class="fa-solid fa-star"></i>
                <i style="color:orangered;" class="fa-solid fa-star"></i>
                <i style="color:orangered;" class="fa-solid fa-star"></i>
                <i style="color:orangered;" class="fa-solid fa-star-half-stroke"></i>
                <span class="rating">${element.rating}</span>
              </h3>
              <p style="font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;">${element.description}</p><br>
              <button class="card-backside-btn">Add to cart <i class="fa-solid fa-cart-plus"></i></button>
            </div>
          </div>
        </div>
      `;
    });
}

//..............add to cart...........
let main = document.getElementById("right");
main.addEventListener("click", (event) => {
  if (event.target.classList.contains("card-backside-btn")) {
    // Add to cart button is clicked
    const cardElement = event.target.closest(".card");
    const payload= {
      image: cardElement.querySelector("img").src,
      price: cardElement.querySelector(".card .front h4 span").textContent,
      rating: cardElement.querySelector(".card .back .rating").textContent,
      description: cardElement.querySelector(".card .back p").textContent,
      quantity:"1"
    };
    
    fetch("http://localhost:4500/cart/create",{
      method:"POST",
      headers:{
        "Content-type":"application/json",
        Authorization:localStorage.getItem("token")
      },
      body:JSON.stringify(payload)
    })
    .then(res=>res.json())
    .then((res)=>{
      if(res.msg==="product is alredy added into the cart"){
        swal("Invalid !", "product alredy added ", "warning");
      }else{
        console.log(res)
        swal("Good job!", "product successfully added", "success");
      }
       
    })
    .catch((err)=>console.log(err))
    
  }
});






