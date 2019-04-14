
/*
*       作者: kankan
*       时间：2018.09.15
*       项目：蘑菇街实例训练
*
* */




//头部和尾部js
(function(){
    var oA = document.querySelector('.bottom').children;
    for(var i=0;i<oA.length;i++){
        oA[i].addEventListener('touchstart',function(){
            window.location.href =this.getAttribute('data-href');
            console.log(this.getAttribute('data-href'));
        },false);
    }
    var oInput = document.querySelector('.search-form input');
    oInput.addEventListener('touchstart',function(ev){
        ev.stopPropagation();
    },false);

})();
//倒计时
(function(){
    var date,
        hours,
        minutes,
        seconds;
    var oHours = document.getElementsByClassName('hours')[0];
    var oMinutes = document.getElementsByClassName('minutes')[0];
    var oSeconds = document.getElementsByClassName('seconds')[0];
    setInterval(function(){
        date = new Date();
        hours = date.getHours();
        minutes = date.getMinutes();
        seconds = date.getSeconds();
        oHours.innerHTML = hours;
        oMinutes.innerHTML = minutes;
        oSeconds.innerHTML = seconds;
    },1000);

})();
//加载圆形图数据
(function(){
    var iurl = 'https://mce.mogucdn.com/jsonp/multiget/3?pids=106930%2C117706&appPlat=m&callback=?';
    kankan(iurl);
    var oSelect0Json = document.querySelectorAll('.select');
    function kankan(str){
        $.getJSON(str,function(data){
            var data = data.data["106930"]['list'];
            for(var i = 0; i < data.length; i++) {
                var oA = document.createElement('a');
                var str = '<img src="'+data[i]['image']+'" alt=""><p>'+data[i]["title"]+'</p>';
                oA.href = 'javascript:;';
                oA.className = 'select-a';
                oA.innerHTML = str;
                if(i<5){
                    oSelect0Json[0].appendChild(oA);

                }else{
                    oSelect0Json[1].appendChild(oA);

                }
            }
        });
    }
})();
//加载第二个手动轮播数据
(function(){
    var data = {"data":{"list":[{"image":"http://s3.mogucdn.com/mlcdn/1689c6/180829_4ee5aj56ia12c514kf13hd99hibga_450x450.jpg","itemAdvantageDesc":"秋小白鞋清仓","pintuanAvatar":"-1","item_id":"1m75zhy","discountPrice":"36.00","savePrice":"63","acm":"3.mce.1_4_1m75zhy.107185.81259-69042.A06fEr2h0OgNV.sd_117_119-t_-pos_0-asn_17723324-m_15140174","title":"秋季休闲小白鞋","ptClassify":"2","normal_item_Url":"//h5.mogujie.com/detail-normal/index1.html?itemId=1m75zhy","pintuanItemSale":"470","pintuanAvatarList":"https://s3.mogucdn.com/mlcdn/5abf39/180809_72iab38l0c7bhg405j2d5ag8bb5fh_100x100.jpg,https://s11.mogucdn.com/mlcdn/5abf39/180828_6bef4ak6alj2hh147i3j510h953jj_132x132.jpg,https://s5.mogucdn.com/p2/170318/upload_7g0a8dga5cckg1c950cidkdjja4i4_960x960.jpg","price":"99.00","discountPer":"3.7","item_h5_url":"http://h5.mogujie.com/detail-pintuan/index1.html?itemId=1m75zhy&activityId=1l3quo"},{"image":"http://s11.mogucdn.com/mlcdn/1689c6/180816_39176e4blg4hke2eb548jcg143i60_450x450.jpg","itemAdvantageDesc":"送腰带牛仔裤","pintuanAvatar":"-1","item_id":"1m74xy0","discountPrice":"39.00","savePrice":"59","acm":"3.mce.1_4_1m74xy0.107185.81259-69042.A06fEr2h0OgNV.sd_117_119-t_-pos_1-asn_17545279-m_15139788","title":"卷边高腰牛仔裤","ptClassify":"2","normal_item_Url":"//h5.mogujie.com/detail-normal/index1.html?itemId=1m74xy0","pintuanItemSale":"855","pintuanAvatarList":"https://s11.mogucdn.com/mlcdn/5abf39/170706_8fa353acafkbac3leak39bjck5aal_640x640.jpg,https://s11.mogucdn.com/b7/avatar/140507/k19ps_kqzhe43iozbdk2cugfjeg5sckzsew_400x400.jpg,https://s11.mogucdn.com/mlcdn/5abf39/180402_0g17k0dbc0lfgl725ff6f216a6fdb_100x100.jpg","price":"98.58","discountPer":"4.0","item_h5_url":"http://h5.mogujie.com/detail-pintuan/index1.html?itemId=1m74xy0&activityId=1kw43a"},{"image":"http://s11.mogucdn.com/mlcdn/1689c6/180805_7ca158c441h6a5kc3iikbfe72kbi7_450x450.jpg","itemAdvantageDesc":"赠送运费险","pintuanAvatar":"-1","item_id":"1k9qwbw","discountPrice":"29.90","savePrice":"70","acm":"3.mce.1_4_1k9qwbw.107185.81259-69042.A06fEr2h0OgNV.sd_117_119-t_-pos_2-asn_17548548-m_15121461","title":"格子衬衫外套","ptClassify":"2","normal_item_Url":"//h5.mogujie.com/detail-normal/index1.html?itemId=1k9qwbw","pintuanItemSale":"1575","pintuanAvatarList":"https://s5.mogucdn.com/mlcdn/5abf39/180811_29h3ck6j8c92f172iegi2fidhe0ki_400x400.jpg,https://s5.mogucdn.com/mlcdn/5abf39/180811_29h3ck6j8c92f172iegi2fidhe0ki_400x400.jpg,https://s5.mogucdn.com/mlcdn/5abf39/180828_2lblf617c3l31j292e8j7024c3e7d_100x100.jpg","price":"100.00","discountPer":"3.0","item_h5_url":"http://h5.mogujie.com/detail-pintuan/index1.html?itemId=1k9qwbw&activityId=1kw94w"},{"image":"http://s11.mogucdn.com/mlcdn/1689c6/180616_5165f66l3b651eh1dhic5l7b9f0j6_450x450.jpg","itemAdvantageDesc":"全国包邮无忧","pintuanAvatar":"-1","item_id":"1khrpsm","discountPrice":"29.90","savePrice":"50","acm":"3.mce.1_4_1khrpsm.107185.81259-69042.A06fEr2h0OgNV.sd_117_119-t_-pos_3-asn_17744211-m_15139864","title":"百搭小白鞋女","ptClassify":"2","activityAbleSale":"227","normal_item_Url":"//h5.mogujie.com/detail-normal/index1.html?itemId=1khrpsm","pintuanItemSale":"160","pintuanAvatarList":"https://s11.mogucdn.com/mlcdn/5abf39/180516_1addlilb0ij397lhhf0jjfd25fhea_100x100.jpg,https://s11.mogucdn.com/mlcdn/5abf39/180516_1addlilb0ij397lhhf0jjfd25fhea_100x100.jpg,https://s11.mogucdn.com/mlcdn/5abf39/180516_1addlilb0ij397lhhf0jjfd25fhea_100x100.jpg","price":"80.00","discountPer":"3.8","item_h5_url":"http://h5.mogujie.com/detail-pintuan/index1.html?itemId=1khrpsm&activityId=1l4n32"},{"image":"http://s11.mogucdn.com/mlcdn/1689c6/180731_0ikhehl748i4804l38b1h565ja169_450x450.jpg","itemAdvantageDesc":"五折促销价","pintuanAvatar":"-1","item_id":"1lu4le2","discountPrice":"38.80","savePrice":"89","acm":"3.mce.1_4_1lu4le2.107185.81259-69042.A06fEr2h0OgNV.sd_117_119-t_-pos_4-asn_17648885-m_15121471","title":"韩国蜂蜜面膜","ptClassify":"2","normal_item_Url":"//h5.mogujie.com/detail-normal/index1.html?itemId=1lu4le2","pintuanItemSale":"1287","pintuanAvatarList":"https://s3.mogucdn.com/mlcdn/5abf39/180828_3597ke90040gacl0b0e5e6i5cigba_400x400.jpg,https://s5.mogucdn.com/mlcdn/5abf39/180824_2d2j01gih365j82kik66dc9bc21g2_100x100.jpg","price":"128.00","discountPer":"3.1","item_h5_url":"http://h5.mogujie.com/detail-pintuan/index1.html?itemId=1lu4le2&activityId=1l0jz6"},{"image":"http://s3.mogucdn.com/mlcdn/1689c6/180828_4hkbj26j5ea242a5026ikg4320lkh_450x450.jpg","itemAdvantageDesc":"甜美卡通睡衣","pintuanAvatar":"-1","item_id":"1m78gow","discountPrice":"38.80","savePrice":"61","acm":"3.mce.1_4_1m78gow.107185.81259-69042.A06fEr2h0OgNV.sd_117_119-t_-pos_5-asn_17711940-m_15140324","title":"新款丝绸家居服","ptClassify":"2","normal_item_Url":"//h5.mogujie.com/detail-normal/index1.html?itemId=1m78gow","pintuanItemSale":"194","pintuanAvatarList":"https://s5.mogucdn.com/mlcdn/5abf39/180831_4c2l5157kld5dbkd519575535822c_100x100.jpg,https://s11.mogucdn.com/mlcdn/5abf39/171105_11kcl929aac704cidf78hf91827c9_640x640.jpg,https://s11.mogucdn.com/mlcdn/5abf39/180829_7a7l4g8ka6a80bacj423652lbjd7g_132x88.jpg","price":"99.86","discountPer":"3.9","item_h5_url":"http://h5.mogujie.com/detail-pintuan/index1.html?itemId=1m78gow&activityId=1l39a8"},{"image":"http://s11.mogucdn.com/mlcdn/1689c6/180802_5diaa80l264cj634k9fgg219al02k_450x450.jpg","itemAdvantageDesc":"防晒2件套","pintuanAvatar":"-1","item_id":"1m3uny4","discountPrice":"25.00","savePrice":"64","acm":"3.mce.1_4_1m3uny4.107185.81259-69042.A06fEr2h0OgNV.sd_117_119-t_-pos_6-asn_17745768-m_15139817","title":"抖音同款2件套","ptClassify":"2","normal_item_Url":"//h5.mogujie.com/detail-normal/index1.html?itemId=1m3uny4","pintuanItemSale":"3044","pintuanAvatarList":"https://s11.mogucdn.com/mlcdn/5abf39/171106_4hc020dk0l8b5920i6l8hiff22990_100x100.png,https://s5.mogucdn.com/mlcdn/5abf39/180829_362j1b3545a9377kj9c7f59c23c2h_132x132.jpg","price":"89.00","discountPer":"2.9","item_h5_url":"http://h5.mogujie.com/detail-pintuan/index1.html?itemId=1m3uny4&activityId=1l4phk"},{"image":"http://s3.mogucdn.com/mlcdn/1689c6/180827_7igkagf14d01dh26jd7fkf08agl71_450x450.jpg","itemAdvantageDesc":"河北卫视推荐","pintuanAvatar":"-1","item_id":"1m0dako","discountPrice":"17.90","savePrice":"80","acm":"3.mce.1_4_1m0dako.107185.81259-69042.A06fEr2h0OgNV.sd_117_119-t_-pos_7-asn_17678568-m_15140842","title":"滋润不掉色口红","ptClassify":"2","normal_item_Url":"//h5.mogujie.com/detail-normal/index1.html?itemId=1m0dako","pintuanItemSale":"1410","pintuanAvatarList":"https://s11.mogucdn.com/new1/v1/bdefaultavatar/01.jpg,https://s11.mogucdn.com/new1/v1/bdefaultavatar/01.jpg,https://s3.mogucdn.com/mlcdn/5abf39/180805_2kkhlffb065gh75c08759abb1j2e1_132x132.jpg","price":"98.00","discountPer":"1.9","item_h5_url":"http://h5.mogujie.com/detail-pintuan/index1.html?itemId=1m0dako&activityId=1l1ts8"},{"image":"http://s3.mogucdn.com/mlcdn/1689c6/180810_4l528i8ack2ii9c7k30fkh096k489_450x450.jpg","itemAdvantageDesc":"去黑眼圈补水","pintuanAvatar":"-1","item_id":"1kg3hr0","discountPrice":"29.90","savePrice":"101","acm":"3.mce.1_4_1kg3hr0.107185.81259-69042.A06fEr2h0OgNV.sd_117_119-t_-pos_8-asn_17716775-m_15139814","title":"抹茶滋润眼贴","ptClassify":"2","normal_item_Url":"//h5.mogujie.com/detail-normal/index1.html?itemId=1kg3hr0","pintuanItemSale":"6230","pintuanAvatarList":"https://s3.mogucdn.com/mlcdn/5abf39/180421_2k7abalca5i51bi5kfjjl4g11g077_400x400.jpg,https://s5.mogucdn.com/mlcdn/5abf39/170614_28k2ech1cc2cjbg8aeckajgj4d8k2_100x100.png,https://s5.mogucdn.com/p2/161111/upload_167c94jl659ge93dhbdk86a98cdkd_100x100.jpg","price":"131.06","discountPer":"2.3","item_h5_url":"http://h5.mogujie.com/detail-pintuan/index1.html?itemId=1kg3hr0&activityId=1l3gqu"}],"isEnd":false,"nextPage":2,"context":{"currentTime":1535690018}}};
    data = data.data.list;
    var oSelect1json = document.querySelectorAll('#s-slider .sli-box ul');
    for(var i=0;i<data.length;i++){
        var str = '<a href="javascript:;">\n' +
            '                        <div class="img">\n' +
            '                            <img src="'+ data[i]["image"] +'" class="img" alt="">\n' +
            '                            <img src="img/bipin.png" alt="">\n' +
            '                            <p></p>\n' +
            '                        </div>\n' +
            '                        <div class="text">\n' +
            '                            <p class="name">'+data[i]["title"]+'</p>\n' +
            '                            <p class="price">￥'+data[i]["discountPrice"]+'<span>￥'+data[i]['price']+'</span></p>\n' +
            '                        </div>\n' +
            '                        <div class="tuan"><p class="t-text">去拼团</p></div>\n' +
            '                        <img class="sli-li-top" src="img/bipin.png" alt="" >\n' +
            '                        <div class="sli-li-p"><p>'+data[i]["itemAdvantageDesc"]+'</p></div></a>';
        var oLi = document.createElement('li');
        oLi.className = 'sli-li';
        oLi.innerHTML = str;
        if(i<3){
            oSelect1json[0].appendChild(oLi);
        }else if(i<6){
            oSelect1json[1].appendChild(oLi);
        }else{
            oSelect1json[2].appendChild(oLi);
        }
    }

    //手动轮播js
    var oCar = document.querySelector('#s-slider'),
        oList = document.querySelector('.sli-box'),
        aSpan = document.querySelectorAll('.ol-btn>span'),
        disX = 0,//手指按下去的坐标
        listL = 0;//当前按下的ul 的left值
    var mark ;//标记左滑还是右hua
    var w = oList.children[0].clientWidth;//元素内部的宽度
    var flag = aSpan[0];//标记图片对应的按钮，
    var len = 0;//用于存储ul 中图片的宽度
    oList.innerHTML += oList.innerHTML; //相当于复制了一份ul中的数组然后又放进去
    len = oList.children.length;
    // console.log(len);
    oCar.style.width = len * w + 'px';
    oList.addEventListener('touchstart',start,false);
    oList.addEventListener('touchmove',move,false);
    oList.addEventListener('touchend',end,false);
    function start(ev){
        var e = ev.changedTouches[0];
        disX = e.pageX;//返回鼠标指针的位置，相对于文档左边缘的位置
        // oList.style.transition = 'none';
        //在手指按下去的时候，要知道当前点击的是第几张图，
        //如果是第一张 改变ul的left值
        var num = Math.round(this.offsetLeft / w);

        if(num ==0){
            num = aSpan.length;
            oList.style.left = - num * w + 'px';
        }
        if( -num == len -1){
            num = aSpan.length - 1;
            oList.style.left = -num * w + 'px';
        }
        listL = this.offsetLeft;
    }
    function move(ev){
        var e = ev.changedTouches[0];
        oList.style.left =  e.pageX - disX + listL + 'px';
        mark = e.pageX - disX;
    }
    function end(){
        // console.log(mark);
        if(mark > 0){
            var num = Math.round(oList.offsetLeft / w +1/6);
        }else {
            var num = Math.round(oList.offsetLeft / w -1/6);
        }
        flag.className = '';
        aSpan[-num % 3].className = 'active';
        flag = aSpan[-num % 3];
        oList.style.left = num * w +'px';
        listL = num * w;
    }
})();
//加载精品筛选下面左右滑动的数据
(function(){
    var iurl = 'https://mce.mogucdn.com/jsonp/multiget/3?pids=106930%2C117706&appPlat=m&callback=?';

    var oSelectNameJson = document.querySelector('.selectbox');
    // var allSelect = oSelectNameJson.children;
    var allSel2 = document.querySelectorAll('#store .sel-content .sel-content-box');
    var flag2 = allSel2[0];

    function kankan(str){
        $.getJSON(str,function(data){
            var data = data.data["117706"]['list'];
            var flag1;

            for(var i = 0; i < data.length; i++) {
                var oSpan = document.createElement('span');
                if(i==0){
                    oSpan.className = 'sel-active';
                    flag1 = oSpan;
                }
                oSpan.innerHTML = data[i].cateName;

                /*  oSpan.addEventListener('touchstart',function(ev){
                      ev.stopPropagation();
                  },true);*/
                oSpan.index = i;
                oSpan.addEventListener('touchstart',function(ev){
                    // ev.stopPropagation();
                    var num = this.index;
                    flag1.classList.remove('sel-active');
                    this.classList.add('sel-active');
                    flag1 = this;
                    flag2.style.display = 'none';
                    allSel2[this.index].style.display = 'inline-block';
                    var parent = allSel2[this.index].children;
                    for(var k=0;k<parent.length;k++){
                        parent[k].className = '';
                    }
                    allSel2[this.index].children[0].className = 'activea';
                    flag2 = allSel2[num];
                },false);
                oSelectNameJson.appendChild(oSpan);
            }
        });
    }
    var startPoint2 = 0;//手指按下位置
    var nowPoint2 = 0;//手指移动位置
    var startEl2 = 0;//元素开始位置
    var elTranslateY2 = 0;//元素偏移距离
    oSelectNameJson.addEventListener('touchstart',function(ev){
        startPoint2 = ev.changedTouches[0].pageX;
        startEl2 = elTranslateY2;
    },true);
    oSelectNameJson.addEventListener('touchmove',function(ev){
        nowPoint2 = ev.changedTouches[0].pageX;
        var disX = nowPoint2 - startPoint2;//手指滑动的距离
        elTranslateY2 = startEl2 + disX;
        if(elTranslateY2 >=0){
            elTranslateY2 = 0;
        }else if(elTranslateY2 <= -(oSelectNameJson.offsetWidth-document.documentElement.clientWidth)){
            elTranslateY2 = -(oSelectNameJson.offsetWidth-document.documentElement.clientWidth);
        }
        this.style.transform = 'translateX('+ elTranslateY2 +'px)';
    },false);
    kankan(iurl);

})();
//body体数据加载
// ha();
// function ha(){
    var oUl = document.querySelector('.content-ul');
    var allLi = oUl.children;
    var pageNum = 1;
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

    var n = 0;//懒加载计数
    var oLiImg1;//oLi元素
    var oLiImg2;//oLi元素
    var oStore = document.querySelector('.store-title');


    var flagNum = true;//
    var changUrl = dataUrl[0];//初始化数据
    var longH = 0;//需要判断加载数据的阈值
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
        allSelect1[i].addEventListener('touchstart',function(ev){


            oSelectName.style.position = 'static';
            //提高用户体验
            if(Math.abs(elTranslateY) > getTop(oStore)){
                elTranslateY = -(getTop(oStore) + oStore.offsetHeight);
                wrap.style.transform = 'translateY('+elTranslateY+'px)';
            }
            //图片位置初始化
            n=0;
            //数据初始化
            pageNum = 1;
            //
            flagNum = true;
            longH = 0;
            changUrl = dataUrl[this.index];
            for(var j=0;j<2;j++){
                allLi[j].innerHTML = '';
            }
            kankan(changUrl);
        },true);
    }

    function kankan(str){
        var iurl = str + pageNum;
        $.getJSON(iurl,function(data){
            var data = data.result.wall.docs;
            for(var i = 0; i < data.length; i++) {
                var str = ' <div class="img-box"><img data-src="'+ data[i]["img"] +'" src="" alt=""></div>\n' +
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
            var index1 = getShort();
            longH = allLi[index1].offsetHeight +getTop(oUl);
            cH = longH - window.innerHeight;
            pageNum++;//严格控制按顺序加载每一页的资源
            // oLiImg1 = allLi[0].querySelectorAll('div img');
            // oLiImg2 = allLi[1].querySelectorAll('div img');
        });

    }

    //放外面试试 呀 找不到了，好尴尬啊
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
        if(Math.abs(elTranslateY) >= getTop(oStore)+oStore.offsetHeight){
            oSelectName.style.position = 'fixed';
            oSelectName.style.top  = (Math.abs(elTranslateY)) + 'px';
        }else{
            oSelectName.style.position = 'static';
        }
        this.style.transform = 'translateY('+ elTranslateY +'px)';
        var seeHeight = document.documentElement.clientHeight || document.body.clientHeight;
        oLiImg1 = allLi[0].querySelectorAll('div img');
        oLiImg2 = allLi[1].querySelectorAll('div img');
        // console.log(fasd);
        for (var i = n; i < oLiImg1.length-1; i++) {
            if (getTop(oLiImg1[i])< seeHeight + Math.abs(elTranslateY)) {
                if (oLiImg1[i].getAttribute('src') == "") {
                    oLiImg1[i].src = oLiImg1[i].getAttribute('data-src');
                    oLiImg2[i].src = oLiImg2[i].getAttribute('data-src');
                }
                n = i + 1;
            }
        }
    },false);
    wrap.addEventListener('touchend',function(){

        var clientH =document.documentElement.clientHeight || document.body.clientHeight;
        if(Math.abs(elTranslateY) >= cH-clientH){
            kankan(changUrl);
        }
    });

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

