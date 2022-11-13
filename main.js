// HAMBURGER TASTY

function onClickMenu(){
    document.querySelector(".menu").classList.toggle("change")
    document.querySelector(".nav").classList.toggle("change")
    document.querySelector(".menu-box").classList.toggle("change-menu-box")
    
    // This plays a sound upon clicking Hamburger Menu
    var obj = document.querySelector("#sound1")
    obj.volume = 0.03;
    obj.play();
    
    // Toggles the body of the meny to move from right to left of screen
    document.querySelector(".nav").classList.toggle("change-nav")
}

function onHoverMenu(){
    document.querySelector(".nav");
    var obj2 = document.querySelector("#sound2");
    // Node cloned to allow for repeated sounds to overlap when hovering over menu-options fast, very satisfying!
    var newobj2 = obj2.cloneNode()
    newobj2.volume = 0.03;
    newobj2.play();
}

// Initiating ScrollTrigger
gsap.registerPlugin(ScrollTrigger)

// Homepage animation
const homeTl = gsap.timeline({
    defaults: {
        duration: 1
    }
})
// Brings homepage element in FROM the right of the screen + fading in
homeTl.from(".woman1", { x: '80%', duration: 2, delay: 2, ease: "power4.out"})
homeTl.from(".woman2", { x: '80%', duration: 2, ease: "power4.out"}, '-=2')
homeTl.from(".background", { scale: 1.1, duration: 3, ease: "power4.out"}, '-=1.5')

homeTl.from(".logo", { y: 50, opacity: 0}, "-=2.6")
homeTl.from(".heading", { y: 100, opacity: 0}, "-=2.4")
homeTl.from(".heading2", { y: 100, opacity: 0}, "-=2.4")
homeTl.from(".first-time", { y: 100, opacity: 0}, "-=2.2")

// IMAGE MOUSE PARALLAX (Couldn't make work sadly, need to watch better tutorial)
// document.addEventListener("mousemove", parallax);
// function parallax(e){
//     this.querySelectorAll('.layer').forEach(layer => {
//         const speed = layer.getAttribute('data-speed')

//         const x = (window.innerWidth - e.pageX*speed)
//         const y = (window.innerHeight - e.pageY*speed)

//         layer.style.transform = 'translateX(${x}px) translateY(${y}px)'
//     })
// }

// About section animation (SECTION2)
// FOR ALL FADING IN TEXT
gsap.from('.fade-in1', {
    scrollTrigger: {
        trigger: '.fade-in1',
        markers: false,
        start: "center bottom",
    },
    
    duration: 1,
    opacity: 0,
    y: 50,
    ease: "expo-out",
})
gsap.from('.fade-in2', {
    scrollTrigger: {
        trigger: '.fade-in2',
        markers: false,
        start: "center bottom",
    },
    
    duration: 1,
    opacity: 0,
    y: 50,
    ease: "expo-out",
})
gsap.from('.fade-in3', {
    scrollTrigger: {
        trigger: '.fade-in3',
        markers: false,
        start: "center bottom",
    },
    
    duration: 1,
    opacity: 0,
    y: 50,
    ease: "expo-out",
})
gsap.from('.fade-in4', {
    scrollTrigger: {
        trigger: '.fade-in4',
        markers: false,
        start: "center bottom",
    },
    
    duration: 1,
    opacity: 0,
    y: 50,
    ease: "expo-out",
})
gsap.from('.fade-in5', {
    scrollTrigger: {
        trigger: '.fade-in5',
        markers: false,
        start: "center bottom",
    },
    
    duration: 1,
    opacity: 0,
    y: 50,
    ease: "expo-out",
})

// BUTTONS for WALLS

let btnWHALE = document.querySelector(".button1");
let btnSUN = document.querySelector(".button2");
let btnPEARL = document.querySelector(".button3");
let btnCOMP = document.querySelector(".button4");

const imageWHALE = document.querySelector(".image1");
const imageSUN = document.querySelector(".image2");
const imagePEARL = document.querySelector(".image3");
const imageCOMP = document.querySelector(".image4");

