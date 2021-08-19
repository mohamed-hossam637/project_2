"use strict";

// shick if local storage have color or no
window.onload=function(){

  document.documentElement.style.setProperty("--main-color",localStorage.getItem("colorPage") || "#e91e63");
}

// set activ class to locale storage
localStorage.setItem("calssActiv","activ");

// get banner element
let banners = document.getElementById("banners")

// set image src in array
let image = ["images/banner1.jpeg","images/banner2.jpeg","images/banner3.jpeg","images/banner4.jpeg"];

// chang banner background image every 10s
setInterval(function(){

    let randomNumber = Math.floor(Math.random() * image.length)
    
   banners.style.backgroundImage="url("+image[randomNumber]+")";
},11000)

//get contaner of shopping cadr
let shoppingCard = document.getElementById("basket")

// get button to open
let shoppingCardButtom = document.getElementById("ico")

// make function to toggle open class to shopping card contanir
shoppingCardButtom.onclick=function(){

    shoppingCard.classList.toggle("open");

    document.getElementById("item").style.display="none";
}

// get contanir has new select item on icon
let bolt = document.getElementById("item")

// get all button select to add shopping card
let buttonAddShoppingCard = document.querySelectorAll(".select")

// get content box 
let contentBox = document.querySelectorAll("#content-box .demo")

// GET CONTENT BOX
let content = document.getElementById("content-box")

// get item has count item
let itemLinght = document.getElementById("itemlenght")

// but nambur on bolit to show new
buttonAddShoppingCard.forEach(Element=>{

    Element.addEventListener("click",()=>{

        // get contanir item count
        let bolt = document.getElementById("item")

        //craet the element that user add it to shopping card
      let elementShoppingCard = document.createElement("div")

      // add class demo to new element
      elementShoppingCard.className="demo";

      //add offer info
      let offerInfo =Element.getAttribute("data-offer")

     // add offer info to new element
     elementShoppingCard.innerHTML=offerInfo;

     //cret icon delet for demo
     let iconDelet = document.createElement("i")

     // add class fa trash to elment delet
     iconDelet.classList.add("fa");

     iconDelet.classList.add("fa-trash");

     iconDelet.id = "delet";

     // add custom attrebut to element
     elementShoppingCard.setAttribute("data-element",offerInfo)

     // add icon to demo element 
     elementShoppingCard.appendChild(iconDelet)

      // add element to content box 
      content.appendChild(elementShoppingCard)

      // get content box 
        let contentBox = document.querySelectorAll("#content-box .demo")

      // get item has count item
        let itemLinght = document.getElementById("itemlenght")

        itemLinght.innerHTML=contentBox.length;

        bolt.innerHTML=contentBox.length;

        bolt.style.display="block";

        //add items to local storage
        localStorage.setItem("offers",elementShoppingCard)

        // shick if user select elemnt much owns 
        if(elementShoppingCard.getAttribute("data-element") === offerInfo){

          console.log("this is same element");
          
        }
     
     
    })
})

//add event click to icon to remove elemnt

document.addEventListener("click",function(e){

    if(e.target.id == "delet"){

        e.target.parentNode.remove();

         // get content box 
         let contentBox = document.querySelectorAll("#content-box .demo")

         // get item has count item
           let itemLinght = document.getElementById("itemlenght")
   
           itemLinght.innerHTML=contentBox.length;

     
    }
})

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

// get element scroll to top
let scrollToTop = document.getElementById("scroll")

// add class open arrow with windo scroll
window.onscroll=function(){
    
    if(this.scrollY > 300){

        scrollToTop.classList.add("open-arrow");
    }else{

        scrollToTop.classList.remove("open-arrow");
    }
}

// add event click to scrollToTop 
scrollToTop.onclick=function(){

    window.scrollTo(0,0)
} 


