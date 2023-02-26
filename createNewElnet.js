// Add New HTML Content
// We will look at four jQuery methods that are used to add new content:

append() //- Inserts content at the end of the selected elements
prepend()// - Inserts content at the beginning of the selected elements
after()// - Inserts content after the selected elements
before() //- Inserts content before the selected elements
// jQuery 
```append()```
//  Metho
// The jQuery append() method inserts content AT THE END of the selected HTML elements.

Example
$("p").append("Some appended text.");
// jQuery prepend() Method
// The jQuery prepend() method inserts content AT THE BEGINNING of the selected HTML elements.

Example
$("p").prepend("Some prepended text.");
ADVERTISEMENT

// Add Several New Elements With append() and prepend()
// In both examples above, we have only inserted some text/HTML at the beginning/end of the selected HTML elements.

// However, both the append() and prepend() methods can take an infinite number of new elements as parameters. The new elements can be generated with text/HTML (like we have done in the examples above), with jQuery, or with JavaScript code and DOM elements.

// In the following example, we create several new elements. The elements are created with text/HTML, jQuery, and JavaScript/DOM. Then we append the new elements to the text with the append() method (this would have worked for prepend() too) :

Example
function appendText() {
  var txt1 = "<p>Text.</p>";               // Create element with HTML 
  var txt2 = $("<p></p>").text("Text.");   // Create with jQuery
  var txt3 = document.createElement("p");  // Create with DOM
  txt3.innerHTML = "Text.";
  $("body").append(txt1, txt2, txt3);      // Append the new elements
}
// jQuery after() and before() Methods
// The jQuery after() method inserts content AFTER the selected HTML elements.

// The jQuery before() method inserts content BEFORE the selected HTML elements.

// Example
$("img").after("Some text after");

$("img").before("Some text before");
// Add Several New Elements With after() and before()
// Also, both the after() and before() methods can take an infinite number of new elements as parameters. The new elements can be generated with text/HTML (like we have done in the example above), with jQuery, or with JavaScript code and DOM elements.

// In the following example, we create several new elements. The elements are created with text/HTML, jQuery, and JavaScript/DOM. Then we insert the new elements to the text with the after() method (this would have worked for before() too) :

Example
function afterText() {
  var txt1 = "<b>I </b>";                    // Create element with HTML 
  var txt2 = $("<i></i>").text("love ");     // Create with jQuery
  var txt3 = document.createElement("b");    // Create with DOM
  txt3.innerHTML = "jQuery!";
  $("img").after(txt1, txt2, txt3);          // Insert new elements after <img>
}
