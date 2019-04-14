var html,
    htmlW;
html = document.documentElement;
htmlW = html.getBoundingClientRect().width;
html.style.fontSize = htmlW / 15 + 'px';
window.addEventListener('resize', function () {
    htmlW = html.getBoundingClientRect().width;
    html.style.fontSize = htmlW / 15 + 'px';
});
