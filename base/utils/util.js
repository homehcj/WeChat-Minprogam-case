var t = function(t) {
    return (t = t.toString())[1] ? t : "0" + t;
};
var a=function(e){
    return e.getHours()+":"+t(e.getMinutes())
}
module.exports = {
    //你可以在module.exports写完整函数
    formatDate:function(e){
        return e.getFullYear()+"-"+t(e.getMonth()+1)+"-"+t(e.getDate())
    },
    //你也可以在module.exports外写完整函数，在传递对象
    formateTime:a
};