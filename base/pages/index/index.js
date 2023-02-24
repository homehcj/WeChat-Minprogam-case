// pages/index/index.js
var index="index"
Page({
    data: {
        flg:false
    },
    change(e){
        index=new String(e.detail.value).replace(/[.。，,]/g,"").toLowerCase()
        if(index.length>2)this.setData({flg:true})
        else this.setData({flg:false})
    },
    click(){
        wx.reLaunch({
          url: '../'+index+"/index",
        }).catch((err)=>{
            console.log(err)
            this.setData({flg:true})
        })
    }
})