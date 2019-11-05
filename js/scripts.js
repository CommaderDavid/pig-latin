// Back end
var pigTrans = function(words) {
  var vowels = ['a', 'e', 'i', 'o', 'u'];
  var returnWord = ""
  var sentence = words.split("");

  if ((/[a-z]/i).test(words)) {
    for (var i = 0; i < sentence.length; i++) {
      vowels.forEach(function(vowel) {
        //   returnWord = sentence.join("") + "way";
         if (sentence[i] === vowel) {
           if (true) {

           }
          var letters = sentence.splice(0, i);
          returnWord = sentence.join("") + letters.join("") + "ay"
          console.log(returnWord, letters, sentence);
          i = sentence.length;
        }
      });
    }
    return returnWord

  } else {
    return "Not a letter"
  }
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
