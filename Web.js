const hamburger= document.querySelector(".hamburger");
const hiddenContainer= document.querySelector(".hiddenContainer")

hamburger.addEventListener("click",()=>{
    hamburger.classList.toggle("active");
    hiddenContainer.classList.toggle("active");
})
