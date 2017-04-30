/**
auto invest
*/
//javascript:
(function(){
	var $btn_shouxin = $('.avcredit input');
	var $btn_max = $('.money>a');
	var $btn_agree = $('.detail-bid form label>input');
	var $btn_submit = $('.detail-bid form button[type=submit]');
	function run(){
		if(!$btn_shouxin.prop("checked")){
			$('.avcredit input').click();
		}
		$btn_max.click();
		
		while(!$btn_agree.prop('checked')){
			$btn_agree.click();
		}
		while(!$btn_submit.prop("disabled")){
			$btn_submit.click();
			return;
		}
	};
	function loop(func,timeout){
		console.log(new Date());
		setTimeout(function(){
			var ret = func();
			if(ret){
				loop(func,timeout);
			}
		},timeout);
		
	};
	function check(){
		if($btn_submit.text().trim() == '立即抢购'){
			return true;
		}
	};
	loop(function(){
		if(check()){
			run();
			return false;
		}
		return true;
	},100);
})();