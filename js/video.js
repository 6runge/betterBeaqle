

function showvideo(id){
	if(id=="playABtn"){
		document.getElementById('audioA').style.display = "block";
		document.getElementById('audioB').style.display = "none";
	}
	else if(id=="playBBtn"){
		document.getElementById('audioA').style.display = "none";
		document.getElementById('audioB').style.display = "block";
	}
}
