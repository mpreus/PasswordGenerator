document.addEventListener("DOMContentLoaded", init);
function init() {
	
	const message = document.querySelector(".message"); 

	const button = document.querySelector("#startGen"); 	// Start/Done button 
	let text = "";											// empty string for randomly generated password
	
	button.addEventListener("click", function() {
/* After clicking the button 'Start', the text area gets enabled */
		if (this.innerText === "Start") {
			
			text = ""; 			// randomly generated string made empty (and ready for new value)

			randomTextGen(20);	// run function
			playGame();			// run function
		}
		else if (this.innerText === "Done") {

			button.innerText = "Start"; 	// changing the name of the button
			
			endGame();						// run function
		}
	});
/* F. randomly generating characters for the password */
	function randomTextGen(numOfWords) {
	// let's declare the content of the password (set of signs: characters, numbers and punctation marks)
	    let wordsArray = "a,b,c,d,e,f,g,[,h,i,j,!,_,k,l,m,<,>,@,&,],n,(,),o,9,6,7,5,8,4,3,2,1,0,:,p,q,;,+,-,s,r,=,t,u,v,w,x,y,z".split(",");

	    for (let i = 0; i < numOfWords; i++) {
	        let rand = null; 
	// let's declare the index number for the wordsArray...
	        rand = Math.floor(Math.random() * wordsArray.length); // returns a number
	// ...and add the words with those indices to the text
	        text += wordsArray[rand]; 

	    }
	    return text;
	}

	function playGame() {
/* Changing the content of the 'message' by inserting random string from the array */	
		message.innerText = text; 		// let's put the generated text to the 'message' area

		button.innerText = "Done"; 		// changing the name of the button
	}

	function endGame() {
		let userFeedback = `You've generated new password.`;
	}

	function wordCounter(strWords) {
		let response = strWords.split(" ").length;
		return response;
	}

}


