// Variables
//____________________

const aboutm = document.getElementById('aboutm');
const projectm = document.getElementById('projectm');
const contactm = document.getElementById('contactm');

const aboutbtn = document.getElementById('aboutbtn');
const projectbtn = document.getElementById('projectbtn');
const contactbtn = document.getElementById('contactbtn');

const about = document.getElementById('about');
const project = document.getElementById('projects');
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
span.onclick = function() {
    modal.style.display = "none";
}

// closes modal when you click outside
window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
}

// mobile menu selection when modal is open
aboutm.addEventListener('click', event => {
    modal.style.display = "none";
    about.style.display = "block";
    projects.style.display = "none";
    contact.style.display = "none";
})

// mobile menu selection when modal is open
projectm.addEventListener('click', event => {
    modal.style.display = "none";
    about.style.display = "none";
    projects.style.display = "block";
    contact.style.display = "none";
})

// mobile menu selection when modal is open
contactm.addEventListener('click', event => {
    modal.style.display = "none";
    about.style.display = "none";
    projects.style.display = "none";
    contact.style.display = "block";
})


// switch content for menu entries (about)
aboutbtn.addEventListener( 'click', event => {
    about.style.display = "block";
    projects.style.display = "none";
    contact.style.display = "none";
});

// switch content for menu entries (project)
projectbtn.addEventListener( 'click', event => {
    projects.style.display = "block";
    about.style.display = "none";
    contact.style.display = "none";
});

// switch content for menu entries (contact)
contactbtn.addEventListener( 'click', event => {
    contact.style.display = "flex";
    projects.style.display = "none";
    about.style.display = "none";
});



