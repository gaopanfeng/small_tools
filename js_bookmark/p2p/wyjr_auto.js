//javascript:
//万盈金融 自动投标 需要改时间 var minute=29,second=28;
//javascript:
(function(){
	var hour=17,minute=59,second=30,money=10000;
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
		$('#lendMoney').val(money);
		$('.toubiao_btn').click();
	}
	function check(){
		var now = new Date();
		if(now.getTime() < timepoint){
			return false;
		}
		if($('.toubiao_btn').length){
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
