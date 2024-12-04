//Moïse JS
//Validation for contact form, displays message asking to fill in fields if left empty, if filled says query submitted successfully
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
	}if(document.getElementById("Qy").value == ""){
		msge+= "Please enter a query. ";
		valid= false;



    }else if(!document.getElementById("em").value.includes("@")){
			valid = false;
			msge+= "Please enter a valid email";
		

	}
	if(!valid){
		document.getElementById("details").innerHTML = msge;
	}
	if(valid){
		document.getElementById("details").innerHTML= "Form submit successful";
	}

	return valid;


}

function array() {
	let Keywords = ["Health","Wellbeing","Reproductive health","Disease","Communicable","Maternal Mortality","Planning","Education","Satisfaction"];
	let doc = document.getElementById("kyw");
	doc.innerHTML = "Keywords " + Keywords[Math.floor(Math.random()*10)];
	}

//Moïse JS
