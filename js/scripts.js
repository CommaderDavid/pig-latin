// Back end

// Front end
$(document).ready(function() {
  $("form#pig").submit(function(e) {
    e.preventDefault();

    var trans = $("input#trans").val();
    var result = pigTrans(trans);
  });
});
