// pages/59/index.js
const QRcode=require("../../utils/qrcode_barcode/index").qrcode
const MD5=require("../../utils/code/md5")
const Base64=require("../../utils/code/base64").Base64
Page({
    data: {
        path:"",
        text:"",
    },
    onLoad(options) {
        console.log(require("../../utils/util.js").formatDate(new Date()))
        
    },
    //输入
    input(e){
        var wayname="showdata"
        var code=JSON.stringify({wayname:wayname,text:e.detail.value})
        QRcode("qrcode",code,400,400)
    },
    input2(e){
        //MD5一般用于签名加密，其加密方式不可逆
        var wayname=MD5("showdata")
        //base64一般用于内容，其加密方式可逆
        var code=Base64.encode(JSON.stringify({wayname:wayname,text:e.detail.value}))
        QRcode("qrcode2",code,400,400)
    },
    //保存
    save(e){
        e.currentTarget.id
        wx.canvasToTempFilePath({
            x: 10,
            y: 10,
            width: 3000,
            height: 3000,
            destWidth: 500,
            destHeight: 500,
            canvasId: e.currentTarget.id,
            success(res) {
              console.log(res.tempFilePath)
            }
        })
    },
    //扫一扫
    click(){
        var that=this
        wx.scanCode().then((res)=>{
            console.log(res)
            try{
                //先解码再转成对象
                var data=JSON.parse(Base64.decode(res.result))
                switch(data.wayname){
                    case "其他操作":
                        break
                    case MD5("showdata"):
                        that.setData({
                            text:"这是暗码传递（较安全）:"+data.text
                        })
                        break
                }
            }
            catch{
                //明码解码比报错因此明码在catch
                var data=JSON.parse(res.result)
                switch(data.wayname){
                    case "showdata":
                        that.setData({
                            text:"这是明码传递（不安全）:"+data.text
                        })
                        break
                    case "其他操作":
                        break
                }
            }
        }).catch((res)=>{
            console.log(res)
        })
    },
})