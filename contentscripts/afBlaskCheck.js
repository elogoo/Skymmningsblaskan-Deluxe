var afBlask = document.getElementsByClassName("afBlask");
var afBlaskHeadline = document.getElementsByClassName("afBlaskHeadline");
var isFirefox = typeof InstallTrigger !== 'undefined';
if(isFirefox){
	browser.runtime.sendMessage(afBlask.length + ' ' + afBlaskHeadline.length);	
}
else{
	chrome.runtime.sendMessage(afBlask.length + ' ' + afBlaskHeadline.length);
}
