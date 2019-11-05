// Back end
var pigTrans = function(words) {
  var vowels = ['a', 'e', 'i', 'o', 'u'];
  var returnWord = "";
  if ((/[a-z]/i).test(words)) {
    vowels.forEach(function(vowel) {
      if (vowel === words) {
        returnWord = words + "way"
      }
    });
    return returnWord    
  } else {
    return "number"
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
