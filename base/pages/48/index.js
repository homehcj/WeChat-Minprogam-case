// pages/48/index.js
Page({
    data: {
        flg:false
    },
    onClick(){
        var that=this
        this.setData({flg:true})
        var timer=setInterval(() => {
            that.setData({flg:false})
            console.log(that.data.flg)
            //若要演示错误做法请将下面这句代码注释
            clearInterval(timer)
        }, 5000,timer);
        //请理解同步与异步区别，下面注释的是一种错误销毁定时器的做法，这样定时器将无法工作
        //clearInterval(timer)
        
    }
})