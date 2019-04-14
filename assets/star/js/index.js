
let oUl = document.querySelector('.box-c .oul');
let oLeft = document.querySelector('.box-c  .left');
let oRight = document.querySelector('.box-c .right');

let flag = 0;
let oW = 100;
oLeft.addEventListener('click',function(){
    if(oUl.clientWidth + flag > window.innerWidth +oW){
        oUl.style.left = flag -oW + 'px';
        flag -= oW;
    }else{
        oUl.style.left = -(oUl.clientWidth - window.innerWidth)+'px';
    }
    console.log(flag);
},false);
oRight.addEventListener('click',function(){
    if(flag<-oW){
        oUl.style.left = flag +oW + 'px';
        flag += oW;
    }else{
        oUl.style.left = 0+'px';
    }

},false);

