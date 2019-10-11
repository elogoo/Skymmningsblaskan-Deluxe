var pause = document.getElementsByClassName("pause");
var play = document.getElementsByClassName("play");
function reportError(error){
	console.log(`Could not enhance the viewing experience: ${error}`);
}
function succ(){

}

document.addEventListener("click", function(e) {
  if (e.target.classList.contains("play")) {
	play[0].style.display = "none";
	pause[0].style.display = "block";
	var executing = browser.tabs.executeScript({file:"/contentscripts/skymmningsblaskandeluxe.js"});
	executing.then(succ,reportError);
	
	
	
	
  }
  else if (e.target.classList.contains("pause")){
	pause[0].style.display = "none";
	play[0].style.display = "block";
	var executing = browser.tabs.executeScript({file:"/contentscripts/removetext.js"});
	executing.then(succ,reportError);
	
  }

});

