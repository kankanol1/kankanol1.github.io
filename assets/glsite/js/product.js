let oPro = document.querySelectorAll('.productA');
let oLiP = document.querySelectorAll('#product .bar ul li');
oLiP[0].addEventListener('click',function(){
    oPro[0].style.display = 'block';
    oPro[1].style.display = 'none';
    oLiP[0].className = 'active';
    oLiP[1].className = '';
});
oPro[1].style.display = 'none';
oLiP[1].addEventListener('click',function(){
    oPro[1].style.display = 'block';
    oPro[0].style.display = 'none';
    oLiP[1].className = 'active';
    oLiP[0].className = '';
});