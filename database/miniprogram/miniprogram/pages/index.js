// pages/index.js
var sex=''
var myname=''
var id=''
Page({
    data: {
        openid:''
    },
    onclick(){
        //var db=wx.cloud.database()
        //var collect=db.collection('LLL')
        var collect=wx.cloud.database().collection('LLL')
        collect.add({
            data:{
                sex:sex,
                name:myname
            },
            success:function(e){

            },
            fail:function(e){

            }
        })
    },
    input(e){
        //e.detail.value
        if(e.currentTarget.id=='1'){
            myname=e.detail.value
        }
        if(e.currentTarget.id=='2'){
            sex=e.detail.value
        }
    },
    sreach(){
        var that=this
        var collect=wx.cloud.database().collection('LLL')
        collect.where({
            name:myname
        }).get({
            success:function(e){

                that.setData({
                    openid:e.data[0]._openid
                })
                id=e.data[0]._id
            },
            fail:function(e){

            }
        })
    },
    update(){
        var collect=wx.cloud.database().collection('LLL')
        collect.doc(id).update({
            data:{
                name:myname,
                name1:myname
            }
        })
    },
    remove(){
        var collect=wx.cloud.database().collection('LLL')
        collect.doc(id).remove({
            success:function(){

            }
        })
    }
})