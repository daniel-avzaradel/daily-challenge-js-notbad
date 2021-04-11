let sentence = "The movie is not that bad, I like it";
let wordNot = /not/i;
let wordBad = /bad/i;

let regex = /not(.+)bad/s;

let wordNot_index = wordNot.exec(sentence).index;
let wordBad_index = wordBad.exec(sentence).index;


if (wordNot_index < wordBad_index) {
    let newstr = sentence.replace(regex, "good");
    console.log(newstr)
} 
else if(wordNot_index < wordBad_index) {
    console.log(sentence);
}