window.onload = function(){
	var cat1 = "Pilav"
	var cat2 = "Melav"
	document.getElementById("cat1_name").innerHTML = cat1;
	document.getElementById("cat2_name").innerHTML = cat2;
	var i = 0;
	var j = 0;
	document.getElementById("cat1-number").innerHTML = i;
	document.getElementById("cat2-number").innerHTML = j;
	
	var elem1 = document.getElementById('left-cat');
	elem1.addEventListener('click', function(){
	i++
	document.getElementById("cat1-number").innerHTML = i;
	if (i>=30)
		document.getElementById("my-text").innerHTML = "you won";
	}, false);
	var elem2 = document.getElementById('right-cat');
	
	elem2.addEventListener('click', function(){
	j++
	document.getElementById("cat2-number").innerHTML = j;
	if (j>=30)
		document.getElementById("my-text").innerHTML = "you won";
	}, false);
}
