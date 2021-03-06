
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
        name: "3、SVG 查询手册",
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

const dataLearn = [

    {
        name:'Bootstrap相关优质项目推荐',
        url:'http://www.bootcss.com/'
    },

    {
        name:'jQuery插件大集合',
        url:'http://www.jq22.com'
    },
    {
        name:'JAMstack 站点的静态站点生成器列表',
        url:'http://www.jq22.com/jquery%E5%AF%BC%E8%88%AA-3-jq'
    },




];
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


let learnBar = document.querySelector('.learn');
let learnUl = document.createElement('ul');
for(let i=0;i<dataLearn.length;i++){
    let learnLi = document.createElement('li');
    let learnA = document.createElement('a');
    learnLi.appendChild(learnA);
    learnA.href = dataLearn[i].url;
    learnA.innerHTML =(i+1) +"、"+ dataLearn[i].name;
    learnUl.appendChild(learnLi);
}
learnBar.appendChild(learnUl);


let s = '明天的你一定会感谢现在拼命的自己！';
let p = document.createElement('p');
for(let i=0;i<s.length;i++){
    let span = document.createElement('span');
    span.innerHTML = s[i];
    p.appendChild(span);
}
document.querySelector('.bgImg').appendChild(p);



function loadJson(str){
    let xmlhttp;
    if(window.XMLHttpRequest){
        xmlhttp = new XMLHttpRequest();
    }else{
        xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }
    xmlhttp.onreadystatechange = function(){
        if(xmlhttp.readyState===4 && xmlhttp.status===200){
            let data = JSON.parse(xmlhttp.responseText).data;
            let showItem = [];
            for(let i=0;i<data.length;i++){
                if (str !== ""){
                    let l = str.length;
                    console.log(str === data[2].name.slice(1,l));
                    if(
                        str === data[i].name.slice(0,l) ||
                        str === data[i].name.slice(1,l+1) ||
                        str === data[i].name.slice(2,l+2) ||
                        str === data[i].name.slice(3,l+3)){
                        showItem.push(data[i]);
                    }
                }else{
                    document.querySelector('.ajax').innerHTML ="";
                }
            }
            if(showItem.length){
                let strItem = "";
                for(let i=0;i<showItem.length;i++){
                    strItem = strItem + '<p style="padding-left: 10px;margin: 10px 0 0;"><sapn>' + showItem[i]["name"] + '</sapn><a style="opacity: 1" href="'+showItem[i]["href"]+'">查看详情>></a></p>';
                }
                document.querySelector('.ajax').innerHTML = strItem;
            }
        }
    };
    xmlhttp.open("GET","./js/data.txt",true);
    xmlhttp.send();
}