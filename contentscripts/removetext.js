var afBlask = document.getElementsByClassName("afBlask");
var afBlaskHeadline = document.getElementsByClassName("afBlaskHeadline");
var centercolumn = document.getElementsByClassName("_1Qq8L");
var sidecolumn = document.getElementsByClassName("_3gdfp");
while(afBlask.length > 0) {
	while(afBlask[0]){
		afBlask[0].parentNode.removeChild(afBlask[0]);
	}
	var afBlask = document.getElementsByClassName("afBlask");
}
while(afBlaskHeadline.length > 0) {
	while(afBlask[0]){
		afBlaskHeadline[0].parentNode.removeChild(afBlaskHeadline[0]);
	}
	var afBlaskHeadline = document.getElementsByClassName("afBlaskHeadline");
}
for(let i = 0; i < centercolumn.length; i++){
	centercolumn[i].style.display = "block";
}

for(let i = 0; i < sidecolumn.length; i++){
	sidecolumn[i].style.display = "block";
}
