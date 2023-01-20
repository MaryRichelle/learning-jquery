// lesson 1st
$("#start").html("Go");
// 1st step
// $(document).ready(function() {
    // jQuery code goes here
//  });
```
$(function(){
    $("#start").html("Go");

})
```
// lesson 2
// selecting elements, classes, ids from html
$("p").hide()  // hides all <p> elements
$(".demo").hide()  // hides all elements with class="demo"
$("#demo").hide()  // hides the element with id="demo"
$("div")  // selects all <div> elements
$("#test") // select the element with the id="test"
$(".menu") //selects all elements with class="menu"
$("div.menu")  // all <div> elements with class="menu"

$("p:first")  // the first <p> element

$("h1, p") // all <h1> and all <p> elements

$("div p") // all <p> elements that are descendants of a <div> element

$("*")  // all elements of the DOM
$("tr:odd").hide(); // selector to hide all odd table rows in a table.
// Functions In a Separate File
$("*")//	Selects all elements	
$(this)	//Selects the current HTML element	
$("p.intro")	//Selects all <p> elements with class="intro"	
$("p:first")	//Selects the first <p> element	
$("ul li:first")	//Selects the first <li> element of the first <ul>	
$("ul li:first-child")	//Selects the first <li> element of every <ul>	
$("[href]")	//Selects all elements with an href attribute	
$("a[target='_blank']")	//Selects all <a> elements with a target attribute value equal to "_blank"	
$("a[target!='_blank']")	//Selects all <a> elements with a target attribute value NOT equal to "_blank"	
$(":button")	//Selects all <button> elements and <input> elements of type="button"	
$("tr:even")//	Selects all even <tr> elements	
$("tr:odd")	//Selects all odd <tr> elements

