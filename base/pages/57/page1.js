// pages/57/page1.js
Page({
    onLoad(){
        wx.enableAlertBeforeUnload({message:"您要退出"})
    },
    onUnload(){
        wx.disableAlertBeforeUnload()
    },
})