

let deviconColor = document.querySelector(".deviconColor")
let devitmeColor = document.querySelector(".devitmeColor")

// devitmeColor.remove()
deviconColor.addEventListener('click' , ()=>{
    // devitmeColor.classList.add("devitmeColor")
    devitmeColor.classList.toggle("devitmeColor")
})

let color1 = document.getElementById("color1")
let color2 = document.getElementById("color2")
let color3 = document.getElementById("color3")

let containerNav = document.querySelector(".containerNav")
let rightcontrolcontainer = document.querySelector(".rightcontrolcontainer")
let ContainerPage = document.querySelector(".ContainerPage")
let boxAreport = document.querySelector(".boxAreport")
let boxone = document.querySelector(".boxone")
let boxtow = document.querySelector(".boxtow")
let viweAll = document.querySelector("#viweAll")
let devbgIcon = document.querySelectorAll(".devbg-icon")
let forBox = document.querySelectorAll(".box")

color1.onclick = ()=>{
}

color2.onclick = ()=>{
    forBox.forEach(itme => {
        itme.classList.add("activecontinerdevboxse")
        devbgIcon.forEach(itmeIcon =>{
            itmeIcon.classList.add("activecontinerdevicon")
        })
    });
    ContainerPage.classList.add("activecontiner")
    boxAreport.classList.add("activecontinerdevboxse")
    boxone.classList.add("activecontinerStar")
    boxtow.classList.add("activecontinerdevboxse")
    containerNav.classList.add("activecontinerdevboxse")
    rightcontrolcontainer.classList.add("activecontinerdevboxse")
    viweAll.classList.add("activecontinerdevBtn")
    
    
}