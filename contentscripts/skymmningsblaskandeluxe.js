var centercolumn = document.getElementsByClassName("FhCjb");
var sidecolumn = document.getElementsByClassName("_1Yzgt");	
var rawFile = new XMLHttpRequest();
var path = browser.runtime.getURL("qoutes.txt");
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
rawFile.send(null);
splittedText = readText.split("\n");
var quotes = new Array(splittedText.length);
for(let i = 0; i < splittedText.length; i++){
	quotes[i] = '<span class="afBlask"> <span class="abSymbBo abThemeColor""></span> ' + splittedText[i] + '</span>';
}

/*var quotes = ['<span class="afBlask"> <span class="abSymbBo abThemeColor""></span> Stefan Holm: ”Fy fan”</span>',
'<span class="afBlask"> <strong><span class="abThemeTextHighlight _3xAZ3">Varning! Obehagliga bilder</span></strong></span>',
'<span class="afBlask"> <span class="abSymbBo abThemeColor""></span> Tog kläder</span>',
'<span class="afBlask"> <span class="abSymbBo abThemeColor""></span> "Har blivit som en liten kult"</span>',
'<span class="afBlask"> <span class="abSymbBo abThemeColor""></span> "Fick en pistol mot tinningen"</span>',
'<span class="afBlask"> <span class="abSymbBo abThemeColor""></span> I slagsmål med svägerskan</span>',
'<span class="afBlask"> <span class="abSymbBo abThemeColor""></span> "Ganska häftig"</span>',
'<span class="afBlask"> <span class="abSymbBo abThemeColor""></span> "Minns bara avgaser"</span>',
'<span class="afBlask"> <span class="abSymbBo abThemeColor""></span> "Ger mig energi"</span>',
'<span class="afBlask"> <span class="abSymbBo abThemeColor""></span> "Brände mig!"</span>',
'<span class="afBlask"> <span class="abSymbBo abThemeColor""></span> Polisen: Kan vara fara för hans liv</span>',
'<span class="afBlask"> <span class="abSymbBo abThemeColor""></span> "Det här är ju en best"</span>',
'<span class="afBlask"> <span class="abSymbBo abThemeColor""></span> Enkla knep</span>',
'<span class="afBlask"> <span class="abSymbBo abThemeColor""></span> "Helt absurt"</span>',
'<span class="afBlask"> <span class="abSymbBo abThemeColor""></span> Överdos</span>',
'<span class="afBlask"> <span class="abSymbBo abThemeColor""></span> "En legend"</span>',
'<span class="afBlask"> <span class="abSymbBo abThemeColor""></span> "Väldigt vänlig"</span>',
'<span class="afBlask"> <span class="abSymbBo abThemeColor""></span> "Chockade och kränkta"</span>',
'<span class="afBlask"> <span class="abSymbBo abThemeColor""></span> "Tufft"</span>',
'<span class="afBlask"> <span class="abSymbBo abThemeColor""></span> "Rent ut sagt sinnessjukt"</span>',
'<span class="afBlask"> <span class="abSymbBo abThemeColor""></span> "Förkastligt"</span>',
'<span class="afBlask"> <span class="abSymbBo abThemeColor""></span> Pizza</span>',
'<span class="afBlask"> <span class="abSymbBo abThemeColor""></span> Specialmetod</span>',
'<span class="afBlask"> <span class="abSymbBo abThemeColor""></span> "Det är en skandal"</span>',
'<span class="afBlask"> <span class="afBlask"> <span class="abSymbBo abThemeColor""></span> "Det är obegripligt låg nivå"</span>',
'<span class="afBlask"> <span class="abSymbBo abThemeColor""></span> Chefen: "Vi har ett problem"</span>',
'<span class="afBlask"> <span class="abSymbBo abThemeColor""></span> "En tickande bomb"</span>',
'<span class="afBlask"> <span class="abSymbBo abThemeColor""></span> "Var bara 13"</span>',
'<span class="afBlask"> <span class="abSymbBo abThemeColor""></span> Frias: "Inte tillräckligt naket"</span>',
'<span class="afBlask"> <span class="abSymbBo abThemeColor""></span> Fick hoppa om - gjorde det omöjliga</span>',
'<span class="afBlask"> <span class="abSymbBo abThemeColor""></span> "Var ju med mening såklart"</span>',
'<span class="afBlask"> <span class="abSymbBo abThemeColor""></span> 4 ton kokain</span>',
'<span class="afBlask"> <span class="abSymbBo abThemeColor""></span> "Ett svek"</span>',
'<span class="afBlask"> <span class="abSymbBo abThemeColor""></span> "Quick fix"</span>',
'<span class="afBlask"> <span class="abSymbBo abThemeColor""></span> "Högst tveksamt"</span>',
'<span class="afBlask"> <span class="abSymbBo abThemeColor""></span> "Det här är inte klokt"</span>',
'<span class="afBlask"> <span class="abSymbBo abThemeColor""></span> "Bara tanken gör mig äcklad"</span>',
'<span class="afBlask"> <span class="abSymbBo abThemeColor""></span> "Han är en gris"</span>',
'<span class="afBlask"> <span class="abSymbBo abThemeColor""></span> "Lät för bra för att vara sant"</span>',
'<span class="afBlask"> <span class="abSymbBo abThemeColor""></span> Jagas av polis</span>',
'<span class="afBlask"> <span class="abSymbBo abThemeColor""></span> "Ju mer de rakade desto fler hål upptäckte de"</span>',
'<span class="afBlask"> <span class="abSymbBo abThemeColor""></span> "Fattar att folk tycker att det är stötande"</span>',
'<span class="afBlask"> <span class="abSymbBo abThemeColor""></span> Forskarens knep: "Mirakelmedicin"</span>',
'<span class="afBlask"> <span class="abSymbBo abThemeColor""></span> Orden ska avslöja mästaren</span>',
'<span class="afBlask"> <span class="abSymbBo abThemeColor""></span> Mysktiskt borta</span>',
'<span class="afBlask"> <span class="abSymbBo abThemeColor""></span> Orden ska avslöja mästaren</span>',
'<span class="afBlask"> <span class="abSymbBo abThemeColor""></span> <strong>"90% upplever bättring"</strong></span>',
'<span class="afBlask"> <span class="abSymbBo abThemeColor""></span> "Sträcker ut en hand"</span>',
'<span class="afBlask"> <span class="abSymbBo abThemeColor""></span> "Bombskyddet på väg"</span>',
'<span class="afBlask"> <span class="abSymbBo abThemeColor""></span> "Det är öververkligt"</span>',
'<span class="afBlask"> <span class="abSymbBo abThemeColor""></span> Försvaret: "Livlig fantasi"</span>',
'<span class="afBlask"> <span class="abSymbBo abThemeColor""></span> "Gör mig förbannad"</span>',
'<span class="afBlask"> <span class="abSymbBo abThemeColor""></span> "Helt klart att någon varit där och gjort det"</span>',
'<span class="afBlask"> <span class="abSymbBo abThemeColor""></span> Mögel</span>',
'<span class="afBlask"> <span class="abSymbBo abThemeColor""></span> Råttor</span>',
'<span class="afBlask"> <span class="abSymbBo abThemeColor""></span> Gammalt kött</span>',
'<span class="afBlask"> <span class="abSymbBo abThemeColor""></span> "Kontroversiellt"</span>',
'<span class="afBlask"> <span class="abSymbBo abThemeColor""></span> "Ge det till skolan"</span>',
'<span class="afBlask"> <span class="abSymbBo abThemeColor""></span> "Inte ett dugg förvånad"</span>',
'<span class="afBlask"> <span class="abSymbBo abThemeColor""></span> "Varit omtumlade"</span>',
'<span class="afBlask"> <span class="abSymbBo abThemeColor""></span> "Jag blev lite rädd"</span>',
'<span class="afBlask"> <span class="abSymbBo abThemeColor""></span> "Försökte strypa henne"</span>',
'<span class="afBlask"> <span class="abSymbBo abThemeColor""></span> "Väldigt mystiska omständigheter"</span>',
'<span class="afBlask"> <span class="abSymbBo abThemeColor""></span> "Aldrig hänt på 30 år"</span>',
'<span class="afBlask"> <span class="abSymbBo abThemeColor""></span> "Osäkert läge"</span>',
'<span class="afBlask"> <span class="abSymbBo abThemeColor""></span> Rasistskämten</span>',
'<span class="afBlask"> <span class="abSymbBo abThemeColor""></span> "Jag behövde ta en paus"</span>',
'<span class="afBlask"> <span class="abSymbBo abThemeColor""></span> Körde ner i avloppshål</span>',
'<span class="afBlask"> <span class="abSymbBo abThemeColor""></span> "Det är ni som står för kaos"</span>',
'<span class="afBlask"> <span class="abSymbBo abThemeColor""></span> "Fettfläckar och förortsgäng"</span>',
'<span class="afBlask"> <span class="abSymbBo abThemeColor""></span> Femkant</span>',
'<span class="afBlask"> <span class="abSymbBo abThemeColor""></span> "Synd om honom"</span>',
'<span class="afBlask"> <span class="abSymbBo abThemeColor""></span> "Tydligt hur skevt det är"</span>',
'<span class="afBlask"> <span class="abSymbBo abThemeColor""></span> "Vi har tagit i lite"</span>',
'<span class="afBlask"> <span class="abSymbBo abThemeColor""></span> "Klart det känns tråkigt"</span>',
'<span class="afBlask"> <span class="abSymbBo abThemeColor""></span> "Kan ge ångest"</span>',
'<span class="afBlask"> <span class="abSymbBo abThemeColor""></span> Rättar till "historiskt fel"</span>',
'<span class="afBlask"> <span class="abSymbBo abThemeColor""></span> Skrämmande</span>',
'<span class="afBlask"> <span class="abSymbBo abThemeColor""></span> Långt ifrån värdegrunden</span>',
'<span class="afBlask"> <span class="abSymbBo abThemeColor""></span> "Släpp ut mig för fan!"</span>',
'<span class="afBlask"> <span class="abSymbBo abThemeColor""></span> "Ingen kan stoppa oss"</span>',
'<span class="afBlask"> <span class="abSymbBo abThemeColor""></span> <strong><em>"90% upplever bättring"</em></strong></span>',
'<span class="afBlask"> <span class="abSymbBo abThemeColor""></span> "Wow!"</span>',
'<span class="afBlask"> <span class="abSymbBo abThemeColor""></span> "Någon har kastat in något"</span>',
'<span class="afBlask"> <span class="abSymbBo abThemeColor""></span> "Lynnig"</span>',
'<span class="afBlask"> <span class="abSymbBo abThemeColor""></span> Sen kom kallduschen</span>',
'<span class="afBlask"> <span class="abSymbBo abThemeColor""></span> "Roligt"</span>',
'<span class="afBlask"> <span class="abSymbBo abThemeColor""></span> "Här måste ni verkligen tänka om"</span>',
'<span class="afBlask"> <span class="abSymbBo abThemeColor""></span> Kraschade: "Största bajsbiten"</span>',
'<span class="afBlask"> <span class="abSymbBo abThemeColor""></span> Nakenvideo läkte med skönhetsmiss</span>',
'<span class="afBlask"> <span class="abSymbBo abThemeColor""></span> "Är en myt och förolämpning"</span>',
'<span class="afBlask"> <span class="abSymbBo abThemeColor""></span> "Katastrofalt"</span>',
'<span class="afBlask"> <span class="abSymbBo abThemeColor""></span> Satt i fängelse</span>',
'<span class="afBlask"> <span class="abSymbBo abThemeColor""></span> Gjorde comback mot alla odds</span>',
'<span class="afBlask"> <span class="abSymbBo abThemeColor""></span> "Han var i färd att avsluta mitt liv"</span>',
'<span class="afBlask"> <span class="abSymbBo abThemeColor""></span> "Läkarna förstår inte"</span>',
'<span class="afBlask"> <span class="abSymbBo abThemeColor""></span> "Det största och viktigaste fyndet på 100 år"</span>',
'<span class="afBlask"> <span class="abSymbBo abThemeColor""></span> Detta är oförlåtligt</span>',
'<span class="afBlask"> <span class="abSymbBo abThemeColor""></span> Våld och hot</span>',
'<span class="afBlask"> <span class="abSymbBo abThemeColor""></span> "Förbaskade"</span>',
'<span class="afBlask"> <span class="abSymbBo abThemeColor""></span> "Mycket kraftfullt"</span>',
'<span class="afBlask"> <span class="abSymbBo abThemeColor""></span> "Vi är stora, starka och rätt förbaskade"</span>',
'<span class="afBlask"> <span class="abSymbBo abThemeColor""></span> "Jag ska butcha dig"</span>',
'<span class="afBlask"> <span class="abSymbBo abThemeColor""></span> "Betett sig fel"</span>',
'<span class="afBlask"> <span class="abSymbBo abThemeColor""></span> "Läge att förhandla"</span>',
'<span class="afBlask"> <span class="abSymbBo abThemeColor""></span> "Nu har han exploderat"</span>',
'<span class="afBlask"> <span class="abSymbBo abThemeColor""></span> "Grillade husdjuret"</span>',
'<span class="afBlask"> <span class="abSymbBo abThemeColor""></span> "Jag är jättekär!"</span>',
'<span class="afBlask"> <span class="abSymbBo abThemeColor""></span> "Orkar ju inte"</span>',
'<span class="afBlask"> <span class="abSymbBo abThemeColor""></span> "Ett av vår tids största samhällsproblem"</span>',
'<span class="afBlask"> <span class="abSymbBo abThemeColor""></span> "Får inte normaliseras"</span>',
'<span class="afBlask"> <span class="abSymbBo abThemeColor""></span> "Ska döda dem"</span>',
'<span class="afBlask"> <span class="abSymbBo abThemeColor""></span> Signalement</span>',
'<span class="afBlask"> <span class="abSymbBo abThemeColor""></span> "Beklagligt"</span>',
'<span class="afBlask"> <span class="abSymbBo abThemeColor""></span> "Försökte tvinga mig"</span>',
'<span class="afBlask"> <span class="abSymbBo abThemeColor""></span> "Det har brustit i alla led"</span>',
'<span class="afBlask"> <span class="abSymbBo abThemeColor""></span> "Måste bara hugga"</span>',
'<span class="afBlask"> <span class="abSymbBo abThemeColor""></span> "Bullshit!"</span>',
'<span class="afBlask"> <span class="abSymbBo abThemeColor""></span> "Har du mens kan du trycka på fel knapp"</span>',
'<span class="afBlask"> <span class="abSymbBo abThemeColor""></span> Chefen: "Håll dina åsikter för dig själv"</span>',
'<span class="afBlask"> <span class="abSymbBo abThemeColor""></span> "Kallade oss huliganer"</span>',
'<span class="afBlask"> <span class="abSymbBo abThemeColor""></span> "Lock him up"</span>',
'<span class="afBlask"> <span class="abSymbBo abThemeColor""></span> Måste brännas för att dö</span>',
'<span class="afBlask"> <span class="abSymbBo abThemeColor""></span> "Han skämmer ut sig"</span>',
'<span class="afBlask"> <span class="abSymbBo abThemeColor""></span> <strong><span class="abThemeTextHighlight _3xAZ3">Nej, helt fel!</span></strong></span>',
'<span class="afBlask"> <span class="abSymbBo abThemeColor""></span> "Handlar om förväntningar"</span>',
'<span class="afBlask"> <span class="abSymbBo abThemeColor"><span class="_12sQS">✓</span></span> Två får <svg class="_230Q_" width="4em"><use href="#icon-plus-5" xlink:href="#icon-plus-5"></use><text role="presentation" aria-hidden="true" class="_12sQS">➕➕➕➕➕</text></svg>',
'<span class="afBlask"> <span class="abSymbBo abThemeColor""></span> "En våt jävla dröm..."</span>',
'<span class="afBlask"> <span class="abSymbBo abThemeColor""></span> "Det är aldrig bra"</span>',
'<span class="afBlask"> <span class="abSymbBo abThemeColor""></span> "Skriver skit"</span>',
'<span class="afBlask"> <span class="abSymbBo abThemeColor""></span> "Proppskåpet gick"</span>',
'<span class="afBlask"> <span class="abSymbBo abThemeColor""></span> "Det skar sig"</span>',
'<span class="afBlask"> <span class="abSymbBo abThemeColor""></span> Rep och sele</span>',
'<span class="afBlask"> <span class="abSymbBo abThemeColor""></span> "Brustit"</span>',
'<span class="afBlask"> <span class="abSymbBo abThemeColor""></span> "Jag blev helt paff"</span>',
'<span class="afBlask"> <span class="abSymbBo abThemeColor""></span> "Var arg"</span>',
'<span class="afBlask"> <span class="abSymbBo abThemeColor""></span> "Sällan jag gör det"</span>',
'<span class="afBlask"> <span class="abSymbBo abThemeColor""></span> "Visste inte att det var straffbart"</span>',
'<span class="afBlask"> <span class="abSymbBo abThemeColor""></span> "Kraftig detonation"</span>',
'<span class="afBlask"> <span class="abSymbBo abThemeColor""></span> "Hon har blivit knivskuren"</span>',
'<span class="afBlask"> <span class="abSymbBo abThemeColor""></span> ”Inte konstigt om folk tycker man är skurk”</span>']
*/
for (let i = 0; i < centercolumn.length; i++){
	var index = Math.floor(Math.random() * quotes.length);
	centercolumn[i].innerHTML += quotes[index];
}

for(let i = 0; i < sidecolumn.length; i++){
	sidecolumn[i].innerHTML += quotes[Math.floor(Math.random() * quotes.length)];
}