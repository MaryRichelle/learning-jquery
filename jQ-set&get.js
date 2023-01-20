// Get Attributes - attr()

// text() - Sets or returns the text content of selected elements
// html() - Sets or returns the content of selected elements (including HTML markup)
// val() - Sets or returns the value of form fields
// here are several methods for manipulating the content of HTML elements via jQuery.
// The html() method is used to get the content of the selected element, including the HTML markup. For example:
// HTML:
//  example
<p>JQuery is <b>fun</b></p>
$(function() {
    var val = $("p").html();
    alert(val);
});
// Get Attributes - attr()
// The jQuery attr() method is used to get attribute values.



// Example
$("#btn1").click(function(){
    alert("Text: " + $("#test").text());
  });
  $("#btn2").click(function(){
    alert("HTML: " + $("#test").html());
  });
  //  Tip * If the content you are setting contains HTML markup, you should use the html() method instead of text().


  // The following example demonstrates how to get the value of the href attribute in a link:
// Example
$("button").click(function(){
  alert($("#w3s").attr("href"));
});
//......... ......//
// Set Content - text(), html(), and val()
// We will use the same three methods from the previous page to set content:

// text() - Sets or returns the text content of selected elements
// html() - Sets or returns the content of selected elements (including HTML markup)

// val() - Sets or returns the value of form fields like textboxes, dropdowns, and similar inputs
// example
{/* <input type="text" id="name" value="Your Name"> */}
$(function() {
    alert($("#name").val());
});
// A Callback Function for text(), html(), and val()
// All of the three jQuery methods above: text(), html(), and val(), also come with a callback function. The callback function has two parameters: the index of the current element in the list of elements selected and the original (old) value. You then return the string you wish to use as the new value from the function.

// The following example demonstrates text() and html() with a callback function:

// Example
$("#btn1").click(function(){
  $("#test1").text(function(i, origText){
    return "Old text: " + origText + " New text: Hello world"(index + " + i + ") 
  });
});

$("#btn2").click(function(){
  $("#test2").html(function(i, origText){
    return "Old html: " + origText + " New html: Hello <b>world!</b>(index: " + i + ")";
  });
});
