var r = document.getElementsByClassName("afBlask");
while(r.length > 0) {
	while(r[0]){
		r[0].parentNode.removeChild(r[0]);
	}
	var r = document.getElementsByClassName("afBlask");
}