

var oA = document.querySelector('.bottom').children;
for(var i=0;i<oA.length;i++){
    oA[i].addEventListener('touchstart',function(){
        window.location.href =this.getAttribute('data-href');
        console.log(this.getAttribute('data-href'));
    },false);
}

var allImg;
var allImg2;

//函数立即执行
(function () {
    var oBtn = document.querySelector('.header .back');
    oBtn.addEventListener('click', function () {
        window.history.go(-1);
    }, false);
    var oWrap = document.querySelector('.wrap');
    var page = 1;
    var iurl = 'https://list.mogujie.com/search?cKey=h5-cube&fcid=50004&_version=1&pid=&q=&cpc_offset=0&_=1536632021418&callback=kankan&page=';
    // var kankan =
    jsonP(iurl);
    function jsonP(url) {
        url += page++;
        var oScript = document.createElement('script');
        oScript.className = 'data' + page;
        // console.log(page);
        oScript.src = url;
        document.body.appendChild(oScript);
    }
    var n = 0;//图片加载位置
    window.addEventListener('scroll', function () {
        var seeHeight = document.documentElement.clientHeight;//可视区域高度
        var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
        for (var i = n; i < allImg.length; i++) {
            if (allImg[i].offsetTop < seeHeight + scrollTop) {
                if (allImg[i].getAttribute('src') == '') {
                    allImg[i].src = allImg[i].getAttribute('data-url');
                    allImg2[i].src = allImg2[i].getAttribute('data-url');
                }
                n = i + 1;
            }
        }
        if ((oWrap.offsetHeight - document.documentElement.clientHeight) < window.scrollY) {
            jsonP(iurl, kankan);
        }
    });
})();

//回调函数
function kankan(data) {
    var oBody = document.querySelector('.wrap .s-body');
    var oDiv = oBody.children;
    var data = data.result.wall.docs;
    // console.log(data);
    for (let i = 0; i < data.length; i++) {
        var oList = data[i].props;

        var oA = document.createElement('a');
        oA.href = data[i].clientUrl;
        oA.target = '_blank';
        var oImg = document.createElement('img');
        oImg.setAttribute('data-url', data[i].img);// = data[i].img;
        oImg.src = '';
        var oDiv0 = document.createElement('div');
        oDiv0.className = 'img';
        oDiv0.appendChild(oImg);
        var oDiv1 = document.createElement('div');
        oDiv1.className = 'd-one';
        for (var j = 0; j < oList.length; j++) {
            if (j == 6) {
                j = oList.length - 1;
            }
            var newDiv = document.createElement('div');
            newDiv.innerHTML = oList[j];
            oDiv1.appendChild(newDiv);
        }
        var oDiv2 = document.createElement('div');
        oDiv2.className = 'd-three';
        oDiv2.innerHTML = '<p class="p1">￥<span>' + data[i].price + '</span></p><p class="p2"><span>' + data[i].cfav + '</span>☆</p>';

        oA.appendChild(oDiv0);
        oA.appendChild(oDiv1);
        oA.appendChild(oDiv2);

        if (i % 2) {
            oDiv[0].appendChild(oA);
        } else {
            oDiv[1].appendChild(oA);
        }
    }
    allImg = oDiv[0].querySelectorAll('img');
    allImg2 = oDiv[1].querySelectorAll('img');
    allImg[0].src = allImg[0].getAttribute('data-url');
    allImg2[0].src = allImg2[0].getAttribute('data-url');
}



