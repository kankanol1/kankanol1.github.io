window.onscroll = function () {

    let scrollTop = document.documentElement.scrollTop || document.body.scrollTop;

    if (document.querySelectorAll('#product .row .item').length) {
        let oDemoLi = document.querySelectorAll('#product .row .item');
        // console.log(oDemoLi);
        oDemoLi[0].style.left = 0;
        oDemoLi[0].style.opacity = 1;
        oDemoLi[0].style.transition = '1.5s';
        for (let i = 1; i < oDemoLi.length; i++) {
            if (scrollTop + document.documentElement.clientHeight - 200 > oDemoLi[i].offsetTop) {
                oDemoLi[i].style.left = 0;
                oDemoLi[i].style.opacity = 1;
                oDemoLi[i].style.transition = '2s';

            }
        }
        // console.log(100);

        if (scrollTop > 100) {
            $(connectBox).fadeIn(1000);
            //console.log(100);
        }

    }

    if (scrollTop > 100) {
        $(connectBox).fadeIn(1000);
        // console.log(100);

    }


};
