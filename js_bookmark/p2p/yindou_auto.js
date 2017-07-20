/**
 *
yindou
auto invest
$btn_number.focus();
$btn_number.val(money);
$btn_number.blur();
*/
//javascript:
(function(){
    var money = 10000;
    var $btn_submit = $('#buy-button');
    var $btn_number = $('#buyMoneyId');
    function run(){
        $btn_submit.click();
    }
    function loop(func,timeout){
        console.log(new Date());
        setTimeout(function(){
            var ret = func();
            if(ret){
                loop(func,timeout);
            }
        },timeout);
        
    }
    function check(){
        return !$btn_submit.is(":hidden")
    }
    function runtimeout(timeout){
        setTimeout(function(){
            run();
        },timeout);
    }
    loop(function(){
        if(check()){
            run();
            return false;
        }
        return true;
    },100);
})();