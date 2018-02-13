// 用来发回复搞积分的
//javascript:
(function(){
    function run(){
        var url = location.href;
        var w = window.open(url);
        var closenum = 0;
        w.onunload = function(){
            closenum++;
            console.log('closenum',closenum);
            if(closenum===2){
                setTimeout(run,50000);
            }
        };
        setTimeout(function() {
            w.scrollTo(0,10000);
            w.$('fastpostmessage').value = '签到签到';
            var hash = w.document.getElementsByName('sechash')[0].value;
            w.updateseccode(hash);
            w.$('seccode'+hash+'_menu').style.display='block';
            var a = w.prompt("验证码","");
            if(a){
                w.$('seccodeverify_'+hash).value=a;
                w.$('fastpostsubmit').click();
            }
        }, 3000);
    }
    run();
})();