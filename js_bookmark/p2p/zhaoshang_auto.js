//javascript:
(function(){
	var hour=10,minute=54,second=30;
	tenderCheckTimer=1;
	$('#max').click();
	function getTime(hour,minute,second){
		var d = new Date();
		d.setHours(hour);
		d.setMinutes(minute);
		d.setSeconds(second);
		return d;
	}
	var timepoint  = getTime(hour,minute,second).getTime();
	function run(){
		console.log("run");
		$('#btn-tender').click();
	}
	function check(){
		var now = new Date();
		if(now.getTime() < timepoint){
			return false;
		}
		if($('#btn-tender').val()=='确认投标'){
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