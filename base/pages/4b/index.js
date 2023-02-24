// pages/4b/index.js
Page({
    data: {
        show:""
    },
    input(e){
        console.log(e)
        switch(e.currentTarget.id){
            case "1":
                //输入同步到view中
                this.setData({show:e.detail.value})
                break
            case "2":
                //连续的两个1会变成2
                if(/11/g.test(e.detail.value)){
                    var newstr=new String(e.detail.value).replace(/11/g,"2")
                    return {value:newstr}
                }
                break
            case "3":
                if(/123/g.test(e.detail.value)){
                    wx.hideKeyboard()
                }
                break
        }
    }
})