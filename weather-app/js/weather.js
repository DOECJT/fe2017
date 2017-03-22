$(document).ready(function(){
	var site="http://api.openweathermap.org/data/2.5/weather?q=";
	var appid="&appid=ff0930572cb845976ad2fa2fb5ee5011";
	var location=document.querySelector(".location");
	var temperature=document.querySelector(".temperature");
	$(".unit").text("°C");
	$.ajax({
		url:"http://ipinfo.io/json",
		success:function(response){
			location.innerText=response.city+","+response.country;
			$.ajax({
				url:site+response.city+appid,
				success:function(res){
					temperature.innerText=Math.floor(res.main.temp-273.15);
					$(".weather").text(res.weather[0].main);
					$(".unit").on("click",changeUnit);
					//改变温度单位
					function changeUnit(){
						if(this.innerText=="°C"){
							this.innerText="°F";
							temperature.innerText=Math.floor(res.main.temp*1.8-459.67);
						}
						else{
							this.innerText="°C";
							temperature.innerText=Math.floor(res.main.temp-273.15);
						}
					}
				}
			});
		}
	});
});
