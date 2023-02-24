// pages/3a/index.js
Page({
    data: {
        data:[]
    },
    //函数的另一种定义方法
    onSolve:function(){
        //对于本题你可以通过缩小循环范围来进行优化，您需要继续优化您还将会用到圆的方程，对称思想，三角函数等相关知识
        //比较一下开根前和开根后代码执行速度
        var temparr=[]
        //ES6 新增了let命令，用来声明变量。它的用法类似于var，但是所声明的变量，只在let命令所在的代码块内有效
        wx.showLoading()
        for (let i=0; i<Math.ceil(Math.sqrt(19941994));i++) {
            for (let j = 0; j<Math.ceil(Math.sqrt(19941994)); j++) {
                if((i*i+j*j)==19941994){
                    temparr=temparr.concat([{x:i,y:j}])
                    break
                }
            }
        }
        wx.hideLoading()
        this.setData({
            data:temparr
        })
    }
})