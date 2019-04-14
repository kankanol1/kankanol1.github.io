

var  allData = [

    //1
    {
        data1:'https://mce.mogucdn.com/jsonp/get/3?pid=3627&appPlat=m&_=1535766787241&callback=?',
        data2:'https://list.mogujie.com/search?cKey=h5-cube&fcid=10062603&callback=?&page='
    },
    //2
    {
        data1: 'https://mce.mogucdn.com/jsonp/get/3?pid=582&appPlat=m&_=1536376456788&callback=?',
        data2: 'https://list.mogujie.com/search?cKey=h5-cube&fcid=50003&callback=?&page=',
    },
    //3
    {
        data1: 'https://mce.mogucdn.com/jsonp/get/3?pid=596&appPlat=m&callback=?',
        data2: 'https://list.mogujie.com/search?cKey=h5-cube&fcid=50005&_version=1&pid=&q=&cpc_offset=0&_=1536588906712&callback=?&page=',
    },
    //4
    {
        data1: 'https://mce.mogucdn.com/jsonp/get/3?pid=595&appPlat=m&_=1536590408015&callback=?',
        data2: 'https://list.mogujie.com/search?cKey=h5-cube&fcid=50004&_version=1&pid=&q=&cpc_offset=0&_=1536590408068&callback=?&page=',
    },
    //5
    {
        data1: 'https://mce.mogucdn.com/jsonp/get/3?pid=598&appPlat=m&_=1536590518698&callback=?',
        data2: 'https://list.mogujie.com/search?cKey=h5-cube&fcid=50006&_version=1&pid=&q=&cpc_offset=0&_=1536590518750&callback=?&page=',
    },
    //6
    {
        data1: 'https://mce.mogucdn.com/jsonp/get/3?pid=597&appPlat=m&_=1536590649634&callback=?',
        data2: 'https://list.mogujie.com/search?cKey=h5-cube&fcid=50532&_version=1&pid=&q=&cpc_offset=0&_=1536590649648&callback=?&page=',
    },
    //7
    {
        data1: 'https://mce.mogucdn.com/jsonp/get/3?pid=599&appPlat=m&_=1536590702306&callback=?',
        data2: 'https://list.mogujie.com/search?cKey=h5-cube&fcid=51716&_version=1&pid=&q=&cpc_offset=0&_=1536590702329&callback=?&page=',
    },
    //8
    {
        data1: 'https://mce.mogucdn.com/jsonp/get/3?pid=600&appPlat=m&_=1536590757113&callback=?',
        data2: 'https://list.mogujie.com/search?cKey=h5-cube&fcid=50675&_version=1&pid=&q=&cpc_offset=0&_=1536590757141&callback=?&page=',
    },
    //9
    {
        data1: 'https://mce.mogucdn.com/jsonp/get/3?pid=5253&appPlat=m&_=1536590804675&callback=?',
        data2: 'https://list.mogujie.com/search?cKey=h5-cube&fcid=10056587&_version=1&pid=&q=&cpc_offset=0&_=1536590804705&callback=?&page=',
    },
    //10
    {
        data1: 'https://mce.mogucdn.com/jsonp/get/3?pid=609&appPlat=m&_=1536590850741&callback=?',
        data2: 'https://list.mogujie.com/search?cKey=h5-cube&fcid=50797&_version=1&pid=&q=&cpc_offset=0&_=1536590850769&callback=?&page=',
    },
    //11
    {
        data1: 'https://mce.mogucdn.com/jsonp/get/3?pid=594&appPlat=m&_=1536590895347&callback=?',
        data2: 'https://list.mogujie.com/search?cKey=h5-cube&fcid=50010&_version=1&pid=&q=&cpc_offset=0&_=1536590895389&callback=?&page=',
    },
    //12
    {
        data1: 'https://mce.mogucdn.com/jsonp/get/3?pid=830&appPlat=m&_=1536590943407&callback=?',
        data2: 'https://list.mogujie.com/search?cKey=h5-cube&fcid=52378&_version=1&pid=&q=&cpc_offset=0&_=1536590943437&callback=?&page=',
    },
    //13
    {
        data1: 'https://mce.mogucdn.com/jsonp/get/3?pid=602&appPlat=m&_=1536591002024&callback=?',
        data2: 'https://list.mogujie.com/search?cKey=h5-cube&fcid=10057031&_version=1&pid=&q=&cpc_offset=0&_=1536591002061&callback=?&page=',
    },
    //14
    {
        data1: 'https://mce.mogucdn.com/jsonp/get/3?pid=606&appPlat=m&_=1536591046620&callback=?',
        data2: 'https://list.mogujie.com/search?cKey=h5-cube&fcid=10060232&_version=1&pid=&q=&cpc_offset=0&_=1536591046660&callback=?&page=',
    },
    //15
    {
        data1: 'https://mce.mogucdn.com/jsonp/get/3?pid=603&appPlat=m&_=1536591093732&callback=?',
        data2: 'https://list.mogujie.com/search?cKey=h5-cube&fcid=20003089&_version=1&pid=&q=&cpc_offset=0&_=1536591093760&callback=?&page=',
    },
    //16
    {
        data1: 'https://mce.mogucdn.com/jsonp/get/3?pid=605&appPlat=m&_=1536591137825&callback=?',
        data2: 'https://list.mogujie.com/search?cKey=h5-cube&fcid=52014&_version=1&pid=&q=&cpc_offset=0&_=1536591137849&callback=?&page=',
    },

];
var n=0;//记录图片的加载位置
var str1;//y右上面的数据的 url
var str2;//右下面的数据的  url


