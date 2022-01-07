


function promptName(){
	var name = prompt("Enter your name to reverse");
	return name;
}


//Using built in methods
function mstringRev() {
	let name = promptName();
	/*var initialString = name.split("");
	var splitArray = initialString.reverse();
	var joinToArr =splitArray.join("");

	OR*/


 	var newString = name.split("").reverse().join("");
 	 document.body.innerHTML= "<h3> Methods :  " + newString + "</h3>";

}

//Using loop

function lstringRev(){

	var name = promptName();
	var newString = " ";

	for(var i = name.length - 1; i >= 0 ; i--){
		newString += name[i];
	}

	document.body.innerHTML= "<h3> Looped:  " + newString + "</h3>";

}

//Using recursion

function rstringRev(){

	var name = promptName();
	var newString = "";

	if(name === ""){
		return "";
	}
	else{
		 newString = rstringRev(name.substr(1)) + name.charAt(0);
	//	document.body.innerHTML= "<h3> Recursion:  " + newString + "</h3>";
	}


  //newString = name === "" ? "" : rstringRev(name.substr(1)) + name.charAt(0);

	document.body.innerHTML= "<h3> Recursion:  " + newString + "</h3>";

	console.log(newString);

}

