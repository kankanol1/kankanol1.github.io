let arr = str.split('\n');
$(document).ready(function () {
    let lrc = []; //创建歌词数组;
    lrc = arr;
    let myAudio = $("audio")[0];
    let result = [];
    getLrc();
    function getLrc() {
        let timeReg = /\[\d{2}:\d{2}\.\d{2}\]/g;//匹配时间的正则表达式
        for (let i=0;i<lrc.length;i++) {
            let time = lrc[i].match(timeReg); //获取歌词里的时间
            let value = lrc[i].replace(timeReg, ""); //获取纯歌词文本
            for (let j=0;j<time.length;j++ ) {
                let t = time[j].slice(1, -1).split(":"); //t[0]分钟，t[1]秒
                let timeArr = parseInt(t[0], 10) * 60 + parseFloat(t[1]);
                result.push([timeArr, value]);//以[时间(秒)，歌词]的形式存进result
            }
        }
        setInterval(showLrc, 200);//设置定时，每200毫秒更新一下
    }
    function showLrc() {
        let curTime = myAudio.currentTime;//获取当前的播放时间
        for (let i = 0; i < result.length-1; i++) {
            if ((curTime >result[i][0])&&(curTime<result[i+1][0])) {
                //播放时间大于对应歌词时间小于下一句歌词时间就显示当前歌词
                document.getElementById("lyric").innerHTML = result[i][1];
                break;//找到对应歌词就停，不停的话，呵呵。。。
            }
        }
    }
})

let oInfo = document.querySelector('.info');
let h1  = document.createElement('h1');
h1.innerHTML = data.song;
let p = document.createElement('p');
p.className = 'name';
p.innerHTML  = data.name;

oInfo.appendChild(h1);
oInfo.appendChild(p);
