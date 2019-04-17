
const dataPc = [
    {
        name: "冰原歌单",
        src: '../img/ge.png',
        href: "../assets/vue/music"
    },

    {
        name: "催菜星空",
        src: '../img/star.jpg',
        href: "../assets/sky/"
    },
    {
        name: "蘑菇街装",
        src: '../img/mogujie.jpg',
        href: "../assets/mogujie/"
    },
    {
        name: "儿童写真",
        src: '../img/marry.jpg',
        href: "../assets/marry/"
    },
    {
        name: "视频截图",
        src: '../img/mv.jpg',
        href: "../assets/scripmv/"
    },
    {
        name: "星巴咖啡",
        src: '../img/cof.jpg',
        href: "../assets/star/"
    },

    {
        name: "京剧高亮",
        src: '../img/jing.jpg',
        href: "../assets/jingju/"
    },
    {
        name: "陀螺仪图",
        src: '../img/tuo.jpg',
        href: "../assets/css/allperspective/"
    },
    {
        name: "炫酷轮播",
        src: '../img/xuan.jpg',
        href: "../assets/css/cssstyle/"
    },
    {
        name: "六面炫图",
        src: '../img/six.jpg',
        href: "../assets/css/sixrotate/"
    },
    {
        name: "左右集图",
        src: '../img/lr.jpg',
        href: "../assets/css/trotatey/"
    },
    {
        name: "上下相册",
        src: '../img/shang.jpg',
        href: "../assets/css/trotatex/"
    },
    {
        name: "王者战报",
        src: '../img/wang.jpg',
        href: "../assets/wang/"
    },
    {
        name: "雪夜长安",
        src: '../img/snow.jpg',
        href: "../assets/css/snow/"
    },
    {
        name: "观澜数据",
        src: '../img/gl.jpg',
        href: "../assets/glsite/"
    },
    {
        name: "图片切入",
        src: '../img/qie.jpg',
        href: "../assets/api/"
    },
    {
        name: "瀑布流图",
        src: '../img/pu.jpg',
        href: "../assets/pu/"
    },
    {
        name: "绘制网络",
        src: '../img/echart.jpg',
        href: "../assets/Echarts/"
    },
    {
        name: "移动回放",
        src: '../img/move.jpg',
        href: "../assets/move"
    },
    {
        name: "阴阳日历",
        src: '../img/ri.png',
        href: "../assets/calender"
    },

    {
        name: "方格定位",
        src: '../img/fange.jpg',
        href: "../assets/fangge"
    },
    {
        name: "图片拖拽",
        src: '../img/dragp.jpg',
        href: "../assets/dragp"
    },
    {
        name: "你画我猜",
        src: '../img/hello.jpg',
        href: "../assets/guess"
    },
    {
        name: "碰撞检测",
        src: '../img/hell.jpg',
        href: "../assets/peng"
    },

];
let pcBar = document.querySelector('.pc');
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


let s = '明天的你一定会感谢现在拼命的自己！';
let p = document.createElement('p');
for(let i=0;i<s.length;i++){
    let span = document.createElement('span');
    span.innerHTML = s[i];
    p.appendChild(span);
}
document.querySelector('.bgImg').appendChild(p);



