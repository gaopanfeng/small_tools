// 论坛积分
//javascript:
(function(){
	var hour=0,minute=0,second=2;
	function check(){
		var d = new Date();
		return d.getHours()===hour && d.getMinutes()>=minute && d.getSeconds()>=second;
	}
	function run(){
		$.ajax({
			type:"post",
			url:"/loanReserve/action_reserve_loan",
			data:{
				time:'2',
				min_amount:'100000',
				deadline:'24',
				repayment_model:'m',
				mobile:'15210265936',
				reserve_amount:'10万-15万',
				intention:'0'
			},
			success:function(data){
				console.log(new Date(),data);
			},error:function(data){
				console.log(new Date(),data);
			}
		});
	}
	var d = new Date();
	function countdown(fn){
		var n = new Date();
		if(n.getTime()-d.getTime()>=1000*5){
			d = n;
			console.log(d,'hour='+hour+',minute='+minute+',second='+second);
		}
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

