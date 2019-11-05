// Back end
var pigTrans = function(words) {
  // var vowels = ['a', 'e', 'i', 'o', 'u']
  // var
  if ((/[a-z]/i).test(words)) {
    return "Word"
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
