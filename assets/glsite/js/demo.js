let oGlBoxH = document.querySelectorAll('#glBox h2');
let oGlBoxP = document.querySelectorAll('#glBox p');
let oGlBoxA = document.querySelectorAll('#glBox a');

function getTop(obj){
    // console.log(obj,obj.parentNode);
    if(!obj.parentNode){
        return 0;
    }else{
        return obj.offsetTop + getTop(obj.parentNode);
    }
}




window.onscroll = function(){
    let scrollTop = document.documentElement.scrollTop || document.body.scrollTop;

    if (scrollTop > 100) {
        $(connectBox).fadeIn(1000);
    }


    for (let i = 0; i < oGlBoxH.length; i++) {
        if (scrollTop + document.documentElement.clientHeight+600 > getTop(oGlBoxH[i])) {
            oGlBoxH[i].style.left = 0;
            oGlBoxH[i].style.opacity = 1;
            oGlBoxH[i].style.transition = '1.5s';
        }
    }
    for (let i = 0; i < oGlBoxP.length; i++) {
        if (scrollTop + document.documentElement.clientHeight+600 > getTop(oGlBoxP[i])) {
            oGlBoxP[i].style.left = 0;
            oGlBoxP[i].style.opacity = 1;
            oGlBoxP[i].style.transition = '1.5s';
        }
    }
    for (let i = 0; i < oGlBoxA.length; i++) {
        if (scrollTop + document.documentElement.clientHeight+600 > getTop(oGlBoxA[i])) {
            oGlBoxA[i].style.left = 0;
            oGlBoxA[i].style.opacity = 1;
            oGlBoxA[i].style.transition = '1.5s';
        }
    }
};

let oBody = document.getElementById('bo');
let oPaw = document.getElementById('paw');
let oLog = document.getElementById('log');
/*oLog.addEventListener('click',function(){
    if(oPaw.value == "guanlan2019"){
        this.style.display = 'none';
        oBody.style.display = 'block';

    }
});*/
