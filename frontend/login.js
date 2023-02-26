
const wrapper = document.querySelector('.wrapper');
const signUpLink = document.querySelector('.signUp-link');
const signInLink = document.querySelector('.signIn-link');
//forms
let form1 = document.getElementById("form1");
let form2 = document.getElementById("form2")
//signup inputs
let s_name = document.getElementById("name1");
let s_email = document.getElementById("email1");
let s_pass = document.getElementById("pass1");

//signin inputs
let l_email = document.getElementById("email2");
let l_pass = document.getElementById("pass2")


//form animation(rotate)
signUpLink.addEventListener('click', () => {

  wrapper.classList.add('animate-signIn');
  wrapper.classList.remove('animate-signUp');
});

signInLink.addEventListener('click', () => {
  wrapper.classList.add('animate-signUp');
  wrapper.classList.remove('animate-signIn');
});

//sign-up

form1.addEventListener("submit", (e) => {
  e.preventDefault()
  let payload = {
    name: s_name.value,
    email: s_email.value,
    pass: s_pass.value
  }
  fetch("https://rich-teal-beetle-cape.cyclic.app/user/register", {
    method: "POST",
    headers: {
      "Content-type": "application/json"
    },
    body: JSON.stringify(payload)
  }).then(res => res.json())
    .then((res) => {
      if (res.msg === "email is alredy presend in database") {
        swal("Invalid !", "email alredy exist", "warning");
      } else {
        wrapper.classList.add('animate-signUp');
        wrapper.classList.remove('animate-signIn');
      }
      console.log(res)
    })
    .catch(err => console.log(err))


  // if (obj.password !== obj.cpassword) {
  //   swal("Oops!", "Password mismatch", "error");
  //  // alert("Password Mismatch")
  // } else {
  //   let LSdata = JSON.parse(localStorage.getItem("account-data"))
  //   if (LSdata == null) {
  //     LSdata = []

  //   }
  //   LSdata.push(obj)
  //   localStorage.setItem("account-data", JSON.stringify(LSdata))

  //   wrapper.classList.add('animate-signUp');
  //   wrapper.classList.remove('animate-signIn');
  // }


})

//sign-in
// let LSdata = JSON.parse(localStorage.getItem("account-data"))

form2.addEventListener("submit", (e) => {
  e.preventDefault();
  let payload = {
    email: l_email.value,
    pass: l_pass.value
  }
  fetch("https://rich-teal-beetle-cape.cyclic.app/user/login", {
    method: "POST",
    headers: {
      "Content-type": "application/json"
    },
    body: JSON.stringify(payload)
  }).then(res => res.json())
    .then(res => {
      if(res.msg==="Login successful"){
        localStorage.setItem("token", res.token)
        console.log(res)
        swal("Good job!", "Lognin succesful", "success");
        setTimeout(() => {
          window.open("home.html");
        }, 1000)
      }else if(res.msg==="wrong credentials"){
        swal("Invalid !", "email & password did not match", "warning");
      }
      
    })
    .catch(err => console.log(err))




  // LSdata.forEach((element, index) => {
  //   if (form2.email2.value == element.email) {
  //     if (form2.pass2.value == element.password) {
  //       //let btn = document.getElementById("btn")
  //       //btn.style.display = "inline"
  //      swal("Good job!", "Lognin succesful", "success");
  //       setTimeout(() => {
  //         //window.open("/Home page/Index.html")
  //         window.location.href = "/Home page/Index.html";
  //       }, 1000)

  //     }
  //     else {
  //       swal("Invalid !", "email & password did not match", "warning");
  //       //alert("email & password did not match")
  //     }
  //   } else {
  //     swal("Invalid !", "email & password did not match", "warning");
  //     //alert("email & password did not match")
  //   }
  // })
})

// eyeicons work
let eyeIcons = document.querySelectorAll(".fa-eye-slash")
eyeIcons.forEach(eyeIcon => {
  eyeIcon.addEventListener("click", () => {
    const pInput = eyeIcon.parentElement.querySelector("input")
    if (pInput.type === "password") {
      eyeIcon.classList.replace("fa-eye-slash", "fa-eye")
      return pInput.type = "text"
    }
    eyeIcon.classList.replace("fa-eye", "fa-eye-slash")
    pInput.type = "password"
  })
})



