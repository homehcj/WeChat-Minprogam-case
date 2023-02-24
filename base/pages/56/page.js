// pages/56/page.js
Page({

    onLoad(options) {
        //从路由api获取
        console.log("onLoad的options参数：")
        console.log(options)
        //从缓存获取
        console.log("缓存键值")
        console.log(wx.getStorageSync('a'))
        console.log(wx.getStorageSync('b'))
        console.log(wx.getStorageSync('c'))
        //从全局获取
        console.log("全局参数：")
        console.log(getApp().globalData.a)
    },
})