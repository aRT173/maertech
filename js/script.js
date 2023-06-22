let menuBtn = document.querySelector('.hamburger__menu-btn');
let menuLink = document.querySelectorAll('.hamburger-menu__link');
let menu = document.querySelector('.hamburger__menu');
menuBtn.addEventListener('click', function(){
	menuBtn.classList.toggle('active');
	menu.classList.toggle('active');
})

menuLink.forEach(el => {el.addEventListener('click', function(){
	menuBtn.classList.toggle('active');
	menu.classList.toggle('active');
})});

const header = document.querySelector(".header");
window.addEventListener('scroll', function() {
    if (window.pageYOffset < 60)
    {
    header.style.backgroundColor = `rgba(0,0,0,${(window.pageYOffset/100)})`;
    header.style.borderBottom = `0.1px solid rgba(255,255,255, ${0.6-(window.pageYOffset/100)})`;
}
  });
  if (window.pageYOffset > 60)
    {
    header.style.backgroundColor = `rgba(0,0,0,0.4)`;
    header.style.borderBottom = `0.1px solid rgba(255,255,255, 0.4)`;
}





  const techBtns = document.querySelectorAll(".technologie-item__btn");
techBtns.forEach(el => {
el.addEventListener("click", () => {
  if (el.innerHTML == "Свернуть")
  {el.innerHTML = "Подробнее";
  el.parentElement.querySelector(".technologie-item__icon").style.display = "block";
  el.parentElement.querySelector(".technologie-item__list").style.display = "block";
  el.parentElement.querySelector(".technologie-item__more").style.display = "none";



}
  else if (el.innerHTML == "Подробнее")
  {el.innerHTML = "Свернуть";
  el.parentElement.querySelector(".technologie-item__icon").style.display = "none";
  el.parentElement.querySelector(".technologie-item__list").style.display = "none";
  el.parentElement.querySelector(".technologie-item__more").style.display = "block";

}
  
})});

const allProjectBtn = document.querySelector(".projects__btn")
allProjectBtn.addEventListener("click", ()=> {
  const projects = document.querySelectorAll(".project");
  projects.forEach(el => {
    if (el.className === "project project_disabled js-open-modal")
    {el.className = "project";
    allProjectBtn.style.display = "none";
  }
  })
})