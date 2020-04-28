// Variables
//____________________

const aboutm = document.getElementById('aboutm');
const projectm = document.getElementById('projectm');
const contactm = document.getElementById('contactm');

const aboutbtn = document.getElementById('aboutbtn');
const projectbtn = document.getElementById('projectbtn');
const contactbtn = document.getElementById('contactbtn');

const about = document.getElementById('about');
const project = document.getElementById('project');
const contact = document.getElementById('contact');

// Get the modal
const modal = document.getElementById("myModal");

// Get the <span> element that closes the modal
const span = document.getElementsByClassName("close")[0];

// burger svg that will get clicked to pull up menu on mobile
const menubutton = document.getElementById('mmenu');

const project5 = document.getElementById('project5');
const project6 = document.getElementById('project6');
const project7 = document.getElementById('project7');
const project8 = document.getElementById('project8');


// Animations
//_______________________

// Wrap every letter about me in a span
var textWrapperAbout = document.querySelector('.is12');
textWrapperAbout.innerHTML = textWrapperAbout.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({ loop: false })
    .add({
        targets: '.is12 .letter',
        translateX: [40, 0],
        translateZ: 0,
        opacity: [0, 1],
        easing: "easeOutExpo",
        duration: 1200,
        delay: (el, i) => 300 + 30 * i
    });

function animateabout() {
    anime.timeline({ loop: false })
        .add({
            targets: '.is12 .letter',
            translateX: [40, 0],
            translateZ: 0,
            opacity: [0, 1],
            easing: "easeOutExpo",
            duration: 1200,
            delay: (el, i) => 150 + 30 * i
        }).add({
            targets: '.content-wrapper',
            opacity: [0, 1],
            duration: 1500,
            easing: "linear"
        }, '300');
};


// Wrap every letter projects in a span
var textWrapperProject = document.querySelector('.is13');
textWrapperProject.innerHTML = textWrapperProject.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

function animateproject() {
    anime.timeline({ loop: false })
        .add({
            targets: '.is13 .letter',
            translateX: [40, 0],
            translateZ: 0,
            opacity: [0, 1],
            easing: "easeOutExpo",
            duration: 1200,
            delay: (el, i) => 150 + 30 * i
        })
        .add({
            targets: '.content-wrapper',
            opacity: [0, 1],
            duration: 1500,
            easing: "linear"
        }, '300');
};

// Wrap every letter contact in a span
var textWrapperContact = document.querySelector('.is14');
textWrapperContact.innerHTML = textWrapperContact.textContent.replace(/\S/g, "<span class='letter'>$&</span>");


function animatecontact() {
    anime.timeline({ loop: false })
        .add({
            targets: '.is14 .letter',
            translateX: [40, 0],
            translateZ: 0,
            opacity: [0, 1],
            easing: "easeOutExpo",
            duration: 1200,
            delay: (el, i) => 150 + 30 * i
        })
        .add({
            targets: '.content-wrapper',
            opacity: [0, 1],
            duration: 1500,
            easing: "linear"
        }, '300');
};


// Events
//_______________________

// opens new tab for project 5
project5.addEventListener('click', event => {
    window.open('https://i-strohmeyer.github.io/techdegree-project-5/', '_blank');
});

// opens new tab for project 6
project6.addEventListener('click', event => {
    window.open('https://i-strohmeyer.github.io/techdegree-project-6/', '_blank');
});

// opens new tab for project 7
project7.addEventListener('click', event => {
    window.open('https://i-strohmeyer.github.io/techdegree-project-7/', '_blank');
});

// opens new tab for project 8
project8.addEventListener('click', event => {
    window.open('https://i-strohmeyer.github.io/techdegree-project-8/', '_blank');
});


//mobile menu modal
menubutton.addEventListener('click', event => {
    modal.style.display = "block";
});

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
    modal.style.display = "none";
};

// closes modal when you click outside
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
};

// mobile menu selection when modal is open
aboutm.addEventListener('click', event => {
    modal.style.display = "none";
    about.style.display = "block";
    project.style.display = "none";
    contact.style.display = "none";
    animateabout();
});

// mobile menu selection when modal is open
projectm.addEventListener('click', event => {
    modal.style.display = "none";
    about.style.display = "none";
    project.style.display = "block";
    contact.style.display = "none";
    animateproject();
});

// mobile menu selection when modal is open
contactm.addEventListener('click', event => {
    modal.style.display = "none";
    about.style.display = "none";
    project.style.display = "none";
    contact.style.display = "block";
    animatecontact();
});


// switch content for menu entries (about)
aboutbtn.addEventListener('click', event => {
    about.style.display = "block";
    project.style.display = "none";
    contact.style.display = "none";
    animateabout();
});

// switch content for menu entries (project)
projectbtn.addEventListener('click', event => {
    project.style.display = "block";
    about.style.display = "none";
    contact.style.display = "none";
    animateproject();
});

// switch content for menu entries (contact)
contactbtn.addEventListener('click', event => {
    contact.style.display = "flex";
    project.style.display = "none";
    about.style.display = "none";
    animatecontact();
});



