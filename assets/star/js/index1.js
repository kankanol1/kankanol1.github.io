




$(function(){



    /*------------------------------------------轮播-------------------------------------------------------*/
   /* $(window).on('resize',function(){
        // 1获取宽
        var clientW = $(window).width();

        //2 设定临界值   如果 屏幕大于800px 就返回 true  否则  false
        var isShowBigImage = clientW  > 800;

        //3找到所有的item
        var $allItem = $('#s1 .item');

        //4 遍历循环

        $allItem.each(function(index,item){
            //设置src
            var src = isShowBigImage ? $(item).data('lg-img') : $(item).data('sm-img');
            var imgUrl = 'url('+ src +')';
            //插入网页
            $(item).css('backgroundImage',imgUrl);

            if(!isShowBigImage){
                var $img = '<img src="'+ src +'" />';
                $(item).empty().append($img);
            }else {
                $(item).empty();
            }

        });

    });*/



    $(window).on('resize',function(){
       var clientW = $(window).width();

       var isShowImage = clientW > 800;

       var $allItem = $('#s1 .item');

       $allItem.each(function(index,item){

           var src = isShowImage ? $(item).data('lg-img') : $(item).data('sm-img');

           var isUrl = 'url("'+ src +'")';

           $(item).css('backgroundImage',isUrl);

           if(!isShowImage){
               var $img = '<img src="'+ src +'">';
               $(item).empty().append($img);
           }else{
               $(item).empty();
           }

       });

    });
    $(window).trigger('resize');

    /*------------------------------------------/轮播-------------------------------------------------------*/

    //   2    提示框
    $(function () {
        $('[data-toggle="tooltip"]').tooltip();
    });

    //   3    弹出框
    $(function () {
        $('[data-toggle="popover"]').popover();
    });


    //   4      点击滚动效果
    //找到被点击的元素
    var allLi = $('#header .nav>li');
    // console.log(allLi);
    $(allLi[0]).on('click',function(){
        $('html,body').stop().animate({
            scrollTop:$('#lk-about').offset().top,
        },1000);
    });

    $(allLi[1]).on('click',function(){
        $('html,body').stop().animate({
            scrollTop:$('#lk-product').offset().top,
        },1000);
    });

    $(allLi[2]).on('click',function(){
        $('html,body').stop().animate({
            scrollTop:$('#lk-lesson').offset().top,
        },1000);
    });
    $(allLi[3]).on('click',function(){
        $('html,body').stop().animate({
            scrollTop:$('#lk-link').offset().top,
        },1000);
    });

    // 5  明星产品滚动问题

    $(window).on('resize',function(){
       var $ul1 = $('#lk-product .nav');
       var $allLi1 = $ul1.children('li').not('.pull-right');
       var totalW = 0;
        $allLi1.each(function(index,item){
            totalW += $(item).width();
        });

        if($ul1.parent().width() < totalW){
            $ul1.css({
                width: totalW + 'px'
            });
        }else{
            $ul1.removeAttr('style');
        }

    });










});