var oTopH = document.querySelector('#top');
var oBottomH = document.querySelector('.bottom');

var allImg;//保存右下面数据加载完的 第一列图片的数据
var allImg2;//第二列图片的数据

str1 = allData[0]["data1"];//初始化右上
str2 = allData[0]["data2"];//初始化右下
kankanImg(str1);//添加页面右上数据
kankanPre(str2);//添加页面右下数据
var endXYR = 0;//记录右边 box 的偏移总量
var topRNav;//记录右上数据加载完毕后的高度
var oFImg = document.querySelector('.fimg');//获取右上div
var oRNav = document.querySelector('.rnav');//获取右中导航栏
var oTargetImg = document.querySelectorAll('.fimg-div');//获取 自己找去
var oTargetPre = document.querySelectorAll('.fdivall');
/*---------------------------------------------左侧数据---------------------------------------------------*/
var str = 'https://mce.mogucdn.com/jsonp/multiget/3?appPlat=m&pids=117330%2C124192&callback=?';

var oTarget1 = document.querySelector('.fnav>ul');
var oMove2 = document.querySelector('.fcontent');
//左侧数据加载
kankan(str);
function kankan(str){
    $.getJSON(str,function(data){
        var data = data.data["117330"]['list'];
        // console.log(data);
        for(var i = 0; i < data.length; i++) {
            var oLi = document.createElement('li');
            var oP = document.createElement('p');

            if(i==0) oLi.className = 'flactive';
            oP.innerHTML = data[i]['title'];
            oLi.appendChild(oP);
            oLi.addEventListener('click',function(ev){
                ev.stopPropagation();
                $(this).addClass('flactive').siblings('li').removeClass('flactive');
            },true);
            oTarget1.appendChild(oLi);
        }
        var btnL = oTarget1.children;
        var flagL = btnL[0];
        for(let i=0;i<btnL.length;i++){
            btnL[i].addEventListener('touchstart',function(){
                oMove2.style.transform = 'translateY(0)';
                endXYR = 0;
                n=0;
                // oTargetImg[0].innerHTML = "";
                // oTargetImg[1].innerHTML = "";
                oTargetPre[0].innerHTML = "";
                oTargetPre[1].innerHTML = "";
                pageNumPre = 1;
                this.className = 'flactive';
                flagL.className = '';
                flagL = this;
                str1 = allData[i]["data1"];
                str2 = allData[i]["data2"];
                kankanImg(str1);
                oRNav.style.top =  topRNav+'px';
                kankanPre(str2);


            },false)
        }
        moveFun(oTarget1,oTarget1.offsetHeight -document.documentElement.clientHeight + oTopH.offsetHeight + oBottomH.offsetHeight);
        // console.log(oTarget1.offsetHeight-document.documentElement.clientHeight + oTopH.offsetHeight + oBottomH.offsetHeight);
    });
}

function moveFun(oMove,num){
    var startPointT = 0;
    var endXY = 0;
    var startToEnd = 0;
    var startXY = 0;//偏移量
    oMove.addEventListener('touchstart',function(ev){
        startPointT = ev.changedTouches[0].pageY;
        startXY = endXY;
    },false);
    oMove.addEventListener('touchmove',function(ev){
        startToEnd = ev.changedTouches[0].pageY - startPointT;
        endXY = startToEnd + startXY;
        if(endXY  >= 0){
            endXY = 0;
        }else if(endXY <= -num){
            endXY = -num;
        }
        this.style.transform = 'translateY('+ endXY +'px)';

    },false);
}
/*----------------------------------------------右侧上面数据-----------------------------------------------*/

