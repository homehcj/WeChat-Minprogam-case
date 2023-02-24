// pages/3b/index.js
var input=["2022-05-01","2019-01-20","2021-01-06","2021-01-07","2019-01-18","2022-01-07"]
Page({
    data: {
        showarry:[]
    },
    click(){
        var newarr=input.sort()
        this.setData({
            showarry:newarr
        })
        var format= new Array(newarr.length).fill(0)
        for(let i=0;i<newarr.length;i++){
            format[i]=parseInt(newarr[i].replace(/[-]/g,""))
        }
        console.log(format)
    }
})