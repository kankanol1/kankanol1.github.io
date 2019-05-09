window.addEventListener('resize',function(){
    var html = document.documentElement;
    var htmlW = html.getBoundingClientRect().width;
    html.style.fontSize = htmlW/15 + "px";
},false);

var html = document.documentElement;
var htmlW = html.getBoundingClientRect().width;
html.style.fontSize = htmlW/15 + "px";





let oData = [
    {
        id:Date.now()+Math.random(),
        name: '李春花',
        song: '公子向北走',
        checked: false,
        album: 10,
        src:'mp3/gzbz.mp3',
        href:'./chenyifa/gzxbz.html'
    },
    {
        id:Date.now()+Math.random(),
        name: '叶洛洛',
        song: '我的将军啊',
        checked: false,
        album: 10,
        src:'mp3/wodejiangjun.m4a',
        href:'./chenyifa/wdjja.html'
    },
    {
        id:Date.now()+Math.random(),
        name: '抖音浪哥',
        song: '世界第一等',
        checked: false,
        album: 10,
        src:'mp3/shijiediyideng.m4a',
        href:'./chenyifa/sjdyid.html'
    },
    {
        id:Date.now()+Math.random(),
        name: '花粥 / 马雨阳',
        song: '盗将行',
        checked: false,
        album: 10,
        src:'mp3/saojaingxing.m4a',
        href:'./chenyifa/djx.html',

    },
    {
        id:Date.now()+Math.random(),
        name: '陈一发儿',
        song: '童话镇',
        checked: false,
        album: 10,
        src:'mp3/tonghuazhen.mp3',
        href:'./chenyifa/thz.html'

    },



];

let listS = new Set();
let list=[];
let app = new Vue({
    el:"#app",
    data:{
        oData,
        isTF:false,
        listS,
        list

    },
    methods:{
        allSelect(){
            if(this.isTF == true){
                this.isTF = false;
                for(let i=0;i<this.oData.length;i++){
                    this.oData[i].checked = false;
                }
            }else{
                this.isTF = true;
                for(let i=0;i<this.oData.length;i++){
                    this.oData[i].checked = true;
                }
            }
        },
        singleSelect(num){
            let flag = 0;
            this.oData[num].checked = !this.oData[num].checked;
            for(let i=0;i<this.oData.length;i++){
                flag += this.oData[i].checked == true ? 1:-1;
            }
            this.isTF = flag==this.oData.length ? true:false;
        }
    },
    computed:{
        sumAlbum(){
            let sum = 0;
            for(let i=0;i<this.oData.length;i++){
                if(this.oData[i].checked == true){
                    sum += this.oData[i].album;
                }
            }
            return sum;
        },
        sumSinger(){
            var obj = {};
            var arr=[];
            obj.length =0;
            for(let i=0;i<this.oData.length;i++){
                if(this.oData[i].checked == true){
                    this.listS.add(this.oData[i].name);
                    app.$set(obj,i,this.oData[i].name);
                    obj.length +=1;

                }else{
                    if(obj[i]){
                        app.$delete(obj,i);
                        obj.length -=1;
                    }
                    this.listS.delete(this.oData[i].name);
                }
            }
            var arr = new Set();

            for(let i=0;i<this.oData.length;i++){
                if(obj[i]){
                    arr.add(obj[i]);
                }
            }
            var L = arr.size;
            return L;
        }
    }
});

