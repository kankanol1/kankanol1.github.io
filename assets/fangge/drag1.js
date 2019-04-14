
function drag(obj){
    //鼠标点击效果
    obj.onmousedown = function(ev){
    // obj.ontouchstart = function(ev){
        ev = ev || event;
        //初始鼠标到达元素左边界和上边界的值
        let cY = ev.clientY - obj.offsetTop;
        let cX = ev.clientX - obj.offsetLeft;
        if(obj.setCapture) obj.setCapture();
        document.onmousemove = function(ev){
        // document.ontouchmove = function(ev){
            ev = ev || event;
            let X = ev.clientX - cX;
            let Y = ev.clientY - cY;
            //边界检测
            if(X < 0){
                obj.style.left = "0px";
            } else if(X> 450 ){
                obj.style.left = 450 + "px";
            }else{
                obj.style.left = ev.clientX - cX + "px";
            }
            if(Y< 0){
                obj.style.top = "0px";
            } else if(Y > 450){
                obj.style.top = 450 + "px";
            }else{
                obj.style.top = ev.clientY - cY + "px";
            }
        };
        document.onmouseup = function(){
        // document.ontouchend = function(){
            document.onmousemove = null;
            // document.ontouchmove = null;
            let  oDivCenterT  = obj.offsetTop + obj.offsetHeight/2;
            let  oDivCenterL  = obj.offsetLeft + obj.offsetWidth/2;
            for(let j=0;j<10;j++){
                for(let i=0;i<10;i++){
                    let fangGeL = i*50 +25;
                    let fangGeT = j*50 +25;
                    let value = Math.sqrt(Math.pow(oDivCenterT-fangGeT,2) + Math.pow(oDivCenterL-fangGeL,2));
                    if(value<25*Math.sqrt(2)){
                        oDiv.style.top = fangGeT - 25 - j/11*14+"px";
                        oDiv.style.left = fangGeL - 25 - i/11*14 + "px";
                    }
                }
            }
            document.onmouseup = null;
            // document.ontouchend = null;
        };
        return false;
    };
}