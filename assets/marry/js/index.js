



let data = [
    {
        url: "bodyone",
        height: 1900
    },
    {
        url: "two",
        height: 950
    },
    {
        url: "store",
        height: 595
    },
    {
        url: "works",
        height: 590
    },
    {
        url: "event",
        height: 590
    },
    {
        url: "evaluate",
        height: 590
    }
];
let oBox = document.getElementById('box');
let oBtn = document.querySelectorAll('.wrap .nav li');

let flag = oBtn[0];
for(let i=0;i<oBtn.length;i++){
    oBtn[i].addEventListener('touchstart',function(){
        flag.className = '';
        let str = '<iframe class="two" src="'+ data[i].url +'index.html" frameborder="0" width="100%" height="'+ data[i].height +'rem"></iframe>';
        flag = this;
        oBox.innerHTML = str;
        flag.className = 'active';
    },false);
}