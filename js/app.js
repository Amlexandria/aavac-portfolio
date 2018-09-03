'use strict';

let aboutTemplate = `
<section class="about row">
         <div class="about-1 offset-l1 col l5 m5 s12">
             <h1 class="col l12 a-1">A<span>bout me</span></h1>
             <h5 class="col l12">I'm a front-end developer and a graphic designer based in gdl</h5>
             <p class="col l12">I enjoy looking for and mixing different elements to turn ideas into creative and beautiful designs. When I'm not desingin or programing,  you'll find me singing, creating music, working in social projects, or taking the sun somwhere.</p>
         </div>
     </section>
     <section class="parts row">
         <div class="offset-l1 col l3 m3 s12">
             <h5 class="col l12">Part Designer</h5>
             <p class="col l12">Thinking<br>Searching<br>Music<br>Pencil, eraser, paper, google...<br>Photoshop<br>Illustrator<br>InDesign<br>Dancing on my chair </p>
         </div>
         <div class="col s12 m4 l4">
             <img class="grafica" src="assets/images/grafica.png" alt="grafica">
         </div>
         <div class="offset-l1 offset-m1 col l3 m3 s12">
             <h5 class="col l12">Part Developer</h5>
             <p class="col l12">Analysis<br>Agile<br>JavaScript<br>Documentation<br>Html5<br>CSS3<br>InDesign<br>Dancing on my chair </p> 
         </div>
     </section>
     <section class="facts row">
         <div class="offset-l1 col l5 m5 s12">
             <h5 class="col l12">Random facts</h5>
             <p class="col l12">I smile a lot.<br>i love eat papaya, green juice and broccoli with mayonnaise.<br>I love interior design<br>I like to dance with the songs of the credits of the movies<br>I love huaraches.<br>The sing of the birds is the most beautiful thin of the world<br></p>
         </div>
     </section>
        `;
const app = new Vue ({
    el: '#vue',
    // template: `
    // <div>    
    // <section class="about row">
    //         <div class="about-1 offset-l1 col l5 m5 s12">
    //             <h1 class="col l12 a-1">A<span>bout me</span></h1>
    //             <h5 class="col l12">I'm a front-end developer and a graphic designer based in gdl</h5>
    //             <p class="col l12">I enjoy looking for and mixing different elements to turn ideas into creative and beautiful designs. When I'm not desingin or programing,  you'll find me singing, creating music, working in social projects, or taking the sun somwhere.</p>
    //         </div>
    //     </section>
    //     <section class="parts row">
    //         <div class="offset-l1 col l3 m3 s12">
    //             <h5 class="col l12">Part Designer</h5>
    //             <p class="col l12">Thinking<br>Searching<br>Music<br>Pencil, eraser, paper, google...<br>Photoshop<br>Illustrator<br>InDesign<br>Dancing on my chair </p>
    //         </div>
    //         <div class="col s12 m4 l4">
    //             <img class="grafica" src="assets/images/grafica.png" alt="grafica">
    //         </div>
    //         <div class="offset-l1 offset-m1 col l3 m3 s12">
    //             <h5 class="col l12">Part Developer</h5>
    //             <p class="col l12">Analysis<br>Agile<br>JavaScript<br>Documentation<br>Html5<br>CSS3<br>InDesign<br>Dancing on my chair </p> 
    //         </div>
    //     </section>
    //     <section class="facts row">
    //         <div class="offset-l1 col l5 m5 s12">
    //             <h5 class="col l12">Random facts</h5>
    //             <p class="col l12">I smile a lot.<br>i love eat papaya, green juice and broccoli with mayonnaise.<br>I love interior design<br>I like to dance with the songs of the credits of the movies<br>I love huaraches.<br>The sing of the birds is the most beautiful thin of the world<br></p>
    //         </div>
    //     </section>
    // </div>
    // `,
    
    
})

function printingAbout (){
    $("#section-about").append(aboutTemplate);
}