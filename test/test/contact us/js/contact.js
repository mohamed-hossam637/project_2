// shick if local storage have color or no
window.onload=function(){

    document.documentElement.style.setProperty("--main-color",localStorage.getItem("colorPage") || "#e91e63");
}
// get gear icon
let gearIconContanir = document.getElementById("gearIcon")

//get icon
let icon =document.getElementById("gear")

//get setting page contanir
let settingPageContanir = document.getElementById("setting")

//get color contaner
let color = document.querySelectorAll(".colors li")

// toggle class open2 on settingPageContanir
gearIcon.onclick=function(){

  settingPageContanir.classList.toggle("open2");

  icon.classList.toggle("fa-spin");
}

// loop on all li
color.forEach(li=>{
  li.addEventListener("click",function(e){
   
    //set color on root
    document.documentElement.style.setProperty("--main-color",e.target.dataset.color);

    // set color on local storage
    localStorage.setItem("colorPage",e.target.dataset.color);

    //remove activ clas  from all childrin
    e.target.parentElement.querySelectorAll(".activ").forEach(ele =>{

      ele.classList.remove("activ");
      
    })

    // add class activ on target
    e.target.classList.add("activ");

  })
  if(li.getAttribute("data-color") === localStorage.getItem("colorPage")){

    li.classList.add(localStorage.getItem("calssActiv"))
  }

})