/**
yiqihao invest
//$btn_agree.prop('disabled',false);
//$btn_submit.prop("disabled",false);
*/
//javascript:
(function(){
	var $btn_shouxin = $('.avcredit label');
	var $btn_max = $('.money>a');
	var $btn_agree = $('.detail-bid form>label>input');
	var $btn_submit = $('.detail-bid form button[type=submit]');
	var $btn_number = $('.detail-bid form input[type=number]').eq(0);
	function run(){
		$btn_shouxin.click();
		$btn_max.click();
		$btn_number.focus();
		if($btn_number.val() < 10000){
			alert("金额小于10000");
			return;
		}
		$btn_agree.click();
		$btn_submit.click();
	}
	run();
})();