var pause = document.getElementsByClassName("pause");
var play = document.getElementsByClassName("play");
var anotherone = document.getElementsByClassName("anotherone");
var headline = document.getElementsByClassName("headline");
var quote = document.getElementsByClassName("quote");
var afBlask = document.getElementsByClassName("afBlask");

var isFirefox = typeof InstallTrigger !== 'undefined';
var changeheadline = false;
var changequote = false;

//Error reporting
function reportError(error){
	console.error(`JUST NU: Bilbrand i Malmö - ${error.message}`);
}

//Checks if quotes or headlines has been injected
function isActive(){
	if(isFirefox){
		//Script sends a message with the amout of afBlask or afBlaskHeadlines on the site
		//Calls activeMessage function when the message is recieved
		browser.tabs.executeScript({file:"/contentscripts/afBlaskCheck.js"});
		browser.runtime.onMessage.addListener(activeMessage);
	}
	else{
		//Script sends a message with the amount of afBlask or afBlaskHeadlines on the site
		//Calls activeMessage function when the message is recieved but with chrome. instead of browser.
		chrome.tabs.executeScript({file:"/contentscripts/afBlaskCheck.js"});
		chrome.runtime.onMessage.addListener(activeMessage);
	}
	
}
//It works?
function reportSuccess(result) {
	//console.debug("it works..." + result);
}

function activeMessage(message) {
	var messageSplit = message.split(" ");
	//Checks if the first number in the list which is the amount of quotes is greater than zero
	//Then it hides the play button, shows the pause button, shows the another one button and changes the color of skymnifyQuote
	if(messageSplit[0] > 0){
		play[0].style.display = "none";
		pause[0].style.display = "block";
		anotherone[0].style.display = "block";
		activeClick.apply(this,quote);
		changequote = true;
	}
	//Checks if the second number in the list which is the amount of headlines is greater than zero
	//Then it hides the play button, shows the pause button, shows the another one button and changes the color of skymnifyHeadline
	if(messageSplit[1] > 0){
		play[0].style.display = "none";
		pause[0].style.display = "block";
		anotherone[0].style.display = "block";
		headline[0].style.display = "block";
		activeClick.apply(this, headline);
		changeheadline = true;
	}
}

//Changes the button to a grey
function activeClick(buttons){
	buttons.style.backgroundColor = "#696969";
}

//Changes the button to a blue
function inactiveClick(buttons){
	buttons.style.backgroundColor = "#415BA9";
}

//Executes the skymmningsblaskandeluxe script
function skymnifyQuote(){
	if(isFirefox){
		
		var dompurify = browser.tabs.executeScript({file:"DOMPurify/dist/purify.min.js"});
		//Calls reportSuccess if the promise resolves and reportError if it rejects
		dompurify.then(reportSuccess, reportError);
		
		var executing = browser.tabs.executeScript({file:"/contentscripts/skymmningsblaskandeluxe.js"});
		//Calls reportSuccess if the promise resolves and reportError if it rejects
		executing.then(reportSuccess, reportError);
		
		
	}
	else{
		chrome.tabs.executeScript({file:"DOMPurify/dist/purify.min.js"}, function(results) {
                //Check API for any errors thrown 
                if (chrome.runtime.lastError) {
                    //Handle errors from chrome.tabs.executeScript and calls reportError
					reportError(chrome.runtime.lastError);
                }
                else {
					//If everything works it calls reportSuccess
                    reportSuccess(results);
                }
            });
		
		 chrome.tabs.executeScript({file:"/contentscripts/skymmningsblaskandeluxe.js"}, function(results) {
                //Check API for any errors thrown 
                if (chrome.runtime.lastError) {
                    //Handle errors from chrome.tabs.executeScript and calls reportError
					reportError(chrome.runtime.lastError);
                }
                else {
					//If everything works it calls reportSuccess
                    reportSuccess(results);
                }
            });
			
			
			
		
	}
	
}

