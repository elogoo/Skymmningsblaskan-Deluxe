var centercolumn = document.querySelectorAll(".XucU-");
var sidecolumn = document.querySelectorAll("._1rd7K");
var rawFile = new XMLHttpRequest();
var path = (typeof InstallTrigger !== 'undefined') ? browser.runtime.getURL("misc/quotes.txt") : chrome.extension.getURL("misc/quotes.txt");
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
splittedText = readText.split("\n");
var quotes = [];
for(let i = 0; i < splittedText.length; i++){
	quotes[i] = splittedText[i];
}

//Example (part1)Avslöjar: (part2)Leif GW (part3)hyllar (part4)heta (part5)chockmetoden 
var part1 = ["Avslöjar:",'<strong><span class="abThemeTextHighlight _3xAZ3">JUST NU:</span></strong>', "TV: ", "Chocken: ", "Rysaren: ", "KAOSET: ", "Läsarfilm: ", "Mardrömmen: ", "Skräcken: ", "Uppgifter inatt: ", "Gör det oerhörda: ", "Beskedet: "];
var part2 = ["Pernilla Wahlgren ", "Leif GW ", "SD-ledaren ", "Forskaren ", "Let's dance-deltagaren ", "Vår expert ", "Småbarnspappan ", "Trump ", "TV4-profilen ", "Zlatan ", "Hollywood-stjärnan "];
var part3 = ["hyllar ", "rasar över ", "tipsar om ", "testar ", "tystar ned ", "i lång intervju om ", "skakad av ", "talar ut om ", "varnar för ", "chockas av ", "tårögd efter ", "drabbad av "];
var part4 = ["heta ", "oväntade ", "ryska ", "otroliga ", "hemliga ", "dramatiska ", "livsfarliga ", "osannolika ", "galna ", "helt sjuka ", "omtalade ", "skrämmande "];
var part5 = ["chockmetoden", "gifthotet", "jättepenisen", "supervapnet", "viktknepet", "UFO-fyndet", "nakenscenen", "sjukdomen", "snökaoset", "graviditeten", "regeringskrisen", "sexfilmen"];



function rand(arg){
	return Math.floor(Math.random() * arg.length);
}
function randHeadline() {
	var headlinestring = part1[rand(part1)] + part2[rand(part2)] + part3[rand(part3)] + part4[rand(part4)] + part5[rand(part5)];
	return '<span class="afBlaskHeadline"><h3 class="_1Qq8L">' + headlinestring + '</span>';
}

function randSideHeadline() {
	var headline = part1[rand(part1)] + part2[rand(part2)] + part3[rand(part3)] + part4[rand(part4)] + part5[rand(part5)];
	var finalheadlinestring = ((Math.random()) < 0.6) ? splittedText[rand(splittedText)] : headline;
	var headlinehtml = '<span class="afBlaskHeadline"><h3 class="_1Qq8L">' + finalheadlinestring + '</h3></span>';
	return headlinehtml;
	
}

for (let i = 0; i < centercolumn.length; i++){
	centercolumn[i].firstChild.style.display = "none";
	centercolumn[i].firstChild.outerHTML += randHeadline();
	
}

for(let i = 0; i < sidecolumn.length; i++){
	sidecolumn[i].parentNode.style.display = "none";
	sidecolumn[i].parentNode.outerHTML += randSideHeadline();
}