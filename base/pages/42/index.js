// pages/42/index.js
//所有测试姓名均为网络随机生成
//模拟从数据库获取信息，当用户阅到加载项最后一个时获取下一次数据
var laod={data:[["松忱健","伍筱泉","毕欣维","袁铖宸","杜会望","骆戈凝","晏亚媛","马庆歆"]
                ,["赖羿民","颜琛楚","谭盈姝","钱咪华","巫茵沙","苗骏烈","祁存锁","沈英鹃"]
                ,["薛笛琰","伍琛韬","皮鹰北","黎桢晗","柳谦行","杭剑一","祖珊滢","娄孟昭"]
                ,["翁珉舰","崔蔚轩","史微优","李岑赛","吴功坤","龙易秋","巫婷艾","伍雯俏"]
                ,["诸龙鲲","丁孟玺","龙月芳","方毓轶","贺军定","侯前宇","宁乾禹","孟革旗"]
                ,["田冰萱","林畅千","华嘉谨","尤昭遥","杭同风","龚茜会","邢妙旎","孙睿萌"]]
            }

var i=0
Page({

    /**
     * 页面的初始数据
     */
    data: {
        showdata:[]
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad(options) {
        i=0
        this.setData({
            showdata:laod.data[0]
        })
    },
    bottom(){
        console.log("bottom事件被触发")
        i++
        //用条件判断也行
        if(i<laod.data.length){
            var newarr=this.data.showdata.concat(laod.data[i])
            this.setData({
                showdata:newarr
            })
        }
        else{
            //微信弹出对话框API
            wx.showModal({
              showCancel: false,
              title: '已经没有数据了',
            })
        }
    }
})