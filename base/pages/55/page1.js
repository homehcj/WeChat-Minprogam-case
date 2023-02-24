// pages/55/page1.js
Page({
    data: {

    },
    onclick(e){
        switch(e.currentTarget.id){
            case "1":
                wx.navigateTo({
                  url: './page2',
                })
                break;
            case "2":
                wx.redirectTo({
                  url: './page2',
                })
                break;
            case "3":
                wx.reLaunch({
                    url: './page2',
                })
                break;
        }
    }
})