let chngHeading = document.querySelector("#chngHeading");

let info = document.querySelector(".description");

btnWHALE.addEventListener('click', function(){
        imageWHALE.style.backgroundColor = '#FF945E';
        imageSUN.style.backgroundColor = '#ededed';
        imagePEARL.style.backgroundColor = '#ededed';
        imageCOMP.style.backgroundColor = '#ededed';

        chngHeading.innerHTML = "WHALE"
        info.innerHTML = "The front of the whale tail will be Portside's most overhung piece of real estate maxing out at 68° degrees. The sides and back of this freestanding piece of climbing goodness will include vertical and slab climbing to make this magnificent island truly versatile.";
    });
btnSUN.addEventListener('click', function(){
        imageWHALE.style.backgroundColor = '#ededed';
        imageSUN.style.backgroundColor = '#FF945E';
        imagePEARL.style.backgroundColor = '#ededed';
        imageCOMP.style.backgroundColor = '#ededed';

        chngHeading.innerHTML = "SUN"
        info.innerHTML = "The sunray wall includes a large section of slightly angled wall ranging from 10° overhung to 5° slab. You’ll find some nice techy climbs with dynamic problems peppered in to keep you on your toes.";
    });
btnPEARL.addEventListener('click', function(){
        imageWHALE.style.backgroundColor = '#ededed';
        imageSUN.style.backgroundColor = '#ededed';
        imagePEARL.style.backgroundColor = '#FF945E';
        imageCOMP.style.backgroundColor = '#ededed';
        
        chngHeading.innerHTML = "PEARL"
        info.innerHTML = "The pearl is a rounded feature sitting between two vertical walls and offers a unique climbing experience as you go from overhung to vertical and then slab sections. Expect to get a solid pump on this little gem.";
    });
btnCOMP.addEventListener('click', function(){
        imageWHALE.style.backgroundColor = '#ededed';
        imageSUN.style.backgroundColor = '#ededed';
        imagePEARL.style.backgroundColor = '#ededed';
        imageCOMP.style.backgroundColor = '#FF945E';
        
        chngHeading.innerHTML = "COMP"
        info.innerHTML = "The name says it all! Get ready for 18 linear meters of competition wall goodness. With the central feature standing in at a cool 30° this wall will be your best friend and worst enemy at the same time.";
    });

// GALLERY - SWIPER
const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    autoplay: true,
    delay: 5000,

    effect: "cube",
    grabCursor: true,
    cubeEffect: {
        shadow: true,
        slideShadows: true,
        shadowOffset: 20,
        shadowScale: 0.94,},
  
    // Pagination
    pagination: {
      el: '.swiper-pagination',
    },
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  });

//   SECTION 4 ANIM for SVG
const handTl = gsap.timeline({
    defaults: {
        duration: 2,
        ease: "Sine.easeInOut",
    },
    repeat: -1,
    
})
const cardTl = gsap.timeline({
    defaults: {
        duration: 1,
        ease: "Power1.easeInOut",
    },
    repeat: -1,
})
const logoTl = gsap.timeline({
    defaults: {
        duration: 1,
        ease: "Power1.easeInOut",
    },
    repeat: -1,
})

handTl.to("#hand", { y: 20}, "-=0")
.to("#hand", { y: 0}, "-=0")
handTl.to("#thumb", { y: 20}, "-=4")
.to("#thumb", { y: 0}, "-=2")

cardTl.to("#card", { y: 20}, "-=0")
.to("#card", { y: 0}, "-=0")

logoTl.to("#card-logo", { y: 17}, "-=0")
.to("#card-logo", { y: 0}, "-=0")

// SECTION 5
// CONFETTI by Fred Schott from https://css-tricks.com/write-code-get-confetti/
let btnCONTACT = document.querySelector(".btncontact");

btnCONTACT.addEventListener('click', function(){
    confetti({
        particleCount: 150,
        startVelocity: 20,
        spread: 360,
      });
    btnCONTACT.innerHTML = "jameskang99@outlook.com";
});