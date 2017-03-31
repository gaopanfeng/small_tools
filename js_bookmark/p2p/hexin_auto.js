//和信贷 自动投标 需要改时间 var minute=29,second=28;
//javascript:
(function(){
	var hour=15,minute=59,second=30,money=10000;
	function getTime(hour,minute,second){
		var d = new Date();
		d.setHours(hour);
		d.setMinutes(minute);
		d.setSeconds(second);
		return d;
	}
	var timepoint  = getTime(hour,minute,second).getTime();
	$('#pay_money').val(10000);
	function run(){
		console.log("run");
		$('#bidForm .btn-borrow').click();
		$('#bidForm .countdown').click();
		$('#invest-confirmForm .btn-red').click();
	}
	function check(){
		var now = new Date();
		if(now.getTime() < timepoint){
			return false;
		}
		if($('#bidForm .countdown').attr('disabled')!='disabled'){
			return true;
		}
		return false;
	}
	function countdown(fn){
		console.log(new Date());
		if(check()){
			fn();
			return;
		}
		setTimeout(function(){
			countdown(fn);
		},100);
	}
	countdown(run);
})();