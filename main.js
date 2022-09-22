/* بداية كود تشيك على قيمة البريد */

let btnLogin = document.getElementById("btn-login");
let btnEmail = document.getElementById("btn-email");
let btnPassword = document.getElementById("btn-password");

btnLogin.addEventListener("click", (e) => {
  if ((btnEmail.value === "admin" && btnPassword.value) === "roshdy") {
    e.preventDefault();
    alert("اتفضل يا باش مهندس");
    window.location.href = "dashboard.html";
  } else {
    alert("ارجع ي حرامى");
  }
});

/* نهاية كود تشيك على قيمة البريد */


let containerDottedLoader = document.querySelector(".container-dotted-loader");
let dottedLoader = document.querySelector(".dotted-loader");

let loading = function () {
  containerDottedLoader.style.display = "flex";
  dottedLoader.style.display = "flex";
  setTimeout(() => {
    dottedLoader.style.display = "none";
    containerDottedLoader.style.display = "none";
  }, 1500);
};

window.onload = loading()

// بداية كود الضغط علي ابدأ

let linkBtnStr =document.getElementById("link-btn-str")

linkBtnStr.addEventListener('click' , ()=>{
  setTimeout(()=>{
    this.location.href = "HTML/login.html"
  },500)
  loading()
})

