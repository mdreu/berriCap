let field = document.querySelector('#date');
let date = new Date();

// Set the date
field.value = date.getFullYear().toString() + '-' + (date.getMonth() + 1).toString().padStart(2, 0) + 
    '-' + date.getDate().toString().padStart(2, 0);

function makeComplete() {
    var d = document.getElementById("target");
    d.className += " complete";
}

