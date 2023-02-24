// pages/55/index.js

//若尝试tabbar请将代码配置到App.json
/* "tabBar": {
    "list": [
        {
        "pagePath": "pages/55/index",
        "text": "首页",
        "iconPath": "images/55/act.png",
        "selectedIconPath": "images/55/QR.png"
        },
        {
            "pagePath": "pages/55/tabbar",
            "text": "tabbar1",
            "iconPath": "images/55/act2.png",
            "selectedIconPath": "images/55/QR.png"
        }
    ]
}, */

Page({
    data: {

    },
    onclick(e){
        switch(e.currentTarget.id){
            case "1":
                wx.switchTab({
                  url: './tabbar',
                })
                break;
            case "2":
                wx.navigateTo({
                  url: './page1',
                })
                break;
        }
    }
})