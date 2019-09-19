$(document).ready(function() {
  $("form#formOne").submit(function(event) {
    var name1Input = $("input#name1").val();
    var name2Input = $("input#name2").val();
    var addressInput = $("input#address").val();
    var part1Input = $("#part1").val();
    var part2Input = $("#part2").val();
    var part3Input = $("#part3").val();
    
    $(".name1").text(name1Input);
    $(".name2").text(name2Input);
    $(".address").text(addressInput);
    $(".part1").text(part1Input);
    $(".part2").text(part2Input);
    $(".part3").text(part3Input);

    $("#receipt").show();

    event.preventDefault();
  });
});
