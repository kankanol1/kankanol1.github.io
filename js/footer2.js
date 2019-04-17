
const dataFo = [
    {
        name: "kankan主页",
        src: '../img/zhuye.jpg',
        href: "https://kankan.fun"
    },
    {
        name: "Github主页",
        src: '../img/github.jpg',
        href: "https://github.com/kankanol1"
    },
    {
        name: "CSDN主页",
        src: '../img/csdn.jpg',
        href: "https://blog.csdn.net/qq_38025939"
    },
    {
        name: "博客园主页",
        src: '../img/github.jpg',
        href: "https://www.cnblogs.com/kankanol/"
    },
    {
        name: "segmentFault主页",
        src: '../img/github.jpg',
        href: "https://segmentfault.com/u/kankanol1"
    },
    {
        name: "微博主页",
        src: '../img/weibo.jpg',
        href: "https://weibo.com/3029315223"
    }

];


let foBar = document.querySelector('.footer');
let foUl = document.createElement('ul');
for(let i=0;i<dataFo.length;i++){
    let foLi = document.createElement('li');
    let foA = document.createElement('a');
    let foImg = document.createElement('img');
    let foSpan = document.createElement('span');
    foLi.appendChild(foA);
    foA.href = dataFo[i].href;
    foImg.src = dataFo[i].src;
    foSpan.innerText = dataFo[i].name;
    foA.appendChild(foImg);
    foA.appendChild(foSpan);
    foUl.appendChild(foLi);
}
foBar.appendChild(foUl);
