// pages/39/index.js
Page({
    data: {
        showtext:''
    },
    onLoad(options) {
        //不一定需要在onload里面写，你可以试试其他函数
        var time= new Date().getHours()
        //测试用
        //time=0
        var text=""
        if(time>=6&&time<9){text="早上好"}
        else if(time>=9&&time<11){text="上午好"}
        else if(time>=11&&time<14){text="中午好"}
        else if(time>=14&&time<18){text="下午好"}
        else if(time>=18&&time<22){text="晚上好"}
        else if(time>=22&&time<24||time<1){text="夜深了该休息了"}
        else if(time>=1&&time<6){text="别熬夜了该休息了"}
        this.setData({showtext:text})
    },
})