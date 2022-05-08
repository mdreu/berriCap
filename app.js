let field = document.querySelector('#date');
let date = new Date();

// Set the date
field.value = date.getFullYear().toString() + '-' + (date.getMonth() + 1).toString().padStart(2, 0) + 
    '-' + date.getDate().toString().padStart(2, 0);

function makeComplete() {
    const d = document.getElementById("target");
    d.className += " complete";
}

const button1 = document.querySelector("button");


button1.addEventListener("click", function() {

    document.body.classList.toggle("colorred");

} );

// Toggle Darkmode/Accessibility 

function darkMode() {
    const element = document.body;
  element.classList.toggle("dark-mode");
}

let num = 0;
function dayMode() {
    
    if (num == 0) {
        document.documentElement.style.setProperty('--color-main', '#1E2123');
        document.documentElement.style.setProperty('--color-accent', '#46646A');
        document.documentElement.style.setProperty('--color-secondary', '#374649');
        document.getElementById("dayMode").classList.add('fa-moon');
        document.getElementById("dayMode").classList.remove('fa-sun');
        num = 1;
    }
    else {
        document.documentElement.style.setProperty('--color-main', '#335962');
        document.documentElement.style.setProperty('--color-accent', '#BDDCFF');
        document.documentElement.style.setProperty('--color-secondary', '#69A0AD');
        document.getElementById("dayMode").classList.add('fa-sun');
        document.getElementById("dayMode").classList.remove('fa-moon');
        num = 0;
    }

}