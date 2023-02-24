// pages/56/index.js
var App=getApp()
Page({

    data: {

    },
    click(e){
        var a="我是a",b="我是b",c={a:"我是对象属性a",b:"我是对象属性b"}
        switch(e.currentTarget.id){
            case "1":
                wx.navigateTo({
                  url: './page?a='+a,
                })
            break;
            case "2":
                wx.navigateTo({
                    url: './page?a='+a+"&b="+b,
                  })
            break;
            case "3":
                wx.navigateTo({
                    url: './page?c='+JSON.stringify(c),
                  })  
            break;
            case "4":
                App.globalData.a=a
                wx.navigateTo({
                    url: './page',
                })    
            break;
            case "5":
                App.globalData.a={a:a,b:b}
                wx.navigateTo({
                    url: './page',
                  })    
            break;
            case "6":
                App.globalData.a=c
                wx.navigateTo({
                    url: './page',
                  })  
            break;
            case "7":
                wx.setStorageSync('a', a)
                wx.navigateTo({
                    url: './page',
                  })  
            break;
            case "8":
                wx.setStorageSync('a', a)
                wx.setStorageSync('b', b)
                wx.navigateTo({
                    url: './page',
                  })  
            break;
            case "9":
                wx.setStorageSync('c', c)
                wx.navigateTo({
                    url: './page',
                  })  
            break;
        }
    }
})