var imageNames=["red","yellow","blue"];
var showDivs=document.querySelectorAll(".show");
var result=document.querySelector(".result");
function slotFunction(){
	for(var i=0;i<3;i++){
		showDivs[i].innerHTML="";
	}
	var randomNumbers=[];
	var newImage=null;
	var randomNumber=0;
	for(var i=0;i<3;i++){
		randomNumbers[i]=Math.floor(Math.random()*3);
		newImage=document.createElement("img");
		newImage.src="images/"+imageNames[randomNumbers[i]]+".png";
		newImage.width=160;
		newImage.style="margin:10px 0 0 10px"
		showDivs[i].appendChild(newImage);
	}
	if(randomNumbers[0]===randomNumbers[1] && randomNumbers[1]===randomNumbers[2]){
		result.innerText="Congratulations!You win!";
	}
	else{
		result.innerText="Go on！";
	}
}

var btn=document.querySelector(".btn");
btn.addEventListener("click",function(){slotFunction()});