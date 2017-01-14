# 百度网盘 分页选中工具
最好使用chrome浏览器
1.  把下面的两端代码保存为两个书签
2.  打开要保存的百度网盘照片列表页面，并在列表中一直下拉到所有照片加载完成
3.  点击分页选取的书签，填写start，end （0-300表示选中1-300的照片，不知道数据含义的话尽量别修改）
4.  点击保存到网盘
5.  重复第三步,至到保存完所有照片

## 书签：百度网盘，分页选中
```
javascript:(function(){
	var offset = 300;
	var getByClass = function(c){
		return document.querySelectorAll(c)
	};
	var myclick = function(e){
		e.click();
	};
	var clickall = function(arr){
		arr.map(myclick);
	};

	var start = prompt("start",window.next_start||0);
	if(start==null){
		return;
	}
	var end = prompt("end",window.next_end||offset);
	if(end==null){
		return;
	}
	start = parseInt(start);
	end = parseInt(end);

	var eles = getByClass('.checkbox');
	var celes = [].slice.call(eles,start,end);
	var leles = [];
	if(window.last_end){
		leles = [].slice.call(eles,window.last_start,window.last_end);
		clickall(leles);
	}
	clickall(celes);

	window.next_start = end;
	window.next_end = end+offset;
	window.last_start = start;
	window.last_end = end;
})()
```

## 书签：清理数据
```
javascript:(function(){window.last_start = null;window.last_end = null;})();
```


## 书签：百度网盘，分页选中(精简版本)
### 该版本不对上次选中的照片清除选择，需要手动把所有选中取消，start，end需要自己每次修改
```
javascript:(function(){
	var offset = 300;
	var getByClass = function(c){
		return document.querySelectorAll(c)
	};
	var myclick = function(e){
		e.click();
	};
	var clickall = function(arr){
		arr.map(myclick);
	};

	var start = prompt("start",window.next_start||0);
	if(start==null){
		return;
	}
	var end = prompt("end",window.next_end||offset);
	if(end==null){
		return;
	}
	start = parseInt(start);
	end = parseInt(end);

	var eles = getByClass('.checkbox');
	var celes = [].slice.call(eles,start,end);
	clickall(celes);

	window.next_start = end;
	window.next_end = end+offset;
	window.last_start = start;
	window.last_end = end;
})()
```

