// pages/4d/index.js
var test=[
    {
        text:"下面哪一项输出20220101",
        choose:["/-/g.replace('2022-01-01')","'2022-01-01'.replace(/-/g,'')","'2022-01-01'.exec(/-/g,'')","/-/g.exec('2022-01-01')"],
        anwser:"1"
    },
    {
        text:"var a=[[0,0,0],[1,1,0],[1,0,1]]下列哪项为true",
        choose:["a.length===9","a[1][2]===1","a[1][2]==='1'","a[1][2]==0"],
        anwser:"3"
    },
    {
        text:"执行var n=1;n=n>1?0:n++;console.log(n);后n的值是",
        choose:["2","'2'","1","'1'"],
        anwser:"2"
    }
]
Page({
    data: {
        data:[],
        title:["A","B","C","D"],
        point:0,
        dataindex:"0",
        flg:[],
        youchoose:[]
    },
    onLoad(){
        this.setData({
            data:test,
            flg:new Array(test.length).fill(true),
            youchoose:new Array(test.length).fill(-1)
        })
    },
    choose(e){
        console.log(e)
        //记录你的选择
        this.data.youchoose[this.data.dataindex]=e.detail.value
        //判断是否正确
        if(this.data.data[this.data.dataindex].anwser==e.detail.value){
            this.setData({
                youchoose:this.data.youchoose,
                dataindex:++this.data.dataindex,
                point:++this.data.point
            })
        }
        else{
            this.data.flg[this.data.dataindex]=false
            this.setData({
                youchoose:this.data.youchoose,
                flg:this.data.flg
            })
        }
    },
    swiper(e){
        console.log(e)
        this.setData({
            dataindex:e.detail.current
        })
    }
})