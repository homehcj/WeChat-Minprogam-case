// pages/55/page2.js
Page({
    data:{
        data:[]
    },
    onclick(e){
        switch(e.currentTarget.id){
            case "1":
                wx.navigateBack({
                  delta: 1,
                })
                break;
            case "2":
                wx.navigateBack({
                    delta: 2,
                })
                break;
            case "3":
                console.log(getCurrentPages())
                this.setData({data:getCurrentPages()}) 
                break;
        }
    }
})