/**
auto invest
$btn_max.click();  授信额度变为5w
*/
//javascript:
(function(){
	var money = 10000;
	var $btn_shouxin = $('.avcredit input');
	var $btn_max = $('.money>a');
	var $btn_agree = $('.detail-bid form>label>input');
	var $btn_submit = $('.detail-bid form button[type=submit]');
	var $btn_number = $('.detail-bid form input[type=number]').eq(0);
	function run(){
		while(!$btn_shouxin.prop("checked")){
			$btn_shouxin.click();
		}

		
		$btn_number.val(money);
		$btn_number.focus();
		if($btn_number.val() < money){
			alert("金额小于10000");
			return;
		}
		
		$btn_agree.prop('disabled',false);
		while(!$btn_agree.prop("checked")){
			$btn_agree.click();
		}
		
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