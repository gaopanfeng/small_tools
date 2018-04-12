//javascript:
(function(){
	$('#name').val('高攀峰');
	$('#name').trigger('keydown');
	$('[name=phone]').val('15210265936');
	var bank = $('[name=bankname]').val();
	var nomap = {'中信银行':'6226880151858222','建设银行':'4895920350343538','广发银行':'6258091699109638','招商银行':'6258030302902575','工商银行':'6252470062403735'};
	var no = nomap[bank];
	if(no){
		$('[name=bankaccount]').val(no);
	}
})();