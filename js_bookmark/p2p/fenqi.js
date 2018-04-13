(function(months){
    //账单分期年化利率计算
    //提前回款无手续费
    let count = 36;//分期月数
    let money = 0.0075;//每月手续费费率
    let x = 0;
    for(let i=1;i<=months;i++){
        let ti = (1-(i-1)/count)/12;
        console.log('ti',ti);
        x+=ti;
    }
    let sum = money*months;
    console.log('sum',sum);
    console.log('x',x);
    let p = sum/x;
    console.log('p',p);
})(6);//多少时间提前回款