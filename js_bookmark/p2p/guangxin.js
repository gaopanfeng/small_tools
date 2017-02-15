//id 红包id，limit 红包限额 可以在详情页面找到，值需要经常更新
//javascript:
(function(){
	var id = 306829,limit=10000;
	$('#auto_money').click();
	$('#tender_button').click();
	$('#coupon').val(id);
	$('#amount_limit').val(limit);
	$('#confirm_button_true').click();
})();
