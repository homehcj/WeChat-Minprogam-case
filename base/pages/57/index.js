// pages/57/index.js
Page({
    data: {

    },
    onclick(){
        wx.showModal({
          title:"tips",
          content:"是否确定",
          cancelColor:"#07C160"
        }).then((res)=>{
            if(res.confirm){
                wx.showLoading({
                  title: "加载中...",
                  mask: true,
                })
            }
            var timer=setTimeout(()=>{
                wx.hideLoading()
                wx.showToast({
                    title: '成功',
                    duration: 1500,
                    icon:"success",
                    mask: true,
                  }).then(()=>{
                      wx.navigateTo({
                        url: '../57/page1',
                      })
                  })
                clearTimeout(timer)
            },5000,timer)
        })
    }
})