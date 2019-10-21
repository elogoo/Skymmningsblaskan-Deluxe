var afBlask = document.getElementsByClassName("afBlask");
var isFirefox = typeof InstallTrigger !== 'undefined';
if(isFirefox){
	browser.runtime.sendMessage(afBlask.length);	
}
else{
	chrome.runtime.sendMessage(afBlask.length);
}
