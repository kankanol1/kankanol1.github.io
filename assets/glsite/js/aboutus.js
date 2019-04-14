

/*----------------------*/

let oAboLi = document.querySelectorAll('#aboutus .item ul li');
// let oImg = document.querySelector('#aboutus .img ul');
let oAboCon = document.querySelectorAll('#aboutus .contentC .fonder');

// console.log(oAboCon );

let flag = 0;

for(let i=0;i<oAboLi.length;i++){

    oAboLi[i].addEventListener('click',function(){
        oAboLi[i].index = i;
        this.className = 'active';
        oAboLi[flag].className = '';
        oAboCon[flag].style.display = 'none';
        oAboCon[this.index].style.display = 'block';

        flag = this.index;
        // oImg.style.left = - this.index +'00%';
        // oImg.style.transition = 'all 1s';



    })
}