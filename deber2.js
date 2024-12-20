// const app=document.getElementById("typewriter");

// const typewriter= new Typewriter(app, {
//     loop:true,
//     delay:100,
// });
// const type = new Typewriter(app, {
//     loop: true,
//     delay: 75,
//   });
// type
// .typeString("Roulez avec de l'experience")
// .pauseFor(2000)
// .deleteAll()
// .start();

// console.log("hey");
const app = document.getElementById("title");
const app2=document.getElementById("titre2");

const typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
});

typewriter
  .typeString("Roulez avec de l'expérience")
  .pauseFor(2000)
  .deleteAll()
  .start();


  const typewriter2 = new Typewriter(app2,{
  loop:true,
  delay:100,


  })

  typewriter2
  .typeString("Location de voiture simplifiée !")
  .pauseFor(2000)
  .deleteAll()
  .start();

  startTypewriterLoop();