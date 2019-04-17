

const dataPhone = [
    {
        name: "冰原歌单",
        src: './img/ge.png',
        href: "./assets/vue/music"
    },
    {
        name: "催菜星空",
        src: './img/star.jpg',
        href: "./assets/sky/"
    },
    {
        name: "蘑菇街装",
        src: './img/mogujie.jpg',
        href: "./assets/mogujie/"
    },
    {
        name: "儿童写真",
        src: './img/marry.jpg',
        href: "./assets/marry/"
    },
    {
        name: "视频截图",
        src: './img/mv.jpg',
        href: "./assets/scripmv/"
    },
    {
        name: "星巴咖啡",
        src: './img/cof.jpg',
        href: "./assets/star/"
    },
    {
        name: "陀螺仪图",
        src: './img/tuo.jpg',
        href: "./assets/css/allperspective/"
    },
    {
        name: "炫酷轮播",
        src: './img/xuan.jpg',
        href: "./assets/css/cssstyle/"
    },
    {
        name: "六面炫图",
        src: './img/six.jpg',
        href: "./assets/css/sixrotate/"
    },
    {
        name: "左右集图",
        src: './img/lr.jpg',
        href: "./assets/css/trotatey/"
    },
    {
        name: "上下相册",
        src: './img/shang.jpg',
        href: "./assets/css/trotatex/"
    },
    {
        name: "王者战报",
        src: './img/wang.jpg',
        href: "./assets/wang/"
    },
    {
        name: "雪夜长安",
        src: './img/snow.jpg',
        href: "./assets/css/snow/"
    },
    {
        name: "观澜数据",
        src: './img/gl.jpg',
        href: "./assets/glsite/"
    },
    {
        name: "图片切入",
        src: './img/qie.jpg',
        href: "./assets/api/"
    },
    {
        name: "瀑布流图",
        src: './img/pu.jpg',
        href: "./assets/pu/"
    },
    {
        name: "绘制网络",
        src: './img/echart.jpg',
        href: "./assets/Echarts/"
    },


];


let phoneBar = document.querySelector('.phone');
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