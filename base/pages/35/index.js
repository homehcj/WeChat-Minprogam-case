// pages/35/index.js
Page({
    onLoad(options) {
        var value1=10,value2=20
        var bigger=this.big(value1,value2)
        console.log(bigger)
        if(!this.panduan(this.big(value1,value2),value1)){
            console.log('true')
        }
    },
    big(a,b){
        if(a<b){
            return b
        }
        if(a>b){
            return a
        }
    },
    panduan(a,b){
        if(a<b){
            return true
        }
        if(a>b){
            return false
        }
    }
})