// pages/4e/index.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        a:0,
        max:200,
        min:50,
        step:2
    },
    slider(e){
        console.log(e)
        this.setData({
            a:Math.floor(100*(e.detail.value-this.data.min)/(this.data.max-this.data.min))
        })
    }
})