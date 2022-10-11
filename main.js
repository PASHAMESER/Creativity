




let containerDottedLoader = document.querySelector(".container-dotted-loader");
let dottedLoader = document.querySelector(".dotted-loader");

let loading = function () {
  containerDottedLoader.style.display = "flex";
  dottedLoader.style.display = "flex";
  setTimeout(() => {
    dottedLoader.style.display = "none";
    containerDottedLoader.style.display = "none";
  }, 1000);
};

window.onload = loading()


let linkBtnStr =document.getElementById("link-btn-str")

linkBtnStr.addEventListener('click' , ()=>{
  setTimeout(()=>{
    this.location.href = "HTML/login.html"
  },500)
  loading()
})


/* Start chat */

var boxChat = document.querySelector(".boxChat");
var imgBoxChat = document.getElementById("imgBoxChat");
var fullchat = document.querySelector(".fullchat");
imgBoxChat.onclick = function () {
  fullchat.style.display = "block";
  imgBoxChat.style.display = "none";
};

var MiniMaze = document.getElementById("MiniMaze");
MiniMaze.onclick = function () {
  fullchat.style.display = "none";
  imgBoxChat.style.display = "block";
};

var imgSend = document.getElementById("img-send");
var textarea = document.getElementById("textarea");
var pLeft = document.getElementById("left");
var pRight = document.getElementById("right");

imgSend.onclick = function () {
  if (textarea.value == "hey") {
    pLeft.innerHTML = textarea.value;
    pLeft.style.padding = "5px";
    setTimeout(() => {

      pRight.innerHTML =
        "I'm fine. I hope you are fine. Thank you for contacting us";

      pRight.style.padding = "5px";
      textarea.value = "";
    }, 1000);
  }
};

/* End chat */

// Start date

// let date = document.getElementById("date");
// let date1 = new Date()
// let theYear = date1.getFullYear()
// date.innerHTML = theYear.innerHTML =
// 'Made With &#x2764; By <span>Mohamed Roshdy </span>2021-' +theYear + ' &copy;';

// End date

let continerBoxAlert = document.querySelector(".continerBoxAlert")
let boxAlertH1 = document.getElementById("textOnline")

window.onload = function () {
  if (window.navigator.online) {
    online();
  } else {
    offline();
  }

  /* Start Chet */

  boxChat.classList.add("continerBoxAlertActive")

  /* Start Chet */

};

window.addEventListener("online", function(){
  online()
});
window.addEventListener("offline", function (){
  offline()
  continerBoxAlert.style.display = "none"
});

let checkInternet = document.getElementById("internet");

function online() {
  checkInternet.style.backgroundColor = "green";
  // continerBoxAlert.classList.remove("continerBoxAlertActive")
  continerBoxAlert.classList.add("continerBoxAlertActive")
    setTimeout(function() {
      continerBoxAlert.style.display = "none"
    },1000)
}
function offline() {
    checkInternet.style.backgroundColor = "red";
    continerBoxAlert.classList.add("continerBoxAlertActive")
    boxAlertH1.innerHTML = "انت غير متصل حاليا"
    setTimeout(function () {
      continerBoxAlert.classList.remove("continerBoxAlertActive")
    },2000)
}




