//javascript:
(function(){
	function parseItem($item){
		var lilv = parseFloat($item.find('td:eq(3)').html());
		var money = parseFloat($item.children('td:eq(7)').find('tr:eq(1) td:eq(1)').html().replace('回收本金：','').replace(/,/g,''));
		return {money:money,lilv:lilv}
	}
	function compute(list){
		var sum = list.reduce((k,i)=>{return k+i.money},0);
		var lilv = list.reduce((k,i)=>{return k+(i.money/sum)*i.lilv},0);

		var ret = {money:sum,lilv:lilv};

		alert(JSON.stringify(ret));
	}
	function store(value){
		var key = 'gao';
		if(value){
			localStorage.setItem(key,JSON.stringify(value))	
		}else{
			value = localStorage.getItem(key);
			if(value){
				value = JSON.parse(value);
			}
		}
		return value;
	}
	function storeList(index,list){
		var all = index===0?[]:(store()||[]);
		all = all.concat(list);
		store(all);
		return all;
	}

	var max = $('#jsnump li').length;
	var index = parseInt($('.page .curr').html())-1;

	var $items = $('.tab-1>tbody>tr:gt(0)');
	$items = [].slice.apply($items).map((e)=>$(e));
	var items = $items.map(parseItem);
	var all = storeList(index,items);
	alert(all.length);
	alert(JSON.stringify(all));
	if(index===max-1){
		compute(all);
	}else{
		location.href = '/uinvest/index/?page='+(index+2);
	}
	
})()