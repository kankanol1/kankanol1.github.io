

/*-----------------------scheme--------------*/



let oSLi = document.querySelectorAll('#scheme ul.itemT li');
let flag =0;
for(let i=0;i<oSLi.length;i++){
    // console.log(oSLi[i]);
    oSLi[i].addEventListener('click',function(){
        oSLi[i].index = i;
        oSLi[flag].className = '';
        oSLi[i].className = 'active';
        flag = this.index;
    })
}

let oSLiJ = document.querySelectorAll('#scheme ul.itemJ li');
let flagJ =0;
for(let i=0;i<oSLiJ.length;i++){
    // console.log(oSLiJ[i]);
    oSLiJ[i].addEventListener('click',function(){
        oSLiJ[i].index = i;
        oSLiJ[flagJ].className = '';
        oSLiJ[i].className = 'active';
        flagJ = this.index;
    })
}

let oPro = document.querySelectorAll('.product1');
let oLiP = document.querySelectorAll('#scheme .bar ul li');
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






/*-----------------------/scheme--------------*/