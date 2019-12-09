var centercolumn = document.getElementsByClassName("_1rd7K");
var sidecolumn = document.getElementsByClassName("_1Yzgt");	
var rawFile = new XMLHttpRequest();
var isFirefox = typeof InstallTrigger !== 'undefined';
var path = isFirefox ? browser.runtime.getURL("misc/quotes.txt") : chrome.extension.getURL("misc/quotes.txt")
var readText = "";
var splittedText = [];
rawFile.open("GET", path);
rawFile.send();
rawFile.onload = function() {
	if (rawFile.status != 200){
		console.error(`Error ${rawFile.status}: ${rawFile.statusText}`); 
	}
	else{
		readText = rawFile.responseText;
		splittedText = readText.split("\n");
		injectQuotes()
		
	}
};

rawFile.onprogress = function(event) {
  if (event.lengthComputable) {
	console.debug(`Received ${event.loaded} of ${event.total} bytes`);
  } else {
	console.debug(`Received ${event.loaded} bytes`);
  }

};

rawFile.onerror = function() {
  alert("Request failed");
};

function injectQuotes(){
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