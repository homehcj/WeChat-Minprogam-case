// pages/idx/idx.js
Page({

    data: {

    },
    onLoad(options) {
        wx.cloud.callFunction({
            name:'index',
            data:{
                a:10
            },
            success:function(res){
                console.log(res)
            },
            fail:function(e){
                console.log(e)
            }
        })
    },
    upload(e){
        wx.chooseMedia({
          count: 1,
          mediaType: [],
          success: (result) => {


            //console.log(result.tempFiles[0].tempFilePath.replace("http://tmp/","")) 
            wx.cloud.uploadFile({
                cloudPath:"./homehcj.png",
                filePath:result.tempFiles[0].tempFilePath,
                success:function(e){



                    console.log(e)
                    wx.cloud.database().collection("cloudlesson").add({
                        data:{
                            fileID:e.fileID
                        },
                        success:function(e){

                        },
                        fail:function(e){
                            console.log(e)
                        }
                    })




                },
                fail:function(e){

                }
            })



          },
          fail:function(e){

          }
        })
    },
    openfile(){
        wx.cloud.downloadFile({
            fileID:"cloud://test01-6gikg2v72dcefdcb.7465-test01-6gikg2v72dcefdcb-1307859051/石油工人职业紧张对睡眠质量的影响.docx",
            success:function(e){
                console.log(e)
                wx.openDocument({
                  filePath: e.tempFilePath,
                })
            }

        })
    }
})