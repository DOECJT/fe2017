//设置number
var number=Math.floor(Math.random()*100+1);
var guessInput=document.querySelector(".guess-input");
var preNumbers=document.querySelector(".pre-numbers");
var guessButton=document.querySelector(".guess-button");
var results=document.querySelector(".results");
var newButton=null;
var mainContainer=document.querySelector(".main-container");
var guessTimes=0;
//提交guess number与number进行比较
function randomNumber(){
	var guessNumber=guessInput.value;
	preNumbers.innerText+=" "+guessNumber;
	guessTimes++;
	//判断次数
	if(guessTimes==10 && guessNumber!==number){
		results.innerText="Oh!You lose!Go on!"
		guessInput.disabled=true;
		guessButton.disabled=true;
		newButton=document.createElement("button");
		newButton.innerText="Play Again";
		newButton.addEventListener("click",resetGame);
		mainContainer.appendChild(newButton);
	}
	else if(guessNumber==number){
		results.innerText="Congratulations!You win!";
		guessInput.disabled=true;
		guessButton.disabled=true;
		newButton=document.createElement("button");
		newButton.innerText="Play Again";
		newButton.addEventListener("click",resetGame);
		mainContainer.appendChild(newButton);
	}
	else{
		if(guessNumber<number){
			results.innerText="Too low.";
		}
		else{
			results.innerText="Too high."
		}
	}

	guessInput.value="";
	guessInput.focus();
}
//恢复初始状态
function resetGame(){
	number=Math.floor(Math.random()*100+1);
	guessInput.disabled=false;
	guessButton.disabled=false;
	preNumbers.innerText="Previous numbers:"
	results.innerText="";
	newButton=null;
	mainContainer.removeChild(mainContainer.lastElementChild);
	guessTimes=0;
	guessInput.focus();
}

//点击按钮执行函数
guessButton.addEventListener("click",randomNumber);