var centercolumn = document.getElementsByClassName("_1rd7K");
var sidecolumn = document.getElementsByClassName("_1Yzgt");	
var rawFile = new XMLHttpRequest();
var isFirefox = typeof InstallTrigger !== 'undefined';
var path = isFirefox ? browser.runtime.getURL("qoutes.txt") : chrome.extension.getURL("qoutes.txt")
var splittedText;
var readText;

chrome.runtime.onMessage.addListener(printMessage);

function read(){
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
	rawFile.send(null);
	return readText;
}

function printMessage(message){
	splittedText = message.split("\n");
}

if (isFirefox){
	splittedText = read().split("\n");
}
else {
	console.log("it got this far");
}

if (isFirefox) {
	var quotes = [splittedText.length];
	for(let i = 0; i < splittedText.length; i++){
		quotes[i] = '<span class="afBlask"> <span class="abSymbBo abThemeColor""></span> ' + splittedText[i] + '</span>';
	}

	for (let i = 0; i < centercolumn.length; i++){
		var index = Math.floor(Math.random() * quotes.length);
		centercolumn[i].innerHTML += quotes[index];
	}

	for(let i = 0; i < sidecolumn.length; i++){
		sidecolumn[i].innerHTML += quotes[Math.floor(Math.random() * quotes.length)];
	}
}
else {
	console.log(splittedText);
}