// var oTargetImg = document.querySelectorAll('.fimg-div');
// kankanImg(str1);
var longH = 0;
function kankanImg(str1) {

    var iurl = str1;
    $.getJSON(iurl, function(data) {
        for(var j=0;j<3;j++){
            oTargetImg[j].innerHTML = '';
        }
        var data = data.data.list;
        for(var i = 0; i < data.length; i++) {

            var oA = document.createElement('a');
            oA.href = data[i]["link"];
            var str = '<img src="'+ data[i]["image"] +'" alt=""><p>'+ data[i]["title"] +'</p>';
            oA.innerHTML = str;
            var num = i %  3;
            switch (num) {
                case 0:
                    oTargetImg[0].appendChild(oA);
                    break;
                case 1:
                    oTargetImg[1].appendChild(oA);
                    break;
                case 2:
                    oTargetImg[2].appendChild(oA);
                    break;
                default:
                    break
            }
        }
        topRNav = oFImg.offsetHeight;
        longH = oMove2.offsetHeight;
        moveFunR(oMove2);
    });
}

var startPointR = 0;
// var endXYR = 0;
var startToEndR = 0;
var startXYR = 0;//偏移量

function moveFunR(oMove){
    var num =oMove.offsetHeight;
    oMove.addEventListener('touchstart',function(ev){
        startPointR = ev.changedTouches[0].pageY;
        startXYR = endXYR;
    },false);
    oMove.addEventListener('touchmove',function(ev){
        num = longH;
        startToEndR = ev.changedTouches[0].pageY - startPointR;
        endXYR = startToEndR + startXYR;
        if(endXYR  >= 0){
            endXYR = 0;
        }

        //右边盒子偏移量
        this.style.transform = 'translateY('+ endXYR +'px)';

        // 图片懒加载
        var seeHeight = document.documentElement.clientHeight;
        for (var i = n; i < allImg.length; i++) {
            // console.log(allImg[i].parentElement.parentElement.offsetTop + topRNav ,seeHeight + Math.abs(endXYR));
            if (allImg[i].parentElement.parentElement.offsetTop + topRNav < seeHeight + Math.abs(endXYR)) {
                // console.log(allImg[i].parentElement.parentElement.offsetTop + topRNav ,seeHeight + Math.abs(endXYR));
                if (allImg[i].getAttribute('src') == '') {
                    allImg[i].src = allImg[i].getAttribute('data-url');
                    allImg2[i].src = allImg2[i].getAttribute('data-url');
                }
                n = i + 1;
                // console.log('n = ' + n);
            }
        }

        //y右边当行定位
        if(Math.abs(endXYR) >= topRNav){
            oRNav.style.top = (Math.abs(endXYR))+'px';
        }else{
            oRNav.style.top =  topRNav+'px';
        }

    },false);

    oMove.addEventListener('touchend',function(){
        //判断是否获取下一页的JSON数据
        if(Math.abs(endXYR) >= (num-window.innerHeight*2)){
            kankanPre(str2);
        }

    },false);
}

/*----------------------------------------------正在流行data-------------------------------------------------*/

// var oTargetPre = document.querySelectorAll('.fdivall');
var pageNumPre = 1;
var flagPre = true;
// kankanPre(str2);

function kankanPre(str2) {
    var iurl = str2 + pageNumPre;
    $.getJSON(iurl, function(data) {
        var data = data.result.wall.docs;
        // console.log(data);
        for(var i = 0; i < data.length; i++) {

            var oA = document.createElement('a');
            oA.addEventListener('touchstart',function(ev){
                // ev.stopPropagation();
            },false);
            oA.href = data[i]["link"];


            var str = '<div class="img"><img data-url="'+data[i]["img"]+'" src="" alt=""></div>\n' +
                '                    <div class="flbox">\n' +
                '                        <p><span class="hotPro"></span>'+ data[i]["title"] +'</p>\n' +
                '                        <div class="content-div-in">\n' +
                '                            <div class="price">￥<span>'+ data[i]["price"] +'</span></div>\n' +
                '                            <div class="star"><span>'+data[i]["cfav"]+'</span>☆</div>\n' +
                '                        </div>\n' +
                '                    </div>\n' +
                '                    <div class="ffloat"></div><p class="flp">已售'+data[i]["sale"]+'件</p>\n';
            oA.innerHTML = str;
            if(flagPre){
                oTargetPre[0].appendChild(oA);

            }else{
                oTargetPre[1].appendChild(oA);
            }
            flagPre = !flagPre;
        }
        pageNumPre++;//严格控制按顺序加载每一页的资源
        longH = oMove2.offsetHeight;//右边的总高度
        allImg = oTargetPre[0].querySelectorAll('img');
        allImg2 = oTargetPre[1].querySelectorAll('img');
        // console.log(allImg);
    });


}