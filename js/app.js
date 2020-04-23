// Variables

const aboutbtn = document.getElementById('aboutbtn');
const projectbtn = document.getElementById('projectbtn');
const contactbtn = document.getElementById('contactbtn');

const about = document.getElementById('about');
const project = document.getElementById('projects');
const contact = document.getElementById('contact');

// Events

aboutbtn.addEventListener( 'click', event => {
    about.style.display = "block";
    projects.style.display = "none";
    contact.style.display = "none";
});

projectbtn.addEventListener( 'click', event => {
    projects.style.display = "block";
    about.style.display = "none";
    contact.style.display = "none";
});

contactbtn.addEventListener( 'click', event => {
    contact.style.display = "flex";
    projects.style.display = "none";
    about.style.display = "none";
});