




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


let linkBtnStr =document.getElementById("link-btn-str")

linkBtnStr.addEventListener('click' , ()=>{
  setTimeout(()=>{
    this.location.href = "HTML/login.html"
  },500)
  loading()
})





