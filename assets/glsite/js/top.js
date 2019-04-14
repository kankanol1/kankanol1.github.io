window.addEventListener('resize',function(){
    let html = document.documentElement;
    let htmlW = html.getBoundingClientRect().width;
    html.style.fontSize = htmlW/30 + "px";
},false);

let html = document.documentElement;
let htmlW = html.getBoundingClientRect().width;
html.style.fontSize = htmlW/30 + "px";



