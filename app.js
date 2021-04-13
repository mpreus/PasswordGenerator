document.addEventListener("DOMContentLoaded", init);
function init() {
	
	const darkModeButton = document.querySelector("#darkMode");
	const message = document.querySelector(".message"); 	// space for the password
	const button = document.querySelector("#startGen"); 	// Start/Done button 
	let text = "";											// empty string for randomly generated password
	
	darkModeButton.addEventListener("click", function() {			// dark mode after clicking the button
			const bodyBackground = document.querySelector("body");
			const htmlBackground = document.querySelector("html");
			const wraper = document.querySelector(".wraper");
			const wraperPara = document.querySelector("p");

		if (this.innerText === "Dark mode") {				// impose dark mode...
			bodyBackground.style.background = "black";		// ...with black background and white text
			htmlBackground.style.background = "black";
			wraper.style.background = "black";
			wraper.style.color = "white";
			wraperPara.style.color = "white";
			darkModeButton.style.background = "white";
			darkModeButton.style.color = "black";
			darkModeButton.innerText = "Bright mode";
		}
		
		else if (this.innerText === "Bright mode") { 		// impose bright mode...
			bodyBackground.style.background = "white";		// ...with white background and black text
			htmlBackground.style.background = "white";
			wraper.style.background = "white";
			wraper.style.color = "black";
			wraperPara.style.color = "black";
			darkModeButton.style.background = "black";
			darkModeButton.style.color = "white";
			darkModeButton.innerText = "Dark mode";
		}
	});

	button.addEventListener("click", function() {
/* After clicking the button 'Start' */
		if (this.innerText === "Start") {
			
			text = ""; 			// randomly generated string made empty (and ready for new value)
								// generate the password
			randomTextGen(20);	// run function
			playGame();			// run function
		}
		else if (this.innerText === "Done") {

			button.innerText = "Start"; 	// changing the name of the button
			
			endGame();						// run function to make the text in the 'message' area empty
		}
	});
/* F. randomly generating characters for the password */
	function randomTextGen(numOfCharacters) {
	// let's declare the content of the password (set of signs: characters, numbers and punctation marks)
	    let charArray = "q,w,e,r,t,y,u,i,o,p,l,k,j,h,g,f,d,s,a,z,x,c,v,b,n,m,q,w,e,r,t,y,u,i,o,p,l,k,j,h,g,f,d,s,a,z,x,c,v,b,n,m,a,b,c,d,e,f,g,[,h,i,j,!,_,k,l,m,<,>,@,&,],n,(,),o,9,6,7,5,8,4,3,2,1,0,:,p,q,;,+,-,s,r,=,t,u,v,w,x,y,z".split(",");

	    for (let i = 0; i < numOfCharacters; i++) {
	        let rand = null; 
	// let's declare the index number for the wordsArray...
	        rand = Math.floor(Math.random() * charArray.length); // returns a number
	// ...and add the characters with those indices to the text
	        text += charArray[rand]; 
	    }
	    return text;
	}

	function playGame() {
/* Changing the content of the password by inserting random string from the array */	
		message.innerText = text; 		// let's put the generated text to the 'message' area
		button.innerText = "Done"; 		// changing the name of the button
	}

	function endGame() {
		message.innerText = "";
	}

}


