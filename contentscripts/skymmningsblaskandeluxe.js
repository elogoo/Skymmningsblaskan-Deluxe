var x = document.getElementsByClassName("FhCjb");
var z = document.getElementsByClassName("_1Yzgt");	
var quotes = ['<span class="afBlask"> <span class="abSymbBo abThemeColor""></span> Stefan Holm: ”Fy fan”</span>',
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
'<span class="afBlask"> <span class="abSymbBo abThemeColor""></span> "Varit omtumlade"</span>']



for (let i = 0; i < x.length; i++){
	x[i].innerHTML += quotes[Math.floor(Math.random() * quotes.length)];
}

for(let i = 0; i < z.length; i++){
	z[i].innerHTML += quotes[Math.floor(Math.random() * quotes.length)];
}

