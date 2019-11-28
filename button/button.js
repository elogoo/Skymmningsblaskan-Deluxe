var pause = document.getElementsByClassName("pause");
var play = document.getElementsByClassName("play");
var anotherone = document.getElementsByClassName("anotherone");
var headline = document.getElementsByClassName("headline");
var quote = document.getElementsByClassName("quote");
var afBlask = document.getElementsByClassName("afBlask");

var isFirefox = typeof InstallTrigger !== 'undefined';
var changeheadline = false;
var changequote = false;

var readText2;

function reportError(error){
	console.log(`Could not enhance the viewing experience: ${error}`);
}
function isActive(){
	if(isFirefox){
		browser.tabs.executeScript({file:"/contentscripts/afBlaskCheck.js"});
		browser.runtime.onMessage.addListener(activeMessage);
	}
	else{
		chrome.tabs.executeScript({file:"/contentscripts/afBlaskCheck.js"});
		chrome.runtime.onMessage.addListener(activeMessage);
	}
	
}

function start() {
	console.log("it works");
}

function activeMessage(message) {
	var messageSplit = message.split(" ");
	if(messageSplit[0] > 0){
		play[0].style.display = "none";
		pause[0].style.display = "block";
		anotherone[0].style.display = "block";
		activeClick.apply(this,quote);
		changequote = true;
	}
	if(messageSplit[1] > 0){
		play[0].style.display = "none";
		pause[0].style.display = "block";
		anotherone[0].style.display = "block";
		headline[0].style.display = "block";
		activeClick.apply(this, headline);
		changeheadline = true;
	}
}

function sendMessageToContent(){
	readText2 = read();
	console.log(readText2);
	try{
		chrome.tabs.sendMessage(readText2);
	}
	catch(err) {
		console.log(err);
	}
	
}

function read(){
	var rawFile = new XMLHttpRequest();
	var path = (typeof InstallTrigger !== 'undefined') ? browser.runtime.getURL("qoutes.txt") : chrome.extension.getURL("qoutes.txt");
	var splittedText;
	var readText;
	rawFile.open("GET", path, false);
	rawFile.onreadystatechange = function ()
	{
		if(rawFile.readyState === 4)
		{
			if(rawFile.status === 200 || rawFile.status == 0)
			{
				readText = rawFile.responseText;
			}
		}
	}
	rawFile.send();
	return readText;
}

function activeClick(buttons){
	buttons.style.backgroundColor = "#696969";
}

function inactiveClick(buttons){
	buttons.style.backgroundColor = "#415BA9";
}

function skymnifyQuote(){
	if(isFirefox){
		browser.tabs.executeScript({file:"/contentscripts/skymmningsblaskandeluxe.js"}).then(start).catch(reportError);
	}
	else{
		chrome.tabs.executeScript({file:"/contentscripts/skymmningsblaskandeluxe.js"}).then(start).catch(reportError);;
		
	}
}

function skymnifyHeadline(){
	if(isFirefox){
	    browser.tabs.executeScript({file:"/contentscripts/skymnifyheadlines.js"}).then(start).catch(reportError);;
	}
	else{
		chrome.tabs.executeScript({file:"/contentscripts/skymnifyheadlines.js"}).then(start).catch(reportError);;
	}
	
}

function removeSkymnify(){
	if(isFirefox){
		browser.tabs.executeScript({file:"/contentscripts/removetext.js"}).then(start).catch(reportError);;
	}
	else {
		chrome.tabs.executeScript({file:"/contentscripts/removetext.js"}).then(start).catch(reportError);;
	}
}


document.addEventListener("DOMContentLoaded",isActive);

document.addEventListener("click", function(e) {
	//Add skymmningsblaskan deluxe headlines or quotes
  if (e.target.classList.contains("play")) {
	play[0].style.display = "none";
	pause[0].style.display = "block";
	anotherone[0].style.display = "block";
	if(changeheadline === true){
		skymnifyHeadline();
	}
	if(changequote === true){
		skymnifyQuote();
	}
	
	
  }
  
  //Pause/remove all skymmningsblaskan deluxe quotes and headlines
  else if (e.target.classList.contains("pause")){
	pause[0].style.display = "none";
	play[0].style.display = "block";
	anotherone[0].style.display = "none";
	removeSkymnify();
  }
  //Skymnify headline
  if (e.target.classList.contains("headline")){
	  if(changeheadline === true){
		changeheadline = false;  
		inactiveClick.apply(this,headline);
	  }
	  else{
		changeheadline = true;
		activeClick.apply(this,headline);
	  }
	  
  }
  //Skymnify quote
  if (e.target.classList.contains("quote")){
	  console.log("quote clicked");
	  if(changequote === true){
		changequote = false;  
		inactiveClick.apply(this, quote);
	  }
	  else{
		changequote = true;
		activeClick.apply(this, quote);
	  }
	  
	  
  }
  //Another one
  if (e.target.classList.contains("anotherone")) {
	if(isFirefox){
		browser.tabs.executeScript({file:"/contentscripts/skymmningsblaskandeluxe.js"}).then(start).catch(reportError);;
	}
	else{
		chrome.tabs.executeScript({file:"/contentscripts/skymmningsblaskandeluxe.js"}).then(start).catch(reportError);;
	}
  }

});

