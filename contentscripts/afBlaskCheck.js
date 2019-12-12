var afBlask = document.getElementsByClassName("afBlask");
var afBlaskHeadline = document.getElementsByClassName("afBlaskHeadline");
var isFirefox = typeof InstallTrigger !== 'undefined';
//Checks if browser is chrome or firefox and sends the amount of afBlask and afBlaskHeadlines to button.js
//With appropriate methods
if(isFirefox){
	browser.runtime.sendMessage(afBlask.length + ' ' + afBlaskHeadline.length);	
}
else{
	chrome.runtime.sendMessage(afBlask.length + ' ' + afBlaskHeadline.length);
}
