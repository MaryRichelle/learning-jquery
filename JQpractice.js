$(function () {
  $("button").on("click", function(){
    $("#start").append(" now")
})
})

// $("p").remove()
$(function() {
  $("p span").text("a");
});


$("p").click(function(){
  $(this).toggleClass("important");
});