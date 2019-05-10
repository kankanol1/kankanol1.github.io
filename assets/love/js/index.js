
    $(document).ready(function(){
    //卷轴展开效果
    $(".l-pic-index").animate({'left':'8px'},1500);
    $(".r-pic-index").animate({'right':'59px'},1500);
    $(".l-bg-index").animate({'width':'432px','left':'73px'},1500);
    $(".r-bg-index").animate({'width':'432px','left':'504px'},1500,function(){
    $(".main-index").fadeIn(1500);
});


});
    let cW = window.innerWidth - 50;
    let cH = window.innerHeight -50;
    console.log(cW,cH);
    let imgL = [
    './img/i.svg',
    './img/xin.svg',
    './img/u.svg',
    './img/you.svg',
    ];
    let speed = 1;
    let l = 30;
    heartL = [];
    for (let i=0;i<20;i++){
    let oImg = document.createElement('img');

    oImg.src = imgL[i%imgL.length];
    oImg.calssName = 'fImg';
    oImg.style.left = Math.random() * cW + "px";
    oImg.style.top = Math.random() * cH + "px";
    oImg.style.position = 'fixed';
    oImg.style.width = l + 'px';
    oImg.style.width = l + 'px';
    oImg.style.zIndex = 10;
    oImg.setAttribute('dataX',(0.5-Math.random()) * speed );
    oImg.setAttribute('dataY',(0.5-Math.random()) * speed );

    heartL.push(oImg);
    document.querySelector('body').appendChild(oImg);
}

    setInterval(function(){
    for(let i=0;i<heartL.length;i++){
    // console.log(parseFloat(heartL[i].style.left),parseFloat(heartL[i].getAttribute('dataX')));
    heartL[i].style.left =  parseFloat(heartL[i].style.left) + parseFloat(heartL[i].getAttribute('dataX'))+ 'px';
    heartL[i].style.top =  parseFloat(heartL[i].style.top)+ parseFloat(heartL[i].getAttribute('dataY')) + 'px';
    if(parseFloat(heartL[i].style.left)<0 || parseFloat(heartL[i].style.left)>cW){
    heartL[i].setAttribute('dataX',- parseFloat(heartL[i].getAttribute('dataX')));
}
    if(parseFloat(heartL[i].style.top)<0 || parseFloat(heartL[i].style.top)>cH){
    heartL[i].setAttribute('dataY',- parseFloat(heartL[i].getAttribute('dataY')));
}

}

},20);