function skymnifyHeadline(){
	if(isFirefox){
		var dompurify = browser.tabs.executeScript({file:"DOMPurify/dist/purify.min.js"});
		//Calls reportSuccess if the promise resolves and reportError if it rejects
		dompurify.then(reportSuccess, reportError);
		
		var executing = browser.tabs.executeScript({file: "/contentscripts/skymnifyheadlines.js"});
		executing.then(reportSuccess, reportError);
	}
	else{
		chrome.tabs.executeScript({file:"DOMPurify/dist/purify.min.js"}, function(results) {
                //Check API for any errors thrown 
                if (chrome.runtime.lastError) {
                    //Handle errors from chrome.tabs.executeScript and calls reportError
					reportError(chrome.runtime.lastError);
                }
                else {
					//If everything works it calls reportSuccess
                    reportSuccess(results);
                }
            });
		
		chrome.tabs.executeScript({file:"/contentscripts/skymnifyheadlines.js"}, function(results) {
                //Check API for any errors thrown
                if (chrome.runtime.lastError) {
                    //Handle errors from chrome.tabs.executeScript and calls reportError
					reportError(chrome.runtime.lastError);
                }
                else {
					//If everything works it calls reportSuccess
                    reportSuccess(results);
                }
            });
		
	}
	
}

function removeSkymnify(){
	if(isFirefox){
		var executing = browser.tabs.executeScript({file:"/contentscripts/removetext.js"});
		executing.then(reportSuccess, reportError);
	}
	else {
		chrome.tabs.executeScript({file:"/contentscripts/removetext.js"}, function(results) {
                //Check API for any errors thrown
                if (chrome.runtime.lastError) {
                    //Handle errors from chrome.tabs.executeScript and calls reportError
					reportError(chrome.runtime.lastError);
                }
                else {
					//If everything works it calls reportSuccess
                    reportSuccess(results);
                }
            });
	}
}

//Fires off when the user clicks on the extension
document.addEventListener("DOMContentLoaded",isActive);

document.addEventListener("click", function(e) {
  //Adds skymmningsblaskan deluxe headlines or quotes when user clicks on the play button
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
  
  //Pause/remove all skymmningsblaskan deluxe quotes and headlines when user clicks on the pause button
  else if (e.target.classList.contains("pause")){
	pause[0].style.display = "none";
	play[0].style.display = "block";
	anotherone[0].style.display = "none";
	removeSkymnify();
  }
  //Sets changeheadline to true if it was false and false if it was true
  //So that when the play button is pressed it will execute the right script
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
  //Sets changequote to true if it was false and false if it was true
  //So that when the play button is pressed it will execute the right script
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
  //Another one or 'En till' button if the user wanted more quotes
  if (e.target.classList.contains("anotherone")) {
	if(isFirefox){
		var dompurify = browser.tabs.executeScript({file:"DOMPurify/dist/purify.min.js"});
		//Calls reportSuccess if the promise resolves and reportError if it rejects
		dompurify.then(reportSuccess, reportError);
		
		executing = browser.tabs.executeScript({file: "/contentscripts/skymmningsblaskandeluxe.js"});
		executing.then(reportSuccess, reportError);
	}
	else{
		chrome.tabs.executeScript({file:"DOMPurify/dist/purify.min.js"}, function(results) {
                //Check API for any errors thrown 
                if (chrome.runtime.lastError) {
                    //Handle errors from chrome.tabs.executeScript and calls reportError
					reportError(chrome.runtime.lastError);
                }
                else {
					//If everything works it calls reportSuccess
                    reportSuccess(results);
                }
            });
		
		chrome.tabs.executeScript({file:"/contentscripts/skymmningsblaskandeluxe.js"}, function(results) {
                //Check API for any errors thrown
                if (chrome.runtime.lastError) {
                    //Handle errors from chrome.tabs.executeScript and calls reportError
					reportError(chrome.runtime.lastError);
                }
                else {
					//If everything works it calls reportSuccess
                    reportSuccess(results);
                }
            });
	}
  }

});

