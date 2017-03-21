$(document).ready(function(){
	$.ajax({
		url:"json/tags.json",
		success:function(response){
			var res=JSON.parse(response);
			var color="";
			var tag={};
			$(".change").on("click",function(){
				color=res.colors[Math.floor(Math.random()*10)];
				tag=res.tags[Math.floor(Math.random()*10)];
				$(".sentence").text(tag.sentence);
				$(".author").text(tag.author);
				$("body").css("background-color",color);
				$(".change").css("background-color",color);
				$(".sentence").css("color",color);
				$(".author").css("color",color);
			});
		}
	});
});