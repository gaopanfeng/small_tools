// 论坛积分
//javascript:
(function(){
	scrollTo(0,10000);
	$('fastpostmessage').value = '签到签到';
	var hash = document.getElementsByName('sechash')[0].value;
    updateseccode(hash);
    $('seccode'+hash+'_menu').style.display='block';
    var a = prompt("验证码","");
    if(a){
	    $('seccodeverify_'+hash).value=a;
	    $('fastpostsubmit').click();
    }
})();
