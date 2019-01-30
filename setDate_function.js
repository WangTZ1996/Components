/*
	把后台传来的一个时间毫秒数转换成日期格式的方法。
	@ t ：后台传来的毫秒数

*/
function time (t){
	var year,
		month,
		day,
		hour,
		minute,
		second;
var date = new Date();
date.setTime(t);
year = date.getFullYear().toString();
month = (date.getMonth()+1).toString();
day = date.getDate().toString();
hour = date.getHours().toString();
minute = date.getMinutes().toString();
second = date.getSeconds().toString();
var time = year+"-"+month+"-"+day+" "+hour+":"+minute+":"+second;
return time;
}

