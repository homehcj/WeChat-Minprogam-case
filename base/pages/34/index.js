// pages/34/index.js
Page({
    onLoad(options) {
        var a=1,b=2
        var c="2",d="2"
        
        if(a>b){console.log('a>b:'+'\n'+a+'>'+b)}
        if(c===b){console.log('c===b:'+'\t'+c+'==='+b)}
        
        a=a++
        if(a===c?true:"false"){
            console.log('c===a:')
        }
        if(a==c?true:"false"){
            console.log('c==a:')
        }

        if(c){console.log('c='+c)}
        if(!d){console.log('d='+d)}
        //a=2,b=2,c='2',d='2'
        if(!(--a)>b||c==b&&(a+a)<d){console.log('true')}
    },
})