// pages/45/index.js
Page({
    /**
     * 页面的初始数据
     */
    data: {
        flg:false,
        progress:0
    },
    start(){
        //设置一个定时触发器https://developers.weixin.qq.com/miniprogram/dev/reference/api/setInterval.html//是一个异步函数
        var that=this
        var a=setInterval(function(){
            console.log(a)
            if(that.data.progress<=100){
                that.setData({progress:++that.data.progress})
            }
            else{
                that.setData({flg:true})
                clearInterval(a)
            }
        },50,a);
    },
    
})