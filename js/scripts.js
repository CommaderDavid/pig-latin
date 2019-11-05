// Back end
var pigTrans = function(words) {
  var vowels = ['a', 'e', 'i', 'o', 'u'];
  var returnWord = ""
  var sentence = words.split("");

  if ((/[a-z]/i).test(words)) {
    for (var i = 0; i < sentence.length; i++) {
      vowels.forEach(function(vowel) {
        if (sentence[i] === vowel) {
          console.log(sentence.join("") + "way");

          returnWord = sentence.join("") + "way";
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
