// pages/4a/index.js
var test=[
    {
        text:"下面表达式运算结果为真的有那些？",
        choose:["1>2||2<3","/e/i.test('The best things in life are free')","!'false'","2>1&&2<1"],
        anwser:[0,1]
    },
    {
        text:"下面哪些是JavaScript保留字",
        choose:["try","success","fail","continue"],
        anwser:[0,3]
    }
]
Page({

    data: {
        show:[],
        title:["A","B","C","D"]
    },
    onLoad(options) {
        this.setData({show:test})
    },
    check(e){
        console.log(e)
        var chooseitem=[]
        //遍历对象属性将其转化为数组
        for (let x in e.detail.value) {
            if(chooseitem.length==0){chooseitem=[e.detail.value[x]]}
            else{chooseitem=chooseitem.concat([e.detail.value[x]])}
        }
        console.log(chooseitem)
        //与4.9同
        var flg=true
        //判断是否有没选的题
        for (let i = 0; i <chooseitem.length; i++) {
            //根据参数情况稍微变一下判断条件
            if(chooseitem[i].length==0){
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
    reset(e){
        console.log(e)
    }
})