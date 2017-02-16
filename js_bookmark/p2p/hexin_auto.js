//和信贷 自动投标 需要改时间 var minute=29,second=28;
//javascript:
(function(){
	var minute=29,second=28;
	function getTime(minute,second){
		var d = new Date();
		d.setMinutes(minute);
		d.setSeconds(second);
		return d;
	}
	var timepoint  = getTime(minute,second).getTime();
	function run(){
		console.log("run");
		$('#max_money').click();
		$('#do_tender_btn').click();
		$('#countdown').click();
		$('#do_tender_form .btnt_red').click();
	}
	function check(){
		var now = new Date();
		if(now.getTime() < timepoint){
			return false;
		}
		if($('#countdown').attr('disabled')!='disabled'){
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