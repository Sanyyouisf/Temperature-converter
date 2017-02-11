
var convertedTemp = "";
var inputTemp = "";

function toCelsius() {
	 var F = document.getElementById("Temp").value;
	 var C = (F -32) * 5 / 9;
	 convertedTemp = C ;
	 // to change the color of the C 
	 if ( convertedTemp > 32 ){
				document.getElementById("Result").style.color= 'red';
		}
		else if (convertedTemp < 0 ) {

				document.getElementById("Result").style.color= 'blue';
		}
		else {
				document.getElementById("Result").style.color= 'green';
		}
}


function toFahrenheit() {
	var C = document.getElementById("Temp").value;
	var F = (C)* 9 / 5 + 32;
	convertedTemp = F;
	// to change the color of the F 
		if ( convertedTemp > 90 ){
				document.getElementById("Result").style.color= 'red';
		}
		else if (convertedTemp < 32 ) {

				document.getElementById("Result").style.color= 'blue';
		}
		else {
				document.getElementById("Result").style.color= 'green';
		}
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
// document.getElementById("Converter").addEventListener("click", function(){
//     if ( document.getElementById("C to F").checked === true){
//     	toFahrenheit();
//     	document.getElementById("Result").value = convertedTemp;
//     }
//     else if ( document.getElementById("F to C").checked === true){
//     	toCelsius();
//     	document.getElementById("Result").value = convertedTemp;
//     } 
//     else {
//     	alert (" please choose F or C first  before converting ");
//     }
// });

// another way for the button click function like the instructions say .

	function determineConverter(E){
		console.log(E);  
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

	}
document.getElementById("Converter").addEventListener("click", determineConverter);
