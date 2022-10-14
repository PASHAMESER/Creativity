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

// بداية كود تقليب صور الصفحة

var i = 0;
var myImges = [
  "./imges/1.jpg",
  "./imges/2.jpg",
  "./imges/3.jpg",
  "./imges/4.jpg",
  "./imges/5.jpg",
  "./imges/6.jpg",
  "./imges/7.jpg",
  "./imges/8.jpg",
  "./imges/9.jpg",
]

var SectionHomePage = document.querySelector(".devHeaderAndSectionHomePage")

var slideShow = function () {
  SectionHomePage.style.backgroundImage = "url("+myImges[i]+")"
  if (i<myImges.length -1) {
    i++
  }else{
    i = 0;
  }
  setTimeout(slideShow , 1000)
}
slideShow()

var boxChat = document.querySelector(".boxChat");
var imgBoxChat = document.getElementById("imgBoxChat");
var fullchat = document.querySelector(".fullchat");
var imgSend = document.getElementById("img-send");
var textarea = document.getElementById("textarea");
var pLeft = document.getElementById("left");
var pRight = document.getElementById("right");
var divPRight = document.querySelector(".divP-right");

imgSend.onclick = function () {
  var psendLeft = document.createElement("P")
    psendLeft.className = "psendLeft"
  divPRight.appendChild(psendLeft)
  psendLeft.innerHTML += textarea.value;
  if (textarea.value == "hey"|| textarea.value == "hi") {
    // pLeft.innerHTML = textarea.value;
    
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
let containerBoxAlert = document.querySelector(".containerBoxAlert");
let boxAlertH1 = document.getElementById("textOnline");
let checkInternet = document.getElementById("internet");

// Online or Offline

function online() {
  checkInternet.style.backgroundColor = "green";
  containerBoxAlert.classList.remove("containerBoxAlertActive")
  containerBoxAlert.classList.add("containerBoxAlertActive");
  boxAlertH1.innerHTML = "انت متصل حاليا";
  setTimeout(function () {
    containerBoxAlert.style.display = "none";
  }, 2000);
}
function offline() {
  checkInternet.style.backgroundColor = "red";
  containerBoxAlert.classList.add("containerBoxAlertActive");
  boxAlertH1.innerHTML = "انت غير متصل حاليا";
  setTimeout(function () {
      containerBoxAlert.classList.remove("containerBoxAlertActive")
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
