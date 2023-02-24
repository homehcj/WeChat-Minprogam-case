// pages/49/index.js
var test=[
    {
        text:"下面哪些写法可以使n自加1？",
        choose:["n=n+1","n=n++","n=++n","n++"],
        anwser:[0,2,3]
    },
    {
        text:"下面哪些变量名称合法",
        choose:["1aa","_vv","this","haha"],
        anwser:[1,3]
    }
]

var chooseitem=new Array(test.length).fill(0)
Page({

    /**
     * 页面的初始数据
     */
    data: {
        title:["A","B","C","D"],
        show:[]
    },

    onLoad(options) {
        this.setData({
            show:test
        })
        chooseitem=new Array(test.length).fill(0)
    },
    submit(){
        var flg=true
        //判断是否有没选的题
        for (let i = 0; i <chooseitem.length; i++) {
            if(chooseitem[i]===0){
                wx.showModal({
                    showCancel: false,
                    title: '还有没选的题',
                })
                return
            }
        }
        //判断答案,全对才行
        for(let i=0;i<chooseitem.length;i++){
            if(chooseitem[i].length==test[i].anwser.length){
                for (let j = 0; j < chooseitem[i].length; j++) {
                    if(chooseitem[i][j]!=test[i].anwser[j]){
                        flg=false
                        break
                    }
                }
            }
            else{
                flg=false
                break
            }
        }
        //显示弹窗
        if(!flg){
            wx.showModal({
                showCancel: false,
                title: '回答错误',
              })
        }
        else{
            wx.showModal({
                showCancel: false,
                title: '回答正确',
              })
        }
    },
    choose(e){
        console.log(e)
        chooseitem[e.currentTarget.id]=e.detail.value
    }
})