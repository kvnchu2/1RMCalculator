function calculateMax() {

	var weight = document.getElementById("weight").value;
	var reps = document.getElementById("reps").value;
	var max = weight * (1+(reps/30));
	document.getElementById("demo").innerHTML = max.toFixed(1);
}

function resetMax(){
	document.getElementById("weight").value = "";
	document.getElementById("reps").value = "";
	document.getElementById("demo").innerHTML = "";
}

