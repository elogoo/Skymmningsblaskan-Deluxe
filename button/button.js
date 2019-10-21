var pause = document.getElementsByClassName("pause");
var play = document.getElementsByClassName("play");
var anotherone = document.getElementsByClassName("anotherone");
var afBlask = document.getElementsByClassName("afBlask");
var isFirefox = typeof InstallTrigger !== 'undefined';

function reportError(error){
	console.log(`Could not enhance the viewing experience: ${error}`);
}
function succ(){
	if(isFirefox){
		browser.tabs.executeScript({file:"/contentscripts/afBlaskCheck.js"});
		browser.runtime.onMessage.addListener(messageAction);
	}
	else{
		chrome.tabs.executeScript({file:"/contentscripts/afBlaskCheck.js"});
		chrome.runtime.onMessage.addListener(messageAction);
	}
	
}

function messageAction(message) {
	if(message > 0){
		play[0].style.display = "none";
		pause[0].style.display = "block";
		anotherone[0].style.display = "block";
	}
}

document.addEventListener("DOMContentLoaded",succ);

document.addEventListener("click", function(e) {
  if (e.target.classList.contains("play")) {
	play[0].style.display = "none";
	pause[0].style.display = "block";
	anotherone[0].style.display = "block";
	if(isFirefox){
		var executing = browser.tabs.executeScript({file:"/contentscripts/skymmningsblaskandeluxe.js"});
		executing.then(succ,reportError);
	}
	else{
		chrome.tabs.executeScript({file:"/contentscripts/skymmningsblaskandeluxe.js"});
	}
  }
  else if (e.target.classList.contains("pause")){
	pause[0].style.display = "none";
	play[0].style.display = "block";
	anotherone[0].style.display = "none";
	if(isFirefox){
		var executing = browser.tabs.executeScript({file:"/contentscripts/removetext.js"});
		executing.then(succ,reportError);
	}
	else {
		chrome.tabs.executeScript({file:"/contentscripts/removetext.js"});
	}
  }
  if (e.target.classList.contains("anotherone")) {
	if(isFirefox){
		var executing = browser.tabs.executeScript({file:"/contentscripts/skymmningsblaskandeluxe.js"});
		executing.then(succ,reportError);
	}
	else{
		chrome.tabs.executeScript({file:"/contentscripts/skymmningsblaskandeluxe.js"});
	}
  }

});

