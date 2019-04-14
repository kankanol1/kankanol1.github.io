
var allSel2 = document.querySelectorAll('#store .sel-content .sel-content-box');

for(var i=0;i<allSel2.length;i++){
    var allHalf = allSel2[i].children;
    for(var j = 0;j< allHalf.length;j++){
        allHalf[j].index = j;
        allHalf[j].addEventListener('click',function(ev){
            ev.stopPropagation();
            var parent = this.parentElement.children;
            for(var k=0;k<parent.length;k++){
                parent[k].className = '';
            }
            this.className = 'activea';
        },false);
    }
}





