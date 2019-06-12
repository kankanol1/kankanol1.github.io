


const dataPhone = [
    {
        name: "黑客帝国",
        src: './img/zero.png',
        href: "./assets/zero/"
    },
    {
        name: "蘑菇街装",
        src: './img/mogujie.png',
        href: "./assets/mogujie/"
    },
    {
        name: "催菜星空",
        src: './img/star.png',
        href: "./assets/star/"
    },
    {
        name: "儿童写真",
        src: './img/marry.png',
        href: "./assets/marry/"
    },
    {
        name: "观澜数据",
        src: './img/gl.png',
        href: "./assets/glsite/"
    },
    {
        name: "图懒加载",
        src: './img/github.jpg',
        href: "https://segmentfault.com/u/kankanol1"
    },
    {
        name: "绘制网络",
        src: './img/echart.png',
        href: "./assets/Echarts/"
    },
    {
        name: "移动回放",
        src: './img/move.png',
        href: "./assets/move"
    },
    {
        name: "方格定位",
        src: './img/fange.png',
        href: "./assets/fangge"
    },
    {
        name: "图片拖拽",
        src: './img/dragp.png',
        href: "./assets/dragp"
    },


];
const dataPc = [
    {
        name: "黑客帝国",
        src: './img/zero.png',
        href: "./assets/zero/"
    },
    {
        name: "方格定位",
        src: './img/fange.png',
        href: "./assets/fangge"
    },
    {
        name: "CSDN主页",
        src: './img/csdn.jpg',
        href: "https://blog.csdn.net/qq_38025939"
    },
    {
        name: "segmentFault主页",
        src: './img/github.jpg',
        href: "https://segmentfault.com/u/kankanol1"
    },
    {
        name: "微博主页",
        src: './img/weibo.jpg',
        href: "https://weibo.com/3029315223"
    }

];

const dataDraw = [
    {
        name: "1、Canvas | MDN",
        href: "https://developer.mozilla.org/zh-CN/docs/Web/API/Canvas_API"
    },
    {
        name: "2、Canvas - 廖雪峰的官方网站",
        href: "https://www.liaoxuefeng.com/wiki/001434446689867b27157e896e74d51a89c25cc8b43bdb3000/00143449990549914b596ac1da54a228a6fa9643e88bc0c000"
    },
    {
        name: "3、svg 查询手册",
        href: "https://www.runoob.com/svg/svg-reference.html"
    },
    {
        name: "4、SVG.js v2.7 | Home",
        href: "https://svgjs.com/"
    },
    {
        name: "5、Echarts 2.0 官网1 让数据说话",
        href: "https://echarts.baidu.com/echarts2/"
    },
    {
        name: "6、Echarts 3.0 官网 炫酷案例",
        href: "https://www.echartsjs.com/index.html"
    },
    {
        name: "7、D3 官网 数据驱动",
        href: "https://d3js.org/"
    },
];

const dataLun = [
    {
        name:"1、边栏过渡效果",
        href:"./assets/bar/bar-1"
    },
    {
        name:"2、Parallax Slider with jQuery",
        href:"./assets/bar/bar-2"
    },
    {
        name:"3、Slicebox - 3D图片滑块效果",
        href:"./assets/bar/bar-3"
    },
    {
        name:"4、页面加载特效",
        href:"./assets/bar/bar-4"
    },
    {
        name:"5、3D Grid Effect",
        href:"./assets/bar/bar-5"
    },
    {
        name:"6、Samsung 网格加载效果",
        href:"./assets/bar/bar-6"
    },
];


let phoneBar = document.querySelector('.pc');
let phoneUl = document.createElement('ul');
for(let i=0;i<dataPhone.length;i++){
    let phoneLi = document.createElement('li');
    let phoneA = document.createElement('a');
    let phoneImg = document.createElement('img');
    let phoneSpan = document.createElement('span');
    phoneLi.appendChild(phoneA);
    phoneA.href = dataPhone[i].href;
    phoneImg.src = dataPhone[i].src;
    phoneSpan.innerText = dataPhone[i].name;
    phoneA.appendChild(phoneImg);
    phoneA.appendChild(phoneSpan);
    phoneUl.appendChild(phoneLi);
}
phoneBar.appendChild(phoneUl);

let pcBar = document.querySelector('.phone');
let pcUl = document.createElement('ul');
for(let i=0;i<dataPc.length;i++){
    let pcLi = document.createElement('li');
    let pcA = document.createElement('a');
    let pcImg = document.createElement('img');
    let pcSpan = document.createElement('span');
    pcLi.appendChild(pcA);
    pcA.href = dataPc[i].href;
    pcImg.src = dataPc[i].src;
    pcSpan.innerText = dataPc[i].name;
    pcA.appendChild(pcImg);
    pcA.appendChild(pcSpan);
    pcUl.appendChild(pcLi);
}
pcBar.appendChild(pcUl);

let drBar = document.querySelector('.drawP');
let drUl = document.createElement('ul');
for(let i=0;i<dataDraw.length;i++){
    let drLi = document.createElement('li');
    let drA = document.createElement('a');
    drLi.appendChild(drA);
    drA.href = dataDraw[i].href;
    drA.innerHTML = dataDraw[i].name;
    drUl.appendChild(drLi);
}
drBar.appendChild(drUl);


let lunBar = document.querySelector('.lun');
let lunUl = document.createElement('ul');
for(let i=0;i<dataLun.length;i++){
    let lunLi = document.createElement('li');
    let lunA = document.createElement('a');
    lunLi.appendChild(lunA);
    lunA.href = dataLun[i].href;
    lunA.innerHTML = dataLun[i].name;
    lunUl.appendChild(lunLi);
}
lunBar.appendChild(lunUl);





