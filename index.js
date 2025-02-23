const searchBtn = document.querySelector(".search");
const searchTab = document.querySelector("#searchTab");
const searchCancel = document.querySelector("#searchCancel");

searchBtn.addEventListener("click", () => {
    gsap.to(searchTab, { 
        duration: 0.5, 
        opacity: 1, 
        scale: 1, 
        display: "flex", 
        ease: "power2.out" 
    });
});

searchCancel.addEventListener("click", () => {
    gsap.to(searchTab, { 
        duration: 0.5, 
        opacity: 0, 
        scale: 0.8, 
        display: "none", 
        ease: "power2.in" 
    });
});

const earthBtn = document.querySelector(".earthbtn");
const earthPanel = document.querySelector("#earth");
const saveBtn = document.querySelector(".save");

earthBtn.addEventListener("click", () => {
    gsap.to(earthPanel, { 
        duration: 0.5, 
        opacity: 1, 
        y: 10, 
        display: "flex", 
        ease: "power2.out" 
    });
});

saveBtn.addEventListener("click", () => {
    gsap.to(earthPanel, { 
        duration: 0.5, 
        opacity: 0, 
        y: -10, 
        display: "none", 
        ease: "power2.in" 
    });
});

const menuBtn = document.querySelector(".menubtn");
const menuNav = document.querySelector("#nav");
const menuCancel = document.querySelector("#menuCancel");

menuBtn.addEventListener("click", () => {
    gsap.to(menuNav, { 
        duration: 0.5, 
        right: 0, 
        ease: "power2.out",
        display: 'flex',
    });
});

menuCancel.addEventListener("click", () => {
    gsap.to(menuNav, { 
        duration: 0.5, 
        right: "-350px", 
        ease: "power2.in",
        // display: 'none', 
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const cardContainer = document.querySelector(".cardContainer");
    const leftArrow = document.getElementById("leftArrow");
    const rightArrow = document.getElementById("rightArrow");

    const scrollAmount = 800; // Adjust based on card width

    rightArrow.addEventListener("click", function () {
        cardContainer.scrollBy({ left: scrollAmount, behavior: "smooth" });
    });

    leftArrow.addEventListener("click", function () {
        cardContainer.scrollBy({ left: -scrollAmount, behavior: "smooth" });
    });
});



// gsap 
const tl = gsap.timeline();

function breaksentence(location, classname){
    let word = document.querySelector(location);
    let text = word.textContent;

    let cultter = "";
    text.split(' ').forEach((elem, i)=> {
        cultter += `<span class=${classname}> ${elem}</span>`
    })

    word.innerHTML = cultter;
}

// breaksentence('.firstheading h1','alpha');

gsap.from('.firstheading h1', {
    x: -320,  
    opacity: 0,
    duration: 1,
    ease: "power2.out",
})

gsap.from('.bannersecondheading h1', {
    y: -220,  
    opacity: 0,
    duration: 1,
    ease: "power2.out",
})

gsap.from('.consultation button', {
    x:350,
    opacity:0,
    duration: 1,
    ease: "power2.out",
})

gsap.from('.headerImage img', {
    opacity:0,
    duration: 1,
    ease: "power2.out",
})



breaksentence('.secondheading h1', 'alpha');

gsap.from('.alpha', {
    // y:50,
    stagger: 0.2,
    opacity:0,
    scrollTrigger: {
        trigger: ".secondheading",
        // scroller: "#container", // Locomotive's scroll container
        start: "top bottom",
        end: "top 30% ",
        scrub: 5,
    },
})
gsap.from('.secondheading p', {
    x: 150,
    opacity:0,
    scrollTrigger: {
        trigger: '.secondheading p',
        start: "top 60%",
        end: "top 20%",
        scrub: 2
    }
})