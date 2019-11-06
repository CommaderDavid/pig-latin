// Back end
var pigTrans = function(words) {
  var vowels = ['a', 'e', 'i', 'o', 'u'];
  var returnWord = []
  var splitSentences = words.split(" ");

  splitSentences.forEach(function(splitSentence) {
    console.log(splitSentences, splitSentence);
    var sentence = splitSentence.toLowerCase().split("");

    if ((/[a-z]/i).test(splitSentence)) {
      for (var i = 0; i < sentence.length; i++) {
        vowels.forEach(function(vowel) {
           if (sentence[i] === vowel) {
             if (i === 0) {
               returnWord.push(sentence.join("") + "way ");
             } else if (sentence[i] === "u" && sentence[i-1] === "q") {
               var letters = sentence.splice(0, i+1);
               returnWord.push(sentence.join("") + letters.join("") + "ay ")
             } else {
               var letters = sentence.splice(0, i);
               returnWord.push(sentence.join("") + letters.join("") + "ay ");
             }
             i = sentence.length;
           }
        });
      }
    } else {
      returnWord.push(splitSentence);
    }

  });
  console.log(returnWord);
  return returnWord.join(" ");
}
// Front end
$(document).ready(function() {
  $("form#pig").submit(function(e) {
    e.preventDefault();

    var trans = $("input#trans").val();
    var result = pigTrans(trans);

    $("#result").append(result);

    $("#show").show();
    $("#pig").hide();
  });
});
