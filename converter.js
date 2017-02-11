
var convertedTemp = "";
var inputTemp = "";

function toCelsius() {
	 var F = document.getElementById("Temp").value;
	 var C = (F -32) * 5 / 9;
	 convertedTemp = C ;
}


function toFahrenheit() {
	var C = document.getElementById("Temp").value;
	var F = (C)* 9 / 5 + 32;
	convertedTemp = F;
}


//function for the Reset button 
document.getElementById("reset").addEventListener("click", function(){
    document.getElementById("C to F").checked= false;
	document.getElementById("F to C").checked= false;
 	document.getElementById("Temp").value = "";
 	document.getElementById("Result").value = "";
 	convertedTemp = "";
 	 inputTemp = "";
});


// function to determine which conversion should  when the converter button is checked
document.getElementById("Converter").addEventListener("click", function(){
    console.log("converter button is clicked ");
    if ( document.getElementById("C to F").checked === true){
    	toFahrenheit();
    	document.getElementById("Result").value = convertedTemp;
    }
    else if ( document.getElementById("F to C").checked === true){
    	toCelsius();
    	document.getElementById("Result").value = convertedTemp;
    } 
    else {
    	alert (" please choose F or C first  before converting ");
    }
});


