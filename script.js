// MENU MOBILE
const menu = document.getElementById("menu");
const navLinks = document.getElementById("navLinks");

menu.onclick = ()=> navLinks.classList.toggle("active");

// MODAL
const modal = document.getElementById("modal");
const modalImg = document.getElementById("modalImg");

document.querySelectorAll(".gallery img").forEach(img=>{
  img.onclick = ()=>{
    modal.style.display="flex";
    modalImg.src = img.src;
  }
});
modal.onclick = ()=> modal.style.display="none";

// SCROLL ANIMATION
const boxes = document.querySelectorAll(".box");
window.addEventListener("scroll", ()=>{
  boxes.forEach(box=>{
    const top = box.getBoundingClientRect().top;
    if(top < window.innerHeight - 100){
      box.classList.add("show");
    }
  });
});