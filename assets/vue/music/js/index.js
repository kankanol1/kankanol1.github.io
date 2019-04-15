window.addEventListener('resize',function(){
    var html = document.documentElement;
    var htmlW = html.getBoundingClientRect().width;
    html.style.fontSize = htmlW/15 + "px";
},false);

var html = document.documentElement;
var htmlW = html.getBoundingClientRect().width;
html.style.fontSize = htmlW/15 + "px";


/*let oData = [


    {
        id:Date.now()+Math.random(),
        name: '中孝介',
        song: '花海',
        checked: false,
        album: 15,
        src:'./mp3/hhai.mp3'
    },
    {
        id:Date.now()+Math.random(),
        name: '暗杠 寅子',
        song: '说书人',
        checked: false,
        album: 8,
        src:'./mp3/ssr.mp3'
    },
    {
        id:Date.now()+Math.random(),
        name: '展展和罗罗',
        song: '沙漠骆驼',
        checked: false,
        album: 10,
        src:'mp3/smlt.mp3'
    },
   {
         id:Date.now()+Math.random(),
        name: '抖音浪哥',
        song: '世界第一等',
        checked: false,
        album: 10,
        src:'mp3/sjdiyd.mp3'
    },
    {
        id:Date.now()+Math.random(),
        name: '花粥 / 马雨阳',
        song: '盗将行',
        checked: false,
        album: 10,
        src:'mp3/djx.mp3',
        text:"以前，大盗劫城出来掀了姑娘的裙子，反倒被姑娘的笑吸引了，想娶她但自己身份不妥，所以改邪归正，多年后成了将军，但姑娘早已去世，原本要送她的明珠也失去意义，被大盗射向山间。他谢绝了策勋，在庭前种下一棵枇杷树。如果当年没有碍于自己的身份，也许还能在姑娘活着时，为她窃一支玉簪。"

    },
    {
        id:Date.now()+Math.random(),
        name: 'Christine Welch',
        song: '一百万个可能',
        checked: false,
        album: 10,
        src:'mp3/ybwzkd.mp3'
    },
    {
        id:Date.now()+Math.random(),
        name: '马良',
        song: '往后一生',
        checked: false,
        album: 10,
        src:'mp3/whys.mp3'
    },
    {


        id:Date.now()+Math.random(),
        name: '陈一发',
        song: '童话镇',
        checked: false,
        album: 15,
        src:'chenyifa/thz_cyf.mp3'
    },
    {
        id:Date.now()+Math.random(),
        name: '王大毛',
        song: '去年夏天',
        checked: false,
        album: 15,
        src:'mp3/qnxtt.m4a'
    },
    {
        id:Date.now()+Math.random(),
        name: 'C.B & Z.L',
        song: 'Symphony',
        checked: false,
        album: 15,
        src:'mp3/czs.mp3'
    },
    {
        id:Date.now()+Math.random(),
        name: '二郎',
        song: '我已经爱上你',
        checked: false,
        album: 15,
        src:'./mp3/wyasn.mp3'
    },
    {
        id:Date.now()+Math.random(),
        name: '张北北',
        song: '拥抱你离去',
        checked: false,
        album: 15,
        src:'mp3/zbbp.mp3'
    },
    {
        id:Date.now()+Math.random(),
        name: '陈雷',
        song: '成都',
        checked: false,
        album: 15,
        src:'mp3/cdcl.mp3'
    },
    {
        id:Date.now()+Math.random(),
        name: 'O.C & C.R.J',
        song: 'Good Time',
        checked: false,
        album: 15,
        src:'mp3/goodtime.mp3'
    },
    {
        id:Date.now()+Math.random(),
        name: 'mc星辰 ',
        song: '麦小兜9420',
        checked: false,
        album: 15,
        src:'mp3/liulang.mp3'
    },
    {
        id:Date.now()+Math.random(),
        name: 'Louisa Johnson',
        song: 'So Good',
        checked: false,
        album: 12,
        src:'mp3/sogood.mp3'
    },
    {
        id:Date.now()+Math.random(),
        name: '岑宁儿',
        song: '追光者',
        checked: false,
        album: 10,
        src:'./mp3/zgzcc/mp3'
    },
    {
        id:Date.now()+Math.random(),
        name: '半阳',
        song: '流浪',
        checked: false,
        album: 10,
        src:'./mp3/llby.mp3'
    },
    {
        id:Date.now()+Math.random(),
        name: ' 音阙诗听',
        song: '红昭愿',
        checked: false,
        album: 15,
        src:'./mp3/hzya.mp3'
    },
    {
        id:Date.now()+Math.random(),
        name: '校长',
        song: '带你去旅行',
        checked: false,
        album: 15,
        src:'./mp3/lxx/mp3'

    },
    {
        id:Date.now()+Math.random(),
        name: 'Ed Sheeran',
        song: 'shape of you',
        checked: false,
        album: 15,
        src:'mp3/sony.mp3'

    },
    {
        id:Date.now()+Math.random(),
        name: 'D.P & C.W',
        song: '全部都是你',
        checked: false,
        album: 10,
        src:'mp3/allisyou.mp3'

    },
    {
        id:Date.now()+Math.random(),
        name: '于晴',
        song: '醉赤壁',
        checked: false,
        album: 10,
        src:'mp3/zcb.mp3'

    },
    {
        id:Date.now()+Math.random(),
        name: 'L.F.D.Y',
        song: 'Despacito',
        checked: false,
        album: 10,
        src:'./mp3/des.mp3'

    },
    {
        id:Date.now()+Math.random(),
        name: '冯提莫',
        song: '佛系少女',
        checked: false,
        album: 10,
        src:'mp3/ftm_fxsn.mp3'

    },
    {
        id:Date.now()+Math.random(),
        name: '新乐尘符',
        song: '123我爱你',
        checked: false,
        album: 10,
        src:'./mp3/123.mp3'

    },
    {
        id:Date.now()+Math.random(),
        name: '鞠文娴',
        song: '病变',
        checked: false,
        album: 8,
        src:'./mp3.bbb.mp3'

    },

    {
        id:Date.now()+Math.random(),
        name: '周笔畅',
        song: '最美的期待',
        checked: false,
        album: 15,
        src:'./mp3/zbc.mp3'

    },
    {
        id:Date.now()+Math.random(),
        name: '苏谭谭',
        song: '流浪',
        checked: false,
        album: 15,
        src:"../../../data/stt_by.mp3"

    },
    {
        id:Date.now()+Math.random(),
        name: '邓紫棋',
        song: '泡沫',
        checked: false,
        album: 10,
        src:"./mp3/pmm.mp3"
    },
    {
        id:Date.now()+Math.random(),
        name: '萨顶顶',
        song: '万物生',
        checked: false,
        album: 8,
        src:'./mp3/sddw.mp3'
    },

];*/


let oData = [
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

