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



var boxChat = document.querySelector(".boxChat");
var imgBoxChat = document.getElementById("imgBoxChat");
var fullchat = document.querySelector(".fullchat");
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

imgBoxChat.onclick = function () {
    fullchat.style.display = "block";
    imgBoxChat.style.display = "none";
  };
  
  var MiniMaze = document.getElementById("MiniMaze");
  MiniMaze.onclick = function () {
    fullchat.style.display = "none";
    imgBoxChat.style.display = "block";
  };



// Start date

// let date = document.getElementById("date");
// let date1 = new Date()
// let theYear = date1.getFullYear()
// date.innerHTML = theYear.innerHTML =
// 'Made With &#x2764; By <span>Mohamed Roshdy </span>2021-' +theYear + ' &copy;';

// End date


/* Start chat */
let continerBoxAlert = document.querySelector(".continerBoxAlert");
let boxAlertH1 = document.getElementById("textOnline");
let checkInternet = document.getElementById("internet");

// Online or Offline

function online() {
  checkInternet.style.backgroundColor = "green";
  continerBoxAlert.classList.remove("continerBoxAlertActive")
  continerBoxAlert.classList.add("continerBoxAlertActive");
  boxAlertH1.innerHTML = "انت متصل حاليا";
  setTimeout(function () {
    continerBoxAlert.style.display = "none";
  }, 2000);
}
function offline() {
  checkInternet.style.backgroundColor = "red";
  continerBoxAlert.classList.add("continerBoxAlertActive");
  boxAlertH1.innerHTML = "انت غير متصل حاليا";
  setTimeout(function () {
      continerBoxAlert.classList.remove("continerBoxAlertActive")
  }, 2000);
}

window.onload = function () {
  if (window.navigator.onLine) {
    checkInternet.style.backgroundColor = "green";
  } else {
    checkInternet.style.backgroundColor = "red";
  }

};

window.addEventListener("online", function () {
  online();
});
window.addEventListener("offline", function () {
  offline();
});
