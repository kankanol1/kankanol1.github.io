
const data = [
    {
        name: "冰原狼",
        url: "https://kankan.fun"
    },
    {
        name: "优质项目推荐",
        url: "http://www.bootcss.com/"
    },

    {
        name: "静态站点生成器列表",
        url: "https://www.staticgen.com/"
    },
    {
        name: "Github",
        url: "https://github.com/kankanol1"
    },
    {
        name: "CDSN",
        url:"https://blog.csdn.net/qq_38025939"
    },
    {
        name: "img",
        url:"./img/icon.png"
    }
];
let navBar = document.querySelector('.nav-bar');
let navUl = document.createElement('ul');
let navLiI = document.createElement('li');
let navAI = document.createElement('a');
let navImg = document.createElement('img');
navLiI.appendChild(navAI);
navAI.appendChild(navImg);
navAI.href = "https://kankan.fun";
navAI.classList = 'item';
navImg.src = './img/favicon.ico';
navImg.classList = "title";
navUl.appendChild(navLiI);
for(let i=0;i<data.length-1;i++){
    let navLi = document.createElement('li');
    let navA = document.createElement('a');
    navLi.appendChild(navA);
    navA.href = data[i].url;
    navA.classList="item";
    navA.innerHTML = data[i].name;
    navUl.appendChild(navLi);
}
let img = document.createElement('img');
img.src = data[data.length-1].url;
img.classList = "img";
navBar.appendChild(img);
navUl.classList = 'clearfix ul-be';
navBar.appendChild(navUl);
let flag = true;
img.addEventListener('click',function(){
    if(flag) {
        flag = !flag;

        document.querySelector('nav ul').classList = 'nav-ul clearfix';
    }else{
        document.querySelector('nav ul').classList = 'clearfix ul-be';
        flag = !flag;

    }

});
document.querySelector('nav').addEventListener('mouseleave',function(){
    flag = !flag;
    document.querySelector('nav ul').classList = 'clearfix ul-be';

});
