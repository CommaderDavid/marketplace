$(document).ready(function() {
  $("form#formOne").submit(function(event) {
    var name1Input = $("input#name1").val();
    var name2Input = $("input#name2").val();
    var addressInput = $("input#address").val();

    $(".name1").text(name1Input);
    $(".name2").text(name2Input);
    $(".address").text(addressInput);

    $("#receipt").show();

    event.preventDefault();
  });
});
