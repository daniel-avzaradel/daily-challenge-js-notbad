// 1. Create a variable called sentence. The value of the variable should be a string that contains the words “not” and “bad” //

let sentence = "The movie is not that bad , I like it";

// 2. Create a variable called wordNot where it’s value is the first appearance of the substring “not” (from the sentence variable). //

let wordNot = /not/i;

// 3. Create a variable called wordBad where it’s value is the first appearance of the substring “bad” (from the sentence variable). //

let wordBad = /bad/i;

// 4. If the word “bad” comes after the word “not”, you should replace the whole “not…bad” substring with “good”, then console.log the result. //

// 5. If the word “bad” does not come after “not” or the words are not in the sentence, console.log the original sentence. //

let regex = /not(.+)bad/s;

let wordNot_index = wordNot.exec(sentence).index;
console.log(wordNot_index)
let wordBad_index = wordBad.exec(sentence).index;
console.log(wordBad_index)


if (wordNot_index < wordBad_index) {
    let newstr = sentence.replace(regex, "good");
    console.log(newstr)
} 
else if(wordNot_index < wordBad_index) {
    console.log(sentence);
}

// ============================ without regex ================================== //

let sentenceArray = sentence.split(" ");
let wordnot = sentenceArray.indexOf("not")
console.log(wordnot);
let wordbad = sentenceArray.indexOf("bad")
console.log(wordbad);

let index = wordbad - wordnot + 1;

if (wordnot < wordbad) {
    sentenceArray.splice(3, index, "good");
    console.log(sentenceArray.join(" "))
} else {
    console.log(sentence)
}