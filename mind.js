

window.addEventListener('load', function() {
	
	var im21 = document.getElementById("im21");
	var im31 = document.getElementById("im31");
	var im41 = document.getElementById("im41");
	var im51 = document.getElementById("im51");
	var im61 = document.getElementById("im61");
	var im71 = document.getElementById("im71");
	var inp1 = document.getElementById("inp1");
	var inp2 = document.getElementById("inp2");
	var inp3 = document.getElementById("inp3");
	var butt = document.getElementById("butt");
	var exit = document.getElementById("exit");
	var note = document.getElementById("note");
	var tex1 = document.getElementById("tex1");
	
	var name = document.getElementById("name");
	
	inp1.addEventListener("change", inp1Logik);
	inp2.addEventListener("change", inp2Logik);
	inp3.addEventListener("change", inp3Logik);
	im21.addEventListener("change", im21Logik);
	im31.addEventListener("change", im31Logik);
	im41.addEventListener("change", im41Logik);
	im51.addEventListener("change", im51Logik);
	im61.addEventListener("change", im61Logik);
	im71.addEventListener("change", im71Logik);
	butt.addEventListener("click", buttLogik);
	note.addEventListener("click", noteLogik);

	
});

var our = 0;

		
		
	function im21Logik(){
	if (im21.checked){
		im2.style.display = "block"
		var textArrea = document.getElementById("val");
		our+=5;
		textArrea.innerHTML = our;
	}
	else{
		im2.style.display = "none"
		var textArrea = document.getElementById("val");
		our-=5;
		textArrea.innerHTML = our;
	};
	};
	
		function im31Logik(){
	if (im31.checked){
		im3.style.display = "block"
		var textArrea = document.getElementById("val");
		our+=5;
		textArrea.innerHTML = our;
	}
	else{
		im3.style.display = "none"
		var textArrea = document.getElementById("val");
		our-=5;
		textArrea.innerHTML = our;
	};
	};
	
	function im41Logik(){
	if (im41.checked){
		im4.style.display = "block"
		var textArrea = document.getElementById("val");
		our+=5;
		textArrea.innerHTML = our;
	}
	else{
		im4.style.display = "none"
		var textArrea = document.getElementById("val");
		our-=5;
		textArrea.innerHTML = our;
	};
	};
		function im51Logik(){
	if (im51.checked){
		im5.style.display = "block"
		var textArrea = document.getElementById("val");
		our+=5;
		textArrea.innerHTML = our;
	}
	else{
		im5.style.display = "none"
		var textArrea = document.getElementById("val");
		our-=5;
		textArrea.innerHTML = our;
	};
	};
	function im61Logik(){
	if (im61.checked){
		im6.style.display = "block"
		var textArrea = document.getElementById("val");
		our+=5;
		textArrea.innerHTML = our;
	}
	else{
		im6.style.display = "none"
		var textArrea = document.getElementById("val");
		our-=5;
		textArrea.innerHTML = our;
	};
	};
		function im71Logik(){
	if (im71.checked){
		im7.style.display = "block"
		var textArrea = document.getElementById("val");
		our+=5;
		textArrea.innerHTML = our;
	}
	else{
		im7.style.display = "none"
		var textArrea = document.getElementById("val");
		our-=5;
		textArrea.innerHTML = our;
	};
	};
	
	//Считаем Размер Пиццы
	
		function inp1Logik (){
			if (inp1.checked){
		var textArrea = document.getElementById("val");
		our += 20;
		textArrea.innerHTML = our;
	}
	else{
		var textArrea = document.getElementById("val");
		our = 0;
		textArrea.innerHTML = our;
	};
		};
	
		function inp2Logik (){
			if (inp2.checked){
		var textArrea = document.getElementById("val");
		our += 40
		textArrea.innerHTML = our;
	}
	else{
		var textArrea = document.getElementById("val");
		our = 0;
		textArrea.innerHTML = our;
	};
		};
		function inp3Logik (){
			if (inp3.checked){
		var textArrea = document.getElementById("val");
		our += 60
		textArrea.innerHTML = our;
	}
	else{
		var textArrea = document.getElementById("val");
		our =0;
		textArrea.innerHTML = our;
	};
		};
	 function buttLogik(){
		 exit.style.display = "block";
		 
		tex1.innerHTML = name;
	 };
	
	function noteLogik(){
		exit.style.display = "none";
	};
	 
		

