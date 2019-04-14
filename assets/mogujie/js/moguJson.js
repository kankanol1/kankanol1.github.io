var oUl = document.querySelector('.content-ul');
var allLi = oUl.children;

var pageNum = 0;
var pd = true;//控制开关
var len = 2;//li个数
var dataUrl = [
    'http://list.mogujie.com/search?callback=?&cKey=15&fcid=10053206&page=',
    'http://list.mogujie.com/search?callback=?&cKey=15&fcid=50243&page=',
    'http://list.mogujie.com/search?callback=?&cKey=15&q=%25E6%2598%25BE%25E7%2598%25A6%25E8%25BF%259E%25E8%25A1%25A3%25E8%25A3%2599&fcid=50243&page=',
    'http://list.mogujie.com/search?callback=?&cKey=43&q=%25E5%25A4%258F%25E8%25A3%2585%25E6%25B8%2585%25E4%25BB%2593&page=',
    'http://list.mogujie.com/search?callback=?&cKey=15&fcid=50243&page=',
    'http://list.mogujie.com/search?callback=?&cKey=43&q=%25E5%258D%25AB%25E8%25A1%25A3&page=',
    'http://list.mogujie.com/search?callback=?&cKey=15&fcid=50258&page=',
    'http://list.mogujie.com/search?callback=?&cKey=43&q=%25E5%25BF%2583%25E6%259C%25BA%25E8%25A1%25AC%25E8%25A1%25AB&page=',
];

var flagNum = true;
var changUrl = dataUrl[0];
var longH = 0;

var startPoint = 0;//手指按下位置
var nowPoint = 0;//手指移动位置
var startEl = 0;//元素开始位置
var elTranslateY = 0;//元素偏移距离
var wrap = document.getElementById('wrap');

var cH = 0;

var oSelectName = document.querySelector('.store-box');

kankan(changUrl);
var allSelect1 = document.querySelector('.sel-content-out').children[0].children;
for(var i=0;i<allSelect1.length;i++){
    allSelect1[i].index = i;
    allSelect1[i].addEventListener('click',function(ev){
        // ev.stopPropagation();
        oSelectName.style.position = 'static';
        elTranslateY = -983;
        wrap.style.transform = 'translateY('+elTranslateY+'px)';
        pageNum = 0;
        flagNum = true;
        longH = 0;
        changUrl = dataUrl[this.index];
        for(var j=0;j<2;j++){
            allLi[j].innerHTML = '';
        }
        kankan(changUrl);
    },false);
}

function kankan(str){
var iurl = str + pageNum;
    $.getJSON(iurl,function(data){
        if(pd == true) {

            var data = data.result.wall.docs;
            for(var i = 0; i < data.length; i++) {
                var str = ' <div class="img-box"><img src="'+ data[i]["img"] +'" alt=""></div>\n' +
                    '                    <div class="content-div">\n' +
                    '                        <p><span class="hotPro">热卖</span>'+data[i]["title"] +'</p>\n' +
                    '                        <div class="content-div-in">\n' +
                    '                            <div class="img"></div>\n' +
                    '                            <div class="price">￥<span>'+data[i]["price"]+'</span></div>\n' +
                    '                            <div class="star"><span>'+data[i]["cfav"]+'</span>☆</div>\n' +
                    '                        </div>\n' +
                    '                    </div>';
                var oA = document.createElement('a');
                oA.href = 'javascript:;';
                oA.innerHTML = str;
                if(flagNum){
                    allLi[0].appendChild(oA);
                }else{
                    allLi[1].appendChild(oA);
                }
                flagNum = !flagNum;
            }
            pd = false;
            pageNum++;//严格控制按顺序加载每一页的资源
        }


        var index1 = getShort();
        longH = allLi[index1].offsetHeight +getTop(oUl);
        cH = longH - window.innerHeight;
        wrap.addEventListener('touchstart',function(ev){
            startPoint = ev.changedTouches[0].pageY;
            startEl = elTranslateY;
        },false);
        wrap.addEventListener('touchmove',function(ev){
            nowPoint = ev.changedTouches[0].pageY;
            var disX = nowPoint - startPoint;//手指滑动的距离

            elTranslateY = startEl + disX;

            if(elTranslateY >= 0){
                elTranslateY = 0;
            }
            if(Math.abs(elTranslateY) >= 1020){
                oSelectName.style.position = 'fixed';
                oSelectName.style.top  = (Math.abs(elTranslateY)) + 'px';
            }else{
                oSelectName.style.position = 'static';
            }
            this.style.transform = 'translateY('+ elTranslateY +'px)';
            if(Math.abs(elTranslateY) >= cH){
                kankan(changUrl);
            }
        },false);
    });
    pd = true;
}


//offsetTop:与当前元素最近的经过定位(position不等于static)的父级元素
function getTop (obj){
    var iTop = 0;
    while (obj){
        iTop += obj.offsetTop;
        obj = obj.offsetParent;
    }
    return iTop;
}

//找高度最小的li
function getShort(){
    var short = 0;
    var oLi = allLi[0];
    // console.log(allLi[0].offsetHeight,oLi.offsetHeight);
    for(var i=0;i<2;i++){
        if(oLi.offsetHeight >allLi[i].offsetHeight){
            short = i;
            oLi = allLi[i];
        }
    }
    return short;//返回最短li的索引值
}





