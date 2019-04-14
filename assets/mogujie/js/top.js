var html,
    htmlW;
html = document.documentElement;
htmlW = html.getBoundingClientRect().width -2;
html.style.fontSize = htmlW/15 + 'px';
window.addEventListener('resize',function(){
    htmlW = html.getBoundingClientRect().width - 2;
    // htmlW = html.clientWidth;
    html.style.fontSize = htmlW/15 + 'px';
});
document.addEventListener('touchstart',function(ev){
    ev.preventDefault();
},{passive:false});
