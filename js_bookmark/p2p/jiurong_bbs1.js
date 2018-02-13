// 用来发文章搞积分的
//javascript:
(function(){

    function run(){
        var w = window.open('http://bbs.jiurong.com/forum.php?mod=post&action=newthread&fid=59');
        var closenum = 0;
        w.onunload = function(){
            closenum++;
            console.log('closenum',closenum);
            if(closenum===2){
                setTimeout(run,50000);
            }
        };
        setTimeout(function() {
            w.$('subject').value='签到签到';
        }, 3000);
    }
    run();
})();