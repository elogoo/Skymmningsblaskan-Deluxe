var afBlask = document.getElementsByClassName("afBlask");
var afBlaskHeadline = document.getElementsByClassName("afBlaskHeadline");
var centercolumn = document.getElementsByClassName("XucU-");
var sidecolumn = document.getElementsByClassName("_1rd7K");
var tipscolumn = document.querySelectorAll("._3a1d2");
var avslöjcolumn = document.querySelectorAll("._2mFB0");
var sportcolumn = document.querySelectorAll("._3-mRA");
var justnucolumn = document.querySelectorAll("._3_9Dr");

//Takes a headline class and changes the display: none to display: block
function displayClass(headlineClass){
	for(let i = 0; i < headlineClass.length; i++){
	headlineClass[i].style.display = "block";
	}
}

//Changes the display: none to block on the side column articles
function displaySide(side){
	for(let i = 0; i < side.length; i++){
	side[i].parentNode.firstChild.style.display = "block";
	}
}

//Removes all quotes with the afBlask class from the site
while(afBlask.length > 0) {
	while(afBlask[0]){
		afBlask[0].parentNode.removeChild(afBlask[0]);
	}
	var afBlask = document.getElementsByClassName("afBlask");
}
//Removes all afBlaskheadlines 
while(afBlaskHeadline.length > 0) {
	while(afBlaskHeadline[0]){
		afBlaskHeadline[0].parentNode.removeChild(afBlaskHeadline[0]);
	}
	var afBlaskHeadline = document.getElementsByClassName("afBlaskHeadline");
}

displayClass(centercolumn);
displaySide(sidecolumn);
displayClass(tipscolumn);
displayClass(avslöjcolumn);
displayClass(sportcolumn);
displayClass(justnucolumn);
