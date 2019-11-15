var centercolumn = document.getElementsByClassName("_1Qq8L");
var sidecolumn = document.getElementsByClassName("_3gdfp");

//var rawFile = new XMLHttpRequest();
//var path = browser.runtime.getURL("qoutesonly.txt");
//var splittedText;
//var readText;
//rawFile.open("GET", path, false);
//rawFile.onreadystatechange = function ()
//{
//	if(rawFile.readyState === 4)
//	{
//		if(rawFile.status === 200 || rawFile.status == 0)
//		{
//			readText = rawFile.responseText;
//		}
//	}
//}
//rawFile.send(null);
//splittedQuoteText = readText.split("\n");
var lol = '<span class="afBlaskHeadline"><h3 class="_1Qq8L"> Aftonbladet stänger ner</span>';

//Example (part1)Avslöjar: (part2)Leif GW (part3)hyllar (part4)heta (part5)chockmetoden 
var part1 = ["Avslöjar:","JUST NU - ", "TV: ", "Chocken: ", "Rysaren: ", "KAOSET: ", "Läsarfilm: ", "Mardrömmen: ", "Skräcken: ", "Uppgifter inatt: ", "Gör det oerhörda: ", "Beskedet: "];
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
	//var finalheadlinestring = ((Math.random()) < 0.7) ? headline : splittedQuoteText[rand(splittedQuoteText)];
	var headlinehtml = '<span class="afBlaskHeadline"><h3 class="_1Qq8L">' + finalheadlinestring + '</h3></span>';
	return headlinehtml;
	
}

console.log(lol);

for (let i = 0; i < centercolumn.length; i++){
	centercolumn[i].style.display = "none";
	centercolumn[i].outerHTML += lol;
}

for(let i = 0; i < sidecolumn.length; i++){
	sidecolumn[i].style.display = "none";
	//sidecolumn[i].outerHTML = randSideHeadline();
}