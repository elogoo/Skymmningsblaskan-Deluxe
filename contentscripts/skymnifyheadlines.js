var centercolumn = document.querySelectorAll(".XucU-");
var sidecolumn = document.querySelectorAll("._1rd7K");
var tipscolumn = document.querySelectorAll("._3a1d2");
var avslöjcolumn = document.querySelectorAll("._2mFB0");
var sportcolumn = document.querySelectorAll("._3-mRA");
var justnucolumn = document.querySelectorAll("._3_9Dr");
var redaktionensval = document.querySelectorAll("._3SYJM");
var rawFile = new XMLHttpRequest();
var isFirefox = typeof InstallTrigger !== 'undefined';
var path = isFirefox ? browser.runtime.getURL("misc/quotes.txt") : chrome.extension.getURL("misc/quotes.txt");
//TODO add DOMPurify

//sends a XMLHttpRequest to quotes.txt and passes the text to skymnifyJUSTNU and sideHeadline functions
function specialSkymnify(){
	rawFile.open("GET", path);
	rawFile.send();
	rawFile.onload = function() {
		if (rawFile.status != 200){
			console.error(`Error ${rawFile.status}: ${rawFile.statusText}`); 
		}
		else{
			let quotesSplit = rawFile.responseText.split("\n");
			skymnifyJUSTNU(quotesSplit);
			skymnifySideHeadline(quotesSplit);
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
	  console.error("Request failed");
	};
}


//Example (part1)Avslöjar: (part2)Leif GW (part3)hyllar (part4)heta (part5)chockmetoden 
var part1 = ["Avslöjar: ",'<strong><span class="abThemeTextHighlight _3xAZ3">JUST NU: </span></strong>', "TV: ", "Chocken: ", "Rysaren: ", "KAOSET: ", "Läsarfilm: ", "Mardrömmen: ", "Skräcken: ", "Uppgifter inatt: ", "Gör det oerhörda: ", "Beskedet: ", "Proffsen: ", "Lista: ", "Experten: ", "Dietisten: "];
var part2 = ["Pernilla Wahlgren ", "Leif GW ", "SD-ledaren ", "Forskaren ", "Let's dance-deltagaren ", "Vår expert ", "Småbarnspappan ", "Trump ", "TV4-profilen ", "Zlatan ", "Hollywood-stjärnan ", "Exet "];
var part3 = ["hyllar ", "rasar över ", "tipsar om ", "testar ", "tystar ned ", "i lång intervju om ", "skakad av ", "talar ut om ", "varnar för ", "chockas av ", "tårögd efter ", "drabbad av "];
var part4 = ["heta ", "oväntade ", "ryska ", "otroliga ", "hemliga ", "dramatiska ", "livsfarliga ", "osannolika ", "galna ", "helt sjuka ", "omtalade ", "skrämmande "];
var part5 = ["chockmetoden", "gifthotet", "jättepenisen", "supervapnet", "viktknepet", "UFO-fyndet", "nakenscenen", "sjukdomen", "snökaoset", "graviditeten", "regeringskrisen", "sexfilmen"];


//Returns random int between 0 and the length of the argument list 
function rand(arg){
	return Math.floor(Math.random() * arg.length);
}
//Returns a random headline HTML string
function randHeadline(className) {
	var headlinestring = part1[rand(part1)] + part2[rand(part2)] + part3[rand(part3)] + part4[rand(part4)] + part5[rand(part5)];
	return '<span class="afBlaskHeadline"><h3 class="' + className +'">' + headlinestring + '</span>';
}

//Injects randomized headlines in the 'JUST NU:' column articles 
function skymnifyJUSTNU(quotesSplit){
	//Takes quotesSplit as a parameter and returns a string with HTML for the headline
	var headlinehtml = quotesSplit => '<span class="afBlaskHeadline"><h3 class="_3_9Dr">' + '<strong><span class="abThemeTextHighlight _3xAZ3">JUST NU: </span></strong>' + quotesSplit[rand(quotesSplit)] + "</span>";
	//Loops through all 'JUST NU:' headlines and hides them while injecting the randomized one
	for (let i = 0; i < justnucolumn.length; i++){
		justnucolumn[i].style.display = "none";
		justnucolumn[i].outerHTML += headlinehtml(quotesSplit);

	}
}

//Returns a random quote from quotes list
function randQuote(quotes){
	return quotes[rand(quotes)];
}

//Injects randomized headlines in all the side column articles
function skymnifySideHeadline(quotesSplit) {
	//Gets a random headline HTML string for the sidecolumn class
	var headline = () => {return randHeadline("_1rd7K")};
	//Ternary that either returns a quote or a headline with slight bias towards quotes
	var finalheadlinestring = () => {return (Math.random() < 0.6) ? randQuote(quotesSplit) : headline()};
	//Constructs the headline HTML string used to inject into the site
	var headlinehtml = () => '<span class="afBlaskHeadline"><h3 class="">' + finalheadlinestring() + '</h3></span>';
	//Loops through all sidecolumn nodes
	for(let i = 0; i < sidecolumn.length; i++){
		try{
			//Because the headline doesn't have a class for some reason it looks for all quote classes and goes to the parent class
			//Then it goes to the first child of the parent since the headline is always the first child
			//The centercolumn also has the same class for the quotes so we have to check if the class name is an empty string
			//If it passes the check it injects the headline
			if(sidecolumn[i].parentNode.firstChild.className === ""){
			sidecolumn[i].parentNode.firstChild.style.display = "none";
			sidecolumn[i].parentNode.firstChild.outerHTML += headlinehtml();
			}
		}
		catch(err){
			
		}
	}
	
	
	
}
//Takes a headline class as parameter and hides the original class and injects the randomized one
function skymnifyClass(headlineClass){
	for (let i = 0; i < headlineClass.length; i++){
		headlineClass[i].style.display = "none";
		headlineClass[i].outerHTML += randHeadline(headlineClass[0].className);

	}
}
skymnifyClass(centercolumn);
skymnifyClass(tipscolumn);
skymnifyClass(avslöjcolumn);
skymnifyClass(sportcolumn);
skymnifyClass(redaktionensval);
specialSkymnify();