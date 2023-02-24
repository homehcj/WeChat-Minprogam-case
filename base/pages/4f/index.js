// pages/4f/index.js
Page({
    data: {

    },
    onclick(e) {
        if(e.detail.value){
            wx.showLoading({
              title: '加载中',
            })
        }
        else{
            wx.hideLoading()
        }

    }
})