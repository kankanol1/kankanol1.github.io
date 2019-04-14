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