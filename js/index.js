$(function(){
	$("#shouye").mouseover(function(){
		$("#shouye").find("a").css("color","#52e2c0");

	});
	$("#shouye").mouseout(function(){
		$("#shouye").find("a").css("color","#cccccc");

	});


	$("#pindao").mouseover(function(event){
		$("#erji").slideDown();
		console.log(erji);
	});
	$("#pindao").mouseout(function(event){
		$("#erji").hide();
		console.log(erji);
	});


	// $("ul li a").mouseout(function(event){
	// 	console.log(a)
	// });







});


//二级下拉列表


