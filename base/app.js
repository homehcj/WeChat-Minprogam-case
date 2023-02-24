// app.js
App({
    //不会自动生成要自己添加
    //变量a为56实例变量
    globalData: {
        a:""
    },
    //当小程序初始化完成时，会触发 onLaunch（全局只触发一次）
    onLaunch: function () {
        //console.log(Date()+'ApponLaunch');
    },
    //当小程序启动，或从后台进入前台显示，会触发 onShow
    onShow: function (options) {
        //console.log(Date()+'ApponShow');
    },
    //当小程序从前台进入后台，会触发 onHide
    onHide: function () {
        //console.log(Date()+'ApponHide');
    },
    //当小程序发生脚本错误，或者 api 调用失败时，会触发 onError 并带上错误信息
    onError: function (msg) {}
})