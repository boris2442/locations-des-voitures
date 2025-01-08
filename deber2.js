
const app = document.getElementById("title");
const app2=document.getElementById("titre2");

const typewriter = new Typewriter(app, {
  loop: true,
  delay: 50,
});


  const typewriter2 = new Typewriter(app2,{
  loop:true,
  delay:75,


  })

 
function startTypewriterLoop(){

  typewriter
  .typeString("Roulez avec de l'expérience")
  .pauseFor(2000)
  .deleteAll()
  .callFunction(()=>{

    typewriter2
    .typeString("Location de voiture simplifiée !")
    .pauseFor(2000)
    .deleteAll()
    .callFunction(startTypewriterLoop)
    .start();
  })
  .start();
}
startTypewriterLoop();



// partie destinee au scroll reveal

const sr=ScrollReveal({
  duration:1500,
  origin:"top",
  distance:"30px",
  reset:true
})
sr.reveal(".copy, .first-section, .cars, .third-section, .section-fourth, .sixth-section, .fifth-section, .child-footer, .et-a-decouvrir ", {interval:200})



// partie destinee au swiper

const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,
  autoplay:{
    disableOnInteraction: false, 
},
speed:500,
  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
});


const sections=document.querySelectorAll("section");
const links=document.querySelectorAll("header ul li a");

const activeLink = () =>{
sections.forEach(section=>{
  let top=section.offsetTop;
  let height=section.offsetHeight;
  let scrolls=window.scrollY;
  let id=section.getAttribute("id")
  if(scrolls>=top - 400 && scrolls<top + height){
links.forEach(link=>{
  link.classList.remove("active4")

});
let recuperationId=document.querySelector(`header ul li a[href*=${id}`)
recuperationId.classList.add("active4")
  }
})
}

window.addEventListener("scroll",activeLink  );

// partie du code menu burger


const burger=document.querySelector(".menu-b")
burger.addEventListener("click",()=>{

})