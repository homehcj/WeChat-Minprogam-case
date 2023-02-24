// index.js
Page({
    //生命周期函数--监听页面加载
    onLoad(options){
        console.log(Date()+'onload');
    },
    //生命周期函数--监听页面初次渲染完成
    onReady() {
        console.log(Date()+'onReady');
    },
    //生命周期函数--监听页面显示
    onShow() {
        console.log(Date()+'onShow');
    },
    //生命周期函数--监听页面隐藏
    onHide() {
        console.log(Date()+'onHide');
    },
    //生命周期函数--监听页面卸载
    onUnload() {
        console.log(Date()+'onUnload');
    },
})