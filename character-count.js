var textEntered;
var countI;
var counter; 
var btn = document.querySelector(".button");
var reset = document.getElementById("reset");

function countCharacters() {                                     
  textEntered = document.getElementById('text').value;
  counter = textEntered.match(/i/gi);
  countI = document.getElementById('characters'); 
  countI.textContent = counter;
  }
btn.addEventListener("click", function(){
		countCharacters();
		if(counter==null){
			countI.textContent=0;
			// alert("You didn't enter any I's :(");
				// location.reload();
		} 
			countI.textContent=counter.length;

})
 reset.addEventListener("click", function(){
 	location.reload();
 })