function cssTransform (element,attr,val) {
    //2声明变量 初始化
    if(!element.transform){
        element.transform = {};
    }

    //1.,判断一下我们获取韩式设置
    if(typeof val == 'undefined'){
        // if(arguments.length<3){

        if(!element.transform[attr]){

            switch (attr) {
                case 'scale':
                case 'scaleX':
                case 'scaleY':
                case 'scaleZ':
                    element.transform[attr] = 100;
                    break;
                default:
                    element.transform[attr] = 0;
            }
        }
        // console.log(element.transform[attr]);
        return element.transform[attr];
    }else{
        element.transform[attr] = val;
        //判断属性值，根据不同的值加上不同的单位
        var transformVal;
        var longStr = '';
        for(var s in element.transform){
            switch (s){
                case 'scale':
                case 'scaleX':
                case 'scaleY':
                case 'scaleZ':
                    transformVal = s + '(' + (element.transform[s]/100) + ')';
                    break;
                case 'rotate':
                case 'rotateX':
                case 'rotateY':
                case 'rotateZ':
                case 'skew':
                case 'skewY':
                case 'skewX':
                    transformVal = s + '(' + element.transform[s] + 'deg)';
                    break;
                default:
                    transformVal = s + '(' + element.transform[s] + 'px)';
            }
            longStr += transformVal  + ' ';
        }
        // console.log(longStr);
        element.style.transform = longStr;


    }

}