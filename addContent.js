// Add New HTML Content
// append() - Inserts content at the end of the selected elements
// prepend() - Inserts content at the beginning of the selected elements
// after() - Inserts content after the selected elements
// before() - Inserts content before the selected elements



// jQuery append() Method
// The jQuery append() method inserts content AT THE END of the selected HTML elements.

// Example
{/* <p ="deidmo">Hi </p> */}
$(function() {
    $("#demo").append("David");
});

// jQuery prepend() Method
// The jQuery prepend() method inserts content AT THE BEGINNING of the selected HTML elements.



// jQuery after() and before() Methods
// The jQuery after() method inserts content AFTER the selected HTML elements.

// The jQuery before() method inserts content BEFORE the selected HTML elements.

// Example
// $("img").after("Some text after");

$("img").before("Some text before");


// Adding New Elements


// The append(), prepend(), before() and after() methods can also be used to add newly created elements. The easiest way of creating a new HTML element with jQuery is the following:
// var txt = $("<p></p>").text("Hi"); 
// JS
// The code above creates a new <p> element, which contains the text Hi and assigns it to a variable called txt.
// Now, we can use that variable as a parameter of the above mentioned methods to add it to our HTML, for example:
// HTML:
// <p id="demo">Hello</p>
// HTML
// JS:
// This will insert the newly created <p> element after the #demo paragraph.
// You can also specify multiple elements as arguments for the before(), after(), append(), prepend() methods by separating them using commas: $("#demo").append(var1, var2, var3).
// The above mentioned syntax for creating elements can be used to create any new HTML element, for example $("<div></div>") creates a new div.
// Well done!
