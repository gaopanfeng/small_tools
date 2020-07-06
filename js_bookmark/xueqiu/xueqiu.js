//javascript:
(function () {
    let $list = $('.moni__position__stock__transactions table tr');
    let data=[];
    $list.each((i,e)=>{
        if(i>0){
            let $tds = $(e).find('td');
            data.push({
                date:$tds.eq(0).html(),
                type:$tds.eq(1).html(),
                price:$tds.eq(2).html().replace('<br>','')
            });
        }
    });
    let ret = data.map(it => `${it.date}\t${it.type}\t${it.price}`).join('\n');
    let $text = $('<textarea></textarea>');
    $('body').append($text);
    $text.val(ret)
    alert(ret);
})();










/*

<th>交易日期</th><th>类型</th><th>成交价/数量</th><th>税费/佣金</th><th>成交金额</th><th>说明</th><th width="230">备注</th><th>操作</th> raven-28e71e6c19.min.js:1:1249
<td>2019/08/19</td><td>卖出</td><td>0.816 <br> 5000</td><td> --<br>0.15‰</td><td>4080.00</td><td title="">--</td><td title=""><div class="long-text">--</div></td><td><a href="" class="modify">修改</a><a href="" class="delete">× </a></td> raven-28e71e6c19.min.js:1:1249
<td>2019/08/19</td><td>卖出</td><td>0.813 <br> 5000</td><td> --<br>0.15‰</td><td>4065.00</td><td title="">--</td><td title=""><div class="long-text">--</div></td><td><a href="" class="modify">修改</a><a href="" class="delete">× </a></td> raven-28e71e6c19.min.js:1:1249
<td>2019/08/08</td><td>买入</td><td>0.802 <br> 10000</td><td> --<br>0.15‰</td><td>8020.00</td><td title="">--</td><td title=""><div class="long-text">--</div></td><td><a href="" class="modify">修改</a><a href="" class="delete">× </a></td> raven-28e71e6c19.min.js:1:1249
<td>2019/08/05</td><td>买入</td><td>0.816 <br> 10000</td><td> --<br>0.15‰</td><td>8160.00</td><td title="">--</td><td title=""><div class="long-text">--</div></td><td><a href="" class="modify">修改</a><a href="" class="delete">× </a></td> raven-28e71e6c19.min.js:1:1249
<td>2019/08/04</td><td>卖出</td><td>0.826 <br> 10000</td><td> --<br>0.15‰</td><td>8260.00</td><td title="">--</td><td title=""><div class="long-text">--</div></td><td><a href="" class="modify">修改</a><a href="" class="delete">× </a></td> raven-28e71e6c19.min.js:1:1249
<td>2019/08/02</td><td>买入</td><td>0.822 <br> 10000</td><td> --<br>0.15‰</td><td>8220.00</td><td title="">--</td><td title=""><div class="long-text">--</div></td><td><a href="" class="modify">修改</a><a href="" class="delete">× </a></td> raven-28e71e6c19.min.js:1:1249
<td>2019/08/01</td><td>买入</td><td>0.84 <br> 10000</td><td> --<br>0.15‰</td><td>8400.00</td><td title="">--</td><td title=""><div class="long-text">--</div></td><td><a href="" class="modify">修改</a><a href="" class="delete">× </a></td> raven-28e71e6c19.min.js:1:1249
<td>2019/08/01</td><td>买入</td><td>0.845 <br> 10000</td><td> --<br>0.15‰</td><td>8450.00</td><td title="">--</td><td title=""><div class="long-text">--</div></td><td><a href="" class="modify">修改</a><a href="" class="delete">× </a></td> raven-28e71e6c19.min.js:1:1249
<td>2019/08/01</td><td>买入</td><td>0.85 <br> 10000</td><td> --<br>0.15‰</td><td>8500.00</td><td title="">--</td><td title=""><div class="long-text">--</div></td><td><a href="" class="modify">修改</a><a href="" class="delete">× </a></td> raven-28e71e6c19.min.js:1:1249
<td>2019/07/31</td><td>买入</td><td>0.856 <br> 10000</td><td> --<br>0.15‰</td><td>8560.00</td><td title="">--</td><td title=""><div class="long-text">--</div></td><td><a href="" class="modify">修改</a><a href="" class="delete">× </a></td> raven-28e71e6c19.min.js:1:1249
<td>2019/07/31</td><td>买入</td><td>0.861 <br> 10000</td><td> --<br>0.15‰</td><td>8610.00</td><td title="">--</td><td title=""><div class="long-text">--</div></td><td><a href="" class="modify">修改</a><a href="" class="delete">× </a></td> raven-28e71e6c19.min.js:1:1249
<td>2019/07/30</td><td>卖出</td><td>0.878 <br> 10000</td><td> --<br>0.15‰</td><td>8780.00</td><td title="">--</td><td title=""><div class="long-text">--</div></td><td><a href="" class="modify">修改</a><a href="" class="delete">× </a></td> raven-28e71e6c19.min.js:1:1249
<td>2019/07/30</td><td>卖出</td><td>0.874 <br> 20000</td><td> --<br>0.15‰</td><td>17480.00</td><td title="">--</td><td title=""><div class="long-text">--</div></td><td><a href="" class="modify">修改</a><a href="" class="delete">× </a></td> raven-28e71e6c19.min.js:1:1249
<td>2019/07/29</td><td>买入</td><td>0.87 <br> 20000</td><td> --<br>0.15‰</td><td>17400.00</td><td title="">--</td><td title=""><div class="long-text">--</div></td><td><a href="" class="modify">修改</a><a href="" class="delete">× </a></td> raven-28e71e6c19.min.js:1:1249
<td>2019/07/29</td><td>买入</td><td>0.871 <br> 10000</td><td> --<br>0.15‰</td><td>8710.00</td><td title="">--</td><td title=""><div class="long-text">--</div></td><td><a href="" class="modify">修改</a><a href="" class="delete">× </a></td> raven-28e71e6c19.min.js:1:1249
<td>2019/07/26</td><td>卖出</td><td>0.876 <br> 5600</td><td> --<br>0.15‰</td><td>4905.60</td><td title="">--</td><td title=""><div class="long-text">--</div></td><td><a href="" class="modify">修改</a><a href="" class="delete">× </a></td> raven-28e71e6c19.min.js:1:1249
<td>2019/07/26</td><td>卖出</td><td>0.873 <br> 10000</td><td> --<br>0.15‰</td><td>8730.00</td><td title="">--</td><td title=""><div class="long-text">--</div></td><td><a href="" class="modify">修改</a><a href="" class="delete">× </a></td> raven-28e71e6c19.min.js:1:1249
<td>2019/07/26</td><td>买入</td><td>0.871 <br> 5600</td><td> --<br>0.15‰</td><td>4877.60</td><td title="">--</td><td title=""><div class="long-text">--</div></td><td><a href="" class="modify">修改</a><a href="" class="delete">× </a></td> raven-28e71e6c19.min.js:1:1249
<td>2019/07/26</td><td>卖出</td><td>0.873 <br> 10000</td><td> --<br>0.15‰</td><td>8730.00</td><td title="">--</td><td title=""><div class="long-text">--</div></td><td><a href="" class="modify">修改</a><a href="" class="delete">× </a></td> raven-28e71e6c19.min.js:1:1249
<td>2019/07/26</td><td>买入</td><td>0.871 <br> 10000</td><td> --<br>0.15‰</td><td>8710.00</td><td title="">--</td><td title=""><div class="long-text">--</div></td><td><a href="" class="modify">修改</a><a href="" class="delete">× </a></td> raven-28e71e6c19.min.js:1:1249
<td>2019/07/25</td><td>卖出</td><td>0.872 <br> 10000</td><td> --<br>0.15‰</td><td>8720.00</td><td title="">--</td><td title=""><div class="long-text">--</div></td><td><a href="" class="modify">修改</a><a href="" class="delete">× </a></td> raven-28e71e6c19.min.js:1:1249
<td>2019/07/25</td><td>买入</td><td>0.869 <br> 10000</td><td> --<br>0.15‰</td><td>8690.00</td><td title="">--</td><td title=""><div class="long-text">--</div></td><td><a href="" class="modify">修改</a><a href="" class="delete">× </a></td> raven-28e71e6c19.min.js:1:1249
<td>2019/07/24</td><td>买入</td><td>0.872 <br> 20000</td><td> --<br>0.25‰</td><td>17440.00</td><td title="">--</td><td title=""><div class="long-text">--</div></td><td><a href="" class="modify">修改</a><a href="" class="delete">× </a></td> raven-28e71e6c19.min.js:1:1249
<td>2019/07/24</td><td>买入</td><td>0.874 <br> 20000</td><td> --<br>0.25‰</td><td>17480.00</td><td title="">--</td><td title=""><div class="long-text">--</div></td><td><a href="" class="modify">修改</a><a href="" class="delete">× </a></td>

 */