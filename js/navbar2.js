
const data = [
    {
        name: "冰原狼",
        url: "../"
    },
    {
        name: "测试页",
        url: "../test"
    },
    {
        name: "Hello",
        url: "../hello"
    },
    {
        name: "Hexo",
        url: "https://love.kankan.fun"
    },
    {
        name: "Jekyll",
        url: "https://ai.kankan.fun"
    },
    {
        name: "Github",
        url: "https://github.com/kankanol1"
    },
    {
        name: "CDSN",
        url:"https://blog.csdn.net/qq_38025939"
    }
];


let navBar = document.querySelector('.nav-bar');
let navUl = document.createElement('ul');
for(let i=0;i<data.length;i++){
    let navLi = document.createElement('li');
    let navA = document.createElement('a');
    navLi.appendChild(navA);
    navA.href = data[i].url;
    navA.innerHTML = data[i].name;
    navUl.appendChild(navLi);
}
navBar.appendChild(navUl);
