// pages/58/index.js
var data={imgSrc:"../../images/58/白色西装.png"}
Page({
    data: {
        text:'',
        imgSrc:""
    },
    //有些函数起作用需要配置json表，详情可见开发文档
    onPullDownRefresh() {
        this.setData({text:'你下拉刷新了页面',imgSrc:data.imgSrc})
    },
    onclick(){
        //如果是测试号，无论如何权限都将不足
        wx.saveImageToPhotosAlbum({filePath:this.data.imgSrc}).then(()=>{
            wx.showToast({
              title: '成功',
              duration: 1500,
              icon: "success",
              mask: true,
            })
        }).catch((e)=>{
            console.log(e)
            wx.showToast({
              title: '权限不足',
              duration: 1500,
              icon: "error",
              mask: true,
            })
        })
    },
    onQR(){
        wx.scanCode().then((res)=>{console.log(res)}).catch((res)=>{console.log(res)})
    }
})