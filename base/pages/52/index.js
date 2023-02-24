// pages/52/index.js
var a=0
Page({
    data:{
        text:"",
        flg:true,
        flg1:false
    },

    aaa:function (delay, message) {
        var that=this
        return new Promise(function (resolve, reject) {
           a=setTimeout(function () {
                that.setData({
                    text: message
                })
                resolve(message);
            }, delay);
        });
    },
    onclick:function (){
        this.setData({flg1:true,flg: false})
        var that=this

        //写法1
        new Promise(function (resolve, reject) {
            a=setTimeout(function () {
                that.setData({
                    text: "First"
                })
                resolve("resolve1+First");
            }, 1000);
        }).then(function (e) {
            //then接受上一个resolve()
            console.log("第一个then打印"+e)
            return new Promise(function (resolve, reject) {
                a=setTimeout(function () {
                    that.setData({
                        text: "Second"
                    })
                    resolve("resolve2+Second");
                }, 4000);
            });
        }).then(function (e) {
            //then接受上一个resolve()
            console.log("第二个then打印"+e)
            a=setTimeout(function () {
                that.setData({
                    text: "Third",
                })
            }, 3000);
        });


        //简化一下
        //注意this和that在异步函数中的使用
        this.aaa(1000, "First").then(function (e) {
            console.log("e："+e+"\n"+"第一个then")
            return that.aaa(4000, "Second");
        }).then(function (e) {
            console.log("e："+e+"\n"+"第二个then")
            that.aaa(3000, "Third");
        });

        //再简化一下
        //函数也可以定义在函数里
        function print(delay, message) {
            return new Promise(function (resolve, reject) {
                setTimeout(function () {
                    console.log(message+"最后一种写法")
                    resolve();
                }, delay);
            });
        }
        //用async关键字定义函数      
        async function asyncFunc() {
            await print(1000, "First");
            await print(4000, "Second");
            await print(3000, "Third");
        }
        asyncFunc();        
    },
    reset(){
        clearTimeout(a)
        this.setData({flg:true,flg1:false})
    },
})