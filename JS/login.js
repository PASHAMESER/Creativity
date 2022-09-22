
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
