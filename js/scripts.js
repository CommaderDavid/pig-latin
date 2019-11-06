// Back end
var pigTrans = function(words) {
  var vowels = ['a', 'e', 'i', 'o', 'u'];
  var returnWord = []
  var splitSentences = words.split(" ");

  splitSentences.forEach(function(splitSentence) {
    var sentence = splitSentence.split("");

    if ((/[a-z]/i).test(words)) {
      for (var i = 0; i < sentence.length; i++) {
        vowels.forEach(function(vowel) {
           if (sentence[i] === vowel) {
             if (i === 0) {
               returnWord.push(sentence.join("") + "way ");
             } else {
               var letters = sentence.splice(0, i);
               returnWord.push(sentence.join("") + letters.join("") + "ay ");
             }
             i = sentence.length;
           }
        });
      }

    } else {
      return "Not a letter"
    }

  });
  return returnWord;
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
