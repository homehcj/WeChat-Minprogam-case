// pages/4c/index.js
Page({
    data: {
        index:0,
        array:["第一临床学院","第二临床学院","临床学院"],
        multiIndex:[0,2,0],
        multiArray:[["我","你","他"],["吃","喝","玩"],["电脑","水","苹果"]],
        time:"",
        date:"",
        region:["海南省", "海口市", "龙华区"]
    },
    bindChange(e){
        console.log(e)
        switch(e.currentTarget.id){
            case "normal":
                this.setData({index:e.detail.value})
                break
            case "multiSelector":
                this.setData({multiIndex:e.detail.value})
                break
            case "time":
                this.setData({time:e.detail.value})
                break
            case "date":
                this.setData({date:e.detail.value})
                break
            case "region":
                this.setData({region:e.detail.value})
                break
        }
    },
    columnchange(e){
        console.log(e)
    }
})