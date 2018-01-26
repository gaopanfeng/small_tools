// 星火钱包 计算日赚AB的平台分布
// var a = //ajax数据

var data = a.data.map(i=>{
	return {
		name:i.name,
		bondAmount:parseFloat(i.bondAmount)
	}
}).sort((a,b)=>{
	return b.bondAmount - a.bondAmount
});
var sum = data.reduce((sum,i)=>sum+parseFloat(i.bondAmount),0);
var ret = data.map(i=>{
	return {name:i.name,bondAmount:i.bondAmount,percents:(i.bondAmount*100/sum).toFixed(2)+'%'}
});
console.log(ret);


