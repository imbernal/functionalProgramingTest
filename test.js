//Test 1
var arr = [1,2,3,4,5,6,7,8,9];

var evenArr = arr.filter(item=>{
	return item % 2 === 0 ;
});


var studentName = "Israel";

var auxString = studentName.toLowerCase().split('');


var newString = auxString.filter(item=>{
	return item=='a' || item=='e' || item=='i' || item=='o' || item=='u';
}).join('');

var numbers = [3,6,7,2,6,2,5,68,23,5,1];

var num = numbers.reduce(function(prev , curr){

	if (prev > curr)
		return prev;
	else
		return curr;
});