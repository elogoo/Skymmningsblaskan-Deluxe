var centercolumn = document.querySelectorAll(".XucU-");
var sidecolumn = document.querySelectorAll("._1rd7K");
var tipscolumn = document.querySelectorAll("._3a1d2");
var avslöjcolumn = document.querySelectorAll("._2mFB0");
var sportcolumn = document.querySelectorAll("._3-mRA");
var justnucolumn = document.querySelectorAll("._3_9Dr");
var rawFile = new XMLHttpRequest();
var isFirefox = typeof InstallTrigger !== 'undefined';
var path = isFirefox ? browser.runtime.getURL("misc/quotes.txt") : chrome.extension.getURL("misc/quotes.txt");
var readText;
var fuckyou;
// TODO fix XMLHttpRequest

function loadQuotes(sideHeadline,justnu){
	rawFile.open("GET", path);
	rawFile.send();
	rawFile.onload = function() {
		if (rawFile.status != 200){
			console.error(`Error ${rawFile.status}: ${rawFile.statusText}`); 
		}
		else{
			var quotesSplit = rawFile.responseText.split("\n");
			if(justnu === true){
				skymnifyJUSTNU(quotesSplit);
			}
			else{
				skymnifySideHeadline(sideHeadline,quotesSplit);
			}
			//alert(rawFile.responseText);
			
			
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
function randHeadline(className) {
	var headlinestring = part1[rand(part1)] + part2[rand(part2)] + part3[rand(part3)] + part4[rand(part4)] + part5[rand(part5)];
	return '<span class="afBlaskHeadline"><h3 class="' + className +'">' + headlinestring + '</span>';
}

function skymnifyJUSTNU(quotesSplit){
	var headlinehtml = '<span class="afBlaskHeadline"><h3 class="_3_9Dr">' + '<strong><span class="abThemeTextHighlight _3xAZ3">JUST NU: </span></strong>' + quotesSplit[rand(quotesSplit)] + "</span>";
	for (let i = 0; i < justnucolumn.length; i++){
		justnucolumn[i].style.display = "none";
		justnucolumn[i].outerHTML += headlinehtml;

	}
}

function skymnifySideHeadline(sideHeadline, quotesSplit) {
	var headline = part1[rand(part1)] + part2[rand(part2)] + part3[rand(part3)] + part4[rand(part4)] + part5[rand(part5)];
	var finalheadlinestring = ((Math.random()) < 0.6) ? quotesSplit[rand(quotesSplit)] : headline;
	var headlinehtml = '<span class="afBlaskHeadline"><h3 class="">' + finalheadlinestring + '</h3></span>';
	for(let i = 0; i < sidecolumn.length; i++){
		try{
			if(sidecolumn[i].parentNode.firstChild.className === ""){
			sidecolumn[i].parentNode.firstChild.style.display = "none";
			sidecolumn[i].parentNode.firstChild.outerHTML += headlinehtml
			}
			//console.log(i + "is not a headline");
		}
		catch(err){
			//console.log("is not a headline ERROR");
		}
	}
	
	
	
}
function skymnifyClass(headlineClass){
	//console.debug(headlineClass.length);
	for (let i = 0; i < headlineClass.length; i++){
		headlineClass[i].style.display = "none";
		headlineClass[i].outerHTML += randHeadline(headlineClass[0].className);

	}
}

skymnifyClass(centercolumn);
//skymnifyClass(sidecolumn);
skymnifyClass(tipscolumn);
skymnifyClass(avslöjcolumn);
skymnifyClass(sportcolumn);
loadQuotes(sidecolumn,false);
loadQuotes(justnucolumn,true);