/*Validation for contact form*/
function validate() {
	let valid = true;
	let msge= "Incomplete contact details:";

	if (document.getElementById("fname").value == ""){
		msge+= "Please enter First Name. ";
		valid = false;
		
	}
	if(document.getElementById("lname").value == ""){
		msge+= "Please enter Last name. ";
		valid= false;
	}
	if(document.getElementById("phnum").value == 0){
		msge+= "Please enter Phone number. ";
		valid= false;

	}
	if(document.getElementById("em").value == ""){
		msge+= "Please enter email address. ";
		valid= false;
	}else if(document.getElementById("em").value != ""){
		let symbol= inputE.indexOf("@");
		if(symbol < 1){
			valid = false;
			msge+= "Please enter a valid email";
		}

	}
	if(!valid){
		document.getElementById("details").innerHTML = msge;
	}

	return valid;


}
	