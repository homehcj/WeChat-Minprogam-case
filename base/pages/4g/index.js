// pages/4g/index.js
Page({
    data:{
        text:""
    },
    input(e){
        console.log(e)
        this.setData({
            text:e.detail.value
        })
    }
})