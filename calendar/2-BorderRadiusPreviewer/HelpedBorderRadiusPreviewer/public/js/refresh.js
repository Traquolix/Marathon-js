
let canvas = document.getElementById("canvas1");
let ctx = canvas.getContext("2d");
ctx.fillStyle = "#FF0000";
ctx.fillRect(0, 0, 300, 150);

function logSubmit(event) {
    alert(canvas.style.borderTopLeftRadius)
    document.getElementById("canvas1").style.borderTopLeftRadius =
        document.getElementById("topleft").value;
    document.getElementById("canvas1").style.borderTopRightRadius =
        document.getElementById("topright").value;
    document.getElementById("canvas1").style.borderBottomLeftRadius =
        document.getElementById("bottomleft").value;
    document.getElementById("canvas1").style.borderBottomRightRadius =
        document.getElementById("bottomright").value;
    event.preventDefault();
}

const form = document.getElementById('form');
form.addEventListener('submit', logSubmit);