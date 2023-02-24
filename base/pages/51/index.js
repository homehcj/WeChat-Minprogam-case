// pages/51/index.js
var a=0
Page({
    data:{
        text:"",
        flg:true,
        flg1:false
    },
    onclick:function (){
        this.setData({flg1:true,flg: false})
        var that=this
        a = setTimeout(function () {
            that.setData({
                text: "First"
            })
            a = setTimeout(function () {
                that.setData({
                    text: "Second"
                })
                a = setTimeout(function () {
                    that.setData({
                        text: "Third",
                    })
                }, 3000);
            }, 4000);
        }, 1000);
    },
    reset(){
        clearTimeout(a)
        this.setData({text:"",flg:true,flg1:false})
    }
})