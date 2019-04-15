







var list=[
    //假数据
    {
        title:'学习学习学习',
        isChecked:true
    },
    {
        title:'运动运动运动',
        isChecked:false
    },

];

var app = new Vue({
    el: '.main',
    data:{
        list,
        itemData:'',
        dbTab:false,
        editV:'',
    },
    methods:{
        addTodo(ev){//向数组中添加一项数据

            /*if(ev.keyCode == 13){
                //方法二操作dom 的 vue 主要用于操作数据的
                this.list.push({
                    title:ev.target.value,
                    isChecked: false,
                });
                this.item = '';

                //方法一
                this.list.push({
                    title:this.item,
                    isChecked: false,
                });
                this.item = '';
            }*/

            //按键修饰符
            //v-on:keyup.enter="addTodo"
            //v-on:keyup.13="addTodo"
            /*    this.list.push({
                title:ev.target.value,
                isChecked: false,
            });*/

            //能不操作dom就尽量不操作dom

            this.list.push({
                title:this.itemData,
                isChecked: false,
                dbl:false,
                editV:''

            });
            this.itemData = '';
        },
        deleteTodo (arg,i) {
            //删除
            // this.list.splice(i,1);

            //indexOf 方法删除数组元素
            // var n = this.list.indexOf(arg);
            this.list.splice(i,1);

        },
        dblFun(i){
            this.list[i].dbl = true;
        },
        editF(i){
                this.list[i].dbl = false;
                this.list[i].title = this.editV;
                this.editV = '';


        },
        exitF(i){
            this.list[i].dbl = false;
        }
    },
    computed:{

    }

});