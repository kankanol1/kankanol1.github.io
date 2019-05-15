
const dataPc = [
    {
        name: "怦然心动",
        src: '../img/kan.png',
        href: "../assets/love"
    },
    {
        name: "冰原歌单",
        src: '../img/kan.png',
        href: "../assets/vue/music"
    },

    {
        name: "璀璨星空",
        src: '../img/kan.png',
        href: "../assets/sky/"
    },
    {
        name: "导航优化",
        src: '../img/kan.png',
        href: "../assets/navbar/"
    },
    {
        name: "蘑菇街装",
        src: '../img/kan.png',
        href: "../assets/mogujie/"
    },
    {
        name: "儿童写真",
        src: '../img/kan.png',
        href: "../assets/marry/"
    },
    {
        name: "视频截图",
        src: '../img/kan.png',
        href: "../assets/scripmv/"
    },
    {
        name: "星巴咖啡",
        src: '../img/kan.png',
        href: "../assets/star/"
    },

    {
        name: "京剧高亮",
        src: '../img/kan.png',
        href: "../assets/jingju/"
    },
    {
        name: "陀螺仪图",
        src: '../img/kan.png',
        href: "../assets/css/allperspective/"
    },
    {
        name: "炫酷轮播",
        src: '../img/kan.png',
        href: "../assets/css/cssstyle/"
    },
    {
        name: "六面炫图",
        src: '../img/kan.png',
        href: "../assets/css/sixrotate/"
    },
    {
        name: "左右集图",
        src: '../img/kan.png',
        href: "../assets/css/trotatey/"
    },
    {
        name: "上下相册",
        src: '../img/kan.png',
        href: "../assets/css/trotatex/"
    },
    {
        name: "王者战报",
        src: '../img/kan.png',
        href: "../assets/wang/"
    },
    {
        name: "雪夜长安",
        src: '../img/kan.png',
        href: "../assets/css/snow/"
    },
    {
        name: "观澜数据",
        src: '../img/kan.png',
        href: "../assets/glsite/"
    },
    {
        name: "图片切入",
        src: '../img/kan.png',
        href: "../assets/api/"
    },
    {
        name: "瀑布流图",
        src: '../img/kan.png',
        href: "../assets/pu/"
    },
    {
        name: "绘制网络",
        src: '../img/kan.png',
        href: "../assets/Echarts/"
    },
    {
        name: "移动回放",
        src: '../img/kan.png',
        href: "../assets/move"
    },
    {
        name: "阴阳日历",
        src: '../img/kan.png',
        href: "../assets/calender"
    },

    {
        name: "方格定位",
        src: '../img/kan.png',
        href: "../assets/fangge"
    },
    {
        name: "图片拖拽",
        src: '../img/kan.png',
        href: "../assets/dragp"
    },
    {
        name: "你画我猜",
        src: '../img/kan.png',
        href: "../assets/guess"
    },
    {
        name: "碰撞检测",
        src: '../img/kan.png',
        href: "../assets/peng"
    },

];
let obj=[];
for(let i=0;i<dataPc.length;i++){
    obj.push({
        category: 'phone',
        stocked: true,
        name: dataPc[i].name,
        href:dataPc[i].href
    });
}
let pcBar = document.querySelector('.pc');
let pcUl = document.createElement('ul');
for(let i=0;i<dataPc.length;i++){
    let pcLi = document.createElement('li');
    let pcA = document.createElement('a');
    let pcDiv = document.createElement('div');

    let pcImg = document.createElement('img');
    let pcSpan = document.createElement('span');
    pcLi.appendChild(pcA);
    pcA.href = dataPc[i].href;
    pcImg.classList.add("pcImg");
    pcImg.src = dataPc[i].src;
    pcImg.style.left= (-60 * i) +"px";
    //
    pcImg.style.width = 1560 + "px";
    pcImg.style.height = 60 + "px";
    pcImg.style.position="relative";
    pcImg.style.borderRadius = 0;

    pcSpan.innerText = dataPc[i].name;

    pcDiv.appendChild(pcImg);
    pcDiv.classList.add("pcDiv");
    pcDiv.style.overflow = "hidden";
    pcDiv.style.width = 60+"px";
    pcDiv.style.height =60+"px";
    pcDiv.style.borderRadius = "50%";
    pcDiv.style.position = "relative";
    pcDiv.style.border = "1px solid pink";
    pcDiv.style.margin = "0 auto";
    pcA.appendChild(pcDiv);
    pcA.appendChild(pcSpan);
    pcUl.appendChild(pcLi);
}
pcBar.appendChild(pcUl);


let s = '明天的你一定会感谢现在拼命的自己！';
let p = document.createElement('p');
for(let i=0;i<s.length;i++){
    let span = document.createElement('span');
    span.innerHTML = s[i];
    p.appendChild(span);
}
document.querySelector('.bgImg').appendChild(p);



