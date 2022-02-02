
let canvas = document.getElementById('canvas1');
let ctx = canvas.getContext('2d');
ctx.fillStyle = "#FF0000";
ctx.fillRect(0, 0, 300, 150);

function logSubmit(event) {
    document.getElementById('canvas1').style.setProperty('border-top-left-radius' ,document.getElementById('topleft').value + "px")
    document.getElementById('canvas1').style.setProperty('border-top-right-radius' ,document.getElementById('topright').value + "px")
    document.getElementById('canvas1').style.setProperty('border-bottom-left-radius' ,document.getElementById('bottomleft').value + "px")
    document.getElementById('canvas1').style.setProperty('border-bottom-right-radius' ,document.getElementById('bottomright').value + "px")
    event.preventDefault();
}

const form = document.getElementById('form');
form.addEventListener('submit', logSubmit);