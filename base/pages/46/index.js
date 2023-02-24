// pages/46/index.js
const texts = [
    '2011年1月，微信1.0发布',
    '同年5月，微信2.0语音对讲发布',
    '10月，微信3.0新增摇一摇功能',
    '2012年3月，微信用户突破1亿',
    '4月份，微信4.0朋友圈发布',
    '同年7月，微信4.2发布公众平台',
    '2013年8月，微信5.0发布微信支付',
    '2014年9月，企业号发布',
    '同月，发布微信卡包',
    '2015年1月，微信第一条朋友圈广告',
    '2016年1月，企业微信发布',
    '2017年1月，小程序发布'
  ]

var i=0
Page({

    /**
     * 页面的初始数据
     */
    data: {
        showtext:[]
    },
    onLoad(){
        i=0
    },
    onClick(e){
        switch(e.currentTarget.id){
            case "1":
                if(i<texts.length){
                    this.setData({
                        showtext:this.data.showtext.concat([texts[i]])
                    })
                    i++
                }
                break
            case "2":
                if(i>0){
                    this.data.showtext.pop()
                    this.setData({
                        showtext:this.data.showtext
                    })
                    i--
                }
                break
        }
    }
})