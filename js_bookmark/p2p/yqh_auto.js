/**
auto invest
$btn_max.click();  授信额度变为5w
*/
//javascript:
(function(){
	var money = 10000;
	var $btn_max = $('.money>a');
	var $btn_agree = $('.detail-bid form>label>input');
	var $btn_submit = $('.detail-bid form button[type=submit]');
	var $btn_number = $('.detail-bid form input[type=number]').eq(0);
	var $div_captcha = $('.detail-bid form .captcha');
    var $input_captcha = $('.detail-bid form .captcha input');
    var hascaptcha = true;
    $div_captcha.show();
    
	function run(){
		$btn_max.click();
		$btn_number.focus();
		var number = $btn_number.val();
		if(number < money){
			alert("金额小于"+money);
			return;
		}
		if(!$btn_agree.prop("checked")){
			$btn_agree.click();
		}
		var captcha = prompt("验证码","");
		if(captcha){
			$input_captcha.val(captcha);
		}
        $btn_submit.click();
		$('#loanConfirm .complete').click();
		setTimeout(function(){
			$('#loanConfirm .complete').click();
		},100);
	}
	function runold(){
		$div_captcha.removeClass('inputRect');
		$btn_max.click();
		$btn_number.focus();
		var number = $btn_number.val();
		if(number < money){
			alert("金额小于"+money);
			return;
		}
		if(!$btn_agree.prop("checked")){
			$btn_agree.click();	
		}
		if(hascaptcha){
            $input_captcha.addClass('inputRect');
		}
        $btn_submit.click();
		
	}
	function last(){
		$btn_submit.prop("disabled",false);
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
		if($btn_submit.text().trim() == '立即抢购'){
			return true;
		}
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