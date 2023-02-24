// pages/54/index.js
var mun=0
Page({
    data: {

    },
    onLoad(options) {
        wx.onAppShow((result) => {
            console.log(result)
            wx.showModal({
                title:"提示",
                content:"您一共切入后台"+mun+"次;本次场景值为："+result.scene,
                showCancel:false
            })
        })
        wx.onAppHide((res) => {
            mun++
        })
    },
    onUnload(){
        wx.offAppHide()
        wx.offAppShow()
    },
    //你也可以用下面的函数
    /**
     * 生命周期函数--监听页面显示
     */
    onShow() {

    },

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide() {

    },
})