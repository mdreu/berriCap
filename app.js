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
        document.documentElement.style.setProperty('--color-border', '#1E2123');
        document.documentElement.style.setProperty('--color-form', '#1E2123');
        document.documentElement.style.setProperty('--color-word', 'white');
        document.documentElement.style.setProperty('--color-button', 'grey');
        document.documentElement.style.setProperty('--color-txtBox', 'grey');
        document.getElementById("dayMode").classList.add('fa-moon');
        document.getElementById("dayMode").classList.remove('fa-sun');
        num = 1;
    }
    else {
        document.documentElement.style.setProperty('--color-main', '#335962');
        document.documentElement.style.setProperty('--color-accent', '#BDDCFF');
        document.documentElement.style.setProperty('--color-secondary', '#69A0AD');
        document.documentElement.style.setProperty('--color-border', '#335962');
        document.documentElement.style.setProperty('--color-form', 'white');
        document.documentElement.style.setProperty('--color-word', '#335962');
        document.documentElement.style.setProperty('--color-button', '#335962');
        document.documentElement.style.setProperty('--color-txtBox', 'white');
        document.getElementById("dayMode").classList.add('fa-sun');
        document.getElementById("dayMode").classList.remove('fa-moon');
        num = 0;
    }

}
let redNum = 0;
function redMode() {
    
    if (redNum == 0) {
        document.documentElement.style.setProperty('--color-main', '#B12929');
        document.documentElement.style.setProperty('--color-accent', '#F26161');
        document.documentElement.style.setProperty('--color-secondary', '#FF8F8F');
        document.documentElement.style.setProperty('--color-form', '#1E2123');
        document.documentElement.style.setProperty('--color-word', 'white');
        document.documentElement.style.setProperty('--color-button', 'grey');
        document.documentElement.style.setProperty('--color-txtBox', 'grey');

        redNum = 1;
    }
    else if (num == 1) {
        document.documentElement.style.setProperty('--color-main', '#1E2123');
        document.documentElement.style.setProperty('--color-accent', '#46646A');
        document.documentElement.style.setProperty('--color-secondary', '#374649');
        document.documentElement.style.setProperty('--color-border', '#1E2123');
        document.documentElement.style.setProperty('--color-form', '#1E2123');
        document.documentElement.style.setProperty('--color-word', 'white');
        document.documentElement.style.setProperty('--color-button', 'grey');
        document.documentElement.style.setProperty('--color-txtBox', 'grey');
        redNum =0;
    }
    else {
        document.documentElement.style.setProperty('--color-main', '#335962');
        document.documentElement.style.setProperty('--color-accent', '#BDDCFF');
        document.documentElement.style.setProperty('--color-secondary', '#69A0AD');
        document.documentElement.style.setProperty('--color-border', '#335962');
        document.documentElement.style.setProperty('--color-form', 'white');
        document.documentElement.style.setProperty('--color-word', '#335962');
        document.documentElement.style.setProperty('--color-button', '#335962');
        document.documentElement.style.setProperty('--color-txtBox', 'white');
        redNum =0;
    }

}
let yellowNum = 0;
function yellowMode() {
    
    if (yellowNum == 0) {
        document.documentElement.style.setProperty('--color-main', '#FFF08F');
        document.documentElement.style.setProperty('--color-accent', '#FFECC0');
        document.documentElement.style.setProperty('--color-secondary', '#F7F7D4');
        document.documentElement.style.setProperty('--color-form', '#1E2123');
        document.documentElement.style.setProperty('--color-word', 'white');
        document.documentElement.style.setProperty('--color-txtBox', 'white');

        yellowNum = 1;
    }
    else if (num == 1) {
        document.documentElement.style.setProperty('--color-main', '#1E2123');
        document.documentElement.style.setProperty('--color-accent', '#46646A');
        document.documentElement.style.setProperty('--color-secondary', '#374649');
        document.documentElement.style.setProperty('--color-border', '#1E2123');
        document.documentElement.style.setProperty('--color-form', '#1E2123');
        document.documentElement.style.setProperty('--color-word', 'white');
        document.documentElement.style.setProperty('--color-button', 'grey');
        document.documentElement.style.setProperty('--color-txtBox', 'grey');
        yellowNum =0;
    }
    else {
        document.documentElement.style.setProperty('--color-main', '#335962');
        document.documentElement.style.setProperty('--color-accent', '#BDDCFF');
        document.documentElement.style.setProperty('--color-secondary', '#69A0AD');
        document.documentElement.style.setProperty('--color-border', '#335962');
        document.documentElement.style.setProperty('--color-form', 'white');
        document.documentElement.style.setProperty('--color-word', '#335962');
        document.documentElement.style.setProperty('--color-button', '#335962');
        document.documentElement.style.setProperty('--color-txtBox', 'white');
        yellowNum =0;
    }

}
let greenNum = 0;
function greenMode() {
    
    if (greenNum == 0) {
        document.documentElement.style.setProperty('--color-main', '#77A563');
        document.documentElement.style.setProperty('--color-accent', '#9BC490');
        document.documentElement.style.setProperty('--color-secondary', '#B4D391');
        document.documentElement.style.setProperty('--color-form', '#1E2123');
        document.documentElement.style.setProperty('--color-word', 'white');
        document.documentElement.style.setProperty('--color-button', 'grey');
        document.documentElement.style.setProperty('--color-txtBox', 'grey');
        greenNum = 1;
    }
    else if (num == 1) {
        document.documentElement.style.setProperty('--color-main', '#1E2123');
        document.documentElement.style.setProperty('--color-accent', '#46646A');
        document.documentElement.style.setProperty('--color-secondary', '#374649');
        document.documentElement.style.setProperty('--color-border', '#1E2123');
        document.documentElement.style.setProperty('--color-form', '#1E2123');
        document.documentElement.style.setProperty('--color-word', 'white');
        document.documentElement.style.setProperty('--color-button', 'grey');
        document.documentElement.style.setProperty('--color-txtBox', 'grey');
        greenNum =0;
    }
    else {
        document.documentElement.style.setProperty('--color-main', '#335962');
        document.documentElement.style.setProperty('--color-accent', '#BDDCFF');
        document.documentElement.style.setProperty('--color-secondary', '#69A0AD');
        document.documentElement.style.setProperty('--color-border', '#335962');
        document.documentElement.style.setProperty('--color-form', 'white');
        document.documentElement.style.setProperty('--color-word', '#335962');
        document.documentElement.style.setProperty('--color-button', '#335962');
        document.documentElement.style.setProperty('--color-txtBox', 'white');
        greenNum =0;
    }

}
