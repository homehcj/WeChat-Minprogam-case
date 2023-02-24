// pages/53/index.js
Page({

    data: {
        data:{},
        title:[]
    },
    click(){
        var data={},title=[]
        data=wx.getSystemInfoSync()
        console.log(data)
        for (const i in data) {
            if(title.length==0){title=[i]}
            else{title=title.concat([i])}
        }
        this.setData({
            data:data,
            title:title
        })
    }
})