// };
//2左右滑动
(function(){
    var startPointT = 0;
    var endXY = 0;
    var startToEnd = 0;
    var startXY = 0;//偏移量
    var oSelConOut = document.querySelector('.sel-content-out');
    oSelConOut.addEventListener('touchstart',function(ev){
        startPointT = ev.changedTouches[0].pageX;
        startXY = endXY;
    },true);
    oSelConOut.addEventListener('touchmove',function(ev){
        startToEnd = ev.changedTouches[0].pageX - startPointT;
        endXY = startToEnd + startXY;
        if(endXY  >= 0){
            endXY = 0;
        }else if(endXY <= -(this.offsetWidth-window.innerWidth)){
            endXY = -(this.offsetWidth-window.innerWidth);
        }
        this.style.transform = 'translateX('+ endXY +'px)';
    },true);

})();
//事件添加精品下面第二行左右移动
(function(){
    var allSel2 = document.querySelectorAll('#store .sel-content .sel-content-box');
    for(var i=0;i<allSel2.length;i++){
        var allHalf = allSel2[i].children;
        for(var j = 0;j< allHalf.length;j++){
            allHalf[j].index = j;
            allHalf[j].addEventListener('touchstart',function(ev){
                // ev.stopPropagation();
                var parent = this.parentElement.children;
                for(var k=0;k<parent.length;k++){
                    parent[k].className = '';
                }
                this.className = 'activea';
            },false);
        }
    }

})();

/*
*       作者: kankan
*       时间：2018.09.15
*       项目：蘑菇街实例训练
*
* */