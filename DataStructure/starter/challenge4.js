// Coding Challenge #4
// Write a program that receives a list of variable names written in underscore_case
// and convert them to camelCase.
// The input will come from a textarea inserted into the DOM (see code below to
// insert the elements), and conversion will happen when the button is pressed.
// Test data (pasted to textarea, including spaces):
// underscore_case
// first_name
// Some_Variable
// calculate_AGE
// delayed_departure
// Should produce this output (5 separate console.log outputs):
// underscoreCase
// firstName ✅
// ✅✅
// someVariable
// calculateAge ✅✅✅
// ✅✅✅✅
// delayedDeparture ✅✅✅✅✅
// Hints:
// § Remember which character defines a new line in the textarea 😉
// § The solution only needs to work for a variable made out of 2 words, like a_b
// § Start without worrying about the ✅. Tackle that only after you have the variable
// name conversion working 😉
// §
// This challenge is difficult on purpose, so start watching the solution in case
// you're stuck. Then pause and continue!
// Afterwards, test with your own test data!
// GOOD LUCK 😀
// document.body.append(document.createElement('textarea'));
// document.body.append(document.createElement('button'));

const caseConverter = function(...variableNames) {
    const caseArr = []
    for(let [index,word] of variableNames.entries()){
    	let n ;
    	let tick = ""
    	n = word.split("_")
        
        for(let i = 0; i < (index + 1); i++){
        	tick += "✅"
        } 
        console.log(n[0] + titlize(n[1]) + " " +  tick)
    	// caseArr.push(n[0].toLowerCase() + titlize(n[1]))
    	// debugger
    	// caseArr.push((titlize(n[0]), titlize(n[1])).join(""))
    	// console.log(word.split("_")[1].replace(word[1][0], word[1][0].toUpperCase()))

    }
    // console.log(caseArr)
}

const titlize = function(words){
	let word = words.toLowerCase();
	return word.replace(word[0], word[0].toUpperCase())

}
caseConverter("first_name", "Some_Variable", "calculate_AGE", "delayed_departure" )





