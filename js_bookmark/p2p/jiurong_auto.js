/**
玖融网 自动投标 + 人工验证码投标
*/
//javascript:
(function(){
	var money = 50000,ver='';
	var hour = 0,minite = 0,second = 0;
	function getTime(hour,minute,second){
		var d = new Date();
		d.setHours(hour);
		d.setMinutes(minute);
		d.setSeconds(second);
		console.log(d);
		alert(d);
		return d;
	}
	function jian(timepoint,seconds){
		var d = new Date(timepoint - seconds*1000);
		console.log(d);
		return d;
	}
	var $money = $('#getketou'),$ver = $('#captcha'),$verifyImg=$('#verifyImg');
	var timepoint = getTime(hour,minite,second).getTime();
	var timeclickver = jian(timepoint,30).getTime();



	function run(){
		$money.val(money);
		$ver.val(ver);
		$('#dosubmit').click();
	}
	function check(){
		var now = new Date();
		if(timeclickver && now.getTime() > timeclickver){
			$verifyImg.click();
			while(!ver){
				ver = prompt("验证码?","");
			}
			timeclickver = null;
		}

		if(now.getTime() < timepoint){
			return false;
		}
		return true;
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
	$('#ajaxForm').show();
	countdown(run);
})();